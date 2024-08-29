<template>
  <div class="contact-card">
    <section class="flex flex-col items-center md:items-start p-6 sm:p-8 md:p-10 lg:p-12 gap-3">
      <h1 class="m-0">{{$t('pages.home.contact.getInTouch.title')}}</h1>
      <p>{{$t('pages.home.contact.getInTouch.content')}}</p>
      <div class="flex flex-row gap-1">
        <a v-for="item in contactCardItems" target="_blank" :key="item.key" :class="item.class" :href="item.to"><i :class="['ph-duotone text-[28px] text-white', item.icon]"></i></a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-card {
  @apply rounded-2xl w-full;
  background-image: url(/__content__/bg/emmanuel-appiah-d4xr5jN5f3g-unsplash.jpg);
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  color:white;

  .btn {
    @apply py-4 px-6 flex h-[3.75rem] text-[16px] items-center;
    transition: all 0.35s cubic-bezier(var(--easeOut));
  }
  .btn:hover {
    @apply py-2 px-12 h-[3.75rem] gap-2;
    transition: all 0.35s cubic-bezier(var(--easeOut));
  }
  .btn:active {
    @apply scale-95
  }
  .discord {
    border-radius: 64px 8px 8px 64px;
    background: linear-gradient(180deg, #5865F2 0%, #454FBF 100%);
    box-shadow: 0 4px 16px #5865F2;
  }
  .x {
    border-radius: 4px;
    background: linear-gradient(180deg, #1F2139 0%, #0B0C1E 100%);
    box-shadow: 0 4px 16px #0b0c1e;
  }
  .tme {
    border-radius: 8px 64px 64px 8px;
    background: linear-gradient(180deg, #60A9FF 0%, #1E61AF 100%);
    box-shadow: 0 4px 16px #1e61AF;
  }
}
</style>

<script setup lang="ts">
const contactCardItems = [
  { key: 1, name: 'Discord', color: 'indigo', class: 'btn discord', icon: "ph-discord-logo", to: 'https://discord.gg/xwPNqpdsYK' },
  { key: 2, name: 'X (Twitter)', color: 'gray', class: 'btn x', icon: "ph-x-logo", to: 'https://x.com/techitwinner' },
  { key: 3, name: 'Telegram', color: 'sky', class: 'btn tme', icon: "ph-telegram-logo", to: 'https://t.me/' }
]
</script>