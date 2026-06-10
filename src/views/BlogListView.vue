<script setup lang="ts">
import { computed, watchEffect, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { blogCharacters } from '@/data/blog/characters'
import { useGameTerms } from '@/composables/useGameTerms'

const { t } = useI18n()
const gt = useGameTerms()

const filteredCharacters = computed(() => {
  return blogCharacters.filter(c => c.variant === 'dnd5e')
})

function variantColor(): string {
  return 'bg-amber-900/40 text-amber-400'
}

function variantBorder(): string {
  return 'border-amber-600/40 hover:border-amber-500/60'
}

// SEO: update document title and meta description
const originalTitle = document.title
watchEffect(() => {
  document.title = t('blog.meta.listTitle')
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', t('blog.meta.listDescription'))
})
onUnmounted(() => {
  document.title = originalTitle
})
</script>

<template>
  <section class="flex flex-col items-center py-8" aria-labelledby="blog-heading">
    <div class="text-center max-w-3xl mb-8">
      <h2 id="blog-heading" class="text-4xl font-bold text-amber-500 mb-3 font-gothic">
        {{ t('blog.title') }}
      </h2>
      <p class="text-stone-400 text-base leading-relaxed">
        {{ t('blog.description') }}
      </p>
    </div>

    <!-- Character grid -->
    <div class="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
        v-for="char in filteredCharacters"
        :key="char.slug"
        :to="`/blog/${char.slug}`"
        :class="[
          'bg-stone-800 rounded-xl border p-5 flex flex-col gap-3 transition-colors no-underline group',
          variantBorder(),
        ]"
      >
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-lg font-bold text-amber-400 font-gothic group-hover:text-amber-300 transition-colors">
            {{ char.characterData.name }}
          </h3>
          <span :class="['text-xs uppercase px-2 py-0.5 rounded whitespace-nowrap', variantColor()]">
            {{ char.variant }}
          </span>
        </div>

        <p class="text-sm text-stone-400">
          {{ gt.raceName(char.characterData.race) }}
          <template v-if="char.characterData.subrace">
            ({{ gt.subraceName(char.characterData.subrace) }})
          </template>
        </p>

        <p class="text-sm text-stone-300">
          {{ gt.className(char.characterData.className, char.variant) }}
          <span class="text-stone-500">Lv.{{ char.characterData.level }}</span>
        </p>

        <p class="text-xs text-stone-500 mt-auto line-clamp-2">
          {{ t(`blog.characters.${char.slug}.description`).slice(0, 120) }}...
        </p>
      </router-link>
    </div>

    <!-- Empty state -->
    <p
      v-if="filteredCharacters.length === 0"
      class="text-stone-500 text-center py-8"
    >
      {{ t('common.noResults') }}
    </p>
  </section>
</template>
