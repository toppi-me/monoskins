<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface Props {
  src: string
  alt: string
  sizes: string
  priority?: boolean
}

const props = defineProps<Props>()

const widths = [400, 800]
const image = ref<HTMLImageElement>()
const loaded = ref(false)
const useFallback = ref(false)

const srcset = computed(() => {
  const base = props.src.replace(/\.\w+$/, '')

  return widths.map(width => `${base}-${width}.webp ${width}w`).join(', ')
})

onMounted(() => {
  if (image.value?.complete) {
    loaded.value = true
  }
})
</script>

<template>
  <div
    v-if="!loaded"
    class="absolute inset-0 animate-pulse bg-elevated"
  />

  <picture
    :key="String(useFallback)"
    class="contents"
  >
    <source
      v-if="!useFallback"
      :srcset="srcset"
      :sizes="sizes"
      type="image/webp"
    >
    <img
      ref="image"
      :src="src"
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      width="400"
      height="253"
      decoding="async"
      class="relative w-full h-full object-cover text-transparent"
      @load="loaded = true"
      @error="useFallback = true"
    >
  </picture>
</template>
