// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia, type Pinia } from 'pinia'
import Step5Background from './Step5Background.vue'
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
  return mount(Step5Background, {
    global: {
      plugins: [pinia, i18n],
    },
  })
}

describe('Step5Background', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('keeps roleplay details under origin as optional prompts', async () => {
    const store = useCharacterStore()
    const wrapper = mountStep()

    expect(wrapper.text()).toContain('Choose Origin')
    expect(wrapper.text()).toContain('Roleplay Details')
    expect(wrapper.text()).toContain('Personality Traits')
    expect(wrapper.text()).toContain('Ideals')
    expect(wrapper.text()).toContain('Flaws')
    expect(wrapper.find('#personality-traits').exists()).toBe(true)
    expect(wrapper.find('#ideals').exists()).toBe(true)
    expect(wrapper.find('#flaws').exists()).toBe(true)

    const randomAll = wrapper.findAll('button').find(button => button.text().includes('Random All'))
    if (!randomAll) throw new Error('Missing Random All button')
    await randomAll.trigger('click')

    expect(store.character.personalityTraits).not.toBe('')
    expect(store.character.ideals).not.toBe('')
    expect(store.character.flaws).not.toBe('')
  })

  it('shows Chinese roleplay labels and generates Chinese roleplay text in Chinese locale', async () => {
    const store = useCharacterStore()
    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('选择出身背景')
    expect(wrapper.text()).toContain('角色扮演细节')
    expect(wrapper.text()).toContain('性格特质')
    expect(wrapper.text()).toContain('理想')
    expect(wrapper.text()).toContain('缺点')
    expect(wrapper.text()).toContain('随机')
    expect(wrapper.text()).toContain('全部随机')

    const randomAll = wrapper.findAll('button').find(button => button.text().includes('全部随机'))
    if (!randomAll) throw new Error('Missing Chinese Random All button')
    await randomAll.trigger('click')

    expect(store.character.personalityTraits).toMatch(/[\u4e00-\u9fff]/)
    expect(store.character.ideals).toMatch(/[\u4e00-\u9fff]/)
    expect(store.character.flaws).toMatch(/[\u4e00-\u9fff]/)
  })

  it('translates extended background names and background feature descriptions in Chinese locale', async () => {
    const wrapper = mountStep('zh')

    expect(wrapper.text()).toContain('骗术师')
    expect(wrapper.text()).toContain('无赖')
    expect(wrapper.text()).not.toContain('Con Artist')
    expect(wrapper.text()).not.toContain('Scoundrel')

    const sage = wrapper.findAll('button').find(button => button.text().includes('学者'))
    if (!sage) throw new Error('Missing translated Sage background')
    await sage.trigger('click')

    expect(wrapper.text()).toContain('研究员')
    expect(wrapper.text()).toContain('获取答案')
    expect(wrapper.text()).not.toContain('When you attempt to learn or recall')
  })

  it('translates northern minstrel tools and feature description in Chinese locale', async () => {
    const wrapper = mountStep('zh')

    const northernMinstrel = wrapper.findAll('button').find(button => button.text().includes('北境吟游艺人'))
    if (!northernMinstrel) throw new Error('Missing translated Northern Minstrel background')
    await northernMinstrel.trigger('click')

    expect(wrapper.text()).toContain('乐器')
    expect(wrapper.text()).toContain('北境史家')
    expect(wrapper.text()).toContain('观察一座建筑')
    expect(wrapper.text()).not.toContain('Musical instrument')
    expect(wrapper.text()).not.toContain('After examining a structure')
  })

  it('translates gamekeeper tools and feature description in Chinese locale', async () => {
    const wrapper = mountStep('zh')

    const gamekeeper = wrapper.findAll('button').find(button => button.text().includes('猎场看守'))
    if (!gamekeeper) throw new Error('Missing translated Gamekeeper background')
    await gamekeeper.trigger('click')

    expect(wrapper.text()).toContain('皮匠工具')
    expect(wrapper.text()).toContain('正式公会成员')
    expect(wrapper.text()).toContain('训练猛禽或猎犬')
    expect(wrapper.text()).not.toContain("Leatherworker's tools")
    expect(wrapper.text()).not.toContain('Your guild membership')
  })
})
