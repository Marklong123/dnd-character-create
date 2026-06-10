// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import HomeView from './HomeView.vue'
import en from '@/i18n/locales/en.json'

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

let pinia: Pinia

function mountView() {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en },
  })
  return mount(HomeView, {
    global: {
      plugins: [pinia, i18n],
      mocks: {
        $router: { push: vi.fn() },
      },
    },
  })
}

describe('HomeView', () => {
  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('only shows the from-scratch creation action', () => {
    const wrapper = mountView()

    expect(wrapper.text()).toContain('From Scratch')
    expect(wrapper.text()).not.toContain('Random')
    expect(wrapper.text()).not.toContain('Import JSON')
    expect(wrapper.find('input[type="file"]').exists()).toBe(false)
  })
})
