<template>
  <div>
    <div v-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>
    <div v-else-if="displayedPosts.length === 0" class="text-center">
      No blog posts available.
    </div>
    <div v-else class="flex flex-col gap-4">
      <p class="text-4xl font-bold font-source-serif" v-if="displayHeadTitle">{{ $t('pages.blog.allPosts') }}</p>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <ClientOnly>
          <nuxt-link :href="localePath(`/blog/${post.attributes.slug}`)" v-for="post in displayedPosts" :key="post.id" class="transition-all bg-slate-100 dark:bg-slate-900 border-base-200 dark:border-base-100 border rounded-2xl shadow-sm hover:shadow-lg overflow-hidden hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
            <div class="justify-between h-full flex flex-col">
              <section class="flex flex-col gap-2 p-4">
                <div class="rounded-lg aspect-[5/3] relative object-cover mb-3 overflow-hidden justify-center flex items-center">
                  <div class="relative top-0 flex h-full w-full">
                    <LazyNuxtImg alt="" quality="60" class="relative w-full h-full object-cover" :src="`${config.public.strapiUrl}${post.attributes?.coverImage?.data?.attributes?.url}`"/>
                  </div>
                </div>
                <p class="no-margin text-2xl font-bold font-source-serif">{{ post.attributes.title }}</p>
                <p class="text-base opacity-50">{{ post.attributes.summary }}</p>
              </section>
              <section class="flex flex-col gap-2 p-4 border-t border-base-200">
                <section class="flex flex-wrap">
                  <div class="badge badge-primary">{{post.attributes.tag}}</div>
                </section>
                <section class="text-base items-center flex gap-1"><i class="text-[24px] ph ph-clock"></i>{{ formatPostDate(post.attributes.publishedAt) }}</section>
              </section>
            </div>
          </nuxt-link>
        </ClientOnly>
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#imports";
import { useBlogPosts } from '~/composables/useBlogPosts';
import { useRuntimeConfig } from "#app";
import { formatDistanceToNow } from 'date-fns';
import { enUS, de, th } from 'date-fns/locale';

const props = defineProps({
  maxPosts: {
    type: Number,
    default: Infinity
  },
  order: {
    type: String,
    default: 'latest-to-oldest',
    validator: (value) => ['latest-first', 'oldest-first'].includes(value)
  },
  displayHeadTitle: {
    type: Boolean,
    default: true
  }
});

const { t, locale } = useI18n();
const { fetchAllPosts } = useBlogPosts();

const localePath = useLocalePath()

const config = useRuntimeConfig()

const { data: blogPosts, error } = await useAsyncData('post', () => fetchAllPosts())

const lastToOldDisplayedPosts = computed(() => {
  if (blogPosts.value) {
    const reversedPosts = [...blogPosts.value].reverse();
    return reversedPosts.slice(0, props.maxPosts);
  }
  return [];
});

const oldToLastDisplayedPosts = computed(() => {
  if (blogPosts.value) {
    // Get latest posts first
    return blogPosts.value.slice(0, props.maxPosts);
  }
  return [];
});

const displayedPosts = computed(() => {
  return props.order === 'oldest-first' ? oldToLastDisplayedPosts.value : lastToOldDisplayedPosts.value;
});

const coverImageUrl = computed(() => {
  const baseUrl = config.public.strapiUrl || '';
  const imageUrl = post.value?.attributes?.coverImage?.data?.attributes?.url;
  return imageUrl ? `${baseUrl}${imageUrl}` : '';
});

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