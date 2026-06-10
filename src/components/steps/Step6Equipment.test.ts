// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step6Equipment from './Step6Equipment.vue'
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
  return mount(Step6Equipment, {
    global: {
      plugins: [pinia, i18n],
      stubs: {
        VariantPromo: true,
      },
    },
  })
}

describe('Step6Equipment', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('translates equipment hints, background grants, currency, and packs in Chinese locale', () => {
    const store = useCharacterStore()
    store.character.className = 'wizard'
    store.character.background = 'sage'

    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('职业起始财富和背景金币决定你的预算')
    expect(wrapper.text()).toContain('金币')
    expect(wrapper.text()).toContain('黑墨水瓶')
    expect(wrapper.text()).toContain('羽毛笔')
    expect(wrapper.text()).toContain('小刀')
    expect(wrapper.text()).toContain('已故同事的信')
    expect(wrapper.text()).toContain('普通服装')
    expect(wrapper.text()).toContain('窃贼套组')
    expect(wrapper.text()).not.toContain('Class starting wealth')
    expect(wrapper.text()).not.toContain('Bottle of black ink')
    expect(wrapper.text()).not.toContain("Burglar's Pack")
  })

  it('translates northern minstrel background equipment in Chinese locale', () => {
    const store = useCharacterStore()
    store.character.className = 'bard'
    store.character.background = 'northern-minstrel'

    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('歌曲、诗歌与故事集')
    expect(wrapper.text()).toContain('雪鞋')
    expect(wrapper.text()).toContain('乐器')
    expect(wrapper.text()).toContain('厚毛衬里斗篷')
    expect(wrapper.text()).not.toContain('Book of songs, poems, and stories')
    expect(wrapper.text()).not.toContain('Snowshoes')
    expect(wrapper.text()).not.toContain('Musical instrument')
    expect(wrapper.text()).not.toContain('Heavy fur-lined cloak')
  })

  it('translates gamekeeper background equipment in Chinese locale', () => {
    const store = useCharacterStore()
    store.character.className = 'ranger'
    store.character.background = 'gamekeeper'

    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('皮匠工具')
    expect(wrapper.text()).toContain('捕兽夹')
    expect(wrapper.text()).toContain('钓具')
    expect(wrapper.text()).toContain('旅行服装')
    expect(wrapper.text()).not.toContain("Leatherworker's tools")
    expect(wrapper.text()).not.toContain('Fishing tackle')
    expect(wrapper.text()).not.toContain("Traveler's clothes")
  })
})
