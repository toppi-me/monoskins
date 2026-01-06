<script setup>
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ],
  htmlAttrs: {
    lang: 'uk'
  }
})

const title = 'Усі скіни Monobank'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '',
  twitterImage: '',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp class="w-full">
    <UHeader
      title="monoskins"
      :ui="{
        toggle: 'hidden',
        panel: 'hidden'
      }"
    >
      <template #left>
        <NuxtLink to="/">
          <UIcon
            class="text-indigo-500 dark:text-indigo-400"
            name="i-icn-logo"
            size="20"
          />
        </NuxtLink>
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

        <UColorModeButton/>

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

    <UMain class="pt-8">
      <NuxtPage/>
    </UMain>

    <UFooter>
      <template #left>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/">
            <UIcon
              class="text-indigo-500 dark:text-indigo-400"
              name="i-icn-logo"
              size="20"
            />
          </NuxtLink>
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
