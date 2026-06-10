<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import { getBackgrounds } from '@/data'
import type { Background } from '@/data/dnd5e/backgrounds'
import { SKILLS } from '@/data/dnd5e/skills'
import { useGameTerms } from '@/composables/useGameTerms'
import { pickRoleplayValue, type RoleplayPreset } from '@/data/dnd5e/roleplayPresets'

const { t, locale } = useI18n()
const characterStore = useCharacterStore()
const gt = useGameTerms()

/** Translate a background name. Uses nameOriginal for variant backgrounds, gameTerms for D&D 5e. */
function bgDisplayName(bg: Background): string {
  if ((bg as any).nameOriginal) return (bg as any).nameOriginal
  return gt.background(bg.name)
}

function skillDisplayName(skillId: string): string {
  const skill = SKILLS.find(s => s.id === skillId)
  return skill ? gt.skill(skill.name) : skillId
}

const backgrounds = computed(() => getBackgrounds(characterStore.character.variant))
const selectedBg = ref<Background | null>(null)

function selectBackground(bg: Background) {
  selectedBg.value = bg
  characterStore.character.background = bg.id
  // Add background skill proficiencies (don't duplicate)
  for (const skill of bg.skillProficiencies) {
    if (!characterStore.character.skillProficiencies.includes(skill)) {
      characterStore.character.skillProficiencies.push(skill)
    }
  }
}

function randomizeRoleplayField(field: keyof RoleplayPreset) {
  characterStore.character[field] = pickRoleplayValue(field, locale.value)
}

function randomizeAllRoleplayFields() {
  randomizeRoleplayField('personalityTraits')
  randomizeRoleplayField('ideals')
  randomizeRoleplayField('flaws')
}
</script>

<template>
  <section aria-labelledby="background-heading">
    <h2 id="background-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('background.title') }}</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="radiogroup" :aria-label="t('background.title')">
      <button
        v-for="bg in backgrounds"
        :key="bg.id"
        @click="selectBackground(bg)"
        class="bg-stone-800 border-2 rounded-lg p-4 text-left transition-all cursor-pointer"
        :class="characterStore.character.background === bg.id ? 'border-amber-500' : 'border-stone-700 hover:border-stone-600'"
        role="radio"
        :aria-checked="characterStore.character.background === bg.id"
        :aria-label="bgDisplayName(bg)"
      >
        <h3 class="font-bold text-amber-400">{{ bgDisplayName(bg) }}</h3>
        <p class="text-xs text-stone-500 mt-1">{{ bg.skillProficiencies.map(skillDisplayName).join(', ') }}</p>
      </button>
    </div>

    <!-- Background Details -->
    <div v-if="selectedBg" class="mt-6 bg-stone-800 border border-stone-700 rounded-lg p-6">
      <h3 class="text-xl font-bold text-amber-400 mb-3">{{ bgDisplayName(selectedBg) }}</h3>
      <div class="space-y-3 text-sm">
        <div>
          <h4 class="font-semibold text-stone-300">{{ t('background.skillProficiencies') }}</h4>
          <p class="text-stone-400">{{ selectedBg.skillProficiencies.map(skillDisplayName).join(', ') }}</p>
        </div>
        <div v-if="selectedBg.toolProficiencies.length">
          <h4 class="font-semibold text-stone-300">{{ t('equipment.tools') }}</h4>
          <p class="text-stone-400">{{ selectedBg.toolProficiencies.map(tool => gt.proficiency(tool)).join(', ') }}</p>
        </div>
        <div v-if="selectedBg.languages > 0">
          <h4 class="font-semibold text-stone-300">{{ t('race.languages') }}</h4>
          <p class="text-stone-400">{{ selectedBg.languages }} {{ t('background.languageChoices') }}</p>
        </div>
        <div>
          <h4 class="font-semibold text-stone-300">{{ gt.feature(selectedBg.feature.name) }}</h4>
          <p class="text-stone-400">{{ gt.backgroundFeatureDescription(selectedBg.feature.name, selectedBg.feature.description) }}</p>
        </div>
      </div>
    </div>

    <div class="mt-6 bg-stone-800 border border-stone-700 rounded-lg p-6">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <h3 class="text-lg font-bold text-amber-400">{{ t('background.roleplayDetails') }}</h3>
          <p class="text-sm text-stone-500 mt-1">{{ t('background.roleplayHint') }}</p>
        </div>
        <button
          type="button"
          class="px-3 py-2 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 border border-stone-600 text-sm transition-colors cursor-pointer"
          @click="randomizeAllRoleplayFields"
        >{{ t('background.randomAll') }}</button>
      </div>

      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between gap-3 mb-1">
            <label for="personality-traits" class="block text-sm font-semibold text-stone-300">{{ t('background.personalityTraits') }}</label>
            <button
              type="button"
              class="text-xs px-2 py-1 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 border border-stone-600 cursor-pointer"
              @click="randomizeRoleplayField('personalityTraits')"
            >{{ t('background.random') }}</button>
          </div>
          <textarea id="personality-traits" v-model="characterStore.character.personalityTraits" rows="2"
            class="w-full bg-stone-900/60 border border-stone-700 rounded-lg p-3 text-stone-200 text-sm focus:border-amber-500 focus:outline-none" />
        </div>
        <div>
          <div class="flex items-center justify-between gap-3 mb-1">
            <label for="ideals" class="block text-sm font-semibold text-stone-300">{{ t('background.ideals') }}</label>
            <button
              type="button"
              class="text-xs px-2 py-1 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 border border-stone-600 cursor-pointer"
              @click="randomizeRoleplayField('ideals')"
            >{{ t('background.random') }}</button>
          </div>
          <textarea id="ideals" v-model="characterStore.character.ideals" rows="2"
            class="w-full bg-stone-900/60 border border-stone-700 rounded-lg p-3 text-stone-200 text-sm focus:border-amber-500 focus:outline-none" />
        </div>
        <div>
          <div class="flex items-center justify-between gap-3 mb-1">
            <label for="flaws" class="block text-sm font-semibold text-stone-300">{{ t('background.flaws') }}</label>
            <button
              type="button"
              class="text-xs px-2 py-1 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 border border-stone-600 cursor-pointer"
              @click="randomizeRoleplayField('flaws')"
            >{{ t('background.random') }}</button>
          </div>
          <textarea id="flaws" v-model="characterStore.character.flaws" rows="2"
            class="w-full bg-stone-900/60 border border-stone-700 rounded-lg p-3 text-stone-200 text-sm focus:border-amber-500 focus:outline-none" />
        </div>
      </div>
    </div>
  </section>
</template>
