<template>
  <Html>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </Html>
</template>

<style>
.page-enter-active,
.layout-enter-active {
  transition: all 0.45s cubic-bezier(var(--easeOut));
}
.page-leave-active,
.layout-leave-active {
  transition: all 0.25s cubic-bezier(var(--easeIn));
}
.page-enter-from,
.layout-enter-from {
  opacity: 0;
  filter: blur(16px);
  transform: translateY(32px);
}
.page-leave-to,
.layout-leave-to {
  opacity: 0;
  filter: blur(16px);
  transform: translateY(-32px);
}
</style>
<script setup lang="ts">
</script>