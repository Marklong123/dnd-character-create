import type { AbilityScores } from '@/stores/character'

export const ABILITY_KEYS: (keyof AbilityScores)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha']

const DEFAULT_ASI_LEVELS = [4, 8, 12, 16, 19]
const EXTRA_ASI_LEVELS_BY_CLASS: Record<string, number[]> = {
  fighter: [6, 14],
  rogue: [10],
}

export function zeroAbilityScores(): AbilityScores {
  return { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }
}

export function getAsiCount(className: string, level: number): number {
  const safeLevel = Math.max(1, Math.floor(Number(level) || 1))
  const levels = [
    ...DEFAULT_ASI_LEVELS,
    ...(EXTRA_ASI_LEVELS_BY_CLASS[className] || []),
  ]
  return levels.filter(asiLevel => safeLevel >= asiLevel).length
}

export function sumAbilityScores(scores: Partial<AbilityScores> | undefined): number {
  if (!scores) return 0
  return ABILITY_KEYS.reduce((total, ability) => total + Math.max(0, Number(scores[ability]) || 0), 0)
}

export function allocateAsiBonuses(
  baseScores: AbilityScores,
  racialBonuses: Partial<AbilityScores>,
  className: string,
  level: number,
  priority: (keyof AbilityScores)[] = [],
): AbilityScores {
  const bonuses = zeroAbilityScores()
  let remaining = getAsiCount(className, level) * 2
  const ordered = [
    ...priority,
    'con',
    'dex',
    'str',
    'wis',
    'cha',
    'int',
  ].filter((ability, index, list): ability is keyof AbilityScores =>
    ABILITY_KEYS.includes(ability as keyof AbilityScores)
    && list.indexOf(ability) === index
  )

  while (remaining > 0) {
    let spentThisPass = false
    for (const ability of ordered) {
      if (remaining <= 0) break
      const total = baseScores[ability] + (racialBonuses[ability] || 0) + bonuses[ability]
      if (total >= 20) continue
      bonuses[ability] += 1
      remaining -= 1
      spentThisPass = true
    }
    if (!spentThisPass) break
  }

  return bonuses
}
