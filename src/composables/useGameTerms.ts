import { useI18n } from 'vue-i18n'
import { translateGameDescription, translateGameTerm, translateRulesText } from '@/i18n/gameTerms'
import type { GameTermCategory } from '@/i18n/gameTerms'

/**
 * Composable that provides translation functions for game terms
 * (weapons, armor, spells, classes, races, etc.) based on current locale.
 */
export function useGameTerms() {
  const { locale } = useI18n()

  function translate(name: string, category: GameTermCategory, variant?: string): string {
    return translateGameTerm(name, locale.value, category, variant)
  }

  function weapon(name: string): string {
    return translate(name, 'weapon')
  }

  function armorName(name: string): string {
    return translate(name, 'armor')
  }

  function spell(name: string): string {
    return translate(name, 'spell')
  }

  function school(name: string): string {
    return translate(name, 'school')
  }

  function damageType(name: string): string {
    return translate(name, 'damageType')
  }

  function pack(name: string): string {
    return translate(name, 'pack')
  }

  function background(name: string): string {
    return translate(name, 'background')
  }

  /**
   * Translate a class name. For variant-specific names (Brancalonia/Apocalisse),
   * pass the variant to get the correct Italian name.
   * Accepts both English names ("Barbarian") and class IDs ("barbarian").
   * @param name - English class name or class ID
   * @param variant - Game variant for variant-specific overrides
   */
  function className(name: string, variant?: string): string {
    return translate(name, 'class', variant)
  }

  /**
   * Translate a race name.
   * @param name - English race name (e.g., "Dwarf", "Gifted")
   */
  function raceName(name: string): string {
    return translate(name, 'race')
  }

  /**
   * Translate a subrace name.
   * @param name - English subrace name (e.g., "Hill Dwarf", "Child of the Old World")
   */
  function subraceName(name: string): string {
    return translate(name, 'subrace')
  }

  /**
   * Translate a skill name.
   * @param name - English skill name (e.g., "Acrobatics", "Stealth")
   */
  function skill(name: string): string {
    return translate(name, 'skill')
  }

  /**
   * Translate an armor/weapon proficiency label.
   * @param name - English proficiency label (e.g., "light", "martial", "shields")
   */
  function proficiency(name: string): string {
    return translate(name, 'proficiency')
  }

  /**
   * Translate a class feature name.
   * @param name - English feature name (e.g., "Rage", "Sneak Attack")
   */
  function feature(name: string): string {
    return translate(name, 'feature')
  }

  /**
   * Translate a racial trait to Italian.
   * Accepts kebab-case IDs (D&D 5e/Brancalonia) or full sentences (Apocalisse).
   * @param name - Trait string exactly as defined in race data
   */
  function trait(name: string): string {
    return translate(name, 'trait')
  }

  /**
   * Translate a language name.
   * @param name - English language name (e.g., "Common", "Elvish")
   */
  function language(name: string): string {
    return translate(name, 'language')
  }

  /**
   * Translate a subclass name.
   * @param name - Subclass ID (e.g., "berserker", "school-of-evocation")
   */
  function subclassName(name: string): string {
    return translate(name, 'subclass')
  }

  /**
   * Translate an equipment item name.
   * @param name - Equipment item string (e.g., "Longsword", "Explorer's Pack")
   */
  function equipment(name: string): string {
    return translate(name, 'equipment')
  }

  function ability(name: string): string {
    return translate(name, 'ability')
  }

  function casterType(name: string): string {
    return translate(name, 'casterType')
  }

  function size(name: string): string {
    return translate(name, 'size')
  }

  function classFeatureDescription(name: string, fallback: string): string {
    return translateGameDescription(name, fallback, locale.value, 'classFeature')
  }

  function backgroundFeatureDescription(name: string, fallback: string): string {
    return translateGameDescription(name, fallback, locale.value, 'backgroundFeature')
  }

  function spellDescription(name: string, fallback: string): string {
    return translateGameDescription(name, fallback, locale.value, 'spell')
  }

  function rulesText(text: string): string {
    return translateRulesText(text, locale.value)
  }

  return {
    weapon,
    armorName,
    spell,
    school,
    damageType,
    pack,
    background,
    className,
    raceName,
    subraceName,
    skill,
    proficiency,
    feature,
    trait,
    language,
    subclassName,
    equipment,
    ability,
    casterType,
    size,
    classFeatureDescription,
    backgroundFeatureDescription,
    spellDescription,
    rulesText,
  }
}
