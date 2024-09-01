<template>
  <div class="w-full">
    <section v-if="tags.length" class="flex flex-col w-full gap-4">
      <h3>{{ $t('pages.blog.allTags') }}</h3>
      <section class="flex flex-wrap gap-2">
        <UButton :to="localePath(`/blog/tag/${tag}`)" color="black" v-for="tag in tags" :label="tag" :key="tag"/>
      </section>
    </section>
    <section v-else>
      <p>Not a single tag is found.</p>
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
