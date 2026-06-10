<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const appStore = useAppStore()

const stepKeys = ['details', 'race', 'class', 'abilities', 'background', 'equipment', 'spells', 'review']
</script>

<template>
  <nav class="mb-8" :aria-label="t('a11y.stepNavigation')">
    <ol class="flex items-center gap-1 overflow-x-auto pb-2" role="list">
      <li
        v-for="(key, idx) in stepKeys"
        :key="key"
        class="flex items-center"
        role="listitem"
      >
        <button
          @click="idx <= appStore.currentStep && appStore.setStep(idx)"
          :disabled="idx > appStore.currentStep"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer"
          :class="{
            'bg-amber-600 text-stone-900': idx === appStore.currentStep,
            'bg-stone-700 text-stone-300 hover:bg-stone-600': idx < appStore.currentStep,
            'bg-stone-800 text-stone-500 cursor-not-allowed': idx > appStore.currentStep,
          }"
          :aria-current="idx === appStore.currentStep ? 'step' : undefined"
          :aria-disabled="idx > appStore.currentStep"
          :aria-label="`${t(`steps.${key}`)} (${idx + 1}/${stepKeys.length})`"
        >
          <span
            class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
            :class="{
              'bg-stone-900 text-amber-500': idx === appStore.currentStep,
              'bg-stone-600 text-stone-200': idx < appStore.currentStep,
              'bg-stone-700 text-stone-500': idx > appStore.currentStep,
            }"
            aria-hidden="true"
          >{{ idx + 1 }}</span>
          <span class="hidden sm:inline">{{ t(`steps.${key}`) }}</span>
        </button>
        <span v-if="idx < stepKeys.length - 1" class="text-stone-600 mx-1" aria-hidden="true">&rsaquo;</span>
      </li>
    </ol>
  </nav>
</template>
