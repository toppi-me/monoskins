<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })

const is404 = computed(() => props.error.statusCode === 404)
const title = computed(() => is404.value ? 'Сторінку не знайдено' : 'Сталася помилка')
const description = computed(() => is404.value ? 'Можливо, вона була видалена або переміщена.' : props.error.message)

useHead({
  title: `${props.error.statusCode} - ${title.value}`,
  htmlAttrs: { lang: 'uk' }
})
</script>

<template>
  <UApp class="w-full min-h-screen flex flex-col">
    <UHeader
      title="monoskins"
      :ui="{ toggle: 'hidden', panel: 'hidden' }"
    >
      <template #left>
        <UButton
          variant="ghost"
          color="neutral"
          class="p-0 hover:bg-transparent"
          @click="handleError"
        >
          <UIcon
            class="text-indigo-500 dark:text-indigo-400"
            name="i-icn-logo"
            size="20"
          />
        </UButton>
      </template>
      <template #right>
        <UButton
          color="neutral"
          variant="ghost"
          to="https://send.monobank.ua/jar/3rraWQ84GS"
          target="_blank"
        >
          Подякувати
        </UButton>
        <USeparator
          class="h-4 ml-3 mr-3"
          size="md"
          orientation="vertical"
        />
        <UColorModeButton />
        <UButton
          to="https://github.com/toppi-me/monoskins"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain class="flex-1 flex items-center justify-center">
      <UContainer class="max-w-md w-full text-center space-y-1">
        <div class="space-y-2">
          <p class="text-4xl font-bold text-indigo-500 dark:text-indigo-400">
            {{ error.statusCode }}
          </p>
          <h1 class="text-3xl font-bold">
            {{ title }}
          </h1>
          <p class="text-muted">
            {{ description }}
          </p>
        </div>

        <div class="pt-4 flex justify-center gap-3">
          <UButton
            class="cursor-pointer"
            size="lg"
            color="neutral"
            variant="outline"
            @click="handleError"
          >
            На головну
          </UButton>
        </div>
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        <div class="flex flex-col gap-2">
          <UButton
            variant="ghost"
            color="neutral"
            class="p-0 hover:bg-transparent"
            @click="handleError"
          >
            <UIcon
              class="text-indigo-500 dark:text-indigo-400"
              name="i-icn-logo"
              size="20"
            />
          </UButton>
        </div>
      </template>
      <template #right>
        <UButton
          to="https://github.com/toppi-me/monoskins"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
