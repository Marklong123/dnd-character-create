import { describe, expect, it } from 'vitest'
import { calculateArmorClass, calculateCharacterArmorClass } from './armorClass'
import type { AbilityScores, CharacterData } from '@/stores/character'

const baseScores: AbilityScores = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }

function character(overrides: Partial<CharacterData>): CharacterData {
  return {
    id: 'test',
    variant: 'dnd5e',
    name: '',
    playerName: '',
    race: 'human',
    subrace: '',
    className: 'cleric',
    subclass: '',
    level: 1,
    targetLevel: 1,
    asiPoints: 0,
    baseScoresApplied: true,
    background: '',
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

describe('armor class rules', () => {
  it('calculates unarmored AC from dexterity', () => {
    expect(calculateArmorClass({ className: 'cleric', dexMod: -1 })).toBe(9)
  })

  it('applies light, medium, heavy armor and shields', () => {
    expect(calculateArmorClass({ className: 'rogue', armorName: 'Leather', dexMod: 3 })).toBe(14)
    expect(calculateArmorClass({ className: 'cleric', armorName: 'Scale Mail', shield: true, dexMod: 4 })).toBe(18)
    expect(calculateArmorClass({ className: 'fighter', armorName: 'Chain Mail', shield: true, dexMod: -1 })).toBe(18)
  })

  it('supports Barbarian and Monk unarmored defense', () => {
    expect(calculateArmorClass({ className: 'barbarian', shield: true, dexMod: 2, conMod: 3 })).toBe(17)
    expect(calculateArmorClass({ className: 'monk', dexMod: 2, wisMod: 3 })).toBe(15)
  })

  it('covers the Tiefling Cleric 10 regression with and without equipment', () => {
    const base = character({
      className: 'cleric',
      subclass: 'life',
      level: 10,
      race: 'tiefling',
      background: 'acolyte',
      abilityScores: { str: 12, dex: 8, con: 8, int: 9, wis: 8, cha: 10 },
      racialBonuses: {},
    })

    expect(calculateCharacterArmorClass(base)).toBe(9)
    expect(calculateCharacterArmorClass({ ...base, armor: 'Scale Mail', shield: true })).toBe(15)
    expect(calculateCharacterArmorClass({ ...base, armor: 'Chain Mail', shield: true })).toBe(18)
  })
})
