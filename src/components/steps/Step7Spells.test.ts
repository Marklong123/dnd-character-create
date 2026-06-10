// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step7Spells from './Step7Spells.vue'
import { preloadVariantData } from '@/data'
import { useCharacterStore } from '@/stores/character'
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'

let pinia: Pinia

function mountStep(locale = 'zh') {
  const i18n = createI18n({
    legacy: false,
    locale,
    messages: { en, zh },
  })
  return mount(Step7Spells, {
    global: {
      plugins: [pinia, i18n],
      stubs: {
        VariantPromo: true,
      },
    },
  })
}

describe('Step7Spells', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('translates spell short metadata and spell detail descriptions in Chinese locale', async () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.level = 1

    const wrapper = mountStep('zh')
    const magicMissile = wrapper.findAll('button').find(button => button.text().includes('魔法飞弹'))
    if (!magicMissile) throw new Error('Missing translated Magic Missile spell')

    expect(wrapper.text()).toContain('1 环')
    expect(wrapper.text()).toContain('1 个动作')
    expect(wrapper.text()).not.toContain('Lv.1')
    expect(wrapper.text()).not.toContain('1 action')

    await magicMissile.trigger('contextmenu')

    expect(wrapper.text()).toContain('三枚发光飞弹')
    expect(wrapper.text()).not.toContain('You create three glowing darts')
  })
})
