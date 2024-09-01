<template>
  <div>
    <div v-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>
    <div v-else-if="blogPosts.length === 0" class="text-center">
      No blog posts available.
    </div>
    <div v-else class="flex flex-col gap-4">
      <h3>{{ $t('pages.blog.allPosts') }}</h3>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ClientOnly>
          <ULink :to="localePath(`/blog/${post.attributes.slug}`)" v-for="post in blogPosts" :key="post.id" class="transition-all bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg overflow-hidden border b-div hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
            <div class="p-4 gap-2 flex flex-col">
              <LazyNuxtImg alt="" quality="80"  class="rounded-lg aspect-[5/3] object-cover mb-3" :src="`${config.public.strapiUrl}${post.attributes?.coverImage?.data?.attributes?.url}`"/>
              <h4 class="no-margin">{{ post.attributes.title }}</h4>
              <p class="text-base opacity-50">{{ post.attributes.summary }}</p>
              <section class="flex flex-wrap">
                <UBadge size="md" color="primary" variant="soft">{{post.attributes.tag}}</UBadge>
              </section>
              <section class="text-base items-center flex gap-1"><i class="text-[24px] ph ph-clock"></i>{{ formatPostDate(post.attributes.publishedAt) }}</section>
            </div>
          </ULink>
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

const { t, locale } = useI18n();
const { fetchAllPosts } = useBlogPosts();

const localePath = useLocalePath()

const blogPosts = ref([]);
const config = useRuntimeConfig()
const error = ref(null);

onMounted(async () => {
  try {
    blogPosts.value = await fetchAllPosts()
  } catch (e) {
    console.error('Error fetching blog posts:', e)
    error.value = 'An error occurred while fetching blog posts. Please try again later.'
  }
})

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