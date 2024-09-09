<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <div v-for="tech in technologies.items" :key="tech.category" class="first:rounded-l-2xl last:rounded-r-2xl bg-base-100 border-base-200 border">
      <div class=" p-4 flex flex-col items-start border-b">
        <p class="text-2xl font-bold font-source-serif">{{tech.category}}</p>
      </div>
      <div class=" p-4 flex flex-col items-start">
        <ul class="list-disc ml-6">
          <li v-for="item in tech.items">{{item.name}}</li>
        </ul>
      </div>
    </div>
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

  .discord {
    background: linear-gradient(180deg, #5865F2 0%, #454FBF 100%);
  }
  .x {
    background: linear-gradient(180deg, #1F2139 0%, #0B0C1E 100%);
  }
  .tme {
    background: linear-gradient(180deg, #60A9FF 0%, #1E61AF 100%);
  }
}
</style>

<script setup lang="ts">
const oldContactCardItems = [
  { key: 1, name: 'Discord', color: 'indigo', class: 'btn btn-square discord', icon: "ph:discord-logo", to: 'https://discord.gg/xwPNqpdsYK' },
  { key: 2, name: 'X (Twitter)', color: 'gray', class: 'btn btn-square x', icon: "ph:x-logo", to: 'https://x.com/techitwinner' },
  { key: 3, name: 'Telegram', color: 'sky', class: 'btn btn-square tme', icon: "ph:telegram-logo", to: 'https://t.me/' }
]
</script>