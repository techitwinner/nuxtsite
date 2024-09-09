<template>
  <div class="tooltip" :data-tip="$t('ui.action.random')">
    <button @click="navigateToRandomPost" class="btn btn-primary btn-square btn-outline">
      <icon name="ph:dice-five" class="w-5 h-5"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useBlogPosts } from '~/composables/useBlogPosts';
import {useLocalePath} from "#i18n";

const router = useRouter();
const { t } = useI18n()
const localePath = useLocalePath()
const { fetchAllPosts } = useBlogPosts();
const blogPosts = ref<any[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    blogPosts.value = await fetchAllPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    loading.value = false;
  }
});

const getRandomPostUrl = () => {
  if (blogPosts.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * blogPosts.value.length);
    const randomPost = blogPosts.value[randomIndex];
    return localePath(`/blog/${randomPost.attributes.slug}`);
  }
  return '#'; // Fallback if no posts are available
};

const navigateToRandomPost = () => {
  if (loading.value) return; // Prevent action while loading
  const randomPostUrl = getRandomPostUrl();
  router.push(randomPostUrl);
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
