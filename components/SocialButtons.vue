<script setup lang="ts">
const social = [
  {
    name: 'X (Twitter)',
    icon: 'ph:x-logo-duotone',
    url: 'https://x.com/techitwinner',
  },
  {
    name: 'Discord',
    icon: 'ph:discord-logo-duotone',
    url: 'https://discord.com/#',
  },
  {
    name: 'Telegram',
    icon: 'ph:telegram-logo-duotone',
    url: 'https://t.me/techitdotwin',
  },
  {
    name: 'GitHub',
    icon: 'ph:github-logo-duotone',
    url: 'https://github.com/techitdotwin',
  },
  {
    name: 'Instagram',
    icon: 'ph:instagram-logo-duotone',
    url: 'https://instagram.com/techitwinner/',
  },
  {
    name: 'Keybase',
    icon: 'carbon:logo-keybase',
    url: 'https://keybase.io/techitwinner/',
  }
];
</script>

<template>
  <div class="flex flex-wrap gap-2 items-center justify-center">
    <div v-for="a in social" class="tooltip" :data-tip="a.name">
      <a class="btn btn-circle" target="_blank" :href="a.url"><icon :name="a.icon" class="w-6 h-6"/></a>
    </div>
  </div>
</template>

<style scoped>

</style>