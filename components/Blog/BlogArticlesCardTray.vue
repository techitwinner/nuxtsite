<template>
  <div>
    <div v-if="error" class="text-error text-center">
      {{ error }}
    </div>
    <div v-else-if="displayedPosts.length === 0" class="text-center">
      No blog posts available.
    </div>
    <div v-else class="flex flex-col gap-4">
      <p class="text-4xl font-bold font-serif" v-if="displayHeadTitle">{{ $t('pages.blog.allPosts') }}</p>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <ClientOnly>
          <LazyNuxtLink
              :href="localePath(`/blog/${post.attributes.slug}`)"
              v-for="post in displayedPosts" :key="post.id"
              class="whatever-this-class-is-please-ignore-this-as-it-is-for-appearance-purposes overflow-hidden text-base transition-all rounded-2xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-100 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-100 border-slate-200 dark:border-slate-800 dark:hover:border-slate-200 hover:border-slate-800 border items-center grid grid-cols-1 shadow-sm hover:shadow-xl hover:-translate-y-1 active:shadow-sm active:translate-y-0"
          >
            <div class="grid grid-cols-1 apply w-fit h-fit relative aspect-video">
              <section class="w-full apply overflow-hidden aspect-video">
                <LazyNuxtImg :alt="post.attributes.title" quality="60" class="relative w-full h-full object-cover himg" :src="`${config.public.strapiUrl}${post.attributes?.coverImage?.data?.attributes?.url}`"/>
              </section>
              <section class="w-full h-full absolute items-center flex justify-center aspect-video">
                <LazyNuxtImg :alt="post.attributes.title" quality="60" class="relative timg rounded-2xl border object-cover shadow-sm" :src="`${config.public.strapiUrl}${post.attributes?.coverImage?.data?.attributes?.url}`"/>
              </section>
            </div>
            <div class="w-full p-4">
              <div class="w-full flex flex-row mb-2 gap-4 items-center">
                <p class="opacity-50">{{formatPostDate(post.attributes.publishedAt)}}</p>
                <LazyNuxtLink class="badge badge-primary badgec" :href="localePath(`/blog/tag/${post.attributes.tag}`)">{{post.attributes.tag}}</LazyNuxtLink>
              </div>
              <h2 class="text-2xl font-serif">{{post.attributes.title}}</h2>
              <p class="opacity-50 line-clamp-3">{{post.attributes.summary}}</p>
            </div>
          </LazyNuxtLink>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<style scoped>
.whatever-this-class-is-please-ignore-this-as-it-is-for-appearance-purposes {
  .apply {
    .himg {
      @apply transition-all aspect-video;
    }
    .timg {
      @apply scale-[0.65] opacity-0 transition-all;
    }
    .ec {
      @apply hidden;
    }
  }
  .badgec {
    @apply filter-none scale-100 hover:scale-[1.05];
  }
}
.whatever-this-class-is-please-ignore-this-as-it-is-for-appearance-purposes:hover {
  .apply {
    .himg {
      @apply blur-lg scale-125;
    }
    .timg {
      @apply flex scale-75 opacity-100 transition-all;
    }
    .ec {
      @apply flex flex-col;
    }
  }
  .badgec {
    @apply invert;
  }
}
</style>

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
    default: 'latest-to-oldest'
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