<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'

const { t } = useI18n()
const characterStore = useCharacterStore()

const alignments = [
  'lg', 'ng', 'cg', 'ln', 'tn', 'cn', 'le', 'ne', 'ce',
]

function changeLevel(event: Event) {
  const input = event.target as HTMLInputElement
  const nextLevel = Math.min(Math.max(Number(input.value) || 1, 1), 20)
  input.value = String(nextLevel)
  if (nextLevel !== characterStore.character.level) {
    characterStore.resetBuildAfterLevelChange(nextLevel)
  }
}

</script>

<template>
  <section aria-labelledby="details-heading">
    <h2 id="details-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('details.title') }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="char-name" class="block text-sm font-semibold text-stone-300 mb-1">{{ t('details.name') }}</label>
        <input id="char-name" v-model="characterStore.character.name" type="text"
          class="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-stone-200 focus:border-amber-500 focus:outline-none" />
      </div>

      <div>
        <label for="char-level" class="block text-sm font-semibold text-stone-300 mb-1">{{ t('common.level') }}</label>
        <input id="char-level" :value="characterStore.character.level" type="number" min="1" max="20"
          @input="changeLevel"
          @change="changeLevel"
          class="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-stone-200 focus:border-amber-500 focus:outline-none" />
      </div>

      <div>
        <label for="char-alignment" class="block text-sm font-semibold text-stone-300 mb-1">{{ t('details.alignment') }}</label>
        <select id="char-alignment" v-model="characterStore.character.alignment"
          class="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-stone-200 focus:border-amber-500 focus:outline-none">
          <option value="">--</option>
          <option v-for="a in alignments" :key="a" :value="a">{{ t(`alignments.${a}`) }}</option>
        </select>
      </div>
    </div>

    <p class="mt-6 text-sm text-stone-500">{{ t('details.levelHint') }}</p>
  </section>
</template>
