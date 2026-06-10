<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacterStore } from '@/stores/character'
import { getBackgrounds, getEquipment } from '@/data'
import { averageStartingGold, equipmentPriceGp } from '@/data/dnd5e/equipmentPrices'
import { useGameTerms } from '@/composables/useGameTerms'
import VariantPromo from '@/components/shared/VariantPromo.vue'

const { t } = useI18n()
const characterStore = useCharacterStore()
const gt = useGameTerms()

const equipment = computed(() => getEquipment(characterStore.character.variant))
const backgrounds = computed(() => getBackgrounds(characterStore.character.variant))

const allWeapons = computed(() => [
  ...(equipment.value?.simpleWeapons || []),
  ...(equipment.value?.martialWeapons || []),
])

const selectedWeaponNames = computed(() => characterStore.character.weapons.map(weapon => weapon.name))

const selectedBackground = computed(() => {
  return backgrounds.value.find(bg => bg.id === characterStore.character.background)
})

const backgroundGold = computed(() => {
  return (selectedBackground.value?.equipment || []).reduce((total, item) => {
    const match = item.match(/^(\d+)\s*gp$/i)
    return total + (match ? Number(match[1]) : 0)
  }, 0)
})

const backgroundItems = computed(() => {
  return (selectedBackground.value?.equipment || []).filter(item => !/^\d+\s*gp$/i.test(item))
})

const classStartingGold = computed(() => averageStartingGold(characterStore.character.className))
const totalBudget = computed(() => classStartingGold.value + backgroundGold.value)
const spent = computed(() => {
  let total = 0
  for (const weapon of characterStore.character.weapons) {
    total += equipmentPriceGp(weapon.name) || 0
  }
  if (characterStore.character.armor) {
    total += equipmentPriceGp(characterStore.character.armor) || 0
  }
  if (characterStore.character.shield) {
    total += equipmentPriceGp('Shield') || 0
  }
  for (const item of purchasedEquipmentList()) {
    total += equipmentPriceGp(item) || 0
  }
  return Math.round(total * 100) / 100
})
const remaining = computed(() => Math.round((totalBudget.value - spent.value) * 100) / 100)

function gp(amount: number | null): string {
  return t('equipment.currencyGp', { amount: amount ?? 0 })
}

function armorClassValue(value: number): string {
  return t('equipment.armorClassValue', { value })
}

function syncEquipmentState() {
  characterStore.character.equipmentBudgetGp = totalBudget.value
  characterStore.character.equipmentSpentGp = spent.value
  characterStore.character.coins.gp = Math.max(0, Math.floor(remaining.value))
  characterStore.character.equipment = [
    ...backgroundItems.value,
    ...purchasedEquipmentList(),
  ]
}

watch(
  [totalBudget, spent, backgroundItems],
  syncEquipmentState,
  { immediate: true },
)

function canAfford(name: string): boolean {
  const price = equipmentPriceGp(name)
  if (price === null) return false
  return remaining.value >= price
}

function purchasedEquipmentList(): string[] {
  if (!characterStore.character.purchasedEquipment) {
    characterStore.character.purchasedEquipment = []
  }
  return characterStore.character.purchasedEquipment
}

function isPackSelected(packName: string): boolean {
  return purchasedEquipmentList().includes(packName)
}

function weaponData(name: string) {
  return allWeapons.value.find(weapon => weapon.name === name)
}

function toggleWeapon(weaponName: string) {
  const idx = characterStore.character.weapons.findIndex(weapon => weapon.name === weaponName)
  if (idx >= 0) {
    characterStore.character.weapons.splice(idx, 1)
    syncEquipmentState()
    return
  }
  if (!canAfford(weaponName)) return
  const wpn = weaponData(weaponName)
  characterStore.character.weapons.push({
    name: weaponName,
    attackBonus: 0,
    damage: wpn?.damage || '',
  })
  syncEquipmentState()
}

function selectArmor(armorName: string) {
  if (characterStore.character.armor === armorName) {
    characterStore.character.armor = ''
    syncEquipmentState()
    return
  }
  const currentArmor = characterStore.character.armor
  characterStore.character.armor = ''
  syncEquipmentState()
  if (!canAfford(armorName)) {
    characterStore.character.armor = currentArmor
    syncEquipmentState()
    return
  }
  characterStore.character.armor = armorName
  syncEquipmentState()
}

function toggleShield() {
  if (characterStore.character.shield) {
    characterStore.character.shield = false
    syncEquipmentState()
    return
  }
  if (!canAfford('Shield')) return
  characterStore.character.shield = true
  syncEquipmentState()
}

function togglePack(packName: string) {
  const purchasedEquipment = purchasedEquipmentList()
  const idx = purchasedEquipment.indexOf(packName)
  if (idx >= 0) {
    purchasedEquipment.splice(idx, 1)
    syncEquipmentState()
    return
  }
  if (!canAfford(packName)) return
  purchasedEquipment.push(packName)
  syncEquipmentState()
}
</script>

<template>
  <section aria-labelledby="equipment-heading">
    <h2 id="equipment-heading" class="text-2xl font-bold text-amber-500 mb-6">{{ t('equipment.title') }}</h2>

    <div class="bg-stone-800 border border-stone-700 rounded-lg p-4 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <div>
          <p class="text-stone-500">{{ t('equipment.budget') }}</p>
          <p class="text-amber-400 font-bold">{{ gp(totalBudget) }}</p>
        </div>
        <div>
          <p class="text-stone-500">{{ t('equipment.spent') }}</p>
          <p class="text-stone-200 font-bold">{{ gp(spent) }}</p>
        </div>
        <div>
          <p class="text-stone-500">{{ t('equipment.remaining') }}</p>
          <p class="font-bold" :class="remaining >= 0 ? 'text-green-400' : 'text-red-400'">{{ gp(remaining) }}</p>
        </div>
      </div>
      <p class="text-xs text-stone-500 mt-3">
        {{ t('equipment.strictPurchaseHint') }}
      </p>
    </div>

    <!-- Background grant -->
    <div v-if="backgroundItems.length" class="mb-6">
      <h3 class="text-lg font-semibold text-stone-300 mb-3">{{ t('equipment.backgroundGrant') }}</h3>
      <ul class="flex flex-wrap gap-2" role="list">
        <li v-for="item in backgroundItems" :key="item" class="px-2 py-1 bg-stone-800 border border-stone-700 rounded text-xs text-stone-300">
          {{ gt.equipment(item) }}
        </li>
      </ul>
    </div>

    <!-- Weapons -->
    <div class="mb-6">
      <h3 id="weapons-heading" class="text-lg font-semibold text-stone-300 mb-3">{{ t('equipment.weapons') }}</h3>

      <div v-if="equipment?.simpleWeapons?.length" class="mb-4">
        <h4 id="simple-weapons-heading" class="text-sm font-medium text-stone-400 mb-2">{{ t('equipment.simpleWeapons') }}</h4>
        <div class="flex flex-wrap gap-2" role="group" :aria-label="t('equipment.simpleWeapons')">
          <button
            v-for="wpn in equipment.simpleWeapons"
            :key="wpn.name"
            @click="toggleWeapon(wpn.name)"
            class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
            :class="selectedWeaponNames.includes(wpn.name)
              ? 'bg-amber-600 text-stone-900 font-medium'
              : canAfford(wpn.name)
                ? 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
            :aria-pressed="selectedWeaponNames.includes(wpn.name)"
          >
            {{ gt.weapon(wpn.name) }} ({{ wpn.damage }}, {{ gp(equipmentPriceGp(wpn.name)) }})
          </button>
        </div>
      </div>

      <div v-if="equipment?.martialWeapons?.length">
        <h4 id="martial-weapons-heading" class="text-sm font-medium text-stone-400 mb-2">{{ t('equipment.martialWeapons') }}</h4>
        <div class="flex flex-wrap gap-2" role="group" :aria-label="t('equipment.martialWeapons')">
          <button
            v-for="wpn in equipment.martialWeapons"
            :key="wpn.name"
            @click="toggleWeapon(wpn.name)"
            class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
            :class="selectedWeaponNames.includes(wpn.name)
              ? 'bg-amber-600 text-stone-900 font-medium'
              : canAfford(wpn.name)
                ? 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
            :aria-pressed="selectedWeaponNames.includes(wpn.name)"
          >
            {{ gt.weapon(wpn.name) }} ({{ wpn.damage }}, {{ gp(equipmentPriceGp(wpn.name)) }})
          </button>
        </div>
      </div>
    </div>

    <!-- Armor -->
    <div class="mb-6">
      <h3 id="armor-heading" class="text-lg font-semibold text-stone-300 mb-3">{{ t('equipment.armor') }}</h3>
      <div class="flex flex-wrap gap-2" role="radiogroup" :aria-label="t('equipment.armor')">
        <button
          v-for="arm in equipment?.armor || []"
          :key="arm.name"
          @click="selectArmor(arm.name)"
          class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          :class="characterStore.character.armor === arm.name
            ? 'bg-amber-600 text-stone-900 font-medium'
            : canAfford(arm.name)
              ? 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
          role="radio"
          :aria-checked="characterStore.character.armor === arm.name"
        >
          {{ gt.armorName(arm.name) }} ({{ armorClassValue(arm.baseAC) }}, {{ gp(equipmentPriceGp(arm.name)) }})
        </button>
        <button
          @click="toggleShield()"
          class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          :class="characterStore.character.shield
            ? 'bg-amber-600 text-stone-900 font-medium'
            : canAfford('Shield')
              ? 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
          :aria-pressed="characterStore.character.shield"
        >
          {{ t('review.shieldBonus') }} ({{ gp(equipmentPriceGp('Shield')) }})
        </button>
      </div>
    </div>

    <!-- Packs -->
    <div>
      <h3 id="packs-heading" class="text-lg font-semibold text-stone-300 mb-3">{{ t('equipment.packs') }}</h3>
      <div class="flex flex-wrap gap-2" role="group" :aria-label="t('equipment.packs')">
        <button
          v-for="pack in equipment?.packs || []"
          :key="pack.name"
          @click="togglePack(pack.name)"
          class="px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          :class="isPackSelected(pack.name)
            ? 'bg-amber-600 text-stone-900 font-medium'
            : canAfford(pack.name)
              ? 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              : 'bg-stone-800 text-stone-600 cursor-not-allowed'"
          :aria-pressed="isPackSelected(pack.name)"
        >
          {{ gt.pack(pack.name) }} ({{ gp(equipmentPriceGp(pack.name)) }})
        </button>
      </div>
    </div>

    <VariantPromo :variant="characterStore.character.variant" />
  </section>
</template>
