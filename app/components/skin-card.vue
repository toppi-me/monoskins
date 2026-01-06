<script setup lang="ts">
import { computed } from 'vue'
import type { Skin } from '~/interfaces/skin'

interface Props {
  skin: Skin
}

const props = defineProps<Props>()

const title = computed(() => props.skin.name)
const value = computed(() => props.skin.minimumValue)
const available = computed(() => props.skin.status === 'active')
const img = computed(() => props.skin.img)

const priceText = computed(() => {
  if (!available.value) return 'Недоступний'
  if (value.value > 0) {
    return props.skin.isSubscription
      ? `від ${value.value}₴/м`
      : `від ${value.value}₴`
  }
  return 'Доступний'
})

const priceClass = computed(() =>
  available.value
    ? 'text-green-600 dark:text-green-400'
    : 'text-muted'
)
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="relative w-full aspect-[1.58/1] overflow-hidden border border-muted rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 cursor-pointer">
      <img
        :src="img"
        class="w-full h-full object-cover"
        :alt="`Скін ${title} Monobank`"
      >
    </div>

    <div class="mt-1 flex justify-between items-center">
      <p class="text-md font-bold line-clamp-1">
        {{ title }}
      </p>

      <p
        class="text-sm"
        :class="priceClass"
      >
        {{ priceText }}
      </p>
    </div>
  </div>
</template>
