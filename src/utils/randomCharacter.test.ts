import { beforeAll, describe, expect, it } from 'vitest'
import { getClasses, preloadVariantData } from '@/data'
import type { AbilityScores } from '@/stores/character'
import { modifier, proficiencyBonus, totalHp } from './calculations'
import { calculateCharacterArmorClass } from './armorClass'
import { generateRandomCharacter } from './randomCharacter'
import { getAsiCount, sumAbilityScores } from './dndRules'

const abilities: (keyof AbilityScores)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha']

function totalScore(character: { abilityScores: AbilityScores; racialBonuses: Partial<AbilityScores>; asiBonuses?: AbilityScores }, ability: keyof AbilityScores): number {
  return character.abilityScores[ability]
    + (character.racialBonuses[ability] || 0)
    + (character.asiBonuses?.[ability] || 0)
}

describe('generateRandomCharacter', () => {
  beforeAll(async () => {
    await preloadVariantData('dnd5e')
  })

  it('generates level 1..20 characters with valid HP, PB, AC, and ASI invariants', () => {
    for (let level = 1; level <= 20; level++) {
      for (let run = 0; run < 5; run++) {
        const character = generateRandomCharacter('dnd5e', level)
        const cls = getClasses('dnd5e').find(c => c.id === character.className)
        expect(cls).toBeDefined()
        if (!cls) continue

        const conMod = modifier(totalScore(character, 'con'))
        expect(character.level).toBe(level)
        expect(character.targetLevel).toBe(level)
        expect(character.baseScoresApplied).toBe(true)
        expect(character.asiPoints).toBe(0)
        expect(sumAbilityScores(character.asiBonuses)).toBe(getAsiCount(cls.id, level) * 2)
        expect(character.hitDie).toBe(cls.hitDie)
        expect(character.maxHp).toBe(totalHp(cls.hitDie, conMod, level))
        expect(character.currentHp).toBe(character.maxHp)
        expect(proficiencyBonus(character.level)).toBe(Math.floor((level - 1) / 4) + 2)
        expect(calculateCharacterArmorClass(character)).toBeGreaterThan(0)

        for (const ability of abilities) {
          expect(totalScore(character, ability)).toBeLessThanOrEqual(20)
        }

        const primaryBest = Math.max(...cls.primaryAbility.map(ability => totalScore(character, ability)))
        const nonPrimaryBest = Math.max(
          ...abilities
            .filter(ability => !cls.primaryAbility.includes(ability))
            .map(ability => totalScore(character, ability)),
        )
        expect(primaryBest).toBeGreaterThanOrEqual(nonPrimaryBest - 2)
      }
    }
  })
})
