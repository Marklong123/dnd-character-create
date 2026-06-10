import { armor as armorTable } from '@/data/dnd5e/equipment'

type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

interface AbilityMap {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

interface ArmorClassCharacter {
  className: string
  armor?: string
  shield?: boolean
  abilityScores: AbilityMap
  racialBonuses?: Partial<AbilityMap>
  asiBonuses?: Partial<AbilityMap>
}

interface ArmorClassOptions {
  className: string
  armorName?: string
  shield?: boolean
  dexMod: number
  conMod?: number
  wisMod?: number
}

function abilityTotal(character: ArmorClassCharacter, ability: AbilityKey): number {
  return character.abilityScores[ability]
    + (character.racialBonuses?.[ability] || 0)
    + (character.asiBonuses?.[ability] || 0)
}

function abilityModifier(character: ArmorClassCharacter, ability: AbilityKey): number {
  return Math.floor((abilityTotal(character, ability) - 10) / 2)
}

export function calculateArmorClass({
  className,
  armorName = '',
  shield = false,
  dexMod,
  conMod = 0,
  wisMod = 0,
}: ArmorClassOptions): number {
  const equippedArmor = armorName
    ? armorTable.find(armor => armor.name === armorName && armor.type !== 'shield')
    : undefined

  let ac: number
  if (equippedArmor) {
    if (equippedArmor.type === 'heavy') {
      ac = equippedArmor.baseAC
    } else if (equippedArmor.type === 'medium') {
      ac = equippedArmor.baseAC + Math.min(dexMod, equippedArmor.maxDexBonus ?? dexMod)
    } else {
      ac = equippedArmor.baseAC + dexMod
    }
  } else if (className === 'barbarian') {
    ac = 10 + dexMod + conMod
  } else if (className === 'monk' && !shield) {
    ac = 10 + dexMod + wisMod
  } else {
    ac = 10 + dexMod
  }

  return ac + (shield ? 2 : 0)
}

export function calculateCharacterArmorClass(character: ArmorClassCharacter): number {
  return calculateArmorClass({
    className: character.className,
    armorName: character.armor || '',
    shield: character.shield || false,
    dexMod: abilityModifier(character, 'dex'),
    conMod: abilityModifier(character, 'con'),
    wisMod: abilityModifier(character, 'wis'),
  })
}
