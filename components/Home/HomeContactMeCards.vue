<script setup lang="ts">
const {t} = useI18n()
const contact = [
  {name: 'E-mail', url: 'mailto:techit@dailitation.xyz', icon: 'ph:envelope-duotone'},
  {name: 'GitHub', url: 'https://github.com/techitwinner', icon: 'ph:github-logo-duotone'},
  {name: 'X (Twitter)', url: 'https://x.com/techitwinner', icon: 'ph:x-logo-duotone'},
  {name: 'Telegram', url: 'https://t.me/techitdotwin', icon: 'ph:telegram-logo-duotone'},
  {name: 'Discord', url: 'https://discord.gg/xwPNqpdsYK', icon: 'ph:discord-logo-duotone'}
]
</script>

<template>
  <section class="grid grid-cols-3 md:grid-cols-5 w-full gap-2">
    <nuxt-link :href="contact.url" v-for="contact in contact" class="text-base transition-all gap-4 rounded-2xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-100 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-100 border-base-200 dark:border-base-100 border items-center flex flex-col p-2 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 active:shadow-sm">
      <icon :name="contact.icon" class="h-10 w-10"/>
      <p>{{contact.name}}</p>
    </nuxt-link>
  </section>
</template>