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
  transition: all 0.5s cubic-bezier(var(--easeOut));
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(var(--easeIn));
}
.page-enter-from {
  opacity: 0;
  filter: blur(16px);
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  filter: blur(16px);
  transform: translateY(-16px);
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