<template>
  <div class="home-ct">
    <section class="page-main">
      <div class="main-child flex">
        <LazyNuxtImg src="https://files.techit.win/images/custom/PFP/realtechit.jpg" class="w-56 h-56 rounded-xl"/>
        <section class="paragraph">
          <p class="text-5xl md:text-6xl font-bold font-source-serif">{{$t('generic.identity.me.name.firstLast')}}</p>
          <p>{{$t('pages.home.aboutMe.1')}}</p>
        </section>
        <div class="divider text-base"> {{$t('ui.footer.category.social')}} / {{$t('ui.navigate.contact')}}</div>
        <div class="social-div">
          <nuxt-link class="btn btn-primary" href="https://github.com/techitwinner"><icon name="ph:github-logo" class="w-6 h-6"/>GitHub</nuxt-link>
          <nuxt-link class="btn btn-outline btn-square instagram-btn" href="https://instagram.com/techitwinner"><icon name="ph:instagram-logo" class="w-6 h-6"/></nuxt-link>
          <nuxt-link class="btn btn-outline btn-square" href="https://x.com/techitwinner"><icon name="ph:x-logo" class="w-6 h-6"/></nuxt-link>
        </div>
        <p class="animate-bounce text-sm opacity-75">👇 {{ $t('ui.action.readMore') }}</p>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <icon name="fluent-emoji-flat:boy-light" class="h-32 w-32"/>
        <section class="paragraph">
          <p class="text-5xl font-bold font-source-serif">{{$t('pages.home.aboutMe.whoAmI.title')}}</p>
          <p>{{$t('pages.home.aboutMe.whoAmI.content')}}</p>
        </section>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <icon name="fluent-emoji-flat:laptop" class="h-32 w-32"/>
        <section class="paragraph">
          <p class="text-5xl font-bold font-source-serif">{{$t('pages.home.technology.title')}}</p>
          <p>{{$t('pages.home.technology.description')}}</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-3 w-full gap-2">
          <div v-for="tech in technologies.items" :key="tech.category" class="rounded-2xl bg-slate-100 dark:bg-slate-900 border-base-200 dark:border-base-100 border">
            <div class=" p-4 flex flex-col items-start border-b border-base-200 dark:border-base-100">
              <p class="text-2xl font-bold font-source-serif">{{tech.category}}</p>
            </div>
            <div class=" p-4 flex flex-col items-start">
              <ul class="list-disc ml-6">
                <li v-for="item in tech.items">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <icon name="fluent-emoji-flat:light-bulb" class="h-32 w-32"/>
        <section class="paragraph">
          <p class="text-5xl font-bold font-source-serif">{{$t('pages.home.blog.title')}}</p>
          <p>{{$t('pages.home.blog.description')}}</p>
        </section>
        <ArticlesCardTray maxPosts="6" :displayHeadTitle="false"/>
        <div class="flex flex-wrap gap-2">
          <nuxt-link class="btn btn-primary">{{$t('pages.home.blog.allPosts')}}<icon name="ph:arrow-right" class="w-5 h-5"/></nuxt-link>
          <RandomPostButton />
        </div>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <icon name="fluent-emoji-flat:envelope-with-arrow" class="h-32 w-32"/>
        <section class="paragraph">
          <p class="text-5xl font-bold font-source-serif">{{$t('pages.home.contact.title')}}</p>
          <p>{{$t('pages.home.contact.description')}}</p>
        </section>
      </div>
      <div class="main-child flex">
        <section class="grid grid-cols-3 md:grid-cols-5 w-full gap-2">
          <nuxt-link :href="contact.url" v-for="contact in contact" class="text-base transition-colors gap-4 rounded-2xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-100 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-100 border-base-200 dark:border-base-100 border items-center flex flex-col p-2 sm:p-4">
            <icon :name="contact.icon" class="h-10 w-10"/>
            <p>{{contact.name}}</p>
          </nuxt-link>
        </section>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ArticlesCardTray from "~/components/Blog/ArticlesCardTray.vue";
import RandomPostButton from "~/components/Blog/RandomPostButton.vue";

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
const contact = [
  {name: 'E-mail', url: 'mailto:techit@dailitation.xyz', icon: 'ph:envelope-duotone'},
  {name: 'GitHub', url: 'https://github.com/techitwinner', icon: 'ph:github-logo-duotone'},
  {name: 'X (Twitter)', url: 'https://x.com/techitwinner', icon: 'ph:x-logo-duotone'},
  {name: 'Telegram', url: 'https://t.me/techitdotwin', icon: 'ph:telegram-logo-duotone'},
  {name: 'Discord', url: 'https://discord.gg/xwPNqpdsYK', icon: 'ph:discord-logo-duotone'}
]
</script>