<template>
  <div>
    <div class="fixed -z-[100] h-full w-full bg-slate-100 dark:bg-slate-950"></div>
    <NavigationBar/>
    <main class="flex flex-col bg-slate-100 dark:bg-slate-950 items-center">
      <div class="flex flex-col w-full">
        <slot/>
      </div>
    </main>
    <Footer/>
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
  #wrapper2 {
    @apply flex flex-col items-center gap-8 z-[1] max-w-[1024px] px-4 py-8 w-full;
  }
}
* ::selection {
  background-color: black !important;
  color: white !important;
}

@media (prefers-color-scheme: dark) {
  * ::selection {
    background-color: white !important;
    color: black !important;
  }
}
</style>

<script setup lang="ts">
  import { ref, provide } from 'vue';

  const drawerState = ref({ isOpen: false });

  provide('drawerState', drawerState);
</script>