<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child">
        <PageHeading :title="t('pages.blog.personalBlog')" :subTitle="t('pages.blog.description')"/>
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
import ArticlesCardTray from "~/components/Blog/BlogArticlesCardTray.vue";
import TagBadges from "~/components/Blog/BlogTagBadges.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath()


useSeoMeta({
  title: 'Personal Blog',
  ogTitle: '%s - Techit Thawiang',
  description: 'A collection of Techit&apos;s  ',
  ogDescription: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://www.konkamon.live/blog'
})
</script>