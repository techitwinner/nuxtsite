<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <PageHeading :title="t('ui.navigate.blog')" :subTitle="t('pages.blog.description')" justify="center"/>
      </div>
      <img alt="" class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/AuroraScratch.png"/>
    </section>
    <section id="container">
      <div id="wrapper" class="flex flex-col gap-8">
        <TagBadges/>
        <ArticlesCardTray/>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#imports";
import ArticlesCardTray from "~/components/Blog/ArticlesCardTray.vue";
import TagBadges from "~/components/Blog/TagBadges.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath()
</script>