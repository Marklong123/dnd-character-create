import { describe, expect, it } from 'vitest'
import { translateGameDescription, translateGameTerm, translateRulesText } from './gameTerms'
import { backgrounds } from '@/data/dnd5e/backgrounds'
import { classes } from '@/data/dnd5e/classes'
import { equipmentData } from '@/data/dnd5e/equipment'
import { spells } from '@/data/dnd5e/spells'

const hasChinese = /[\u4e00-\u9fff]/

function expectChineseTerm(value: string, category: Parameters<typeof translateGameTerm>[2]) {
  const translated = translateGameTerm(value, 'zh', category)
  expect(translated, `${category}: ${value}`).not.toBe(value)
  expect(translated, `${category}: ${value}`).toMatch(hasChinese)
}

function expectChineseDescription(key: string, fallback: string, category: Parameters<typeof translateGameDescription>[3]) {
  const translated = translateGameDescription(key, fallback, 'zh', category)
  expect(translated, `${category}: ${key}`).not.toBe(fallback)
  expect(translated, `${category}: ${key}`).toMatch(hasChinese)
}

describe('game term display translations', () => {
  it('keeps English terms unchanged in the default locale', () => {
    expect(translateGameTerm('Wizard', 'en', 'class')).toBe('Wizard')
    expect(translateGameTerm('Elf', 'en', 'race')).toBe('Elf')
    expect(translateGameTerm('High Elf', 'en', 'subrace')).toBe('High Elf')
    expect(translateGameTerm('Acolyte', 'en', 'background')).toBe('Acolyte')
    expect(translateGameTerm('Magic Missile', 'en', 'spell')).toBe('Magic Missile')
    expect(translateGameDescription('Magic Missile', 'English description', 'en', 'spell')).toBe('English description')
  })

  it('translates core D&D names for the Chinese display locale', () => {
    expect(translateGameTerm('Wizard', 'zh', 'class')).toBe('法师')
    expect(translateGameTerm('Elf', 'zh', 'race')).toBe('精灵')
    expect(translateGameTerm('High Elf', 'zh', 'subrace')).toBe('高等精灵')
    expect(translateGameTerm('Acolyte', 'zh', 'background')).toBe('侍祭')
    expect(translateGameTerm('Magic Missile', 'zh', 'spell')).toBe('魔法飞弹')
    expect(translateGameTerm('Arcane Tradition', 'zh', 'feature')).toBe('奥术传统')
    expect(translateGameTerm('school-of-evocation', 'zh', 'subclass')).toBe('塑能学派')
    expect(translateGameTerm('Con Artist', 'zh', 'background')).toBe('骗术师')
    expect(translateGameTerm('Bottle of black ink', 'zh', 'equipment')).toBe('黑墨水瓶')
    expect(translateGameTerm('Musical instrument', 'zh', 'proficiency')).toBe('乐器')
    expect(translateGameTerm('Musical instrument', 'zh', 'equipment')).toBe('乐器')
    expect(translateGameTerm('Book of songs, poems, and stories', 'zh', 'equipment')).toBe('歌曲、诗歌与故事集')
    expect(translateGameTerm("Burglar's Pack", 'zh', 'pack')).toBe('窃贼套组')
    expect(translateGameDescription('Researcher', 'fallback', 'zh', 'backgroundFeature')).toContain('获取答案')
    expect(translateGameDescription('Northern Historian', 'fallback', 'zh', 'backgroundFeature')).toContain('观察一座建筑')
    expect(translateGameDescription('Magic Missile', 'fallback', 'zh', 'spell')).toContain('三枚发光飞弹')
    expect(translateRulesText('1 action', 'zh')).toBe('1 个动作')
  })

  it('covers all D&D 5e background display terms in Chinese', () => {
    for (const background of backgrounds) {
      expectChineseTerm(background.name, 'background')
      for (const skill of background.skillProficiencies) {
        expectChineseTerm(skill, 'skill')
      }
      for (const tool of background.toolProficiencies) {
        expectChineseTerm(tool, 'proficiency')
      }
      for (const item of background.equipment) {
        if (/^\d+\s*gp$/i.test(item)) continue
        expectChineseTerm(item, 'equipment')
      }
      expectChineseTerm(background.feature.name, 'feature')
      expectChineseDescription(background.feature.name, background.feature.description, 'backgroundFeature')
    }
  })

  it('covers all D&D 5e class, subclass, and visible feature terms in Chinese', () => {
    for (const cls of classes) {
      expectChineseTerm(cls.name, 'class')
      expectChineseTerm(cls.subclassName, 'feature')
      for (const ability of [...cls.primaryAbility, ...cls.savingThrows]) {
        expectChineseTerm(ability, 'ability')
      }
      for (const proficiency of [...cls.armorProficiencies, ...cls.weaponProficiencies, ...cls.toolProficiencies]) {
        expectChineseTerm(proficiency, 'proficiency')
      }
      for (const feature of cls.features) {
        expectChineseTerm(feature.name, 'feature')
        expectChineseDescription(feature.name, feature.description, 'classFeature')
      }
      for (const subclass of cls.subclasses) {
        expectChineseTerm(subclass.id, 'subclass')
        expectChineseTerm(subclass.name, 'subclass')
        for (const feature of subclass.features) {
          expectChineseTerm(feature.name, 'feature')
          expectChineseDescription(feature.name, feature.description, 'classFeature')
        }
      }
    }
  })

  it('covers D&D 5e gear and spell display terms in Chinese', () => {
    for (const weapon of [...equipmentData.simpleWeapons, ...equipmentData.martialWeapons]) {
      expectChineseTerm(weapon.name, 'weapon')
    }
    for (const armor of equipmentData.armor) {
      expectChineseTerm(armor.name, 'armor')
    }
    for (const pack of equipmentData.packs) {
      expectChineseTerm(pack.name, 'pack')
    }
    for (const spell of spells) {
      expectChineseTerm(spell.name, 'spell')
      expectChineseDescription(spell.name, spell.description, 'spell')
    }
  })
})
