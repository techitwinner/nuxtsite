<template>
  <Html>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </Html>
</template>

<style>
.page-enter-active {
  transition: all 0.3s;
}
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
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
</script>