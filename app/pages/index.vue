<script setup lang="ts">
import type {Skin} from '~/interfaces/skin'
import skins from '~/data/skins.json'

const filterItems = [
  'Усі',
  'Безкоштовні',
  'За дію',
  'Донат на банку',
  'Підписка Base',
  'Можливо отримати',
  'Неможливо отримати'
]

const selected = ref<string>('Усі')

const skinsMap = skins as unknown as Record<string, Skin>

const skinsList = computed<Skin[]>(() =>
  Object.values(skinsMap)
)

const filteredSkins = computed<Skin[]>(() => {
  switch (selected.value) {
    case 'Усі':
      return skinsList.value

    case 'Безкоштовні':
      return skinsList.value.filter(skin => skin.minimumValue === 0)

    case 'Донат на банку':
      return skinsList.value.filter(skin => skin.isJar)

    case 'Підписка Base':
      return skinsList.value.filter(skin => skin.isSubscription)

    case 'За дію':
      return skinsList.value.filter(skin => skin.isSpecified)

    case 'Можливо отримати':
      return skinsList.value.filter(skin => skin.status === 'active')

    case 'Неможливо отримати':
      return skinsList.value.filter(skin => skin.status === 'expired')

    default:
      return skinsList.value
  }
})

const sortedSkins = computed<Skin[]>(() => {
  return [...filteredSkins.value].sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === 'active' ? -1 : 1
    }

    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    const timeDiff = dateB - dateA

    if (timeDiff !== 0) {
      return timeDiff
    }

    const nameDiff = a.name.localeCompare(b.name, 'uk', {
      sensitivity: 'base',
      numeric: true
    })

    if (nameDiff !== 0) {
      return nameDiff
    }

    return a.id.localeCompare(b.id)
  })
})
</script>

<template>
  <UContainer>
    <div class="flex flex-col gap-1">
      <h1 class="text-xl font-bold">
        Усі скіни на картку Monobank
      </h1>

      <p class="text-muted">
        На сервісі Monoskins зібрано повний список скінів для карток monobank.
        Тут можна швидко переглянути всі доступні дизайни карток.
      </p>
    </div>

    <div class="mt-6 overflow-x-auto pb-3">
      <URadioGroup
        v-model="selected"
        :items="filterItems"
        orientation="horizontal"
        variant="card"
        :ui="{
          label: 'whitespace-nowrap'
        }"
      />
    </div>

    <div
      v-if="filteredSkins.length"
      class="
        mt-6 grid gap-3
        grid-cols-1
        sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
      "
    >
      <NuxtLink
        v-for="skin in sortedSkins"
        :key="skin.id"
        class="w-full"
        :to="`/skin/${skin.id}`"
      >
        <SkinCard
          :skin="skin"
        />
      </NuxtLink>
    </div>

    <div
      v-else
      class="mt-12 text-center text-muted"
    >
      За обраною категорією скіни не знайдені
    </div>

    <NuxtLink
      to="https://github.com/toppi-me/monoskins"
      target="_blank"
    >
      <UAlert
        class="mt-12 mb-12 mx-auto opacity-75 hover:opacity-100"
        title="Допоможіть нам стати кращими"
        description="Якщо ви помітили, що в каталозі бракує якогось скіна, будь ласка, поділіться ним через Issue або Pull Request на GitHub"
        color="neutral"
        variant="outline"
      />
    </NuxtLink>
  </UContainer>
</template>
