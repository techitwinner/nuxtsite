<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child">
        <PageHeading :title="t('ui.navigate.blog')" :subTitle="t('pages.blog.description')"/>
      </div>
    </section>
    <section class="page-main">
      <div class="blog-card-child">
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