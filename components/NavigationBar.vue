<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useLocalePath } from '#imports'
  import { computed, inject } from 'vue'
  import {useRoute} from "vue-router";
  import {clearError} from "#app";

  const { t } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  const isActive = (link) => {
    return route.path === link;
  };

  const navBarItems = computed(() => [
    { key: 0, icon: 'ph:house', label: t('ui.navigate.home'), to: localePath('/') },
    { key: 1, icon: 'ph:chat-circle-text', label: t('ui.navigate.blog'), to: localePath('/blog') },
    // { key: 2, icon: 'ph:briefcase',label: t('ui.navigate.projects'), to: localePath('/projects') },
    // { key: 3, icon: 'ph:wrench',label: t('ui.navigate.tools'), to: localePath('/tools') },
  ])

  const closeNavDrawer = inject<() => void>('closeNavDrawer')
  const showEmoji = computed(() => route.path !== localePath('/'));

  function beforeLeave(el) {
    el.classList.add('emoji-exit');
  }
</script>

<template>
  <div class="w-full sticky top-0 z-[1000] drawer">
    <input id="navDrawer" type="checkbox" class="drawer-toggle" />
    <section class="drawer-content">
      <nav class="navbar border-b ice">
        <div class="navbar-start">
          <label for="navDrawer" aria-label="open sidebar" class="flex md:hidden btn btn-circle btn-ghost">
            <icon name="ph:list" class="h-6 w-6"/>
          </label>
          <nuxt-link :href="localePath('/')" class="hidden md:flex btn btn-ghost text-xl rounded-full transition-all font-source-serif">
            {{ $t('generic.identity.me.name.firstLast') }}
          </nuxt-link>
        </div>
        <div class="navbar-center hidden md:flex">
          <nuxt-link v-for="link in navBarItems" :href="link.to" :class="['btn btn-sm rounded-full font-medium transition-all',{'btn-primary': isActive(link.to)},{'btn-ghost': !isActive(link.to)}]">
            {{ link.label }}
          </nuxt-link>
        </div>
        <div class="navbar-center md:hidden">
          <nuxt-link :href="localePath('/')" class="btn btn-ghost text-xl rounded-full transition-all">
            {{ $t('generic.identity.me.name.firstLast') }}
          </nuxt-link>
        </div>
        <div class="navbar-end">
          <LanguageSwitcher/>
          <ThemeSwitcher class="hidden md:flex"/>
        </div>
      </nav>
    </section>
    <div class="drawer-side">
      <label for="navDrawer" aria-label="Close drawer sidebar" class="drawer-overlay"></label>
      <ul class="menu ice border-r min-h-full w-80 p-2">
        <li class="flex flex-row mb-2"><label for="navDrawer" aria-label="Open drawer sidebar" class="btn btn-circle btn-ghost"><icon name="ph:x" class="h-6 w-6"/></label><ThemeSwitcher class="p-0"/></li>
        <li v-for="link in navBarItems"><nuxt-link :href="link.to" class="items-center flex gap-2" @click="closeNavDrawer"><icon :name="link.icon" class="w-5 h-5"/>{{link.label}}</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>