<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import { totalHp } from '@/utils/calculations'

const { t } = useI18n()
const characterStore = useCharacterStore()

const alignments = [
  'lg', 'ng', 'cg', 'ln', 'tn', 'cn', 'le', 'ne', 'ce',
]

function updateLevel() {
  const conMod = characterStore.abilityModifiers.con
  characterStore.character.maxHp = totalHp(characterStore.character.hitDie, conMod, characterStore.character.level)
  characterStore.character.currentHp = characterStore.character.maxHp
}

updateLevel()
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
        <label for="player-name" class="block text-sm font-semibold text-stone-300 mb-1">{{ t('details.playerName') }}</label>
        <input id="player-name" v-model="characterStore.character.playerName" type="text"
          class="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-stone-200 focus:border-amber-500 focus:outline-none" />
      </div>

      <div>
        <label for="char-level" class="block text-sm font-semibold text-stone-300 mb-1">{{ t('common.level') }}</label>
        <input id="char-level" v-model.number="characterStore.character.level" type="number" min="1" max="20"
          @change="updateLevel"
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

    <div class="mt-6 bg-stone-800 border border-stone-700 rounded-lg p-4">
      <h3 class="font-semibold text-stone-300 mb-2">{{ t('review.hp') }}</h3>
      <div class="flex gap-6 text-sm">
        <div>
          <span class="text-stone-400">{{ t('review.maxHp') }}:</span>
          <span class="text-amber-400 font-bold ml-1">{{ characterStore.character.maxHp }}</span>
        </div>
        <div>
          <span class="text-stone-400">{{ t('review.hitDie') }}:</span>
          <span class="text-stone-200 ml-1">{{ characterStore.character.level }}d{{ characterStore.character.hitDie }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
