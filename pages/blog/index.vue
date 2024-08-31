<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <PageHeading :title="t('ui.navigate.blog')" :subTitle="t('pages.blog.description')" justify="center"/>
      </div>
      <img alt="" class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/AuroraScratch.png"/>
    </section>
    <section id="container" class="py-12">
      <div id="wrapper">
        <div v-if="error" class="text-red-500 text-center">
          {{ error }}
        </div>
        <div v-else-if="blogPosts.length === 0" class="text-center">
          No blog posts available.
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ClientOnly>
            <ULink :to="localePath(`/blog/${post.attributes.slug}`)" v-for="post in blogPosts" :key="post.id" class="transition-all bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg overflow-hidden border b-div hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
              <div class="p-6 gap-2 flex flex-col">
                <img alt="" class="rounded-lg aspect-[5/3] object-cover mb-3" :src="`${config.public.strapiUrl}${post.attributes?.coverImage?.data?.attributes?.url}`"/>
                <h4 class="no-margin">{{ post.attributes.title }}</h4>
                <p class="text-base opacity-75">{{ post.attributes.summary }}</p>
                <section class="flex flex-wrap">
                  <UBadge size="md" color="primary" variant="soft">{{post.attributes.category}}</UBadge>
                </section>
                <section class="text-base items-center flex gap-1"><i class="text-[24px] ph ph-clock"></i>{{ formatPostDate(post.attributes.publishedAt) }}</section>
              </div>
            </ULink>
          </ClientOnly>
        </div>
      </div>
    </section>
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