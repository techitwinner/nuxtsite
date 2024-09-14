<template>
  <div class="w-full">
    <section v-if="tags.length" class="flex flex-col w-full gap-4">
      <p class="text-4xl font-bold font-serif">{{ $t('pages.blog.allTags') }}</p>
      <section class="flex flex-wrap gap-2">
        <LazyNuxtLink :href="localePath(`/blog/tag/${tag}`)" class="btn btn-sm btn-primary rounded-full" v-for="tag in tags" :key="tag">{{tag}}</LazyNuxtLink>
      </section>
    </section>
    <section v-else class="flex flex-col w-full gap-4 items-center">
      <p>No blog tags available.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBlogPosts } from '~/composables/useBlogPosts'

const localePath = useLocalePath()

const { fetchTags } = useBlogPosts()
const tags = ref([])

onMounted(async () => {
  try {
    tags.value = await fetchTags()
  } catch (e) {
    console.error('Error fetching tags:', e)
  }
})
</script>
