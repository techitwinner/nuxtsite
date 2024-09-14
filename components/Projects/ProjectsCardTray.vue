<template>
  <div>
    <div v-if="error" class="text-error text-center">
      {{ error }}
    </div>
    <div v-else-if="displayedPosts.length === 0" class="text-center">
      Cannot find project list, please try again later.
    </div>
    <div v-else class="flex flex-col gap-4">
      <p class="text-4xl font-bold font-serif" v-if="displayHeadTitle">{{ $t('pages.projects.allProjects') }}</p>
      <section class="grid grid-cols-2 gap-2 w-full">
        <ClientOnly>
          <a v-for="post in displayedPosts" :key="post.id" @click="openModal(post.id)" class="btn btn-ghost h-fit p-0 w-full justify-between overflow-hidden rounded-2xl">
            <section class="flex flex-row items-center gap-2">
              <LazyNuxtImg class="w-16 h-16 m-2 rounded-lg" :src="`${config.public.strapiUrl}${post.attributes.coverImage.data[0].attributes.url}`"/>
              <div class="items-start text-start w-fit overflow-clip">
                <h2 class="text-2xl font-bold">{{post.attributes.name}}</h2>
                <p class="truncate font-medium opacity-50">{{post.attributes.summary}}</p>
              </div>
            </section>
          </a>
        </ClientOnly>
      </section>
    </div>
    <ClientOnly>
      <div v-if="selectedPost" class="fixed inset-0 flex items-center justify-center z-[1000]">
        <div class="bg-black bg-opacity-50 fixed inset-0 w-screen h-screen" @click="closeModal"/>
        <div class="bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl max-w-2xl w-full z-[1001] scale-in-blur">
          <div class="w-full justify-between flex flex-row items-center mb-4">
            <h2 class="text-3xl font-bold">{{ selectedPost.attributes.name }}</h2>
            <button @click="closeModal" class="btn btn-ghost btn-circle"><icon name="ph:x" class="w-6 h-6"/></button>
          </div>
          <LazyNuxtImg class="w-full h-64 object-cover mb-4 rounded-lg" :src="`${config.public.strapiUrl}${selectedPost.attributes.coverImage.data[0].attributes.url}`"/>
          <p class="mb-4">{{ selectedPost.attributes.summary }}</p>
          <p class="text-sm text-gray-500 mb-4">{{ formatPostDate(selectedPost.attributes.createdAt) }}</p>
          <a :href="selectedPost.attributes.publicUrl" class="btn btn-primary mr-2">Learn More</a>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#imports";
import { useProjectLists } from '~/composables/useProjectLists';
import { useRuntimeConfig } from "#app";
import { formatDistanceToNow } from 'date-fns';
import { enUS, th } from 'date-fns/locale';

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
const { fetchAllProjects } = useProjectLists();

const localePath = useLocalePath()

const config = useRuntimeConfig()

const { data: projectList, error } = await useAsyncData('post', () => fetchAllProjects())

const lastToOldDisplayedProjects = computed(() => {
  if (projectList.value) {
    const reversedPosts = [...projectList.value].reverse();
    return reversedPosts.slice(0, props.maxPosts);
  }
  return [];
});

const oldToLastDisplayedProjects = computed(() => {
  if (projectList.value) {
    // Get latest posts first
    return projectList.value.slice(0, props.maxPosts);
  }
  return [];
});

const displayedPosts = computed(() => {
  return props.order === 'oldest-first' ? oldToLastDisplayedProjects.value : lastToOldDisplayedProjects.value;
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

const selectedPostId = ref(null);

const selectedPost = computed(() => {
  if (selectedPostId.value === null) return null;
  return displayedPosts.value.find(post => post.id === selectedPostId.value);
});

const openModal = (postId) => {
  selectedPostId.value = postId;
};

const closeModal = () => {
  selectedPostId.value = null;
};
</script>