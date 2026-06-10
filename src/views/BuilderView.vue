<script setup lang="ts">
import { defineAsyncComponent, computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { useCharacterStore } from '@/stores/character'
import { ensureStepData, getClasses } from '@/data'
import StepNavigation from '@/components/layout/StepNavigation.vue'
import { isRequiredSpellSelectionComplete } from '@/utils/characterValidation'

const { t } = useI18n()
const appStore = useAppStore()
const characterStore = useCharacterStore()

// WSG 3.8: Preload data for current step when builder opens (for returning users past Step 1)
onMounted(async () => {
  characterStore.character.variant = 'dnd5e'
  await ensureStepData('dnd5e', appStore.currentStep + 1)
})

// WSG 3.8: Defer loading of non-critical resources — lazy load wizard steps
const steps = [
  defineAsyncComponent(() => import('@/components/steps/Step8Details.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step2Race.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step3Class.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step4Abilities.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step5Background.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step6Equipment.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step7Spells.vue')),
  defineAsyncComponent(() => import('@/components/steps/Step9Review.vue')),
]

const stepKeys = ['details', 'race', 'class', 'abilities', 'background', 'equipment', 'spells', 'review']

// ─── Step Validation ──────────────────────────────────────────────────────
const validationMessage = ref('')
const isLoadingStep = ref(false)

/** Returns whether the current step has all required data filled in */
const isCurrentStepValid = computed((): boolean => {
  const char = characterStore.character
  switch (appStore.currentStep) {
    case 0: return Number.isFinite(char.level) && char.level >= 1 && char.level <= 20
    case 1: return !!char.race                // Race selected
    case 2: {                                 // Class selected
      const cls = getClasses(char.variant).find(c => c.id === char.className)
      if (!cls) return false
      if (cls.subclasses.length > 0 && char.level >= cls.subclassLevel) return !!char.subclass
      return true
    }
    case 3: return !!char.baseScoresApplied && (char.asiPoints || 0) === 0 && (['str', 'dex', 'con', 'int', 'wis', 'cha'] as const).every(
      ability => characterStore.totalAbilityScore(ability) <= 20
    )
    case 4: return !!char.background          // Background selected
    case 5: return true                       // Equipment optional
    case 6: return isRequiredSpellSelectionComplete(char)
    default: return true
  }
})

/** Map step index to validation i18n key */
function validationKey(step: number): string {
  switch (step) {
    case 0: return 'validation.validLevel'
    case 1: return 'validation.selectRace'
    case 2: return 'validation.selectClass'
    case 3: return 'validation.spendAsi'
    case 4: return 'validation.selectBackground'
    case 6: return 'validation.selectRequiredSpells'
    default: return 'validation.completeStep'
  }
}

async function tryNextStep() {
  if (!isCurrentStepValid.value) {
    validationMessage.value = t(validationKey(appStore.currentStep))
    return
  }
  validationMessage.value = ''
  characterStore.recomputeBuildDerivedState()

  // WSG 3.8: Load only the data the next step needs before transitioning
  const nextStep = appStore.currentStep + 1
  isLoadingStep.value = true
  await ensureStepData('dnd5e', nextStep + 1)
  isLoadingStep.value = false
  appStore.nextStep()
}

async function goPrevStep() {
  validationMessage.value = ''
  const prevStep = appStore.currentStep - 1
  await ensureStepData('dnd5e', prevStep + 1)
  appStore.prevStep()
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <StepNavigation />

    <!-- Live region for screen readers announcing step changes -->
    <div class="sr-only" aria-live="polite" aria-atomic="true">
      {{ t('common.stepProgress', { current: appStore.currentStep + 1, total: appStore.totalSteps }) }}:
      {{ t(`steps.${stepKeys[appStore.currentStep]}`) }}
    </div>

    <KeepAlive>
      <component :is="steps[appStore.currentStep]" />
    </KeepAlive>

    <!-- Validation warning -->
    <div
      v-if="validationMessage"
      class="mt-4 p-3 bg-amber-900/30 border border-amber-700 text-amber-300 rounded-lg text-sm flex items-center gap-2"
      role="alert"
    >
      <span aria-hidden="true">⚠️</span>
      {{ validationMessage }}
    </div>

    <nav class="flex justify-between mt-8" :aria-label="t('common.stepProgress', { current: appStore.currentStep + 1, total: appStore.totalSteps })">
      <button
        v-if="appStore.currentStep > 0"
        @click="goPrevStep"
        :disabled="isLoadingStep"
        class="px-6 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        :aria-label="`${t('common.back')}: ${t(`steps.${stepKeys[appStore.currentStep - 1]}`)}`"
      >
        {{ t('common.back') }}
      </button>
      <div v-else></div>

      <button
        v-if="appStore.currentStep < appStore.totalSteps - 1"
        @click="tryNextStep"
        :disabled="isLoadingStep"
        class="px-6 py-2 bg-amber-600 text-stone-900 font-semibold rounded-lg transition-colors cursor-pointer disabled:cursor-wait"
        :class="isCurrentStepValid && !isLoadingStep ? 'hover:bg-amber-500' : 'opacity-60'"
        :aria-label="`${t('common.next')}: ${t(`steps.${stepKeys[appStore.currentStep + 1]}`)}`"
        :aria-disabled="!isCurrentStepValid || isLoadingStep"
      >
        <span v-if="isLoadingStep" class="inline-flex items-center gap-2">
          <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ t('common.next') }}
        </span>
        <span v-else>{{ t('common.next') }}</span>
      </button>
    </nav>
  </div>
</template>
