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
    { key: 1, icon: 'ph:folder-open', label: t('ui.navigate.projects'), to: localePath('/projects') },
  ])

  const closeNavDrawer = inject<() => void>('closeNavDrawer')

  function beforeLeave(el) {
    el.classList.add('emoji-exit');
  }
</script>

<template>
  <div class="w-full sticky top-0 z-[1000] drawer">
    <input id="navDrawer" type="checkbox" class="drawer-toggle" />
    <section class="drawer-content">
      <div class="w-full p-2 pb-0">
        <nav class="navbar border rounded-full ice">
          <div class="navbar-start">
            <label for="navDrawer" aria-label="open sidebar" class="flex md:hidden btn btn-circle btn-ghost">
              <icon name="ph:list" class="h-6 w-6"/>
            </label>
            <nuxt-link :href="localePath('/')" class="hidden md:flex btn btn-ghost text-xl rounded-full transition-all font-serif">
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
              {{ $t('generic.identity.me.name.first') }}
            </nuxt-link>
          </div>
          <div class="navbar-end">
            <LanguageSwitcher/>
            <ThemeSwitcher class="hidden md:flex" additional-icon-class="w-6 h-6"/>
          </div>
        </nav>
      </div>
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