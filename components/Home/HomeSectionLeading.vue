<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  emoji: String,
})
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <icon :name="props.emoji" class="h-32 w-32"/>
    <section class="flex flex-col gap-4 items-center text-center">
      <p class="text-5xl font-bold font-serif">{{props.title}}</p>
      <p>{{props.description}}</p>
    </section>
  </div>
</template>

<style scoped>

</style>