export type StartingWealthDice = {
  count: number
  sides: number
}

export const STARTING_WEALTH_DICE: Record<string, StartingWealthDice> = {
  barbarian: { count: 2, sides: 4 },
  bard: { count: 5, sides: 4 },
  cleric: { count: 5, sides: 4 },
  druid: { count: 2, sides: 4 },
  fighter: { count: 5, sides: 4 },
  monk: { count: 5, sides: 4 },
  paladin: { count: 5, sides: 4 },
  ranger: { count: 5, sides: 4 },
  rogue: { count: 4, sides: 4 },
  sorcerer: { count: 3, sides: 4 },
  warlock: { count: 4, sides: 4 },
  wizard: { count: 4, sides: 4 },
}

export const EQUIPMENT_PRICES_GP: Record<string, number> = {
  club: 0.1,
  dagger: 2,
  greatclub: 0.2,
  handaxe: 5,
  javelin: 0.5,
  'light hammer': 2,
  mace: 5,
  quarterstaff: 0.2,
  sickle: 1,
  spear: 1,
  'light crossbow': 25,
  dart: 0.05,
  shortbow: 25,
  sling: 0.1,
  battleaxe: 10,
  flail: 10,
  glaive: 20,
  greataxe: 30,
  greatsword: 50,
  halberd: 20,
  lance: 10,
  longsword: 15,
  maul: 10,
  morningstar: 15,
  pike: 5,
  rapier: 25,
  scimitar: 25,
  shortsword: 10,
  trident: 5,
  'war pick': 5,
  warhammer: 15,
  whip: 2,
  'hand crossbow': 75,
  'heavy crossbow': 50,
  longbow: 50,
  padded: 5,
  leather: 10,
  'studded leather': 45,
  hide: 10,
  'chain shirt': 50,
  'scale mail': 50,
  breastplate: 400,
  'half plate': 750,
  'ring mail': 30,
  'chain mail': 75,
  splint: 200,
  plate: 1500,
  shield: 10,
  "burglar's pack": 16,
  "diplomat's pack": 39,
  "dungeoneer's pack": 12,
  "entertainer's pack": 40,
  "explorer's pack": 10,
  "priest's pack": 19,
  "scholar's pack": 40,
}

export function normalizeEquipmentName(name: string): string {
  return String(name || "")
    .trim()
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
}

export function equipmentPriceGp(name: string): number | null {
  const key = normalizeEquipmentName(name)
  return Object.prototype.hasOwnProperty.call(EQUIPMENT_PRICES_GP, key)
    ? EQUIPMENT_PRICES_GP[key]!
    : null
}

export function averageStartingGold(classId: string): number {
  const dice = STARTING_WEALTH_DICE[classId]
  if (!dice) return 0
  return Math.floor(dice.count * ((dice.sides + 1) / 2) * 10)
}
