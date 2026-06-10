// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step3Class from './Step3Class.vue'
import { preloadVariantData } from '@/data'
import { useCharacterStore } from '@/stores/character'
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'

let pinia: Pinia

function mountStep(locale = 'en') {
  const i18n = createI18n({
    legacy: false,
    locale,
    messages: { en, zh },
  })
  return mount(Step3Class, {
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

describe('Step3Class', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('shows subclass options as locked before the subclass level and ignores clicks', async () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.level = 1

    const wrapper = mountStep()
    const subclassButton = buttonByText(wrapper, 'School of Evocation')

    expect(wrapper.text()).toContain('(unlocks at level 2)')
    expect(wrapper.text()).not.toContain('(required from level 2)')
    expect(subclassButton.attributes('disabled')).toBeDefined()
    expect(subclassButton.attributes('aria-disabled')).toBe('true')

    await subclassButton.trigger('click')
    expect(store.character.subclass).toBe('')
  })

  it('requires and applies subclass choices at or above the subclass level', async () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.level = 2

    const wrapper = mountStep()
    const subclassButton = buttonByText(wrapper, 'School of Evocation')

    expect(wrapper.text()).toContain('(required from level 2)')
    expect(subclassButton.attributes('disabled')).toBeUndefined()

    await subclassButton.trigger('click')
    expect(store.character.subclass).toBe('evocation')
    expect(store.character.featuresTraits).toContain('Evocation Savant')
  })

  it('clears a stale subclass when the character level falls below the subclass level', async () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.level = 1
    store.character.subclass = 'evocation'

    mountStep()

    expect(store.character.subclass).toBe('')
    expect(store.character.featuresTraits).not.toContain('Evocation Savant')
  })

  it('translates sorcerer spellcasting and subclass labels in Chinese locale', () => {
    const store = useCharacterStore()
    store.character.className = 'sorcerer'
    store.character.level = 1

    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('术士')
    expect(wrapper.text()).toContain('魅力（全施法者）')
    expect(wrapper.text()).toContain('龙族血脉')
    expect(wrapper.text()).not.toContain('Draconic Bloodline')
    expect(wrapper.text()).not.toContain('(full)')
  })
})
