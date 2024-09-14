<script setup lang="ts">
  import {definePageMeta} from "#imports";

  definePageMeta({
    layout: "nothing",
  })

  const localePath = useLocalePath()
</script>

<template>
  <div>
    <StuffFileIndexer>
      <ThemeSwitcher additionalClass="btn-sm" additionalIconClass="w-5 h-5"/>
      <LazyNuxtLink :href="localePath('/')" class="btn btn-circle btn-sm btn-ghost"><icon class="w-5 h-5" name="ph:house"/></LazyNuxtLink>
    </StuffFileIndexer>
  </div>
</template>

<style scoped>

</style>