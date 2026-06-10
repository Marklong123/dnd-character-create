// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step4Abilities from './Step4Abilities.vue'
import { useCharacterStore, type AbilityScores } from '@/stores/character'
import { preloadVariantData } from '@/data'
import en from '@/i18n/locales/en.json'

vi.mock('@/utils/diceRoller', async importOriginal => {
  const actual = await importOriginal<typeof import('@/utils/diceRoller')>()
  return {
    ...actual,
    rollAbilityScores: vi.fn(() => ({
      rolls: [
        [6, 6, 6, 3],
        [6, 6, 6, 2],
        [5, 5, 3, 1],
        [4, 4, 4, 1],
        [4, 3, 3, 1],
        [3, 3, 2, 1],
      ],
      dropped: [3, 2, 1, 1, 1, 1],
      totals: [18, 18, 13, 12, 10, 8],
    })),
  }
})

type Step4Vm = InstanceType<typeof Step4Abilities> & {
  setMethod: (method: 'standard' | 'pointbuy' | 'roll') => void
  setStandardScore: (ability: keyof AbilityScores, value: number | null) => void
  adjustPointBuy: (ability: keyof AbilityScores, delta: number) => void
  doRoll: () => void
  onAnimationDone: () => void
  applyBaseScores: () => void
  canIncreaseAsi: (ability: keyof AbilityScores) => boolean
  standardAssignment: Record<keyof AbilityScores, number | null>
  rolledScores: number[]
  pointBuyScores: AbilityScores
  remaining: number
  stage: 'base' | 'asi'
  hasAsi: boolean
}

let pinia: Pinia

function mountStep() {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en },
  })
  return mount(Step4Abilities, {
    global: {
      plugins: [pinia, i18n],
      stubs: {
        DiceRoller: true,
        VariantPromo: true,
      },
    },
  })
}

describe('Step4Abilities', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('auto-fills Standard Array by class priority and keeps it as a draft until applied', () => {
    const store = useCharacterStore()
    store.character.className = 'fighter'
    store.character.level = 1
    const original = { ...store.character.abilityScores }

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm

    expect(vm.standardAssignment).toEqual({ str: 15, dex: 14, con: 13, int: 8, wis: 12, cha: 10 })
    expect(store.character.abilityScores).toEqual(original)
    expect(store.character.baseScoresApplied).toBe(false)

    vm.applyBaseScores()
    expect(store.character.abilityScores).toEqual({ str: 15, dex: 14, con: 13, int: 8, wis: 12, cha: 10 })
    expect(store.character.baseScoresApplied).toBe(true)
    expect(vm.stage).toBe('asi')
  })

  it('re-fills Standard Array when the method is clicked after another method', () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.level = 1

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm
    vm.setMethod('pointbuy')
    vm.adjustPointBuy('str', 1)
    vm.setMethod('standard')

    expect(vm.standardAssignment).toEqual({ str: 10, dex: 13, con: 14, int: 15, wis: 12, cha: 8 })
    expect(store.character.abilityScores.str).toBe(10)
  })

  it('enforces Point Buy caps, 27 point budget, and applies only after confirmation', () => {
    const store = useCharacterStore()
    store.character.className = 'fighter'
    store.character.level = 1

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm
    vm.setMethod('pointbuy')

    for (let i = 0; i < 10; i++) vm.adjustPointBuy('str', 1)
    expect(vm.pointBuyScores.str).toBe(15)
    expect(vm.remaining).toBe(18)

    for (let i = 0; i < 6; i++) vm.adjustPointBuy('dex', 1)
    expect(vm.pointBuyScores.dex).toBe(14)
    expect(vm.remaining).toBe(11)

    for (let i = 0; i < 7; i++) vm.adjustPointBuy('con', 1)
    expect(vm.pointBuyScores.con).toBe(15)
    expect(vm.remaining).toBe(2)

    expect(store.character.abilityScores.str).toBe(10)
    vm.applyBaseScores()
    expect(store.character.abilityScores).toMatchObject({ str: 15, dex: 14, con: 15, int: 8, wis: 8, cha: 8 })
  })

  it('places the base-score apply action on the right side of the ability step', () => {
    const store = useCharacterStore()
    store.character.className = 'fighter'
    store.character.level = 1

    const wrapper = mountStep()
    const applyButton = wrapper.findAll('button').find(button => button.text().includes('Apply Base Scores'))
    expect(applyButton).toBeTruthy()
    expect(applyButton!.element.parentElement?.className).toContain('sm:justify-end')
  })

  it('rolls and auto-fills in ability order without changing the character until applied', async () => {
    const store = useCharacterStore()
    store.character.className = 'cleric'
    store.character.level = 1
    const original = { ...store.character.abilityScores }

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm
    vm.setMethod('roll')
    vm.onAnimationDone()
    await nextTick()

    expect(vm.rolledScores).toEqual([18, 18, 13, 12, 10, 8])
    expect(store.character.abilityScores).toEqual(original)
    expect(wrapper.text()).toContain('Reroll All')
    expect(wrapper.text()).not.toContain('Roll 4d6')
    expect(wrapper.text()).not.toContain('Rolling creates a draft')

    vm.applyBaseScores()
    expect(store.character.abilityScores).toEqual({ str: 18, dex: 18, con: 13, int: 12, wis: 10, cha: 8 })
    expect(store.character.baseScoresApplied).toBe(true)
  })

  it('shows no level bonuses at level 3 and requires spending ASI at level 4', () => {
    const store = useCharacterStore()
    store.character.className = 'fighter'
    store.character.level = 3

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm
    vm.applyBaseScores()
    expect(vm.hasAsi).toBe(false)
    expect(store.character.asiPoints).toBe(0)

    store.character.level = 4
    store.recomputeBuildDerivedState()
    expect(store.character.asiPoints).toBe(2)
    expect(vm.canIncreaseAsi('str')).toBe(true)
    store.spendAsiPoint('str')
    expect(store.character.asiPoints).toBe(1)
    store.spendAsiPoint('str')
    expect(store.character.asiPoints).toBe(0)
    expect(store.totalAbilityScore('str')).toBe(17)
  })

  it('does not allow ASI to raise an ability above 20', () => {
    const store = useCharacterStore()
    store.character.className = 'fighter'
    store.character.level = 4
    store.character.baseScoresApplied = true
    store.character.abilityScores = { str: 20, dex: 14, con: 13, int: 12, wis: 10, cha: 8 }
    store.recomputeBuildDerivedState()

    const wrapper = mountStep()
    const vm = wrapper.vm as Step4Vm
    expect(vm.canIncreaseAsi('str')).toBe(false)
    store.spendAsiPoint('str')
    expect(store.totalAbilityScore('str')).toBe(20)
    expect(store.character.asiPoints).toBe(2)
  })
})
