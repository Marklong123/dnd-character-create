import type { CharacterData } from '@/stores/character'
import { validateCharacterForExport } from '@/utils/characterValidation'

export function exportCharacterJson(character: CharacterData): string {
  const validationErrors = validateCharacterForExport(character)
  if (validationErrors.length > 0) {
    throw new Error('EXPORT_VALIDATION:' + validationErrors.join('\n'))
  }

  const {
    backstory,
    age,
    height,
    weight,
    eyes,
    hair,
    skin,
    allies,
    treasure,
    sessionNotes,
    brawlingMoves,
    misdeeds,
    size,
    whacksLevel,
    mark,
    markSpirit,
    virtue,
    sin,
    humanity,
    classes,
    targetLevel,
    baseScoresApplied,
    ...exportable
  } = character

  void backstory
  void age
  void height
  void weight
  void eyes
  void hair
  void skin
  void allies
  void treasure
  void sessionNotes
  void brawlingMoves
  void misdeeds
  void size
  void whacksLevel
  void mark
  void markSpirit
  void virtue
  void sin
  void humanity
  void classes
  void targetLevel
  void baseScoresApplied

  return JSON.stringify(exportable, null, 2)
}
