<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useLocalePath } from '#imports'
  import { computed, ref } from 'vue'
  import {clearError} from "#app";

  const { t } = useI18n()
  const localePath = useLocalePath()

  const navBarItems = computed(() => [
    { key: 1, label: t('ui.navigate.home'), to: localePath('/') },
    { key: 2, label: t('ui.navigate.blog'), to: localePath('/blog') },
    { key: 3, label: t('ui.navigate.projects'), to: localePath('/projects') },
    { key: 4, label: t('ui.navigate.tools'), to: localePath('/tools') },
  ])

  const isDrawerOpen = ref(false);

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
  };
</script>

<template>
  <div :class="['fixed z-[1000] bg-slate-50 dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg w-full h-full top-0', isDrawerOpen ? 'drawer-anim-out translate-x-0' : 'drawer-anim-in translate-x-full']">
    <div>
      <nav>
        <div class="flex flex-row items-center p-4 border-b b-div justify-between">
          <h5 class="m-0">Navigation</h5>
          <section class="flex flex-row gap-2">
            <LanguageSwitcher :display-locale-value="false"/>
            <ThemeSwitcher/>
            <UButton square color="black" @click="toggleDrawer" size="xl"><i class="ph ph-x text-[24px]"></i></UButton>
          </section>
        </div>
      </nav>
      <nav class="flex flex-col justify-between">
        <div class="p-4 space-y-2">
          <ULink v-for="item in navBarItems"
                 @click="toggleDrawer"
                 :to="item.to"
                 active-class="border-solid text-primary uLink-yesIcon"
                 class="flex gap-2 text-5xl sm:text-6xl md:text-7xl active:opacity-75 items-center uppercase uLink-noIcon">
            <i :class="['ph-fill ph-circle']"></i><span>{{item.label}}</span>
          </ULink>
        </div>

      </nav>
    </div>
  </div>
  <nav class="flex sticky z-[100] top-0 w-full bg-slate-100 dark:bg-slate-950 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg items-center justify-center h-[72px] border-black dark:border-white border-b border-opacity-10 dark:border-opacity-10">
    <div class="flex w-full px-4 h-[72px] items-center justify-between">
      <div class="flex flex-row gap-4 items-center">
        <section class="flex flex-row gap-4 items-center">
          <ULink :to="localePath('/')" class="flex flex-row items-center justify-center h-full active:scale-95">
            <img src="https://files.techit.win/images/logos/techit.win/techitThawiangLogoOneBlack40.svg" class="w-11 h-11 block dark:hidden" alt=""/>
            <img src="https://files.techit.win/images/logos/techit.win/techitThawiangLogoOneWhite40.svg" class="w-11 h-11 hidden dark:block" alt=""/>
          </ULink>
        </section>
        <div class="hidden sm:flex flex-row gap-2 h-fit">
          <ULink v-for="item in navBarItems"
                 :to="item.to"
                 active-class="font-bold bg-black text-white dark:bg-white dark:text-black"
                 class="flex text-[17px] gap-2 py-1 px-2 active:opacity-75 items-center uppercase rounded-md bg-none jetbrains"
                 inactive-class="hover:bg-black hover:bg-opacity-10">
            <span>{{item.label}}</span>
          </ULink>
        </div>
      </div>
      <div class="flex flex-row gap-3 h-fit">
        <UButton square variant="solid" color="white" @click="toggleDrawer" class="flex sm:hidden" size="xl"><i class="ph ph-list text-[24px]"></i></UButton>
        <LanguageSwitcher class="hidden sm:block" :display-locale-value="false"/>
        <ThemeSwitcher class="block sm:block"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.drawer-anim-in {
  transition: all 0.35s cubic-bezier(var(--easeIn));
}
.drawer-anim-out {
  transition: all 0.35s cubic-bezier(var(--easeOut));
}

.uLink-noIcon {
  i {
    @apply hidden
  }
}
.uLink-yesIcon {
  i {
    @apply flex
  }
}
</style>