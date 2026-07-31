<script setup lang="ts">
import { ogClamp, ogLogo } from '~/utils/og'

withDefaults(defineProps<{
  title?: string
  image?: string
  available?: boolean
  badges?: string[]
}>(), {
  title: 'Скін Monobank',
  image: undefined,
  available: false,
  badges: () => []
})
</script>

<template>
  <div style="position: relative; width: 100%; height: 100%; display: flex; overflow: hidden; font-family: Manrope, sans-serif; background-color: #09090b;">
    <img
      v-if="image"
      :src="image"
      style="position: absolute; top: 170px; right: 72px; width: 460px; height: 291px; border: 1px solid #27272a; border-radius: 24px; object-fit: cover; background-color: #18181b;"
    >

    <div style="position: absolute; top: 64px; left: 72px; bottom: 64px; width: 540px; display: flex; flex-direction: column; justify-content: space-between;">
      <img
        :src="ogLogo"
        width="208"
        height="37"
      >

      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; margin-bottom: 16px; font-size: 16px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #818cf8;">
          Скін monobank
        </div>

        <div style="display: flex; font-size: 46px; line-height: 1.16; font-weight: 800; letter-spacing: -0.02em; color: #fafafa;">
          {{ ogClamp(title, 52) }}
        </div>

        <div style="display: flex; margin-top: 26px;">
          <div
            v-for="(badge, i) in badges"
            :key="badge"
            :style="`display: flex; align-items: center; height: 44px; padding: 0 18px; ${i ? 'margin-left: 10px;' : ''} border: 1px solid ${!i && available ? '#818cf8' : '#27272a'}; border-radius: 12px; font-size: 20px; font-weight: 600; color: ${!i && available ? '#818cf8' : '#a1a1aa'};`"
          >
            {{ badge }}
          </div>
        </div>
      </div>

      <div style="display: flex; font-size: 24px; font-weight: 600; color: #a1a1aa;">
        monoskins.toppi.me
      </div>
    </div>
  </div>
</template>
