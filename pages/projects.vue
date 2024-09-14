<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child">
        <PageHeading :title="t('pages.projects.title')" :subTitle="t('pages.projects.description')"/>
      </div>
    </section>
    <section class="page-main">
      <div class="blog-card-child">
        <ProjectsCardTray/>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ArticlesCardTray from "~/components/Blog/BlogArticlesCardTray.vue";
import TagBadges from "~/components/Blog/BlogTagBadges.vue";

const {t} = useI18n()
</script>