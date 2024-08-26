<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useLocalePath } from '#imports'

  defineProps({
    showExtra: Boolean
  });

  const { t } = useI18n()
  const localePath = useLocalePath()

  const navBarItems = [
    { "key": "0", "label": t('ui.navigate.home'), "to": localePath('/') },
    { "key": "1", "label": t('ui.navigate.blog'), "to": localePath('/blog') },
  ]


</script>

<template>
  <nav class="flex sticky z-[100] top-0 w-full bg-slate-100 dark:bg-slate-950 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-xl items-center justify-center h-[72px] border-black dark:border-white border-b border-opacity-10 dark:border-opacity-10">
    <div class="flex flex-row w-full max-w-[1024px] px-4 h-[72px] items-center justify-between">
<!--      <div>-->
<!--        <img class="h-[48px] w-[48px] active:scale-95" src="https://files.techit.win/images/logos/techit.win/techitThawiangLogoOneBlack40.svg"/>-->
<!--      </div>-->
      <div class="flex flex-row gap-4">
        <div v-if="showExtra" class="transition-opacity duration-300">
          <p>Whatever</p>
        </div>
        <section class="hidden sm:flex flex-row gap-4">
          <ULink v-for="item in navBarItems"
                 :to="item.to"
                 active-class="border-solid text-primary border-primary dark:border-primary"
                 class="flex gap-2 active:opacity-75 border-b items-center uppercase"
                 inactive-class="border-dashed hover:border-solid border-black dark:border-white">
            <span>{{item.label}}</span>
          </ULink>
        </section>
      </div>
      <div class="flex flex-row gap-4 h-fit">
        <LanguageSwitcher square :display-locale-value="false"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>