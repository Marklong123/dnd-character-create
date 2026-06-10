<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useCharacterStore } from '@/stores/character'
import { useAppStore } from '@/stores/app'
import { generateRandomCharacter } from '@/utils/randomCharacter'
import { preloadVariantData, ensureStepData } from '@/data'
import { useGameTerms } from '@/composables/useGameTerms'

const { t } = useI18n()
const router = useRouter()
const characterStore = useCharacterStore()
const appStore = useAppStore()
const gt = useGameTerms()

const fileInput = ref<HTMLInputElement | null>(null)
const importMessage = ref<{ type: 'error' | 'warning' | 'success'; text: string } | null>(null)

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

async function randomChar() {
  await preloadVariantData('dnd5e')
  characterStore.character = generateRandomCharacter('dnd5e')
  appStore.setStep(7)
  router.push('/builder')
}

function triggerImport() {
  importMessage.value = null
  fileInput.value?.click()
}

function handleImport(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const result = characterStore.importJson(e.target?.result as string)

      if (result.data.variant !== 'dnd5e') {
        importMessage.value = {
          type: 'error',
          text: t('import.onlyDnd5e'),
        }
        return
      }

      if (result.warnings.length > 0) {
        const warningTexts = result.warnings.map(w => t(`import.${w}`)).join(', ')
        importMessage.value = { type: 'warning', text: warningTexts }
        setTimeout(() => {
          appStore.setStep(7)
          router.push('/builder')
        }, 2000)
        return
      }

      appStore.setStep(7)
      router.push('/builder')
    } catch (err) {
      const msg = (err as Error).message
      if (msg === 'JSON_PARSE_ERROR') {
        importMessage.value = { type: 'error', text: t('import.parseError') }
      } else if (msg === 'JSON_NOT_OBJECT') {
        importMessage.value = { type: 'error', text: t('import.notObject') }
      } else if (msg.startsWith('VALIDATION:')) {
        const codes = msg.replace('VALIDATION:', '').split(',')
        const errorTexts = codes.map(c => t(`import.${c}`)).join('. ')
        importMessage.value = { type: 'error', text: errorTexts }
      } else {
        importMessage.value = { type: 'error', text: t('import.unknownError') }
      }
    }
  }
  reader.readAsText(file)
  const input = event.target as HTMLInputElement
  if (input) input.value = ''
}

function dismissMessage() {
  importMessage.value = null
}
</script>

<template>
  <section class="flex flex-col items-center py-8" aria-labelledby="home-heading">
    <div class="text-center max-w-3xl mb-8">
      <h2 id="home-heading" class="text-4xl font-bold text-amber-500 mb-3 font-gothic">{{ t('home.welcome') }}</h2>
      <p class="text-stone-400 text-base leading-relaxed">{{ t('home.description') }}</p>
    </div>

    <Transition name="fade">
      <div
        v-if="importMessage"
        :class="[
          'w-full max-w-3xl mb-6 p-4 rounded-lg border flex items-start gap-3',
          importMessage.type === 'error' ? 'bg-red-900/30 border-red-700 text-red-300' :
          importMessage.type === 'warning' ? 'bg-amber-900/30 border-amber-700 text-amber-300' :
          'bg-green-900/30 border-green-700 text-green-300'
        ]"
        role="alert"
      >
        <span class="text-xl" aria-hidden="true">{{ importMessage.type === 'error' ? '!' : importMessage.type === 'warning' ? '?' : '✓' }}</span>
        <p class="flex-1 text-sm">{{ importMessage.text }}</p>
        <button @click="dismissMessage" class="text-stone-400 hover:text-stone-200 cursor-pointer text-lg" :aria-label="t('common.cancel')">&times;</button>
      </div>
    </Transition>

    <input ref="fileInput" type="file" accept=".json" class="hidden" @change="handleImport" aria-hidden="true" tabindex="-1" />

    <article class="w-full max-w-3xl bg-stone-800 rounded-xl border border-amber-600/40 p-6 flex flex-col items-center gap-4">
      <div class="text-4xl" aria-hidden="true">D20</div>
      <h3 class="text-xl font-bold text-stone-100 font-gothic">{{ t('variant.dnd5e') }}</h3>
      <p class="text-sm text-stone-400 text-center leading-relaxed">{{ t('variant.dnd5eDesc') }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full mt-2">
        <button
          @click="startNew"
          class="w-full px-4 py-2.5 font-semibold rounded-lg transition-colors cursor-pointer text-sm bg-amber-600 hover:bg-amber-500 text-stone-900"
        >
          {{ t('home.newFrom') }}
        </button>

        <button
          @click="randomChar"
          class="w-full px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded-lg transition-colors cursor-pointer text-sm border border-stone-600"
        >
          {{ t('home.randomButton') }}
        </button>

        <button
          @click="triggerImport"
          class="w-full px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded-lg transition-colors cursor-pointer text-sm border border-stone-600"
        >
          {{ t('home.importJson') }}
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
