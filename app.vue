<template>
  <Html>
    <NuxtLoadingIndicator color="white" class="hidden dark:block" />
    <NuxtLoadingIndicator color="black" class="block dark:hidden" />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </Html>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'th'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Techit Thawiang` : 'Techit Thawiang'
  },
  link: [
    {
      rel: 'icon',
      href: '/techit-favicon.svg'
    }
  ]
})
</script>

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
}
.page-leave-to,
.layout-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: no-preference) and (min-width: 396px) {
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
    transform: translateY(16px);
  }
  .page-leave-to,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(-16px);
  }
}
</style>