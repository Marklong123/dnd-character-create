import type { CharacterData, AbilityScores } from '@/stores/character'
import { getCantripsKnown, getClasses, getSpellSlots, getSpells, getSpellsKnownCount } from '@/data'
import { ABILITY_KEYS, getAsiCount, sumAbilityScores } from '@/utils/dndRules'

const THIRD_CASTER_SUBCLASSES: Record<string, string> = {
  fighter: 'eldritch-knight',
  rogue: 'arcane-trickster',
}

export function wizardSpellbookRequired(level: number): number {
  return 6 + Math.max(0, level - 1) * 2
}

export function maxSpellLevel(className: string, level: number): number {
  const slots = getSpellSlots(className, level)
  return Math.max(0, ...Object.keys(slots).map(Number))
}

export function shouldUseSpellcasting(character: CharacterData): boolean {
  const cls = getClasses(character.variant).find(c => c.id === character.className)
  if (!cls?.spellcasting) return false
  const requiredSubclass = THIRD_CASTER_SUBCLASSES[cls.id]
  if (requiredSubclass && character.subclass !== requiredSubclass) return false
  return (
    getCantripsKnown(cls.id, character.level) > 0 ||
    getSpellsKnownCount(cls.id, character.level, characterAbilityModifiers(character)) > 0 ||
    Object.keys(getSpellSlots(cls.id, character.level)).length > 0
  )
}

export function isPreparedCaster(character: CharacterData): boolean {
  const cls = getClasses(character.variant).find(c => c.id === character.className)
  return !!cls?.spellcasting?.preparedCaster && shouldUseSpellcasting(character)
}

export function isWizard(character: CharacterData): boolean {
  return character.className === 'wizard' && shouldUseSpellcasting(character)
}

export function isRequiredSpellSelectionComplete(character: CharacterData): boolean {
  const cls = getClasses(character.variant).find(c => c.id === character.className)
  if (!cls?.spellcasting || !shouldUseSpellcasting(character)) return true

  const mods = characterAbilityModifiers(character)
  const maxCantrips = getCantripsKnown(character.className, character.level)
  const preparedMax = getSpellsKnownCount(character.className, character.level, mods)

  if (character.cantrips.length !== maxCantrips) return false

  if (character.className === 'wizard') {
    const spellbook = new Set(character.spellsKnown)
    return (
      character.spellsKnown.length === wizardSpellbookRequired(character.level) &&
      character.spellsPrepared.length <= preparedMax &&
      character.spellsPrepared.every(spellId => spellbook.has(spellId))
    )
  }

  if (cls.spellcasting.preparedCaster) {
    return character.spellsKnown.length === 0 && character.spellsPrepared.length <= preparedMax
  }

  const knownMax = getSpellsKnownCount(character.className, character.level, mods)
  return character.spellsKnown.length === knownMax && character.spellsPrepared.length === 0
}

export function asiPointsRequiredThrough(level: number, className = ''): number {
  return getAsiCount(className, level) * 2
}

export function characterAbilityModifiers(character: CharacterData): Record<keyof AbilityScores, number> {
  const result = {} as Record<keyof AbilityScores, number>
  for (const key of ABILITY_KEYS) {
    const score = character.abilityScores[key] + (character.racialBonuses[key] || 0) + (character.asiBonuses?.[key] || 0)
    result[key] = Math.floor((score - 10) / 2)
  }
  return result
}

export function validateCharacterForExport(character: CharacterData): string[] {
  const errors: string[] = []
  const cls = getClasses(character.variant).find(c => c.id === character.className)
  const spells = getSpells(character.variant)
  const spellById = new Map(spells.map(spell => [spell.id, spell]))

  if (character.variant !== 'dnd5e') {
    errors.push('Only D&D 5e characters can be exported to Project Infinity.')
  }
  if (Array.isArray(character.classes) && character.classes.filter(c => c.level > 0).length >= 2) {
    errors.push('Multiclass characters are not supported.')
  }
  if (!cls) {
    errors.push('Choose a class before exporting.')
  }
  if (!character.race) {
    errors.push('Choose a race before exporting.')
  }
  if (cls && character.level >= cls.subclassLevel && cls.subclasses.length > 0 && !character.subclass) {
    errors.push(`Choose a ${cls.subclassName} before exporting this level ${character.level} character.`)
  }
  if ((character.asiPoints || 0) > 0) {
    errors.push(`Spend all remaining ASI points before exporting (${character.asiPoints} left).`)
  }
  if (cls) {
    const allowedAsiPoints = getAsiCount(cls.id, character.level) * 2
    const spentAsiPoints = sumAbilityScores(character.asiBonuses)
    if (spentAsiPoints > allowedAsiPoints) {
      errors.push(`ASI bonuses exceed the allowed amount for level ${character.level}.`)
    }
  }
  for (const ability of ABILITY_KEYS) {
    const total = character.abilityScores[ability] + (character.racialBonuses[ability] || 0) + (character.asiBonuses?.[ability] || 0)
    if (total > 20) {
      errors.push(`${ability.toUpperCase()} cannot exceed 20 after racial and ASI bonuses.`)
    }
  }
  if ((character.equipmentSpentGp || 0) > (character.equipmentBudgetGp || 0)) {
    errors.push('Equipment purchases exceed your starting gold budget.')
  }

  if (shouldUseSpellcasting(character) && cls?.spellcasting) {
    const mods = characterAbilityModifiers(character)
    const maxCantrips = getCantripsKnown(character.className, character.level)
    const preparedMax = getSpellsKnownCount(character.className, character.level, mods)
    const highestSpellLevel = maxSpellLevel(character.className, character.level)

    if (character.cantrips.length !== maxCantrips) {
      errors.push(`Choose exactly ${maxCantrips} cantrip(s).`)
    }

    for (const spellId of [...character.cantrips, ...character.spellsKnown, ...character.spellsPrepared]) {
      const spell = spellById.get(spellId)
      if (!spell) {
        errors.push(`Unsupported spell selected: ${spellId}`)
      } else if (spell.level > highestSpellLevel) {
        errors.push(`${spell.name} is above your maximum spell level (${highestSpellLevel}).`)
      } else if (!spell.classes.includes(character.className)) {
        errors.push(`${spell.name} is not on the ${cls.name} spell list.`)
      }
    }

    if (character.className === 'wizard') {
      const requiredSpellbook = wizardSpellbookRequired(character.level)
      if (character.spellsKnown.length !== requiredSpellbook) {
        errors.push(`Wizard spellbook must contain exactly ${requiredSpellbook} spell(s).`)
      }
      if (character.spellsPrepared.length > preparedMax) {
        errors.push(`Wizard prepared spells cannot exceed ${preparedMax}.`)
      }
      const spellbook = new Set(character.spellsKnown)
      for (const spellId of character.spellsPrepared) {
        if (!spellbook.has(spellId)) {
          errors.push(`Prepared spell is not in your spellbook: ${spellId}`)
        }
      }
    } else if (cls.spellcasting.preparedCaster) {
      if (character.spellsKnown.length > 0) {
        errors.push(`${cls.name} should use prepared spells, not known spells.`)
      }
      if (character.spellsPrepared.length > preparedMax) {
        errors.push(`${cls.name} prepared spells cannot exceed ${preparedMax}.`)
      }
    } else {
      const knownMax = getSpellsKnownCount(character.className, character.level, mods)
      if (character.spellsPrepared.length > 0) {
        errors.push(`${cls.name} should use known spells, not prepared spells.`)
      }
      if (character.spellsKnown.length !== knownMax) {
        errors.push(`${cls.name} must know exactly ${knownMax} spell(s).`)
      }
    }
  }

  return [...new Set(errors)]
}
