<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import type { AbilityScores } from '@/stores/character'
import { getClasses } from '@/data'
import { rollAbilityScores, STANDARD_ARRAY, POINT_BUY_COSTS, pointBuyRemaining } from '@/utils/diceRoller'
import { modifier, formatModifier } from '@/utils/calculations'
import { zeroAbilityScores } from '@/utils/dndRules'
import DiceRoller from '@/components/shared/DiceRoller.vue'
import VariantPromo from '@/components/shared/VariantPromo.vue'

const { t } = useI18n()
const characterStore = useCharacterStore()

type Method = 'standard' | 'pointbuy' | 'roll'
type Stage = 'base' | 'asi'

const method = ref<Method>('standard')
const stage = ref<Stage>(characterStore.character.baseScoresApplied ? 'asi' : 'base')
const abilities: (keyof AbilityScores)[] = ['str', 'dex', 'con', 'int', 'wis', 'cha']
const methods: Method[] = ['standard', 'pointbuy', 'roll']
const standardFallbackPriority: (keyof AbilityScores)[] = ['con', 'dex', 'wis', 'str', 'cha', 'int']

// Standard Array drafts
const standardAssignment = ref<Record<keyof AbilityScores, number | null>>({
  str: null, dex: null, con: null, int: null, wis: null, cha: null,
})

function selectedClassPrimaryAbilities(): (keyof AbilityScores)[] {
  const cls = getClasses(characterStore.character.variant).find(c => c.id === characterStore.character.className)
  return cls?.primaryAbility || []
}

function standardArrayDraft(): AbilityScores {
  const orderedAbilities = [
    ...selectedClassPrimaryAbilities(),
    ...standardFallbackPriority,
  ].filter((ability, index, list): ability is keyof AbilityScores =>
    abilities.includes(ability as keyof AbilityScores) && list.indexOf(ability) === index
  )
  const scores = zeroAbilityScores()
  orderedAbilities.forEach((ability, index) => {
    scores[ability] = STANDARD_ARRAY[index]!
  })
  return scores
}

function autofillStandardArray() {
  standardAssignment.value = standardArrayDraft()
  characterStore.character.baseScoresApplied = false
  stage.value = 'base'
}

const availableStandard = computed(() => {
  const used = Object.values(standardAssignment.value).filter(v => v !== null)
  return STANDARD_ARRAY.filter(v => {
    const usedCount = used.filter(u => u === v).length
    const totalCount = STANDARD_ARRAY.filter(s => s === v).length
    return usedCount < totalCount
  })
})

function setStandardScore(ability: keyof AbilityScores, value: number | null) {
  standardAssignment.value[ability] = value
  characterStore.character.baseScoresApplied = false
  stage.value = 'base'
}

// Point Buy drafts
const pointBuyScores = ref<Record<keyof AbilityScores, number>>({
  str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8,
})
const remaining = computed(() => pointBuyRemaining(Object.values(pointBuyScores.value)))

function adjustPointBuy(ability: keyof AbilityScores, delta: number) {
  const newVal = pointBuyScores.value[ability] + delta
  if (newVal < 8 || newVal > 15) return
  const oldCost = POINT_BUY_COSTS[pointBuyScores.value[ability]] ?? 0
  const newCost = POINT_BUY_COSTS[newVal] ?? 0
  if (remaining.value - (newCost - oldCost) < 0) return
  pointBuyScores.value[ability] = newVal
  characterStore.character.baseScoresApplied = false
  stage.value = 'base'
}

// Roll drafts
const rolledScores = ref<number[]>([])
const isRolling = ref(false)

function doRoll() {
  const result = rollAbilityScores()
  rolledScores.value = result.totals
  characterStore.character.baseScoresApplied = false
  stage.value = 'base'
  isRolling.value = true
}

function onAnimationDone() {
  isRolling.value = false
}

function setMethod(m: Method) {
  method.value = m
  characterStore.character.baseScoresApplied = false
  stage.value = 'base'
  if (m === 'standard') {
    autofillStandardArray()
  } else if (m === 'roll') {
    doRoll()
  }
}

if (stage.value === 'base') {
  autofillStandardArray()
}

function draftBaseScores(): AbilityScores | null {
  if (method.value === 'pointbuy') {
    return { ...pointBuyScores.value }
  }

  if (method.value === 'standard') {
    if (abilities.some(ability => standardAssignment.value[ability] === null)) return null
    return {
      str: standardAssignment.value.str!,
      dex: standardAssignment.value.dex!,
      con: standardAssignment.value.con!,
      int: standardAssignment.value.int!,
      wis: standardAssignment.value.wis!,
      cha: standardAssignment.value.cha!,
    }
  }

  if (rolledScores.value.length !== 6) {
    return null
  }
  return {
    str: rolledScores.value[0]!,
    dex: rolledScores.value[1]!,
    con: rolledScores.value[2]!,
    int: rolledScores.value[3]!,
    wis: rolledScores.value[4]!,
    cha: rolledScores.value[5]!,
  }
}

const canApplyBaseScores = computed(() => draftBaseScores() !== null)

function applyBaseScores() {
  const scores = draftBaseScores()
  if (!scores) return
  characterStore.character.abilityScores = scores
  characterStore.character.asiBonuses = zeroAbilityScores()
  characterStore.character.baseScoresApplied = true
  characterStore.recomputeBuildDerivedState()
  stage.value = 'asi'
}

function editBaseScores() {
  characterStore.character.baseScoresApplied = false
  characterStore.character.asiBonuses = zeroAbilityScores()
  characterStore.recomputeBuildDerivedState()
  stage.value = 'base'
}

const spentAsi = computed(() => {
  const bonuses = characterStore.character.asiBonuses
  return abilities.reduce((total, ability) => total + Math.max(0, Number(bonuses?.[ability]) || 0), 0)
})
const totalAsi = computed(() => spentAsi.value + (characterStore.character.asiPoints || 0))
const hasAsi = computed(() => totalAsi.value > 0)

function racialBonus(ability: keyof AbilityScores): number {
  return characterStore.character.racialBonuses[ability] || 0
}

function asiBonus(ability: keyof AbilityScores): number {
  return characterStore.character.asiBonuses?.[ability] || 0
}

function baseScore(ability: keyof AbilityScores): number | null {
  if (stage.value === 'base') {
    if (method.value === 'pointbuy') return pointBuyScores.value[ability]
    if (method.value === 'standard') return standardAssignment.value[ability]
    const rollIndex = abilities.indexOf(ability)
    return rollIndex === -1 ? null : rolledScores.value[rollIndex] ?? null
  }
  return characterStore.character.abilityScores[ability]
}

function totalScore(ability: keyof AbilityScores): number {
  const base = baseScore(ability) ?? 0
  if (stage.value === 'base') return base + racialBonus(ability)
  return characterStore.totalAbilityScore(ability)
}

function canIncreaseAsi(ability: keyof AbilityScores): boolean {
  return (characterStore.character.asiPoints || 0) > 0 && characterStore.totalAbilityScore(ability) < 20
}

function canRefundAsi(ability: keyof AbilityScores): boolean {
  return asiBonus(ability) > 0
}
</script>

<template>
  <section aria-labelledby="abilities-heading">
    <h2 id="abilities-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('abilities.title') }}</h2>

    <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        class="border rounded-lg p-4"
        :class="stage === 'base' ? 'border-amber-600 bg-amber-950/20' : 'border-stone-700 bg-stone-800'"
      >
        <p class="text-xs uppercase tracking-wide text-stone-500">{{ t('abilities.stage') }} 1</p>
        <h3 class="font-semibold text-stone-100">{{ t('abilities.baseStageTitle') }}</h3>
        <p class="text-sm text-stone-400 mt-1">{{ t('abilities.baseStageHint') }}</p>
      </div>
      <div
        class="border rounded-lg p-4"
        :class="stage === 'asi' ? 'border-amber-600 bg-amber-950/20' : 'border-stone-700 bg-stone-800'"
      >
        <p class="text-xs uppercase tracking-wide text-stone-500">{{ t('abilities.stage') }} 2</p>
        <h3 class="font-semibold text-stone-100">{{ t('abilities.levelBonusStageTitle') }}</h3>
        <p class="text-sm text-stone-400 mt-1">{{ t('abilities.levelBonusStageHint') }}</p>
      </div>
    </div>

    <div v-if="stage === 'base'" class="mb-6">
      <!-- Method Selection -->
      <div class="flex gap-2 mb-6" role="radiogroup" :aria-label="t('abilities.method')">
        <button
          v-for="m in methods"
          :key="m"
          @click="setMethod(m)"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          :class="method === m ? 'bg-amber-600 text-stone-900' : 'bg-stone-700 text-stone-300 hover:bg-stone-600'"
          role="radio"
          :aria-checked="method === m"
        >
          {{ t(`abilities.${m === 'pointbuy' ? 'pointBuy' : m === 'standard' ? 'standardArray' : 'roll'}`) }}
        </button>
      </div>

      <div v-if="method === 'pointbuy'" class="mb-4 text-sm font-medium"
        :class="remaining >= 0 ? 'text-green-400' : 'text-red-400'">
        {{ t('abilities.pointsRemaining', { points: remaining }) }}
      </div>

      <div v-if="method === 'roll'" class="mb-4">
        <div class="flex gap-3 items-center">
          <button v-if="rolledScores.length && !isRolling"
            @click="doRoll"
            class="px-3 py-2 bg-stone-700 hover:bg-stone-600 text-stone-300 rounded-lg text-sm transition-colors cursor-pointer"
          >{{ t('abilities.reroll') }}</button>
          <span v-if="isRolling" class="inline-flex items-center gap-2 text-sm text-stone-400">
            <span class="animate-spin inline-block w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full" aria-hidden="true"></span>
            {{ t('abilities.roll') }}
          </span>
        </div>
        <div v-if="rolledScores.length" class="mt-3">
          <DiceRoller :scores="rolledScores" :rolling="isRolling" @animation-done="onAnimationDone" />
        </div>
      </div>
    </div>

    <div v-else class="mb-6 bg-stone-800 border border-stone-700 rounded-lg p-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 class="font-semibold text-amber-300">{{ t('abilities.baseScoresApplied') }}</h3>
          <p v-if="hasAsi" class="text-sm text-stone-400">
            {{ t('abilities.asiHint') }}
            <span class="text-amber-300 font-medium">{{ t('abilities.asiRemaining', { points: characterStore.character.asiPoints || 0 }) }}</span>
          </p>
          <p v-else class="text-sm text-stone-400">{{ t('abilities.noAsiHint') }}</p>
        </div>
        <button
          type="button"
          class="px-3 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded-lg text-sm transition-colors cursor-pointer"
          @click="editBaseScores"
        >
          {{ t('abilities.editBaseScores') }}
        </button>
      </div>
    </div>

    <!-- Ability Score Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="ability in abilities"
        :key="ability"
        class="bg-stone-800 border border-stone-700 rounded-lg p-4"
      >
        <h4 class="font-bold text-amber-400 text-sm uppercase mb-3">{{ t(`abilities.${ability}`) }}</h4>

        <template v-if="stage === 'base'">
          <div v-if="method === 'standard'">
            <select
              :value="standardAssignment[ability] ?? ''"
              @change="setStandardScore(ability, Number(($event.target as HTMLSelectElement).value) || null)"
              class="w-full bg-stone-700 text-stone-200 rounded px-2 py-1 text-sm"
              :aria-label="t(`abilities.${ability}`)"
            >
              <option value="">--</option>
              <option v-for="v in availableStandard" :key="v" :value="v">{{ v }}</option>
              <option v-if="standardAssignment[ability] !== null" :value="standardAssignment[ability]">
                {{ standardAssignment[ability] }} ({{ t('abilities.current') }})
              </option>
            </select>
          </div>

          <div v-else-if="method === 'pointbuy'" class="flex items-center gap-3" role="group" :aria-label="t(`abilities.${ability}`)">
            <button @click="adjustPointBuy(ability, -1)"
              :aria-label="`${t(`abilities.${ability}`)} -1`"
              class="w-8 h-8 bg-stone-700 hover:bg-stone-600 rounded text-stone-300 font-bold cursor-pointer">-</button>
            <span class="text-xl font-bold text-stone-200 w-8 text-center" aria-live="polite">{{ pointBuyScores[ability] }}</span>
            <button @click="adjustPointBuy(ability, 1)"
              :aria-label="`${t(`abilities.${ability}`)} +1`"
              class="w-8 h-8 bg-stone-700 hover:bg-stone-600 rounded text-stone-300 font-bold cursor-pointer">+</button>
            <span class="text-xs text-stone-500">({{ POINT_BUY_COSTS[pointBuyScores[ability]] ?? 0 }} pts)</span>
          </div>

          <div v-else-if="method === 'roll'" class="h-9 flex items-center text-sm text-stone-400">
            {{ baseScore(ability) ?? '--' }}
          </div>
        </template>

        <!-- Calculated Values -->
        <div class="mt-3 space-y-2 text-xs text-stone-400">
          <div class="grid grid-cols-2 gap-x-3 gap-y-1">
            <div>{{ t('abilities.base') }}: <strong class="text-stone-300">{{ baseScore(ability) ?? '--' }}</strong></div>
            <div :class="racialBonus(ability) ? 'text-green-400' : 'text-stone-500'">
              {{ t('abilities.racialBonus') }}: {{ formatModifier(racialBonus(ability)) }}
            </div>
            <div :class="stage === 'asi' && asiBonus(ability) ? 'text-amber-300' : 'text-stone-500'">
              {{ t('abilities.asiBonus') }}: {{ formatModifier(stage === 'asi' ? asiBonus(ability) : 0) }}
            </div>
            <div>
              {{ t('abilities.total') }}:
              <strong class="text-lg text-amber-400">{{ baseScore(ability) === null ? '--' : totalScore(ability) }}</strong>
            </div>
          </div>
          <div class="flex items-center justify-between border-t border-stone-700 pt-2">
            <div>
              {{ t('abilities.modifier') }}:
              <strong>{{ baseScore(ability) === null ? '--' : formatModifier(modifier(totalScore(ability))) }}</strong>
            </div>
            <div v-if="stage === 'asi' && hasAsi" class="flex items-center gap-2">
              <button
                @click="characterStore.refundAsiPoint(ability)"
                :disabled="!canRefundAsi(ability)"
                class="w-7 h-7 bg-stone-700 hover:bg-stone-600 rounded text-stone-300 font-bold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                :aria-label="`${t(`abilities.${ability}`)} ASI -1`"
              >-</button>
              <span class="w-5 text-center text-amber-300 font-medium">{{ asiBonus(ability) }}</span>
              <button
                @click="characterStore.spendAsiPoint(ability)"
                :disabled="!canIncreaseAsi(ability)"
                class="w-7 h-7 bg-amber-600 hover:bg-amber-500 rounded text-stone-900 font-bold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                :aria-label="`${t(`abilities.${ability}`)} ASI +1`"
              >+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="stage === 'base'" class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
      <p v-if="!canApplyBaseScores" class="text-sm text-amber-300">{{ t('abilities.incompleteBaseScores') }}</p>
      <button
        type="button"
        :disabled="!canApplyBaseScores"
        class="px-5 py-2 rounded-lg font-semibold transition-colors"
        :class="canApplyBaseScores ? 'bg-amber-600 hover:bg-amber-500 text-stone-900 cursor-pointer' : 'bg-stone-800 text-stone-500 cursor-not-allowed'"
        @click="applyBaseScores"
      >
        {{ t('abilities.applyBaseScores') }}
      </button>
    </div>

    <VariantPromo :variant="characterStore.character.variant" />
  </section>
</template>
