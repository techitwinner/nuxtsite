<template>
  <div>
    <div v-if="post" class="max-w-[1024px] mx-auto px-4 py-8 border-x b-div gap-2 flex flex-col">
      <UBreadcrumb :links="breadcrumbSlug" />
      <UDivider class="my-4"/>
      <ClientOnly>
        <h1 class="text-6xl font-bold mb-4">{{ post.attributes.title }}</h1>
        <p class="opacity-50 mb-4">{{ post.attributes.summary }}</p>
        <p>{{formattedDate}}</p>
        <img v-if="coverImageUrl" :src="coverImageUrl" :alt="post.attributes.title" class="w-full aspect-[20/9] object-cover mb-6 rounded-lg shadow-md">
        <UDivider/>
        <div class="prose prose-slate dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none" v-html="compiledContent"></div>
      </ClientOnly>
    </div>
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 py-8 text-red-500">
      {{ error }}
    </div>
    <div v-else class="max-w-4xl mx-auto px-4 py-8">
      Loading...
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRuntimeConfig } from '#app'
import { useBlogPosts } from '~/composables/useBlogPosts'
import { compileMarkdown } from "~/utils/markdownIt";
import {attribute} from "postcss-selector-parser";
import {useI18n} from "vue-i18n";
import { useLocalePath } from "#imports";
import { format } from 'date-fns';

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const {t} = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { fetchPostBySlug } = useBlogPosts()

const post = ref(null)
const error = ref(null)

const fetchPost = async (slug: string) => {
  try {
    post.value = await fetchPostBySlug(slug)
  } catch (e) {
    throw error;
  }
}

onMounted(() => {
  fetchPost(route.params['slug'] as string)
})

watch(() => route.params['slug'], (newSlug) => {
  fetchPost(newSlug as string)
});

const compiledContent = computed(() => {
  return post.value ? compileMarkdown(post.value.attributes.content as string) : 'Oh no, the system cannot compile your markdown post, we are sorry'
});

const coverImageUrl = computed(() => {
  const baseUrl = config.public.strapiUrl || '';
  const imageUrl = post.value?.attributes?.coverImage?.data?.attributes?.url;
  return imageUrl ? `${baseUrl}${imageUrl}` : '';
});

const formattedDate = computed(() => {
  return post.value ? format(new Date(post.value?.attributes?.publishedAt), 'MMMM dd, yyyy - HH:mm') : '';
});

let breadcrumbSlug = ref([]);

watchEffect(() => {
  if (post.value) {
    breadcrumbSlug.value = [{
      label: 'Home',
      icon: 'ph:house',
      to: localePath('/')
    }, {
      label: t('ui.navigate.blog'),
      icon: 'ph:chats-teardrop',
      to: localePath('/blog')
    }, {
      label: post.value.attributes.title || '',
      icon: 'i-heroicons-link'
    }];
  }
});
</script>

<style>
/* Add any additional styles here */
</style>