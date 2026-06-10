<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useCharacterStore } from '@/stores/character'
import { useAppStore } from '@/stores/app'
import { ensureStepData } from '@/data'
import { useGameTerms } from '@/composables/useGameTerms'

const { t } = useI18n()
const router = useRouter()
const characterStore = useCharacterStore()
const appStore = useAppStore()
const gt = useGameTerms()

const dndCharacters = computed(() =>
  characterStore.savedCharacters.filter(char => (char.variant || 'dnd5e') === 'dnd5e'),
)

async function startNew() {
  characterStore.resetCharacter()
  characterStore.character.variant = 'dnd5e'
  await ensureStepData('dnd5e', 1)
  appStore.setStep(0)
  router.push('/builder')
}
</script>

<template>
  <section class="flex flex-col items-center py-8" aria-labelledby="home-heading">
    <div class="text-center max-w-3xl mb-8">
      <h2 id="home-heading" class="text-4xl font-bold text-amber-500 mb-3 font-gothic">{{ t('home.welcome') }}</h2>
      <p class="text-stone-400 text-base leading-relaxed">{{ t('home.description') }}</p>
    </div>

    <article class="w-full max-w-3xl bg-stone-800 rounded-xl border border-amber-600/40 p-6 flex flex-col items-center gap-4">
      <div class="text-4xl" aria-hidden="true">D20</div>
      <h3 class="text-xl font-bold text-stone-100 font-gothic">{{ t('variant.dnd5e') }}</h3>
      <p class="text-sm text-stone-400 text-center leading-relaxed">{{ t('variant.dnd5eDesc') }}</p>

      <div class="w-full mt-2">
        <button
          @click="startNew"
          class="w-full px-4 py-2.5 font-semibold rounded-lg transition-colors cursor-pointer text-sm bg-amber-600 hover:bg-amber-500 text-stone-900"
        >
          {{ t('home.newFrom') }}
        </button>
      </div>
    </article>

    <section
      v-if="dndCharacters.length > 0"
      class="mt-12 w-full max-w-3xl"
      aria-labelledby="saved-heading"
    >
      <h3 id="saved-heading" class="text-xl font-semibold text-stone-300 mb-4 font-gothic">{{ t('home.savedCharacters') }}</h3>
      <ul class="space-y-2" role="list">
        <li
          v-for="char in dndCharacters"
          :key="char.id"
        >
          <button
            class="w-full bg-stone-800 rounded-lg p-4 flex items-center justify-between border border-stone-700 hover:border-amber-700/50 transition-colors cursor-pointer text-left"
            @click="characterStore.loadCharacter(char.id); appStore.setStep(7); $router.push('/builder')"
            :aria-label="`${char.name || t('common.unnamed')} - ${char.race} ${char.className} Lv.${char.level}`"
          >
            <div>
              <span class="font-medium text-amber-400">{{ char.name || t('common.unnamed') }}</span>
              <span class="text-stone-500 ml-2">
                {{ gt.raceName(char.race) }} {{ gt.className(char.className, 'dnd5e') }} Lv.{{ char.level }}
              </span>
            </div>
            <span class="text-xs uppercase px-2 py-0.5 rounded bg-amber-900/40 text-amber-400">dnd5e</span>
          </button>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
