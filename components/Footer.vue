<template>
  <footer id="container" class="border-t border-dashed border-black dark:border-white border-opacity-10 dark:border-opacity-10">
    <div id="wrapper">
      <section class="items-center md:items-start text-center flex flex-col">
        <div class="flex flex-row items-center mb-4 gap-4">
          <img class="w-12 h-12" src="https://files.techit.win/images/logos/techit.win/techitThawiangLogo40.svg"/>
          <h4 class="m-0">{{$t('generic.identity.me.name.first')}}</h4>
        </div>
        <p class="opacity-50 text-[16px]">&copy; 2023 - {{currentYear}} {{$t('generic.identity.me.name.firstLast')}}</p>
        <div class="opacity-50 text-[16px] flex w-full flex-col md:flex-row items-center md:items-start justify-between">
          <p>{{$t('ui.footer.respectiveOwner')}}</p>
          <UDivider class="flex md:hidden my-4"/>
          <div class="flex gap-4">
            <ULink v-for="item in footerA" class="border-b border-dashed hover:border-solid" color="white" :to="item.link">{{item.name}}</ULink>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const footerA = computed(() => [
    {name: 'Keybase with GPG', link: 'https://keybase.io/techitwinner'},
    {name: t('generic.dictionary.eMail'), link: 'mailto:techit@dailitation.xyz'},
    {name: t('ui.footer.sourceCode')  , link: 'https://github.com/techitwinner/nuxtsite'}
  ]);
</script>