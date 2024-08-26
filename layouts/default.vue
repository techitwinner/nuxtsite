<template>
  <div>
    <div class="fixed -z-[100] h-full w-full bg-slate-100 dark:bg-slate-950"></div>
    <NavigationHead/>
    <NavigationBar :show-extra="!isHeaderVisible"/>
    <main class="flex flex-col bg-slate-100 dark:bg-slate-950 items-center">
      <div class="flex flex-col w-full">
        <slot/>
      </div>
    </main>
  </div>
</template>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  #wrapper {
    padding: 2rem 1rem;
    max-width: 1024px;
    width: 100%;
  }
}
</style>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const isHeaderVisible = ref(true);
  const headerRef = ref(null);

  onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          isHeaderVisible.value = entry.isIntersecting;
        },
        { threshold: 0 }
    );

    if (headerRef.value) {
      observer.observe(headerRef.value);
    }
  });
</script>