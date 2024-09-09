<template>
  <div class="ct -mt-20">
    <ClientOnly>
      <section v-if="post" class="page-main">
        <div class="blog-slug-child">
          <LazyNuxtImg :src="coverImageUrl" class="aspect-[14/9] w-full rounded-2xl"/>
        </div>
        <div class="flex flex-col w-full max-w-[56rem] justify-center items-center gap-8 p-4 mt-8">
          <PageHeading :title="post.attributes.title" :subTitle="post.attributes.summary"/>
        </div>
        <div class="blog-slug-child flex-row">
          <section class="addt">
            <p class="font-source-serif font-bold">DATE</p>
            <p class="text-base">{{formattedDate}}</p>
          </section>
          <div class="divider divider-horizontal"/>
          <section class="addt">
            <p class="font-source-serif font-bold">TAG</p>
            <nuxt-link :href="localePath(`/blog/tag/${post.attributes.tag}`)" class="btn btn-primary btn-sm rounded-full">{{post.attributes.tag}}</nuxt-link>
          </section>
        </div>
        <div class="blog-slug-child">
          <div class="prose prose-slate dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none" v-html="compiledContent"></div>
        </div>
      </section>
      <section v-else-if="error" class="page-main">
        <PageHeading :title="error"/>
      </section>
      <section v-else class="max-w-4xl mx-auto px-4 py-8">
        Loading...
      </section>
    </ClientOnly>
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

const { data: post, error } = await useAsyncData('post', () => fetchPostBySlug(route.params['slug'] as string))

const compiledContent = computed(() => {
  return post.value ? compileMarkdown(post.value.attributes.content as string) : 'Oh no, the system cannot compile your markdown post, we are sorry'
});

const coverImageUrl = computed(() => {
  const baseUrl = config.public.strapiUrl || '';
  const imageUrl = post.value?.attributes?.coverImage?.data?.attributes?.url;
  return imageUrl ? `${baseUrl}${imageUrl}` : '';
});

const formattedDate = computed(() => {
  return post.value ? format(new Date(post.value?.attributes?.publishedAt), 'MMM dd, yyyy') : '';
});
</script>

<style>
/**/
</style>