<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useCharacterStore } from '@/stores/character'
import { useAppStore } from '@/stores/app'
import { useGameTerms } from '@/composables/useGameTerms'
import { getMaxLevel } from '@/data'

const { t } = useI18n()
const router = useRouter()
const characterStore = useCharacterStore()
const appStore = useAppStore()
const gt = useGameTerms()

const dndCharacters = computed(() =>
  characterStore.savedCharacters.filter(char => (char.variant || 'dnd5e') === 'dnd5e'),
)

const totalCount = computed(() => dndCharacters.value.length)
const levelUpMessage = ref<{ charId: string; text: string } | null>(null)

function editCharacter(id: string) {
  characterStore.loadCharacter(id)
  appStore.setStep(7)
  router.push('/builder')
}

function removeCharacter(id: string) {
  characterStore.deleteCharacter(id)
}

function levelUpCharacter(id: string) {
  characterStore.loadCharacter(id)
  const result = characterStore.levelUp()
  if (!result) {
    levelUpMessage.value = { charId: id, text: t('characters.maxLevel') }
  } else {
    const parts = [`+${result.hpGained} HP`]
    if (result.newFeatures.length > 0) {
      parts.push(result.newFeatures.join(', '))
    }
    levelUpMessage.value = {
      charId: id,
      text: t('characters.levelUpSuccess', { details: parts.join(' | ') }),
    }
  }
  setTimeout(() => { levelUpMessage.value = null }, 5000)
}

function downloadJson(id: string) {
  const char = characterStore.savedCharacters.find(c => c.id === id)
  if (!char) return
  const json = JSON.stringify(char, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${char.name || 'character'}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="max-w-3xl mx-auto py-8">
    <h2 class="text-2xl font-bold text-amber-500 mb-2 font-gothic">{{ t('nav.characters') }}</h2>

    <div class="bg-stone-800/60 border border-stone-700 rounded-lg p-4 mb-6 flex items-start gap-3">
      <span class="text-xl shrink-0" aria-hidden="true">JSON</span>
      <div class="text-sm text-stone-400">
        <p>{{ t('characters.storageWarning') }}</p>
        <p class="mt-1 text-stone-500">{{ t('characters.backupAdvice') }}</p>
      </div>
    </div>

    <div v-if="totalCount === 0" class="text-center py-12 text-stone-500">
      <p class="text-lg">{{ t('characters.noCharacters') }}</p>
      <router-link to="/" class="text-amber-500 hover:text-amber-400 mt-4 inline-block">
        {{ t('characters.createFirst') }}
      </router-link>
    </div>

    <ul v-else class="space-y-2" role="list">
      <li
        v-for="char in dndCharacters"
        :key="char.id"
      >
        <div class="bg-stone-800 rounded-lg p-4 border border-amber-600/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex-1 min-w-0">
              <span class="font-medium text-amber-400 text-lg truncate block">
                {{ char.name || t('common.unnamed') }}
              </span>
              <div class="text-stone-400 text-sm mt-1">
                {{ gt.raceName(char.race) }} {{ gt.className(char.className, 'dnd5e') }} Lv.{{ char.level }}
              </div>
            </div>
            <div class="flex gap-2 shrink-0">
              <button
                @click="editCharacter(char.id)"
                class="px-3 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer bg-amber-600 hover:bg-amber-500 text-stone-900"
                :aria-label="t('characters.editLabel', { name: char.name || t('common.unnamed') })"
              >{{ t('characters.edit') }}</button>
              <button
                v-if="char.level < getMaxLevel('dnd5e')"
                @click="levelUpCharacter(char.id)"
                class="px-3 py-1.5 bg-purple-700 hover:bg-purple-600 text-purple-100 rounded text-sm font-medium transition-colors cursor-pointer"
                :aria-label="t('characters.levelUpLabel', { name: char.name || t('common.unnamed') })"
              >{{ t('characters.levelUp') }}</button>
              <button
                @click="downloadJson(char.id)"
                class="px-3 py-1.5 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded text-sm transition-colors cursor-pointer"
                :aria-label="t('characters.exportLabel', { name: char.name || t('common.unnamed') })"
              >JSON</button>
              <button
                @click="removeCharacter(char.id)"
                class="px-3 py-1.5 bg-red-900/60 hover:bg-red-800 text-red-300 rounded text-sm transition-colors cursor-pointer"
                :aria-label="t('characters.deleteLabel', { name: char.name || t('common.unnamed') })"
              >{{ t('common.remove') }}</button>
            </div>
          </div>
          <div
            v-if="levelUpMessage && levelUpMessage.charId === char.id"
            class="mt-2 p-2 bg-purple-900/30 border border-purple-700 text-purple-300 rounded text-sm"
            role="status"
            aria-live="polite"
          >
            {{ levelUpMessage.text }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
