<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import { getClasses, getSpells, getSpellSlots, getCantripsKnown, getSpellsKnownCount } from '@/data'
import { useGameTerms } from '@/composables/useGameTerms'
import type { Spell } from '@/data/dnd5e/spells'
import { isPreparedCaster, isWizard, maxSpellLevel, shouldUseSpellcasting, wizardSpellbookRequired } from '@/utils/characterValidation'
import VariantPromo from '@/components/shared/VariantPromo.vue'

const { t } = useI18n()
const characterStore = useCharacterStore()
const gt = useGameTerms()

const allSpells = computed(() => getSpells(characterStore.character.variant))
const allClasses = computed(() => getClasses(characterStore.character.variant))
const currentClass = computed(() => allClasses.value.find(cls => cls.id === characterStore.character.className))

const isCaster = computed(() => shouldUseSpellcasting(characterStore.character))
const isWizardCaster = computed(() => isWizard(characterStore.character))
const isPrepared = computed(() => isPreparedCaster(characterStore.character))

const spellSlots = computed(() => getSpellSlots(characterStore.character.className, characterStore.character.level))
const maxCantrips = computed(() => getCantripsKnown(characterStore.character.className, characterStore.character.level))
const maxPrepared = computed(() => {
  return getSpellsKnownCount(characterStore.character.className, characterStore.character.level, characterStore.abilityModifiers)
})
const maxKnown = computed(() => {
  return isPrepared.value
    ? 0
    : getSpellsKnownCount(characterStore.character.className, characterStore.character.level, characterStore.abilityModifiers)
})
const maxSpellbook = computed(() => wizardSpellbookRequired(characterStore.character.level))
const highestSpellLevel = computed(() => maxSpellLevel(characterStore.character.className, characterStore.character.level))

const searchQuery = ref('')
const filterLevel = ref<number | null>(null)

const availableSpells = computed(() => {
  const classId = characterStore.character.className
  return allSpells.value.filter(spell => {
    if (!spell.classes.includes(classId)) return false
    if (spell.level > highestSpellLevel.value) return false
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase()
      if (!spell.name.toLowerCase().includes(q) && !gt.spell(spell.name).toLowerCase().includes(q)) return false
    }
    if (filterLevel.value !== null && spell.level !== filterLevel.value) return false
    return true
  })
})

const cantrips = computed(() => availableSpells.value.filter(s => s.level === 0))
const leveledSpells = computed(() => availableSpells.value.filter(s => s.level > 0))
const wizardPreparedOptions = computed(() => {
  const spellbook = new Set(characterStore.character.spellsKnown)
  return leveledSpells.value.filter(spell => spellbook.has(spell.id))
})

const selectedSpellDetail = ref<Spell | null>(null)

watch(
  () => [characterStore.character.className, characterStore.character.level, characterStore.character.subclass],
  () => {
    if (!isCaster.value) {
      characterStore.character.spellcastingClass = ''
      characterStore.character.spellcastingAbility = ''
      characterStore.character.cantrips = []
      characterStore.character.spellsKnown = []
      characterStore.character.spellsPrepared = []
      return
    }
    if (currentClass.value?.spellcasting) {
      characterStore.character.spellcastingClass = currentClass.value.id
      characterStore.character.spellcastingAbility = currentClass.value.spellcasting.ability
    }
    trimInvalidSpellSelections()
  },
  { immediate: true },
)

function trimInvalidSpellSelections() {
  const validIds = new Set(availableSpells.value.map(spell => spell.id))
  characterStore.character.cantrips = characterStore.character.cantrips.filter(id => validIds.has(id))
  characterStore.character.spellsKnown = characterStore.character.spellsKnown.filter(id => validIds.has(id))
  characterStore.character.spellsPrepared = characterStore.character.spellsPrepared.filter(id => validIds.has(id))
  if (isWizardCaster.value) {
    const spellbook = new Set(characterStore.character.spellsKnown)
    characterStore.character.spellsPrepared = characterStore.character.spellsPrepared.filter(id => spellbook.has(id))
  } else if (isPrepared.value) {
    characterStore.character.spellsKnown = []
  } else {
    characterStore.character.spellsPrepared = []
  }
}

function toggleCantrip(spellId: string) {
  const idx = characterStore.character.cantrips.indexOf(spellId)
  if (idx >= 0) {
    characterStore.character.cantrips.splice(idx, 1)
  } else if (characterStore.character.cantrips.length < maxCantrips.value) {
    characterStore.character.cantrips.push(spellId)
  }
}

function toggleKnownSpell(spellId: string) {
  const idx = characterStore.character.spellsKnown.indexOf(spellId)
  if (idx >= 0) {
    characterStore.character.spellsKnown.splice(idx, 1)
    characterStore.character.spellsPrepared = characterStore.character.spellsPrepared.filter(id => id !== spellId)
  } else if (characterStore.character.spellsKnown.length < maxKnown.value) {
    characterStore.character.spellsKnown.push(spellId)
  }
}

function toggleSpellbookSpell(spellId: string) {
  const idx = characterStore.character.spellsKnown.indexOf(spellId)
  if (idx >= 0) {
    characterStore.character.spellsKnown.splice(idx, 1)
    characterStore.character.spellsPrepared = characterStore.character.spellsPrepared.filter(id => id !== spellId)
  } else if (characterStore.character.spellsKnown.length < maxSpellbook.value) {
    characterStore.character.spellsKnown.push(spellId)
  }
}

function togglePreparedSpell(spellId: string) {
  const idx = characterStore.character.spellsPrepared.indexOf(spellId)
  if (idx >= 0) {
    characterStore.character.spellsPrepared.splice(idx, 1)
  } else if (characterStore.character.spellsPrepared.length < maxPrepared.value) {
    characterStore.character.spellsPrepared.push(spellId)
  }
}

function showDetail(spell: Spell) {
  selectedSpellDetail.value = spell
}

function spellLevelLabel(level: string | number): string {
  return t('spells.levelShort', { level })
}

function spellSlotCount(count: number): string {
  return t('spells.slotCount', { count })
}

function spellSummaryMeta(spell: Spell): string {
  return `${spellLevelLabel(spell.level)} - ${gt.school(spell.school)}`
}
</script>

<template>
  <section aria-labelledby="spells-heading">
    <h2 id="spells-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('spells.title') }}</h2>

    <div v-if="!isCaster" class="text-center py-12 text-stone-500" role="status">
      <p class="text-lg">{{ t('spells.notACaster') }}</p>
      <p class="text-sm mt-2">{{ t('spells.pressNext') }}</p>
    </div>

    <template v-else>
      <!-- Spell Slots Summary -->
      <div class="bg-stone-800 border border-stone-700 rounded-lg p-4 mb-6" role="region" :aria-label="t('spells.spellSlots')">
        <div class="flex flex-wrap gap-4 text-sm">
          <div v-if="characterStore.character.spellcastingAbility">
            <span class="text-stone-400">{{ t('spells.spellcastingAbility') }}:</span>
            <span class="text-amber-400 font-medium ml-1">{{ gt.ability(characterStore.character.spellcastingAbility) }}</span>
          </div>
          <div>
            <span class="text-stone-400">{{ t('spells.maxSpellLevel') }}:</span>
            <span class="text-amber-400 font-medium ml-1">{{ highestSpellLevel }}</span>
          </div>
          <div v-for="(slots, level) in spellSlots" :key="level">
            <span class="text-stone-400">{{ spellLevelLabel(level) }}:</span>
            <span class="text-amber-400 font-medium ml-1">{{ spellSlotCount(slots) }}</span>
          </div>
        </div>
      </div>

      <!-- Search & Filter -->
      <div class="flex gap-3 mb-4">
        <label for="spell-search" class="sr-only">{{ t('common.search') }}</label>
        <input id="spell-search" v-model="searchQuery" :placeholder="t('common.search')"
          class="flex-1 bg-stone-700 text-stone-200 rounded px-3 py-2 text-sm" />
        <label for="spell-level-filter" class="sr-only">{{ t('spells.allLevels') }}</label>
        <select id="spell-level-filter" v-model="filterLevel" class="bg-stone-700 text-stone-200 rounded px-3 py-2 text-sm" :aria-label="t('spells.allLevels')">
          <option :value="null">{{ t('spells.allLevels') }}</option>
          <option :value="0">{{ t('spells.cantrips') }}</option>
          <option v-for="l in highestSpellLevel" :key="l" :value="l">{{ t('spells.level', { level: l }) }}</option>
        </select>
      </div>

      <!-- Cantrips -->
      <div class="mb-6">
        <h3 id="cantrips-heading" class="text-lg font-semibold text-stone-300 mb-2">
          {{ t('spells.cantrips') }}
          <span class="text-sm text-stone-500" aria-live="polite">({{ characterStore.character.cantrips.length }}/{{ maxCantrips }})</span>
        </h3>
        <div class="flex flex-wrap gap-2" role="group" :aria-label="t('spells.cantrips')">
          <button
            v-for="spell in cantrips"
            :key="spell.id"
            @click="toggleCantrip(spell.id)"
            @contextmenu.prevent="showDetail(spell)"
            class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
            :class="characterStore.character.cantrips.includes(spell.id)
              ? 'bg-amber-600 text-stone-900 font-medium'
              : characterStore.character.cantrips.length >= maxCantrips
                ? 'bg-stone-800 text-stone-600'
                : 'bg-stone-700 text-stone-300 hover:bg-stone-600'"
            :title="gt.spellDescription(spell.name, spell.description)"
            :aria-pressed="characterStore.character.cantrips.includes(spell.id)"
            :aria-disabled="!characterStore.character.cantrips.includes(spell.id) && characterStore.character.cantrips.length >= maxCantrips"
          >
            {{ gt.spell(spell.name) }}
          </button>
        </div>
      </div>

      <!-- Wizard Spellbook -->
      <div v-if="isWizardCaster" class="mb-6">
        <h3 id="spellbook-heading" class="text-lg font-semibold text-stone-300 mb-2">
          {{ t('spells.spellbook') }}
          <span class="text-sm text-stone-500" aria-live="polite">({{ characterStore.character.spellsKnown.length }}/{{ maxSpellbook }})</span>
        </h3>
        <div class="space-y-1" role="group" :aria-label="t('spells.spellbook')">
          <button
            v-for="spell in leveledSpells"
            :key="spell.id"
            @click="toggleSpellbookSpell(spell.id)"
            @contextmenu.prevent="showDetail(spell)"
            class="w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer flex items-center justify-between"
            :class="characterStore.character.spellsKnown.includes(spell.id)
              ? 'bg-amber-600/20 border border-amber-600 text-stone-200'
              : characterStore.character.spellsKnown.length >= maxSpellbook
                ? 'bg-stone-800 text-stone-600'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'"
            :aria-pressed="characterStore.character.spellsKnown.includes(spell.id)"
          >
            <span>
              <span class="font-medium">{{ gt.spell(spell.name) }}</span>
              <span class="text-stone-500 ml-2">{{ spellSummaryMeta(spell) }}</span>
            </span>
            <span class="text-xs text-stone-500">{{ gt.rulesText(spell.castingTime) }}</span>
          </button>
        </div>
      </div>

      <!-- Prepared Spells -->
      <div v-if="isPrepared" class="mb-6">
        <h3 id="prepared-spells-heading" class="text-lg font-semibold text-stone-300 mb-2">
          {{ t('spells.preparedSpells') }}
          <span class="text-sm text-stone-500" aria-live="polite">({{ characterStore.character.spellsPrepared.length }}/{{ maxPrepared }})</span>
        </h3>
        <div class="space-y-1" role="group" :aria-label="t('spells.preparedSpells')">
          <button
            v-for="spell in (isWizardCaster ? wizardPreparedOptions : leveledSpells)"
            :key="spell.id"
            @click="togglePreparedSpell(spell.id)"
            @contextmenu.prevent="showDetail(spell)"
            class="w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer flex items-center justify-between"
            :class="characterStore.character.spellsPrepared.includes(spell.id)
              ? 'bg-amber-600/20 border border-amber-600 text-stone-200'
              : characterStore.character.spellsPrepared.length >= maxPrepared
                ? 'bg-stone-800 text-stone-600'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'"
            :aria-pressed="characterStore.character.spellsPrepared.includes(spell.id)"
          >
            <span>
              <span class="font-medium">{{ gt.spell(spell.name) }}</span>
              <span class="text-stone-500 ml-2">{{ spellSummaryMeta(spell) }}</span>
            </span>
            <span class="text-xs text-stone-500">{{ gt.rulesText(spell.castingTime) }}</span>
          </button>
        </div>
      </div>

      <!-- Known Spells -->
      <div v-if="!isPrepared">
        <h3 id="spells-known-heading" class="text-lg font-semibold text-stone-300 mb-2">
          {{ t('spells.knownSpells') }}
          <span class="text-sm text-stone-500" aria-live="polite">({{ characterStore.character.spellsKnown.length }}/{{ maxKnown }})</span>
        </h3>
        <div class="space-y-1" role="group" :aria-label="t('spells.knownSpells')">
          <button
            v-for="spell in leveledSpells"
            :key="spell.id"
            @click="toggleKnownSpell(spell.id)"
            @contextmenu.prevent="showDetail(spell)"
            class="w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer flex items-center justify-between"
            :class="characterStore.character.spellsKnown.includes(spell.id)
              ? 'bg-amber-600/20 border border-amber-600 text-stone-200'
              : characterStore.character.spellsKnown.length >= maxKnown
                ? 'bg-stone-800 text-stone-600'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'"
            :aria-pressed="characterStore.character.spellsKnown.includes(spell.id)"
          >
            <span>
              <span class="font-medium">{{ gt.spell(spell.name) }}</span>
              <span class="text-stone-500 ml-2">{{ spellSummaryMeta(spell) }}</span>
            </span>
            <span class="text-xs text-stone-500">{{ gt.rulesText(spell.castingTime) }}</span>
          </button>
        </div>
      </div>

      <!-- Spell Detail Modal -->
      <div v-if="selectedSpellDetail" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        @click.self="selectedSpellDetail = null" role="dialog" aria-modal="true" :aria-label="gt.spell(selectedSpellDetail.name)">
        <div class="bg-stone-800 border border-stone-600 rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-lg font-bold text-amber-400">{{ gt.spell(selectedSpellDetail.name) }}</h3>
            <button @click="selectedSpellDetail = null" class="text-stone-500 hover:text-stone-300 cursor-pointer" :aria-label="t('common.cancel')">&times;</button>
          </div>
          <div class="space-y-2 text-sm text-stone-400">
            <p><strong>{{ t('spells.level') }}:</strong> {{ selectedSpellDetail.level === 0 ? t('spells.cantrips') : spellLevelLabel(selectedSpellDetail.level) }}</p>
            <p><strong>{{ t('spells.school') }}:</strong> {{ gt.school(selectedSpellDetail.school) }}</p>
            <p><strong>{{ t('spells.castingTime') }}:</strong> {{ gt.rulesText(selectedSpellDetail.castingTime) }}</p>
            <p><strong>{{ t('spells.range') }}:</strong> {{ gt.rulesText(selectedSpellDetail.range) }}</p>
            <p><strong>{{ t('spells.components') }}:</strong> {{ selectedSpellDetail.components }}</p>
            <p><strong>{{ t('spells.duration') }}:</strong> {{ gt.rulesText(selectedSpellDetail.duration) }}</p>
            <p class="mt-3">{{ gt.spellDescription(selectedSpellDetail.name, selectedSpellDetail.description) }}</p>
          </div>
        </div>
      </div>
    </template>

    <VariantPromo :variant="characterStore.character.variant" />
  </section>
</template>
