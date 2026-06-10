import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { GameVariant } from './app'
import { modifier, proficiencyBonus, hpPerLevel, totalHp } from '@/utils/calculations'
import { getMaxLevel, getClasses } from '@/data'
import { averageStartingGold } from '@/data/dnd5e/equipmentPrices'
import { validateCharacterForExport } from '@/utils/characterValidation'
import { getAsiCount, sumAbilityScores, zeroAbilityScores } from '@/utils/dndRules'
import { calculateCharacterArmorClass } from '@/utils/armorClass'

export interface AbilityScores {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export interface Weapon {
  name: string
  attackBonus: number
  damage: string
}

export interface ClassEntry {
  classId: string
  subclass: string
  level: number
  hitDie: number
}

export interface CharacterData {
  id: string
  variant: GameVariant
  name: string
  playerName: string
  race: string
  subrace: string
  className: string
  subclass: string
  level: number
  targetLevel?: number
  asiPoints?: number
  baseScoresApplied?: boolean
  background: string
  alignment: string
  experiencePoints: number
  abilityScores: AbilityScores
  racialBonuses: Partial<AbilityScores>
  asiBonuses?: AbilityScores
  skillProficiencies: string[]
  skillExpertise: string[]
  savingThrowProficiencies: string[]
  languages: string[]
  proficienciesOther: string[]
  weapons: Weapon[]
  armor: string
  shield: boolean
  equipment: string[]
  purchasedEquipment?: string[]
  coins: { cp: number; sp: number; ep: number; gp: number; pp: number }
  equipmentBudgetGp?: number
  equipmentSpentGp?: number
  personalityTraits: string
  ideals: string
  bonds: string
  flaws: string
  featuresTraits: string[]
  backstory: string
  age: string
  height: string
  weight: string
  eyes: string
  hair: string
  skin: string
  allies: string
  treasure: string
  spellcastingClass: string
  spellcastingAbility: string
  cantrips: string[]
  spellsKnown: string[]
  spellsPrepared: string[]
  hitDie: number
  maxHp: number
  currentHp: number
  tempHp: number
  speed: number
  // Brancalonia specific
  brawlingMoves: string[]
  misdeeds: string
  size: string
  whacksLevel: number
  // Apocalisse specific
  mark: string
  markSpirit: string
  virtue: string
  sin: string
  humanity: number
  // Session notes
  sessionNotes: string
  // Legacy import compatibility only. Project Infinity runtime supports single-class characters.
  classes: ClassEntry[]
}

function createEmptyCharacter(): CharacterData {
  return {
    id: crypto.randomUUID(),
    variant: 'dnd5e',
    name: '',
    playerName: '',
    race: '',
    subrace: '',
    className: '',
    subclass: '',
    level: 1,
    targetLevel: 1,
    asiPoints: 0,
    baseScoresApplied: false,
    background: '',
    alignment: '',
    experiencePoints: 0,
    abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    racialBonuses: {},
    asiBonuses: zeroAbilityScores(),
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
    size: '',
    whacksLevel: 0,
    mark: '',
    markSpirit: '',
    virtue: '',
    sin: '',
    humanity: 10,
    sessionNotes: '',
    classes: [],
  }
}

function normalizeAbilityScores(value: unknown, fallback = 0): AbilityScores {
  const source = (value && typeof value === 'object') ? value as Partial<Record<keyof AbilityScores, unknown>> : {}
  return {
    str: Number(source.str) || fallback,
    dex: Number(source.dex) || fallback,
    con: Number(source.con) || fallback,
    int: Number(source.int) || fallback,
    wis: Number(source.wis) || fallback,
    cha: Number(source.cha) || fallback,
  }
}

export const useCharacterStore = defineStore('character', () => {
  const character = ref<CharacterData>(createEmptyCharacter())
  const savedCharacters = ref<CharacterData[]>([])

  // Migration: add new fields to existing saved characters
  // Runs as a watcher so it fires AFTER pinia-plugin-persistedstate hydrates from localStorage
  function migrateCharacters() {
    for (const c of savedCharacters.value) {
      const saved = c as any
      if (saved.sessionNotes === undefined) saved.sessionNotes = ''
      if (!Array.isArray(saved.classes)) saved.classes = []
      if (typeof saved.targetLevel !== 'number') saved.targetLevel = saved.level || 1
      if (typeof saved.asiPoints !== 'number') saved.asiPoints = 0
      if (typeof saved.baseScoresApplied !== 'boolean') saved.baseScoresApplied = true
      saved.asiBonuses = normalizeAbilityScores(saved.asiBonuses, 0)
      if (typeof saved.equipmentBudgetGp !== 'number') saved.equipmentBudgetGp = 0
      if (typeof saved.equipmentSpentGp !== 'number') saved.equipmentSpentGp = 0
      if (!Array.isArray(saved.purchasedEquipment)) saved.purchasedEquipment = []
    }
  }
  migrateCharacters()
  watch(savedCharacters, migrateCharacters, { once: true })

  // Computed derived stats
  const abilityModifiers = computed(() => ({
    str: modifier(totalAbilityScore('str')),
    dex: modifier(totalAbilityScore('dex')),
    con: modifier(totalAbilityScore('con')),
    int: modifier(totalAbilityScore('int')),
    wis: modifier(totalAbilityScore('wis')),
    cha: modifier(totalAbilityScore('cha')),
  }))

  const profBonus = computed(() => proficiencyBonus(character.value.level))

  const armorClass = computed(() => calculateCharacterArmorClass(character.value))

  const initiative = computed(() => abilityModifiers.value.dex)

  const passivePerception = computed(() => {
    const base = 10 + abilityModifiers.value.wis
    const proficient = character.value.skillProficiencies.includes('perception')
    return base + (proficient ? profBonus.value : 0)
  })

  function totalAbilityScore(ability: keyof AbilityScores): number {
    const base = character.value.abilityScores[ability]
    const racialBonus = character.value.racialBonuses[ability] || 0
    const asiBonus = character.value.asiBonuses?.[ability] || 0
    return base + racialBonus + asiBonus
  }

  function resetCharacter() {
    character.value = createEmptyCharacter()
  }

  function resetBuildAfterLevelChange(newLevel: number) {
    const current = character.value
    const level = Math.min(Math.max(Number(newLevel) || 1, 1), getMaxLevel(current.variant))
    character.value = {
      ...createEmptyCharacter(),
      id: current.id,
      variant: current.variant,
      name: current.name,
      playerName: current.playerName,
      alignment: current.alignment,
      level,
      targetLevel: level,
      baseScoresApplied: false,
    }
  }

  function recomputeBuildDerivedState() {
    const char = character.value
    char.level = Math.min(Math.max(Number(char.level) || 1, 1), getMaxLevel(char.variant))
    char.targetLevel = char.level

    const cls = getClasses(char.variant).find(c => c.id === char.className)
    if (!cls) {
      char.maxHp = 0
      char.currentHp = 0
      char.tempHp = 0
      char.featuresTraits = []
      char.asiPoints = 0
      char.asiBonuses = zeroAbilityScores()
      char.spellcastingClass = ''
      char.spellcastingAbility = ''
      char.cantrips = []
      char.spellsKnown = []
      char.spellsPrepared = []
      return
    }

    char.hitDie = cls.hitDie
    char.savingThrowProficiencies = [...cls.savingThrows]
    const conMod = modifier(totalAbilityScore('con'))
    char.maxHp = totalHp(char.hitDie, conMod, char.level)
    char.currentHp = char.maxHp
    char.hitDie = cls.hitDie
    if (!char.asiBonuses) char.asiBonuses = zeroAbilityScores()
    const totalAsiPoints = getAsiCount(cls.id, char.level) * 2
    const spentAsiPoints = sumAbilityScores(char.asiBonuses)
    char.asiPoints = Math.max(0, totalAsiPoints - spentAsiPoints)

    const features = cls.features
      .filter(feature => feature.level <= char.level)
      .map(feature => feature.name)
    if (char.subclass) {
      const subclass = cls.subclasses.find(sub => sub.id === char.subclass)
      if (subclass) {
        features.push(
          ...subclass.features
            .filter(feature => feature.level <= char.level)
            .map(feature => feature.name),
        )
      }
    }
    char.featuresTraits = [...new Set(features)]

    if (cls.spellcasting && !['fighter', 'rogue'].includes(cls.id)) {
      char.spellcastingClass = cls.id
      char.spellcastingAbility = cls.spellcasting.ability
    } else {
      char.spellcastingClass = ''
      char.spellcastingAbility = ''
      char.cantrips = []
      char.spellsKnown = []
      char.spellsPrepared = []
    }
  }

  /** Maximum localStorage budget for saved characters (5 MB) */
  const MAX_STORAGE_BYTES = 5 * 1024 * 1024

  function saveCharacter() {
    const idx = savedCharacters.value.findIndex(c => c.id === character.value.id)
    const copy = JSON.parse(JSON.stringify(character.value))

    // Estimate storage size before saving
    const tentative = idx >= 0
      ? [...savedCharacters.value.slice(0, idx), copy, ...savedCharacters.value.slice(idx + 1)]
      : [...savedCharacters.value, copy]
    const estimatedSize = new Blob([JSON.stringify(tentative)]).size
    if (estimatedSize > MAX_STORAGE_BYTES) {
      throw new Error('STORAGE_LIMIT_EXCEEDED')
    }

    if (idx >= 0) {
      savedCharacters.value[idx] = copy
    } else {
      savedCharacters.value.push(copy)
    }
  }

  function loadCharacter(id: string) {
    const found = savedCharacters.value.find(c => c.id === id)
    if (found) {
      character.value = JSON.parse(JSON.stringify(found))
    }
  }

  function deleteCharacter(id: string) {
    savedCharacters.value = savedCharacters.value.filter(c => c.id !== id)
  }

  /**
   * Level up the current character.
   * Returns { hpGained, newFeatures } or null if at max level.
   */
  function levelUp(): { hpGained: number; newFeatures: string[] } | null {
    const char = character.value
    const maxLv = getMaxLevel(char.variant)
    if (char.level >= maxLv) return null

    const conMod = modifier(totalAbilityScore('con'))
    const allClasses = getClasses(char.variant)
    char.level += 1
    char.targetLevel = Math.max(char.targetLevel || 1, char.level)
    char.classes = []
    const hitDieForLevel = char.hitDie
    const targetClassId = char.className
    const targetSubclass = char.subclass

    // HP gain: hitDie/2 + 1 + CON modifier
    const hpGained = hpPerLevel(hitDieForLevel, conMod)
    char.maxHp += hpGained
    char.currentHp = char.maxHp
    if (getAsiCount(char.className, char.level) > getAsiCount(char.className, char.level - 1)) {
      char.asiPoints = (char.asiPoints || 0) + 2
    }

    // Gather new features from the class/subclass leveled up
    const newFeatures: string[] = []
    const cls = allClasses.find(c => c.id === targetClassId)
    if (cls) {
      const classFeats = cls.features.filter(f => f.level === char.level)
      for (const feat of classFeats) {
        if (!char.featuresTraits.includes(feat.name)) {
          char.featuresTraits.push(feat.name)
          newFeatures.push(feat.name)
        }
      }
      // Subclass features
      if (targetSubclass) {
        const sub = cls.subclasses.find(s => s.id === targetSubclass)
        if (sub) {
          const subFeats = sub.features.filter(f => f.level === char.level)
          for (const feat of subFeats) {
            if (!char.featuresTraits.includes(feat.name)) {
              char.featuresTraits.push(feat.name)
              newFeatures.push(feat.name)
            }
          }
        }
      }
    }

    // Auto-save if the character exists in saved list
    const idx = savedCharacters.value.findIndex(c => c.id === char.id)
    if (idx >= 0) {
      savedCharacters.value[idx] = JSON.parse(JSON.stringify(char))
    }

    return { hpGained, newFeatures }
  }

  function levelUpToTarget(): { levelsGained: number; hpGained: number; newFeatures: string[] } {
    const target = Math.min(Math.max(character.value.targetLevel || 1, 1), getMaxLevel(character.value.variant))
    let levelsGained = 0
    let hpGained = 0
    const newFeatures: string[] = []
    while (character.value.level < target) {
      const result = levelUp()
      if (!result) break
      levelsGained += 1
      hpGained += result.hpGained
      newFeatures.push(...result.newFeatures)
    }
    return { levelsGained, hpGained, newFeatures }
  }

  function spendAsiPoint(ability: keyof AbilityScores) {
    if ((character.value.asiPoints || 0) <= 0) return
    const total = totalAbilityScore(ability)
    if (total >= 20) return
    character.value.asiPoints = character.value.asiPoints || 0
    if (!character.value.asiBonuses) character.value.asiBonuses = zeroAbilityScores()
    character.value.asiBonuses[ability] += 1
    character.value.asiPoints -= 1
    recomputeBuildDerivedState()
  }

  function refundAsiPoint(ability: keyof AbilityScores) {
    if (!character.value.asiBonuses) character.value.asiBonuses = zeroAbilityScores()
    if (character.value.asiBonuses[ability] <= 0) return
    character.value.asiPoints = character.value.asiPoints || 0
    character.value.asiBonuses[ability] -= 1
    character.value.asiPoints += 1
    recomputeBuildDerivedState()
  }

  function resetEquipmentBudgetForClass() {
    character.value.equipmentBudgetGp = averageStartingGold(character.value.className)
    character.value.equipmentSpentGp = 0
    character.value.coins = { cp: 0, sp: 0, ep: 0, gp: character.value.equipmentBudgetGp, pp: 0 }
  }

  function exportJson(): string {
    const validationErrors = validateCharacterForExport(character.value)
    if (validationErrors.length > 0) {
      throw new Error('EXPORT_VALIDATION:' + validationErrors.join('\n'))
    }
    const {
      bonds,
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
    } = character.value
    void bonds
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

  /**
   * Validates and imports a JSON character.
   * Returns { data, warnings } on success, throws with user-friendly messages on failure.
   */
  function importJson(json: string): { data: CharacterData; warnings: string[] } {
    let raw: Record<string, unknown>
    try {
      raw = JSON.parse(json)
    } catch {
      throw new Error('JSON_PARSE_ERROR')
    }

    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
      throw new Error('JSON_NOT_OBJECT')
    }

    const warnings: string[] = []
    const errors: string[] = []

    // Validate variant
    const validVariants = ['dnd5e']
    if (!raw.variant || !validVariants.includes(raw.variant as string)) {
      errors.push('MISSING_VARIANT')
    }

    // Validate required string fields
    const requiredStrings: (keyof CharacterData)[] = ['race', 'className']
    for (const field of requiredStrings) {
      if (!raw[field] || typeof raw[field] !== 'string' || (raw[field] as string).trim() === '') {
        errors.push(`MISSING_${field.toUpperCase()}`)
      }
    }

    // Validate level
    if (raw.level === undefined || typeof raw.level !== 'number' || raw.level < 1 || raw.level > 20) {
      errors.push('INVALID_LEVEL')
    }

    // Validate ability scores
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const
    if (!raw.abilityScores || typeof raw.abilityScores !== 'object') {
      errors.push('MISSING_ABILITY_SCORES')
    } else {
      const scores = raw.abilityScores as Record<string, unknown>
      for (const ab of abilities) {
        if (typeof scores[ab] !== 'number' || (scores[ab] as number) < 1 || (scores[ab] as number) > 30) {
          errors.push('INVALID_ABILITY_SCORES')
          break
        }
      }
    }

    // Validate arrays that should be arrays
    const arrayFields: (keyof CharacterData)[] = [
      'skillProficiencies', 'languages', 'equipment', 'featuresTraits',
      'cantrips', 'spellsKnown', 'spellsPrepared', 'weapons', 'classes', 'purchasedEquipment',
    ]
    for (const field of arrayFields) {
      if (raw[field] !== undefined && !Array.isArray(raw[field])) {
        errors.push(`INVALID_${field.toUpperCase()}`)
      }
    }

    if (Array.isArray(raw.classes)) {
      const validClasses = raw.classes.filter(c =>
        typeof c === 'object' && c !== null &&
        typeof (c as Record<string, unknown>).classId === 'string' &&
        typeof (c as Record<string, unknown>).level === 'number'
      )
      if (validClasses.length >= 2) {
        errors.push('UNSUPPORTED_MULTICLASS')
      }
    }

    if (errors.length > 0) {
      throw new Error('VALIDATION:' + errors.join(','))
    }

    // Build a valid character, filling in defaults for missing optional fields
    // Only copy known CharacterData properties (whitelist approach)
    const empty = createEmptyCharacter()
    const allowedKeys = new Set(Object.keys(empty))
    const safeRaw: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(raw)) {
      if (allowedKeys.has(key)) safeRaw[key] = value
    }

    // Deep-validate array contents: string arrays should contain only strings
    const stringArrayFields = [
      'skillProficiencies', 'skillExpertise', 'savingThrowProficiencies',
      'languages', 'proficienciesOther', 'equipment', 'featuresTraits',
      'cantrips', 'spellsKnown', 'spellsPrepared', 'brawlingMoves', 'purchasedEquipment',
    ] as const
    for (const field of stringArrayFields) {
      if (Array.isArray(safeRaw[field])) {
        safeRaw[field] = (safeRaw[field] as unknown[]).filter(
          (item): item is string => typeof item === 'string' && item.length < 500
        )
      }
    }

    // Validate weapons array contents
    if (Array.isArray(safeRaw.weapons)) {
      safeRaw.weapons = (safeRaw.weapons as unknown[]).filter((w): w is Weapon =>
        typeof w === 'object' && w !== null &&
        typeof (w as Record<string, unknown>).name === 'string' &&
        typeof (w as Record<string, unknown>).damage === 'string'
      )
    }

    safeRaw.classes = []

    // Truncate long strings to prevent abuse
    for (const [key, value] of Object.entries(safeRaw)) {
      if (typeof value === 'string' && value.length > 5000) {
        safeRaw[key] = (value as string).slice(0, 5000)
      }
    }

    const data: CharacterData = {
      ...empty,
      ...(safeRaw as Partial<CharacterData>),
      id: (typeof raw.id === 'string' && raw.id.length < 100) ? raw.id : crypto.randomUUID(),
      variant: 'dnd5e' as GameVariant,
      bonds: '',
      backstory: '',
      age: '',
      height: '',
      weight: '',
      eyes: '',
      hair: '',
      skin: '',
      allies: '',
      treasure: '',
      sessionNotes: '',
      classes: [],
      targetLevel: (typeof raw.targetLevel === 'number' && raw.targetLevel >= 1 && raw.targetLevel <= 20)
        ? raw.targetLevel
        : (typeof raw.level === 'number' ? raw.level : 1),
      asiPoints: typeof raw.asiPoints === 'number' ? raw.asiPoints : 0,
      baseScoresApplied: typeof raw.baseScoresApplied === 'boolean' ? raw.baseScoresApplied : true,
      asiBonuses: normalizeAbilityScores(raw.asiBonuses, 0),
      equipmentBudgetGp: typeof raw.equipmentBudgetGp === 'number' ? raw.equipmentBudgetGp : 0,
      equipmentSpentGp: typeof raw.equipmentSpentGp === 'number' ? raw.equipmentSpentGp : 0,
    }

    // Add warnings for optional missing fields
    if (!data.name) warnings.push('WARN_NO_NAME')
    if (!data.background) warnings.push('WARN_NO_BACKGROUND')
    if (data.maxHp <= 0) warnings.push('WARN_NO_HP')

    character.value = data
    return { data, warnings }
  }

  return {
    character,
    savedCharacters,
    abilityModifiers,
    profBonus,
    armorClass,
    initiative,
    passivePerception,
    totalAbilityScore,
    resetCharacter,
    resetBuildAfterLevelChange,
    recomputeBuildDerivedState,
    saveCharacter,
    loadCharacter,
    deleteCharacter,
    levelUp,
    levelUpToTarget,
    spendAsiPoint,
    refundAsiPoint,
    resetEquipmentBudgetForClass,
    exportJson,
    importJson,
  }
}, {
  persist: {
    pick: ['savedCharacters'],
  },
})
