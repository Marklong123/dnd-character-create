// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step9Review from './Step9Review.vue'
import { preloadVariantData } from '@/data'
import { useCharacterStore } from '@/stores/character'
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'

vi.mock('@/composables/usePdfExport', () => ({
  usePdfExport: () => ({
    exportPdf: vi.fn(),
    exporting: { value: false },
  }),
}))

vi.mock('@/utils/shareCharacter', () => ({
  copyShareUrl: vi.fn(async () => ({ copied: true, url: 'https://example.test/share' })),
}))

let pinia: Pinia

function mountStep(locale = 'en') {
  const i18n = createI18n({
    legacy: false,
    locale,
    messages: { en, zh },
  })
  return mount(Step9Review, {
    global: {
      plugins: [pinia, i18n],
      stubs: {
        VariantPromo: true,
      },
    },
  })
}

describe('Step9Review', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('keeps export actions but removes the import JSON entry point', () => {
    const store = useCharacterStore()
    store.character.name = 'Aelar'
    store.character.race = 'human'
    store.character.className = 'fighter'
    store.character.background = 'soldier'
    store.character.maxHp = 12

    const wrapper = mountStep()

    expect(wrapper.text()).toContain('Export JSON')
    expect(wrapper.text()).not.toContain('Import JSON')
    expect(wrapper.find('input[type="file"]').exists()).toBe(false)
  })

  it('translates review equipment, features, and currency labels in Chinese locale', () => {
    const store = useCharacterStore()
    store.character.name = 'Aelar'
    store.character.race = 'human'
    store.character.className = 'fighter'
    store.character.background = 'gamekeeper'
    store.character.level = 1
    store.character.hitDie = 10
    store.character.maxHp = 12
    store.character.equipment = ["Leatherworker's tools", 'Fishing tackle', "Traveler's clothes"]
    store.character.equipmentSpentGp = 0
    store.character.equipmentBudgetGp = 60
    store.character.featuresTraits = ['Draconic Resilience']
    store.character.savingThrowProficiencies = ['str', 'con']

    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('皮匠工具')
    expect(wrapper.text()).toContain('钓具')
    expect(wrapper.text()).toContain('旅行服装')
    expect(wrapper.text()).toContain('龙族韧性')
    expect(wrapper.text()).toContain('60 金币')
    expect(wrapper.text()).not.toContain("Leatherworker's tools")
    expect(wrapper.text()).not.toContain('Fishing tackle')
    expect(wrapper.text()).not.toContain("Traveler's clothes")
    expect(wrapper.text()).not.toContain('Draconic Resilience')
    expect(wrapper.text()).not.toContain('60 gp')
  })
})
