<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useLocalePath } from '#imports'
  import { computed, ref } from 'vue'

  const { t } = useI18n()
  const localePath = useLocalePath()

  const navBarItems = computed(() => [
    { "key": "0", "label": t('ui.navigate.home'), "to": localePath('/') },
    { "key": "1", "label": t('ui.navigate.blog'), "to": localePath('/blog') },
  ])

  const isDrawerOpen = ref(false);

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
  };
</script>

<template>
  <div :class="['fixed drawer z-[1000] bg-slate-50 dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg w-full h-full top-0', isDrawerOpen ? 'translate-x-0' : '-translate-x-full']">
    <div id="drawer-wrapper">
      <UButton square variant="ghost" color="white" @click="toggleDrawer" class="flex sm:hidden" size="xl"><i class="ph ph-x text-[24px]"></i></UButton>
      <nav class="p-4 space-y-2">
        <ULink v-for="item in navBarItems"
               @click="toggleDrawer"
               :to="item.to"
               active-class="border-solid text-primary uLink-yesIcon"
               class="flex gap-2 text-5xl active:opacity-75 items-center uppercase uLink-noIcon">
          <i :class="['ph-fill ph-circle']"></i><span>{{item.label}}</span>
        </ULink>
      </nav>
    </div>
  </div>
  <nav class="flex sticky z-[100] top-0 w-full border-dashed bg-slate-100 dark:bg-slate-950 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg items-center justify-center h-[72px] border-black dark:border-white border-b border-opacity-10 dark:border-opacity-10">
    <div class="flex flex-row w-full max-w-[1024px] px-4 h-[72px] items-center justify-between">
      <div class="flex flex-row gap-4">
        <section class="flex flex-row gap-4">
          <UButton square variant="solid" color="white" @click="toggleDrawer" class="flex sm:hidden" size="xl"><i class="ph ph-list text-[24px]"></i></UButton>
          <div class="hidden sm:flex flex-row gap-4">
            <ULink v-for="item in navBarItems"
                   :to="item.to"
                   active-class="border-solid text-primary border-primary dark:border-primary"
                   class="flex gap-2 active:opacity-75 border-b items-center uppercase"
                   inactive-class="border-dashed hover:border-solid border-black dark:border-white">
              <span>{{item.label}}</span>
            </ULink>
          </div>
        </section>
      </div>
      <div class="flex flex-row gap-4 h-fit">
        <LanguageSwitcher square :display-locale-value="false"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.drawer {
  transition: all 0.35s cubic-bezier(var(--easeOut));
}
#drawer-wrapper {
  @apply items-start w-full flex flex-col gap-4 p-4;
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