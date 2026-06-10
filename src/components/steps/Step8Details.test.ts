// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step8Details from './Step8Details.vue'
import en from '@/i18n/locales/en.json'

let pinia: Pinia

function mountStep() {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en },
  })
  return mount(Step8Details, {
    global: {
      plugins: [pinia, i18n],
    },
  })
}

describe('Step8Details', () => {
  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('keeps the profile step lightweight without player name or roleplay text boxes', () => {
    const wrapper = mountStep()

    expect(wrapper.text()).toContain('Profile')
    expect(wrapper.text()).toContain('Character Name')
    expect(wrapper.text()).not.toContain('Player Name')
    expect(wrapper.find('#player-name').exists()).toBe(false)

    expect(wrapper.text()).not.toContain('Personality Traits')
    expect(wrapper.text()).not.toContain('Ideals')
    expect(wrapper.text()).not.toContain('Flaws')
    expect(wrapper.find('#personality-traits').exists()).toBe(false)
    expect(wrapper.find('#ideals').exists()).toBe(false)
    expect(wrapper.find('#flaws').exists()).toBe(false)
  })
})
