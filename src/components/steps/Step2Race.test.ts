// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step2Race from './Step2Race.vue'
import { preloadVariantData } from '@/data'
import { useCharacterStore } from '@/stores/character'
import en from '@/i18n/locales/en.json'

let pinia: Pinia

function mountStep() {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en },
  })
  return mount(Step2Race, {
    global: {
      plugins: [pinia, i18n],
      stubs: {
        VariantPromo: true,
      },
    },
  })
}

function buttonByText(wrapper: ReturnType<typeof mountStep>, text: string) {
  const button = wrapper.findAll('button').find(item => item.text().includes(text))
  if (!button) throw new Error(`Missing button: ${text}`)
  return button
}

describe('Step2Race', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('keeps the selected elf subrace instead of resetting to High Elf', async () => {
    const store = useCharacterStore()
    const wrapper = mountStep()

    await buttonByText(wrapper, 'Elf').trigger('click')
    expect(store.character.race).toBe('elf')
    expect(store.character.subrace).toBe('high-elf')
    expect(store.character.racialBonuses).toMatchObject({ dex: 2, int: 1 })

    await buttonByText(wrapper, 'Wood Elf').trigger('click')
    expect(store.character.subrace).toBe('wood-elf')
    expect(store.character.racialBonuses).toMatchObject({ dex: 2, wis: 1 })
    expect(store.character.racialBonuses.int).toBeUndefined()
    expect(wrapper.text()).toContain('DEX +2, WIS +1')
    expect(buttonByText(wrapper, 'Wood Elf').attributes('aria-checked')).toBe('true')

    await buttonByText(wrapper, 'Dark Elf (Drow)').trigger('click')
    expect(store.character.subrace).toBe('dark-elf')
    expect(store.character.racialBonuses).toMatchObject({ dex: 2, cha: 1 })
    expect(store.character.racialBonuses.wis).toBeUndefined()
    expect(wrapper.text()).toContain('DEX +2, CHA +1')
    expect(buttonByText(wrapper, 'Dark Elf (Drow)').attributes('aria-checked')).toBe('true')
  })
})
