<script setup lang="ts">
import type { BreadcrumbItem } from '#ui/components/Breadcrumb.vue'
import type { Skin } from '~/interfaces/skin'
import skins from '~/data/skins.json'

const route = useRoute()
const cardId = computed(() => route.params.id as string)

const skinsMap = skins as unknown as Record<string, Skin>

const skin = computed<Skin | null>(() => {
  return skinsMap[cardId.value] ?? null
})

watchEffect(() => {
  if (!skin.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Skin not found'
    })
  }
})

const receiveCondition = computed(() => {
  if (!skin.value) return ''

  if (skin.value.isQR) {
    return 'Безкоштовно за посиланням'
  }

  if (skin.value.isJar) {
    return `Донат на Банку від ${skin.value.minimumValue} грн`
  }

  if (skin.value.isSubscription) {
    return `Підписка на Base від ${skin.value.minimumValue} грн`
  }

  if (skin.value.isSpecified) {
    return 'Специфічна дія'
  }

  return 'Недоступно'
})

const availabilityText = computed(() =>
  skin.value?.status === 'active'
    ? 'Доступний для отримання'
    : 'Отримати більше неможливо'
)

const releaseText = computed(() => {
  if (!skin.value) return ''

  return new Date(skin.value.date).toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long'
  })
})

const infoRows = computed(() => {
  const restrictions = []

  if (skin.value?.isVisaOnly) {
    restrictions.push('Тільки для карток Visa')
  }

  if (skin.value?.isAdultOnly) {
    restrictions.push('Тільки 18+ клієнти')
  }

  return [
    {
      label: 'Доступність:',
      value: availabilityText.value
    },
    {
      label: 'Умова отримання:',
      value: receiveCondition.value
    },
    {
      label: 'Випуск:',
      value: releaseText.value
    },
    ...(restrictions.length
      ? [{ label: 'Обмеження:', value: restrictions.join(', ') }]
      : []
    )
  ]
})

const isAvailable = computed(() => skin.value?.status === 'active')

const items: BreadcrumbItem[] = [
  { label: 'Головна', to: '/' },
  { label: skin.value?.name, to: '/card/' + cardId.value }
]

const title = `Скін ${skin.value?.name} Monobank`

useSeoMeta({
  title: title,
  description: skin.value?.description,
  ogTitle: title,
  ogDescription: skin.value?.description,
  ogImage: '',
  twitterImage: '',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UContainer class="flex flex-col w-full max-w-264 justify-center gap-8 lg:mt-6">
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-16 w-full justify-center">
      <div class="order-1 lg:order-2 w-full lg:w-auto flex justify-center">
        <div class="flex flex-col gap-2 w-full max-w-96">
          <div class="relative aspect-[1.58/1] overflow-hidden border border-muted rounded-2xl">
            <img
              :src="skin?.img"
              class="w-full h-full object-cover"
              :alt="title"
            >
          </div>

          <UButton
            class="hidden lg:flex h-12 w-full justify-center font-bold rounded-xl"
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            :to="isAvailable ? skin?.link : undefined"
            target="_blank"
            :disabled="!isAvailable"
            :variant="isAvailable ? 'solid' : 'outline'"
            :color="isAvailable ? 'primary' : 'neutral'"
          >
            {{ isAvailable ? 'Отримати скін' : 'Отримати більше неможливо' }}
          </UButton>
        </div>
      </div>

      <div class="order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
        <UBreadcrumb :items="items">
          <template #separator>
            <span class="mx-1 text-muted">/</span>
          </template>
        </UBreadcrumb>

        <h1 class="text-2xl font-bold mb-1">
          Скін «{{ skin?.name }}»
        </h1>

        <div class="mt-4 space-y-2">
          <div
            v-for="row in infoRows"
            :key="row.label"
            class="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-1 sm:gap-x-4"
          >
            <span class="font-bold">
              {{ row.label }}
            </span>
            <span class="text-muted">
              {{ row.value }}
            </span>
          </div>
        </div>

        <USeparator
          size="sm"
          class="mt-4"
        />

        <p class="mt-4 max-w-2xl whitespace-pre-line font-light opacity-90">
          {{ skin?.description }}
        </p>
      </div>

      <div class="order-3 w-full max-w-2xl lg:hidden mx-auto">
        <UButton
          class="h-12 w-full justify-center font-bold rounded-xl"
          trailing-icon="i-lucide-arrow-right"
          size="xl"
          :to="isAvailable ? skin?.link : undefined"
          target="_blank"
          :disabled="!isAvailable"
          :variant="isAvailable ? 'solid' : 'outline'"
          :color="isAvailable ? 'primary' : 'neutral'"
        >
          {{ isAvailable ? 'Отримати скін' : 'Отримати більше неможливо' }}
        </UButton>
      </div>
    </div>

    <NuxtLink
      to="https://github.com/toppi-me/monoskins/blob/main/app/data/skins.json"
      target="_blank"
    >
      <UAlert
        class="max-w-2xl lg:max-w-full mx-auto opacity-75 hover:opacity-100"
        title="Можуть бути неточності"
        description="Якщо десь інформація вказана невірно — ви можете це виправити"
        color="neutral"
        variant="outline"
        close
        close-icon="i-simple-icons-github"
      />
    </NuxtLink>
  </UContainer>
</template>
