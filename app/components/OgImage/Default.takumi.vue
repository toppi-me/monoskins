<script setup lang="ts">
import type { Skin } from '~/interfaces/skin'
import skins from '~/data/skins.json'
import { ogClamp, ogLogo } from '~/utils/og'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Усі скіни на картку Monobank',
  description: 'Повний каталог скінів monobank — з описами, умовами отримання та історією появи.'
})

const featured = (Object.values(skins as unknown as Record<string, Skin>) as Skin[])
  .filter(skin => skin.status === 'active')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)
</script>

<template>
  <div style="position: relative; width: 100%; height: 100%; display: flex; overflow: hidden; font-family: Manrope, sans-serif; background-color: #09090b;">
    <div style="position: absolute; top: -28px; right: 72px; width: 340px; display: flex; flex-direction: column;">
      <img
        v-for="(skin, i) in featured"
        :key="skin.id"
        :src="skin.img"
        :style="`width: 340px; height: 215px; ${i ? 'margin-top: 20px;' : ''} border: 1px solid #27272a; border-radius: 18px; object-fit: cover; background-color: #18181b;`"
      >
    </div>

    <div style="position: absolute; top: 64px; left: 72px; bottom: 64px; width: 660px; display: flex; flex-direction: column; justify-content: space-between;">
      <img
        :src="ogLogo"
        width="248"
        height="45"
      >

      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; font-size: 54px; line-height: 1.14; font-weight: 800; letter-spacing: -0.02em; color: #fafafa;">
          {{ ogClamp(title, 64) }}
        </div>

        <div style="display: flex; margin-top: 20px; font-size: 26px; line-height: 1.38; color: #a1a1aa;">
          {{ ogClamp(description, 112) }}
        </div>
      </div>

      <div style="display: flex; font-size: 24px; font-weight: 600; color: #a1a1aa;">
        monoskins.toppi.me
      </div>
    </div>
  </div>
</template>
