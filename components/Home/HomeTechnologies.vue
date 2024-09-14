<script setup lang="ts">

const {t} = useI18n()
const technologies = {
  label: t('pages.home.technology.title'),
  items: [
    {
      category: t('pages.home.technology.content.1.title'),
      items: [
        { name: 'TypeScript'},
        { name: 'JavaScript'},
        { name: 'HTML'},
        { name: 'CSS'},
      ]
    },
    {
      category: t('pages.home.technology.content.2.title'),
      items: [
        { name: 'Linux / Unix' },
        { name: 'Adobe Illustrator'},
        { name: 'Adobe Photoshop'},
        { name: 'Figma'},
      ]
    },
    {
      category: t('pages.home.technology.content.3.title'),
      items: [
        { name: 'Nuxt.js'},
      ]
    }
  ]
};
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 w-full gap-2">
    <div v-for="tech in technologies.items" :key="tech.category" class="rounded-2xl bg-slate-100 dark:bg-slate-900 border-base-200 dark:border-base-100 border">
      <div class=" p-4 flex flex-col items-start border-b border-base-200 dark:border-base-100">
        <p class="text-2xl font-bold font-serif">{{tech.category}}</p>
      </div>
      <div class=" p-4 flex flex-col items-start">
        <ul class="list-disc ml-6">
          <li v-for="item in tech.items">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>