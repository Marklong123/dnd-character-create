<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import { getClasses } from '@/data'
import type { CharacterClass } from '@/data/dnd5e/classes'
import { SKILLS } from '@/data/dnd5e/skills'
import { useGameTerms } from '@/composables/useGameTerms'
import { zeroAbilityScores } from '@/utils/dndRules'
import VariantPromo from '@/components/shared/VariantPromo.vue'

const { t, locale } = useI18n()
const characterStore = useCharacterStore()
const gt = useGameTerms()

const variant = computed(() => characterStore.character.variant)

function skillDisplayName(skillId: string): string {
  const skill = SKILLS.find(s => s.id === skillId)
  return skill ? gt.skill(skill.name) : skillId
}

function subclassDisplayName(subclass: { id: string; name: string }): string {
  const translated = gt.subclassName(subclass.id)
  return translated === subclass.id ? gt.subclassName(subclass.name) : translated
}

function spellcastingDisplay(ability: string, casterType: string): string {
  const translatedAbility = gt.ability(ability)
  const translatedCasterType = gt.casterType(casterType)
  return locale.value.startsWith('zh')
    ? `${translatedAbility}（${translatedCasterType}）`
    : `${translatedAbility} (${translatedCasterType})`
}

const classes = computed(() => getClasses(characterStore.character.variant))
const selectedClass = computed<CharacterClass | null>(() =>
  classes.value.find(cls => cls.id === characterStore.character.className) || null
)
const subclassUnlocked = computed(() =>
  !!selectedClass.value && characterStore.character.level >= selectedClass.value.subclassLevel
)

watch(
  () => [selectedClass.value?.id, selectedClass.value?.subclassLevel, characterStore.character.level] as const,
  () => {
    const cls = selectedClass.value
    if (cls && characterStore.character.level < cls.subclassLevel && characterStore.character.subclass) {
      characterStore.character.subclass = ''
      characterStore.recomputeBuildDerivedState()
    }
  },
  { immediate: true },
)

function selectClass(cls: CharacterClass) {
  characterStore.character.className = cls.id
  characterStore.character.subclass = ''
  characterStore.character.hitDie = cls.hitDie
  characterStore.character.savingThrowProficiencies = [...cls.savingThrows]
  characterStore.character.skillProficiencies = []
  characterStore.character.asiBonuses = zeroAbilityScores()
  characterStore.resetEquipmentBudgetForClass()
  characterStore.recomputeBuildDerivedState()

  // Set spellcasting info
  if (cls.spellcasting && !['fighter', 'rogue'].includes(cls.id)) {
    characterStore.character.spellcastingClass = cls.id
    characterStore.character.spellcastingAbility = cls.spellcasting.ability
  } else {
    characterStore.character.spellcastingClass = ''
    characterStore.character.spellcastingAbility = ''
  }
}

function toggleSkill(skill: string) {
  if (!selectedClass.value) return
  const selectedSkills = characterStore.character.skillProficiencies
  const idx = selectedSkills.indexOf(skill)
  if (idx >= 0) {
    selectedSkills.splice(idx, 1)
  } else if (selectedSkills.length < selectedClass.value.numSkillChoices) {
    selectedSkills.push(skill)
  }
}

function selectSubclass(subclassId: string) {
  if (!selectedClass.value || !subclassUnlocked.value) return
  characterStore.character.subclass = subclassId
  characterStore.recomputeBuildDerivedState()
}
</script>

<template>
  <section aria-labelledby="class-heading">
    <h2 id="class-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('class.title') }}</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="radiogroup" :aria-label="t('class.title')">
      <button
        v-for="cls in classes"
        :key="cls.id"
        @click="selectClass(cls)"
        class="bg-stone-800 border-2 rounded-lg p-3 text-left transition-all cursor-pointer"
        :class="characterStore.character.className === cls.id ? 'border-amber-500' : 'border-stone-700 hover:border-stone-600'"
        role="radio"
        :aria-checked="characterStore.character.className === cls.id"
        :aria-label="gt.className(cls.name, variant)"
      >
        <h3 class="font-bold text-amber-400 text-sm">{{ gt.className(cls.name, variant) }}</h3>
        <p class="text-xs text-stone-500 mt-1">d{{ cls.hitDie }} &bull; {{ cls.primaryAbility.map((a: string) => gt.ability(a)).join(', ') }}</p>
      </button>
    </div>

    <!-- Class Details -->
    <div v-if="selectedClass" class="mt-6 bg-stone-800 border border-stone-700 rounded-lg p-6">
      <h3 class="text-xl font-bold text-amber-400 mb-3">{{ gt.className(selectedClass.name, variant) }}</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 class="font-semibold text-stone-300 mb-1">{{ t('class.hitDie') }}</h4>
          <p class="text-stone-400">d{{ selectedClass.hitDie }}</p>
        </div>
        <div>
          <h4 class="font-semibold text-stone-300 mb-1">{{ t('class.savingThrows') }}</h4>
          <p class="text-stone-400">{{ selectedClass.savingThrows.map(s => gt.ability(s)).join(', ') }}</p>
        </div>
        <div>
          <h4 class="font-semibold text-stone-300 mb-1">{{ t('class.proficiencies') }}</h4>
          <p class="text-stone-400 text-xs">
            {{ selectedClass.armorProficiencies.map(p => gt.proficiency(p)).join(', ') }}<br>
            {{ selectedClass.weaponProficiencies.map(p => gt.proficiency(p)).join(', ') }}
          </p>
        </div>
        <div v-if="selectedClass.spellcasting">
          <h4 class="font-semibold text-stone-300 mb-1">{{ t('spells.spellcastingAbility') }}</h4>
          <p class="text-stone-400">{{ spellcastingDisplay(selectedClass.spellcasting.ability, selectedClass.spellcasting.casterType) }}</p>
        </div>
      </div>

      <!-- Skill Selection -->
      <div class="mt-4">
        <h4 class="font-semibold text-stone-300 mb-2">
          {{ t('class.skillChoices', { count: selectedClass.numSkillChoices }) }}
          <span class="text-stone-500">({{ characterStore.character.skillProficiencies.length }}/{{ selectedClass.numSkillChoices }})</span>
        </h4>
        <div class="flex flex-wrap gap-2" role="group" :aria-label="t('class.skillChoices', { count: selectedClass.numSkillChoices })">
          <button
            v-for="skill in selectedClass.skillChoices"
            :key="skill"
            @click="toggleSkill(skill)"
            class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
            :class="characterStore.character.skillProficiencies.includes(skill)
              ? 'bg-amber-600 text-stone-900 font-medium'
              : characterStore.character.skillProficiencies.length >= selectedClass.numSkillChoices
                ? 'bg-stone-800 text-stone-600 cursor-not-allowed'
                : 'bg-stone-700 text-stone-300 hover:bg-stone-600'"
            :aria-pressed="characterStore.character.skillProficiencies.includes(skill)"
            :aria-disabled="!characterStore.character.skillProficiencies.includes(skill) && characterStore.character.skillProficiencies.length >= selectedClass.numSkillChoices"
          >
            {{ skillDisplayName(skill) }}
          </button>
        </div>
      </div>

      <!-- Subclass Selection -->
      <div v-if="selectedClass.subclasses.length" class="mt-4">
        <h4 class="font-semibold text-stone-300 mb-2">
          {{ gt.feature(selectedClass.subclassName) }}
          <span v-if="subclassUnlocked" class="text-stone-500 text-xs">
            ({{ t('class.requiredFromLevel', { level: selectedClass.subclassLevel }) }})
          </span>
          <span v-else class="text-stone-500 text-xs">
            ({{ t('class.unlocksAtLevel', { level: selectedClass.subclassLevel }) }})
          </span>
        </h4>
        <div class="flex flex-wrap gap-2" role="radiogroup" :aria-label="gt.feature(selectedClass.subclassName)">
          <button
            v-for="subclass in selectedClass.subclasses"
            :key="subclass.id"
            @click="selectSubclass(subclass.id)"
            class="px-3 py-1 rounded text-xs transition-colors"
            :class="characterStore.character.subclass === subclass.id
              ? 'bg-amber-600 text-stone-900 font-medium'
              : subclassUnlocked
                ? 'bg-stone-700 text-stone-300 hover:bg-stone-600 cursor-pointer'
                : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
            :disabled="!subclassUnlocked"
            role="radio"
            :aria-checked="characterStore.character.subclass === subclass.id"
            :aria-disabled="!subclassUnlocked"
          >
            {{ subclassDisplayName(subclass) }}
          </button>
        </div>
      </div>

      <!-- Features -->
      <div v-if="selectedClass.features?.length" class="mt-4">
        <h4 class="font-semibold text-stone-300 mb-2">{{ t('class.features') }}</h4>
        <div class="space-y-2">
          <div v-for="feature in selectedClass.features.filter(f => f.level <= characterStore.character.level)" :key="feature.name" class="text-sm">
            <span class="text-amber-400 font-medium">Lv.{{ feature.level }}:</span>
            <span class="text-stone-400 ml-1">{{ gt.feature(feature.name) }}</span>
            <p v-if="feature.description" class="text-stone-500 text-xs ml-4">{{ gt.classFeatureDescription(feature.name, feature.description) }}</p>
          </div>
        </div>
      </div>
    </div>

    <VariantPromo :variant="characterStore.character.variant" />
  </section>
</template>
