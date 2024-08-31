<script setup lang="ts">
import {useI18n} from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div class="z-10 absolute fade-in-but-faster object-cover top-0 left-0 w-full h-full items-center justify-center flex flex-col gap-8 backdrop-blur-lg">
        <p class="text-5xl font-black">ON WORKING</p>
        <UButton size="xl" color="black">{{$t('ui.navigate.home')}}</UButton>
      </div>
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <PageHeading :title="t('ui.navigate.contact')" :subTitle="t('pages.contact.description')" justify="center"/>
      </div>
      <img alt="" class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/AuroraScratch.png"/>
    </section>
  </div>
</template>

<style scoped>

</style>