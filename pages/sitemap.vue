<template>
  <div class="ct">
    <section class="page-main">
      <div class="main-child flex">
        <PageHeading :title="t('ui.footer.category.siteMap')" />
      </div>
    </section>
    <section class="page-main">
      <div class="main-child-start flex">
        <div class="items-start flex flex-col justify-start gap-8 w-full" v-for="stuff in items" :key="stuff.key">
          <h2 class="text-5xl font-bold font-serif">{{ stuff.category }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full">
            <LazyNuxtLink v-for="item in stuff.content" :href="[0, 3].includes(stuff.key) ? item.url : (!item.disabled ? `https://${item.url}` : '')"   :class="[item.disabled ? 'opacity-35 cursor-not-allowed active:translate-y-1' : 'opacity-100 cursor-pointer dark:hover:bg-slate-100 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-100 hover:shadow-xl hover:-translate-y-1 active:shadow-sm active:translate-y-0','text-base text-center border-base-200 dark:border-base-100 border items-center flex flex-col p-4 shadow-sm bg-slate-100 dark:bg-slate-900 gap-2 transition-all rounded-2xl', item.tooLong ? 'col-span-2' : '']">
              <LazyNuxtImg v-if="item.customIcon" :src="item.icon" class="h-10 w-10 rounded"/>
              <icon v-else :name="item.icon" class="h-10 w-10"/>
              <div class="select-none">
                <p class="font-bold">{{item.name}}</p>
                <p class="text-sm opacity-50">{{item.url}}</p>
              </div>
            </LazyNuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {useLocalePath} from "#imports";
const localePath = useLocalePath()
const {t} = useI18n()
const items = [
  {
    key: 0,
    category: "Pages",
    content: [
      {
        name: 'Home',
        url: localePath('/'),
        icon: 'ph:house-duotone'
      },
      {
        name: 'Blog',
        url: localePath('/blog'),
        icon: 'ph:chats-teardrop-duotone'
      },
      {
        name: 'Projects',
        url: localePath('/projects'),
        icon: 'ph:folder-duotone'
      },
      {
        name: 'About Me',
        url: localePath('/about'),
        icon: 'ph:user-duotone'
      },
      {
        name: 'Stuff',
        url: localePath('/stuff'),
        icon: 'ph:hard-drives-duotone'
      },
    ]
  },
  {
    key: 1,
    category: "Storage",
    content: [
      {
        name: 'S3 Storage',
        url: 'storage.techit.win',
        icon: 'ph:database-duotone'
      },
      {
        name: 'Static Files',
        url: 'files.techit.win',
        icon: 'ph:folder-open-duotone'
      },
      {
        name: 'Images',
        url: 'images.techit.win',
        icon: 'ph:images-duotone'
      },
      {
        name: 'Nextcloud',
        url: 'drive.techit.win',
        icon: 'ph:cloud-duotone',
        disabled: true,
      }
    ]
  },
  {
    key: 2,
    category: "Stuff",
    content: [
      {
        name: 'Weblate',
        url: 'weblate.techit.win',
        icon: 'ph:globe-duotone',
        disabled: true,
      },
      {
        name: 'API',
        url: 'api.techit.win',
        icon: 'ph:network-duotone'
      },
    ]
  },
  {
    key: 3,
    category: "Legal Stuff",
    content: [
      {
        name: 'Copyright Notice',
        url: localePath('/copyright-notice'),
        icon: 'ph:copyright-duotone'
      },
    ]
  },
  {
    key: 4,
    category: "Additional",
    content: [
      {
        name: 'Source Code',
        url: 'github.com/techitwinner/nuxtsite',
        icon: 'ph:github-logo-duotone',
        tooLong: true,
      },
      {
        name: 'Arch Linux',
        url: 'archlinux.org',
        icon: 'mdi:arch',
      },
      {
        name: 'Debian GNU/Linux',
        url: 'debian.org',
        icon: 'mdi:debian',
      },
      {
        name: 'Unix in Thailand',
        url: 'unix.in.th',
        icon: 'https://files.techit.win/images/logos/unix.in.th/Unix.in.TH-Logo.svg',
        customIcon: true,
      },
      {
        name: 'Iconify',
        url: 'iconify.design',
        icon: 'simple-icons:iconify',
      },
      {
        name: 'Nuxt',
        url: 'nuxt.com',
        icon: 'logos:nuxt-icon',
      },
      {
        name: 'Bun',
        url: 'bun.sh',
        icon: 'logos:bun',
      },
    ]
  },
]
</script>