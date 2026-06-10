// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import StepNavigation from './StepNavigation.vue'
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'

let pinia: Pinia

function mountNav(locale: 'en' | 'zh') {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { en, zh },
  })
  return mount(StepNavigation, {
    global: {
      plugins: [pinia, i18n],
    },
  })
}

describe('StepNavigation', () => {
  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('uses updated English step names', () => {
    const wrapper = mountNav('en')

    for (const label of ['Profile', 'Ancestry', 'Class Training', 'Ability Scores', 'Origin', 'Gear', 'Spellcasting', 'Character Sheet']) {
      expect(wrapper.text()).toContain(label)
    }
  })

  it('uses Chinese step names as display-only i18n', () => {
    const wrapper = mountNav('zh')

    for (const label of ['角色档案', '血统', '职业训练', '属性值', '出身背景', '装备', '施法', '角色卡']) {
      expect(wrapper.text()).toContain(label)
    }
  })
})
