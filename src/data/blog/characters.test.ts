import { beforeAll, describe, expect, it } from 'vitest'
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'
import { preloadVariantData } from '@/data'
import { blogCharacters } from './characters'
import { exportCharacterJson } from '@/utils/characterExport'
import { validateCharacterForExport } from '@/utils/characterValidation'
import { translateGameTerm, type GameTermCategory } from '@/i18n/gameTerms'

const dnd5eTemplates = blogCharacters.filter(character => character.variant === 'dnd5e')
const chineseTextPattern = /[\u4e00-\u9fff]/
const expectedLevelOneClasses = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard',
]

function untranslatedPanelTerm(value: string, category: GameTermCategory, slug: string): string | null {
  if (!value || chineseTextPattern.test(value)) return null

  const translated = translateGameTerm(value, 'zh', category)
  if (translated === value || !chineseTextPattern.test(translated)) {
    return `${slug} ${category}: ${value}`
  }
  return null
}

describe('D&D 5e blog characters', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  it('keeps every D&D 5e template valid for Project Infinity export', () => {
    const failures = dnd5eTemplates
      .map(template => ({
        slug: template.slug,
        errors: validateCharacterForExport(template.characterData),
      }))
      .filter(result => result.errors.length > 0)

    expect(failures).toEqual([])
  })

  it('exports templates through the same field rules as the builder JSON export', () => {
    const template = dnd5eTemplates.find(template => template.slug === 'bard-halfling-nessa-quickstring')
    expect(template).toBeDefined()

    const exported = JSON.parse(exportCharacterJson(template!.characterData))

    expect(exported.name).toBe('Nessa Quickstring')
    expect(exported.race).toBe('halfling')
    expect(exported.className).toBe('bard')
    expect(exported.spellsKnown).toEqual(['1-healing-word', '1-faerie-fire', '1-charm-person', '1-thunderwave'])
    expect(exported.personalityTraits).toMatch(chineseTextPattern)
    expect(exported.ideals).toMatch(chineseTextPattern)
    expect(exported.bonds).toMatch(chineseTextPattern)
    expect(exported.flaws).toMatch(chineseTextPattern)

    expect(exported.backstory).toBeUndefined()
    expect(exported.age).toBeUndefined()
    expect(exported.height).toBeUndefined()
    expect(exported.weight).toBeUndefined()
    expect(exported.eyes).toBeUndefined()
    expect(exported.hair).toBeUndefined()
    expect(exported.skin).toBeUndefined()
    expect(exported.allies).toBeUndefined()
    expect(exported.treasure).toBeUndefined()
    expect(exported.sessionNotes).toBeUndefined()
    expect(exported.classes).toBeUndefined()
    expect(exported.baseScoresApplied).toBeUndefined()
  })

  it('includes one level 1 D&D 5e template for every class', () => {
    const classes = dnd5eTemplates
      .filter(template => template.characterData.level === 1)
      .map(template => template.characterData.className)
      .sort()

    expect(classes).toEqual(expectedLevelOneClasses)
  })

  it('has complete Chinese blog text for every D&D 5e template', () => {
    const characters = zh.blog.characters as Record<string, Record<string, unknown>>
    const requiredFields = [
      'description',
      'bio',
      'personality',
      'personalityTraits',
      'ideals',
      'bonds',
      'flaws',
      'eyes',
      'hair',
      'skin',
    ]
    const missing = dnd5eTemplates.flatMap(template => {
      const text = characters[template.slug]
      if (!text) return [`${template.slug}: missing entry`]

      return requiredFields
        .filter(field => {
          const value = text[field]
          return typeof value !== 'string' || !chineseTextPattern.test(value)
        })
        .map(field => `${template.slug}: ${field}`)
    })

    expect(missing).toEqual([])
  })

  it('translates every D&D 5e template detail panel system term in Chinese', () => {
    const missing: string[] = []
    for (const template of dnd5eTemplates) {
      const char = template.characterData

      missing.push(untranslatedPanelTerm(char.race, 'race', template.slug) ?? '')
      if (char.subrace) missing.push(untranslatedPanelTerm(char.subrace, 'subrace', template.slug) ?? '')
      missing.push(untranslatedPanelTerm(char.className, 'class', template.slug) ?? '')
      if (char.background) missing.push(untranslatedPanelTerm(char.background, 'background', template.slug) ?? '')

      for (const skill of char.skillProficiencies) {
        missing.push(untranslatedPanelTerm(skill, 'skill', template.slug) ?? '')
      }
      for (const proficiency of char.proficienciesOther) {
        missing.push(untranslatedPanelTerm(proficiency, 'proficiency', template.slug) ?? '')
      }
      for (const item of char.equipment) {
        missing.push(untranslatedPanelTerm(item, 'equipment', template.slug) ?? '')
      }
      for (const feature of char.featuresTraits) {
        missing.push(untranslatedPanelTerm(feature, 'feature', template.slug) ?? '')
      }
      for (const language of char.languages) {
        missing.push(untranslatedPanelTerm(language, 'language', template.slug) ?? '')
      }
    }

    expect(missing.filter(Boolean)).toEqual([])
  })

  it('has English blog text for every D&D 5e template', () => {
    const characters = en.blog.characters as Record<string, Record<string, unknown>>
    const missing = dnd5eTemplates.flatMap(template => {
      const text = characters[template.slug]
      if (!text) return [`${template.slug}: missing entry`]

      return ['description', 'bio', 'personality']
        .filter(field => {
          const value = text[field]
          return typeof value !== 'string' || value.length === 0 || value === `blog.characters.${template.slug}.${field}`
        })
        .map(field => `${template.slug}: ${field}`)
    })

    expect(missing).toEqual([])
  })
})
