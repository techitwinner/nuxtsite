<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div id="wrapper" class="z-10">
        <PageHeading justify="center" :title="`${$t('pages.blog.tags.oneTag.postsTaggedWith', {tag: tag})}`"/>
      </div>
      <img alt="" class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/AuroraScratch.png"/>
    </section>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="posts.length === 0">No posts found with this tag.</div>
    <section id="container">
      <div id="wrapper" class="flex flex-col gap-2">
        <ULink v-for="post in posts" :key="post.id" :to="localePath(`/blog/${post.attributes?.slug}`)" class="flex flex-row items-center justify-between bg-black bg-opacity-0 hover:bg-opacity-5 active:opacity-75 py-2 px-3 rounded-lg">
          <h3 class="text-xl font-semibold leading-tight">{{ post.attributes?.title || 'null' }}</h3>
          <section class="flex flex-row gap-4">
            <section class="flex flex-row gap-2 items-center">
              <i class="ph ph-clock text-2xl"/><p class="text-base">{{ formatPostDate(post.attributes?.publishedAt) }}</p>
            </section>
          </section>
        </ULink>
      </div>
    </section>
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

const route = useRoute()
const {locale, t} = useI18n()
const localePath = useLocalePath()
const { fetchPostsByTag } = useBlogPosts()

const tag = ref(route.params.tag as string)
const posts = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    posts.value = await fetchPostsByTag(tag.value)
  } catch (e) {
    console.error('Error fetching posts by tag:', e)
    error.value = 'An error occurred while fetching posts. Please try again later.'
  } finally {
    loading.value = false
  }
})

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