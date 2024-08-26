<template>
  <Html>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <Transition name="load">
      <div v-if="isLoading" class="fixed inset-0 bg-slate-100 dark:bg-slate-900 z-[1000] flex items-center justify-center">
        <div class="text-center">
          <UProgress animation="carousel" />
          <p class="mt-4 text-xl font-semibold">{{ $t('ui.system.loading') }}</p>
        </div>
      </div>
    </Transition>
  </Html>
</template>

<style>
.load-enter-active,
.load-leave-active {
  transition: opacity 0.3s ease;
}

.load-enter-from,
.load-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  // Make the loading state available globally
  const isLoading = ref(false)
  provide('isLoading', isLoading)

  onMounted(() => {
    // Adding a delay for the transition effect when the page is first loaded
    setTimeout(() => {
      isLoading.value = false
    }, 350) // 500ms delay for the fade-out transition
  })
</script>