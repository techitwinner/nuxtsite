<script setup lang="ts">
const {t} = useI18n()
</script>

<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child">
        <div class="flex flex-col items-center justify-center">
          <LazyNuxtImg src="https://files.techit.win/images/shapes/SawasdeeKrubCalligraphy.svg" class="w-96 dark:invert"/>
        </div>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child">
        <div class="grid grid-cols-1 gap-4">
          <section class="flex flex-col gap-8">
            <p class=" font-medium">{{$t('pages.about.content.1')}}</p>
            <p class=" font-medium">{{$t('pages.about.content.2')}}</p>
            <div class="flex flex-col gap-2">
              <p class=" font-medium">{{$t('pages.about.content.3')}}</p>
              <LazyNuxtLink href="https://files.techit.win/archives/techit.win/Sept_5_2023_Techit's_Home.html" class="flex flex-row gap-4 items-center link link-hover">
                <p class="font-light">Techit's Home</p>
                <icon name="ph:arrow-right" class="w-6 h-6"/>
              </LazyNuxtLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>