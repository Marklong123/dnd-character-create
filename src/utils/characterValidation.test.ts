import { beforeAll, describe, expect, it } from 'vitest'
import { getCantripsKnown, getSpells, getSpellsKnownCount, preloadVariantData } from '@/data'
import type { AbilityScores, CharacterData } from '@/stores/character'
import { isRequiredSpellSelectionComplete, characterAbilityModifiers } from './characterValidation'

const baseScores: AbilityScores = { str: 10, dex: 10, con: 14, int: 16, wis: 16, cha: 16 }

function character(overrides: Partial<CharacterData>): CharacterData {
  return {
    id: 'test',
    variant: 'dnd5e',
    name: '',
    playerName: '',
    race: 'human',
    subrace: '',
    className: 'fighter',
    subclass: '',
    level: 1,
    targetLevel: 1,
    asiPoints: 0,
    baseScoresApplied: true,
    background: 'soldier',
    alignment: '',
    experiencePoints: 0,
    abilityScores: { ...baseScores },
    racialBonuses: {},
    asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    skillProficiencies: [],
    skillExpertise: [],
    savingThrowProficiencies: [],
    languages: [],
    proficienciesOther: [],
    weapons: [],
    armor: '',
    shield: false,
    equipment: [],
    purchasedEquipment: [],
    coins: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
    equipmentBudgetGp: 0,
    equipmentSpentGp: 0,
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    featuresTraits: [],
    backstory: '',
    age: '',
    height: '',
    weight: '',
    eyes: '',
    hair: '',
    skin: '',
    allies: '',
    treasure: '',
    spellcastingClass: '',
    spellcastingAbility: '',
    cantrips: [],
    spellsKnown: [],
    spellsPrepared: [],
    hitDie: 8,
    maxHp: 0,
    currentHp: 0,
    tempHp: 0,
    speed: 30,
    brawlingMoves: [],
    misdeeds: '',
    size: 'Medium',
    whacksLevel: 0,
    mark: '',
    markSpirit: '',
    virtue: '',
    sin: '',
    humanity: 10,
    sessionNotes: '',
    classes: [],
    ...overrides,
  }
}

function spellIds(className: string, level: number, count: number): string[] {
  const ids = getSpells('dnd5e')
    .filter(spell => spell.classes.includes(className) && spell.level === level)
    .slice(0, count)
    .map(spell => spell.id)
  if (ids.length !== count) throw new Error(`Need ${count} ${className} spell(s) at level ${level}`)
  return ids
}

function cantripIds(className: string, count: number): string[] {
  return spellIds(className, 0, count)
}

describe('required spell selection validation', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  it('treats non-casters as complete', () => {
    expect(isRequiredSpellSelectionComplete(character({ className: 'fighter' }))).toBe(true)
  })

  it('requires wizard cantrips and spellbook spells but not prepared spells', () => {
    const wizard = character({
      className: 'wizard',
      hitDie: 6,
      spellcastingClass: 'wizard',
      spellcastingAbility: 'int',
    })
    const requiredCantrips = getCantripsKnown('wizard', wizard.level)

    expect(isRequiredSpellSelectionComplete(wizard)).toBe(false)

    wizard.cantrips = cantripIds('wizard', requiredCantrips)
    wizard.spellsKnown = spellIds('wizard', 1, 6)

    expect(isRequiredSpellSelectionComplete(wizard)).toBe(true)
  })

  it('requires known casters to select all known spells', () => {
    const sorcerer = character({
      className: 'sorcerer',
      subclass: 'draconic-bloodline',
      hitDie: 6,
      spellcastingClass: 'sorcerer',
      spellcastingAbility: 'cha',
    })
    const requiredCantrips = getCantripsKnown('sorcerer', sorcerer.level)
    const knownMax = getSpellsKnownCount('sorcerer', sorcerer.level, characterAbilityModifiers(sorcerer))

    sorcerer.cantrips = cantripIds('sorcerer', requiredCantrips)
    sorcerer.spellsKnown = spellIds('sorcerer', 1, knownMax - 1)
    expect(isRequiredSpellSelectionComplete(sorcerer)).toBe(false)

    sorcerer.spellsKnown = spellIds('sorcerer', 1, knownMax)
    expect(isRequiredSpellSelectionComplete(sorcerer)).toBe(true)
  })

  it('allows prepared casters to continue after cantrips are selected', () => {
    const cleric = character({
      className: 'cleric',
      subclass: 'life',
      spellcastingClass: 'cleric',
      spellcastingAbility: 'wis',
    })
    const requiredCantrips = getCantripsKnown('cleric', cleric.level)

    cleric.cantrips = cantripIds('cleric', requiredCantrips)
    cleric.spellsPrepared = []

    expect(isRequiredSpellSelectionComplete(cleric)).toBe(true)
  })
})
