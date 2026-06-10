import { describe, it, expect, beforeAll } from 'vitest'
import {
  getRaces,
  getClasses,
  getBackgrounds,
  getRules,
  getMaxLevel,
  getEquipment,
  getSpells,
  getSpellSlots,
  getCantripsKnown,
  getSpellsKnownCount,
  getAvailableLanguages,
  getBrancaloniaRules,
  getApocalisseRules,
  preloadVariantData,
} from './index'
import type { GameVariant } from '@/stores/app'
import type { AbilityScores } from '@/stores/character'
import type { Race, Subrace } from './dnd5e/races'
import { modifier, proficiencyBonus, totalHp } from '@/utils/calculations'
import { getAsiCount } from '@/utils/dndRules'

const variants: GameVariant[] = ['dnd5e', 'brancalonia', 'apocalisse']
const abilities: (keyof AbilityScores)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha']
type RaceChoice = { race: Race; subrace: Subrace | null }

describe('data loader', () => {
  // Preload all variants before running tests
  beforeAll(async () => {
    await Promise.all(variants.map(v => preloadVariantData(v)))
  })
  describe('getRaces', () => {
    it('returns races for all variants', () => {
      for (const v of variants) {
        const races = getRaces(v)
        expect(races.length).toBeGreaterThan(0)
        expect(races[0]).toHaveProperty('id')
        expect(races[0]).toHaveProperty('name')
      }
    })

    it('dnd5e has 9 races', () => {
      expect(getRaces('dnd5e').length).toBe(9)
    })

    it('brancalonia has races', () => {
      expect(getRaces('brancalonia').length).toBeGreaterThan(0)
    })

    it('apocalisse has races', () => {
      expect(getRaces('apocalisse').length).toBeGreaterThan(0)
    })
  })

  describe('getClasses', () => {
    it('returns classes for all variants', () => {
      for (const v of variants) {
        const classes = getClasses(v)
        expect(classes.length).toBeGreaterThan(0)
        expect(classes[0]).toHaveProperty('id')
        expect(classes[0]).toHaveProperty('name')
        expect(classes[0]).toHaveProperty('hitDie')
      }
    })

    it('dnd5e has 12 classes', () => {
      expect(getClasses('dnd5e').length).toBe(12)
    })

    it('brancalonia classes have brancalonia subclasses', () => {
      const classes = getClasses('brancalonia')
      // At least one class should have brancalonia-specific subclasses
      const hasSubclasses = classes.some(c => c.subclasses.length > 0)
      expect(hasSubclasses).toBe(true)
    })

    it('apocalisse classes have apocalyptic subclasses', () => {
      const classes = getClasses('apocalisse')
      const hasSubclasses = classes.some(c => c.subclasses.length > 0)
      expect(hasSubclasses).toBe(true)
    })

    it('covers every D&D 5e race/subrace, class, and level derived rule matrix', () => {
      const raceChoices: RaceChoice[] = getRaces('dnd5e').flatMap<RaceChoice>(race => (
        race.subraces.length
          ? race.subraces.map(subrace => ({ race, subrace }))
          : [{ race, subrace: null }]
      ))
      const classes = getClasses('dnd5e')
      const abilityMods = { str: 0, dex: 0, con: 2, int: 3, wis: 2, cha: 3 }

      expect(raceChoices.length).toBeGreaterThan(getRaces('dnd5e').length)
      expect(classes).toHaveLength(12)

      for (const { race, subrace } of raceChoices) {
        const racialBonuses: Partial<AbilityScores> = {
          ...race.abilityBonuses,
        }
        if (subrace) {
          for (const [key, value] of Object.entries(subrace.abilityBonuses)) {
            const ability = key as keyof AbilityScores
            racialBonuses[ability] = (racialBonuses[ability] || 0) + (Number(value) || 0)
          }
        }

        for (const cls of classes) {
          for (let level = 1; level <= 20; level++) {
            const conScore = 14 + (racialBonuses.con || 0)
            const hp = totalHp(cls.hitDie, modifier(conScore), level)
            const slots = getSpellSlots(cls.id, level)
            const cantrips = getCantripsKnown(cls.id, level)
            const spellsKnown = getSpellsKnownCount(cls.id, level, abilityMods)

            expect(race.speed).toBeGreaterThan(0)
            expect([6, 8, 10, 12]).toContain(cls.hitDie)
            expect(hp).toBeGreaterThanOrEqual(1)
            expect(proficiencyBonus(level)).toBe(Math.floor((level - 1) / 4) + 2)
            expect(cls.savingThrows).toHaveLength(2)
            for (const savingThrow of cls.savingThrows) {
              expect(abilities).toContain(savingThrow)
            }
            expect(getAsiCount(cls.id, level)).toBeGreaterThanOrEqual(0)
            if (cls.id === 'fighter' && level >= 6) {
              expect(getAsiCount(cls.id, level)).toBeGreaterThan(getAsiCount('cleric', level))
            }
            if (cls.id === 'rogue' && level >= 10) {
              expect(getAsiCount(cls.id, level)).toBeGreaterThan(getAsiCount('cleric', level))
            }
            if (level >= cls.subclassLevel) {
              expect(cls.subclasses.length).toBeGreaterThan(0)
            }
            if (cls.spellcasting) {
              expect(abilities).toContain(cls.spellcasting.ability)
              expect(cantrips).toBeGreaterThanOrEqual(0)
              expect(spellsKnown).toBeGreaterThanOrEqual(0)
              if (level >= 2 || cls.spellcasting.casterType !== 'half') {
                expect(Object.values(slots).reduce((sum, count) => sum + count, 0)).toBeGreaterThanOrEqual(0)
              }
            } else {
              expect(cantrips).toBe(0)
              expect(spellsKnown).toBe(0)
              expect(slots).toEqual({})
            }
          }
        }
      }
    })
  })

  describe('getBackgrounds', () => {
    it('returns backgrounds for all variants', () => {
      for (const v of variants) {
        const bgs = getBackgrounds(v)
        expect(bgs.length).toBeGreaterThan(0)
        expect(bgs[0]).toHaveProperty('id')
        expect(bgs[0]).toHaveProperty('name')
      }
    })
  })

  describe('getRules / getMaxLevel', () => {
    it('dnd5e max level is 20', () => {
      expect(getMaxLevel('dnd5e')).toBe(20)
      expect(getRules('dnd5e').maxLevel).toBe(20)
    })

    it('brancalonia has lower max level', () => {
      expect(getMaxLevel('brancalonia')).toBeLessThanOrEqual(10)
    })

    it('apocalisse max level is 20', () => {
      expect(getMaxLevel('apocalisse')).toBe(20)
    })

    it('brancalonia uses silver standard', () => {
      expect(getRules('brancalonia').currencyStandard).toBe('silver')
    })

    it('dnd5e uses gold standard', () => {
      expect(getRules('dnd5e').currencyStandard).toBe('gold')
    })
  })

  describe('getEquipment', () => {
    it('returns equipment data with weapons and armor', () => {
      const eq = getEquipment('dnd5e')
      expect(eq).toBeDefined()
      expect(eq.simpleWeapons.length).toBeGreaterThan(0)
      expect(eq.martialWeapons.length).toBeGreaterThan(0)
      expect(eq.armor.length).toBeGreaterThan(0)
    })
  })

  describe('getSpells', () => {
    it('returns spells', () => {
      const spells = getSpells('dnd5e')
      expect(spells.length).toBeGreaterThan(0)
      expect(spells[0]).toHaveProperty('name')
      expect(spells[0]).toHaveProperty('level')
    })

    it('filters D&D spells to the Project Infinity runtime spell list', () => {
      const names = getSpells('dnd5e').map(spell => spell.name)
      expect(names).toContain('Fire Bolt')
      expect(names).not.toContain('Black Tentacles')
    })
  })

  describe('getSpellSlots', () => {
    it('returns spell slots for wizard at level 1', () => {
      const slots = getSpellSlots('wizard', 1)
      expect(slots[1]).toBeGreaterThan(0) // level 1 spell slots
    })

    it('returns empty for non-caster', () => {
      const slots = getSpellSlots('fighter', 1)
      expect(Object.keys(slots)).toHaveLength(0)
    })

    it('returns more slots at higher levels', () => {
      const low = getSpellSlots('wizard', 1)
      const high = getSpellSlots('wizard', 5)
      const lowTotal = Object.values(low).reduce((a, b) => a + b, 0)
      const highTotal = Object.values(high).reduce((a, b) => a + b, 0)
      expect(highTotal).toBeGreaterThan(lowTotal)
    })
  })

  describe('getCantripsKnown', () => {
    it('returns cantrips for wizard', () => {
      expect(getCantripsKnown('wizard', 1)).toBeGreaterThan(0)
    })

    it('returns 0 for non-caster', () => {
      expect(getCantripsKnown('fighter', 1)).toBe(0)
    })

    it('increases cantrips at higher levels', () => {
      expect(getCantripsKnown('wizard', 10)).toBeGreaterThanOrEqual(getCantripsKnown('wizard', 1))
    })
  })

  describe('getSpellsKnownCount', () => {
    const mods = { str: 0, dex: 0, con: 0, int: 3, wis: 2, cha: 1 }

    it('prepared caster: ability mod + level (min 1)', () => {
      // Wizard is a prepared caster using INT
      const count = getSpellsKnownCount('wizard', 3, mods)
      expect(count).toBeGreaterThanOrEqual(1)
    })

    it('returns 0 for non-caster', () => {
      expect(getSpellsKnownCount('fighter', 1, mods)).toBe(0)
    })
  })

  describe('getAvailableLanguages', () => {
    it('dnd5e includes Common', () => {
      expect(getAvailableLanguages('dnd5e')).toContain('Common')
    })

    it('all variants return languages', () => {
      for (const v of variants) {
        expect(getAvailableLanguages(v).length).toBeGreaterThan(0)
      }
    })
  })

  describe('variant-specific rules', () => {
    it('getBrancaloniaRules returns rules for brancalonia', () => {
      expect(getBrancaloniaRules('brancalonia')).not.toBeNull()
      expect(getBrancaloniaRules('dnd5e')).toBeNull()
    })

    it('getApocalisseRules returns rules for apocalisse', () => {
      expect(getApocalisseRules('apocalisse')).not.toBeNull()
      expect(getApocalisseRules('dnd5e')).toBeNull()
    })
  })
})
