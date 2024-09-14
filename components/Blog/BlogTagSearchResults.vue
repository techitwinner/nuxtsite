<template>
  <div class="ct">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="posts.length === 0">No posts found with this tag.</div>
    <div class="page-main">
      <div class="flex-col md:flex-row main-child-row">
        <section class="w-full md:w-[50%] items-start">
          <PageHeading :title="`${$t('pages.blog.tags.oneTag.postsTaggedWith', {tag: tagName})}`"/>
        </section>
        <section class="w-full md:w-[50%] gap-2 flex flex-col">
          <nuxt-link v-for="post in posts" :key="post.id" :to="localePath(`/blog/${post.attributes?.slug}`)" class="btn btn-block justify-between min-h-12 h-fit">
            <p class="text-xl font-semibold leading-tight">{{ post.attributes?.title || 'null' }}</p>
            <section class="flex flex-row gap-4">
              <section class="flex flex-row gap-2 items-center font-medium">
                <i class="ph ph-arrow-right text-2xl"/>
              </section>
            </section>
          </nuxt-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogPosts } from '~/composables/useBlogPosts'
import {formatDistanceToNow} from "date-fns";
import {de, enUS, th} from "date-fns/locale";
import {useI18n} from "vue-i18n";
import {useLocalePath} from "#i18n";
import { useAsyncData } from '#app';

const route = useRoute()
const {locale, t} = useI18n()
const localePath = useLocalePath()
const { fetchPostsByTag } = useBlogPosts()

const { data: posts, error } = await useAsyncData('posts', () =>
    fetchPostsByTag(route.params.tag as string)
);
const tagName = route.params.tag as string

const getDateFnsLocale = () => {
  switch (locale.value) {
    case 'de':
      return de;
    case 'th':
      return th;
    default:
      return enUS;
  }
};

const formatPostDate = (dateString) => {
  const dateLocale = getDateFnsLocale();
  return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: dateLocale });
};
</script>