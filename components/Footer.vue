<template>
  <footer class="footer">
    <div class="container-1">
      <section class="flex flex-col gap-2">
        <img
            src="https://files.techit.win/images/logos/techit.win/techitThawiangLogoOneBlack40.svg"
            class="w-16 h-16 block dark:hidden mb-2"
            alt="Logo"
        />
        <img
            src="https://files.techit.win/images/logos/techit.win/techitThawiangLogoOneWhite40.svg"
            class="w-16 h-16 hidden dark:block mb-2"
            alt="Logo"
        />
        <h3 class="m-0">{{$t('generic.identity.me.name.firstLast')}}</h3>
          <p v-if="!props.tagLine" class="select-none text-[14px] opacity-50"><strong>Project Nuxtsite</strong> &bull; <strong>Powered by</strong> <ULink class="border-b border-dashed hover:border-solid border-black" to="https://dailitation.xyz">dailitation.xyz</ULink></p>
          <p v-if="props.tagLine" class="select-none text-[14px] opacity-50">{{props.tagLine}}</p>
      </section>
    </div>
    <div class="container-2">
      <div class="border-t sm:border-r b-div">
        <section class="top">
          <p class="m-0">{{$t('ui.footer.category.siteMap')}}</p>
        </section>
        <section class="bottom">
          <ULink v-for="item in footerSiteMap" class="text-[16px] transition-all opacity-50 hover:opacity-100" :to="item.link" >{{item.name}}</ULink>
        </section>
      </div>
      <div class="border-t sm:border-r b-div">
        <section class="top">
          <p class="m-0">{{$t('ui.footer.category.legal')}}</p>
        </section>
        <section class="bottom">
          <ULink v-for="item in footerLegal" class="text-[16px] transition-all opacity-50 hover:opacity-100" :to="item.link" >{{item.name}}</ULink>
        </section>
      </div>
      <div class="border-t sm:border-r b-div">
        <section class="top">
          <p class="m-0">{{$t('ui.footer.category.bookmark')}}</p>
        </section>
        <section class="bottom">
          <ULink target="_blank" v-for="item in footerBookmark" class="text-[16px] transition-all opacity-50 hover:opacity-100" :to="item.link" ><i class="ph ph-arrow-square-out mr-1"></i>{{item.name}}</ULink>
        </section>
      </div>
      <div class="border-t b-div">
        <section class="top">
          <p class="m-0">{{$t('ui.footer.category.social')}}</p>
        </section>
        <section class="bottom">
          <ULink target="_blank" v-for="item in footerSocial" class="text-[16px] transition-all opacity-50 hover:opacity-100" :to="item.link" ><i :class="['ph mr-1', item.icon]"></i>{{item.name}}</ULink>
        </section>
      </div>
    </div>
    <div class="container-1">
      <section class="flex flex-col">
        <p class="text-sm opacity-50">&copy; 2023 - {{currentYear}} — {{$t('generic.identity.me.name.firstLast')}}</p>
        <p class="text-sm opacity-50">{{$t('ui.footer.respectiveOwner')}}</p>
        <div class="flex flex-row gap-4 mt-1">
          <ULink v-for="item in footerA" class="text-sm transition-all opacity-50 hover:opacity-100 border-b b-link" :to="item.link" >{{item.name}}</ULink>
        </div>
      </section>
    </div>
  </footer>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  import { useLocalePath } from '#imports'
  const currentYear = new Date().getFullYear();
  const localePath = useLocalePath()
  const props = defineProps<{
    tagLine?: string;
  }>()
  const footerA = computed(() => [
    {name: `Keybase ${t('generic.dictionary.with')} GPG`, link: 'https://keybase.io/techitwinner'},
    {name: t('generic.dictionary.eMail'), link: 'mailto:techit@dailitation.xyz'},
    {name: t('ui.footer.sourceCode')  , link: 'https://github.com/techitwinner/nuxtsite'}
  ]);
  const footerSiteMap = computed(() => [
    {name: t('ui.navigate.blog'), link: localePath('/blog')},
    {name: t('ui.navigate.contact'), link: localePath('/contact')},
    {name: t('ui.navigate.projects'), link: localePath('/projects')},
    {name: t('ui.navigate.tools'), link: localePath('/tools')},
  ]);
  const footerLegal = computed(() => [
    {name: t('ui.navigate.copyrightNotice'), link: localePath('/copyright-notice')},
  ]);
  const footerBookmark = computed(() => [
    {name: 'Arch Linux', link: 'https://archlinux.org'},
    {name: 'Fedora Linux', link: 'https://fedoraproject.org'},
    {name: 'Bun', link: 'https://bun.sh'},
    {name: 'Nuxt', link: 'https://nuxt.com'},
  ]);
  const footerSocial = computed(() => [
    {name: 'GitHub', icon: 'ph-github-logo', link: 'https://github.com/techitwinner/'},
    {name: 'Discord', icon: 'ph-discord-logo', link: 'https://discord.com/xwPNqpdsYK/'},
    {name: 'Telegram', icon: 'ph-telegram-logo', link: 'https://t.me/techitdotwin/'},
    {name: 'X (Twitter)', icon: 'ph-x-logo', link: 'https://x.com/techitwinner/'},
  ]);
</script>
<style scoped>
  .footer {
    @apply w-full flex flex-col;
    .container-1 {
      @apply w-full p-8 border-t border-black dark:border-white border-opacity-10 dark:border-opacity-10;
      section {
        @apply items-center;
      }
    }
    .container-2 {
      @apply w-full flex flex-col sm:flex-row;
      div {
        @apply w-full px-8 py-4 sm:p-8;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 100%);
        transition: all 0.2s cubic-bezier(var(--easeOut));
        .top {
          @apply h-fit sm:h-[120px];
          h5 {
            @apply mb-1 sm:m-0;
          }
        }
        .bottom {
          @apply flex flex-col items-start gap-1;
        }
      }
      div:hover {
        transition: all 0.2s cubic-bezier(var(--easeOut));
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
      }
      @media (prefers-color-scheme: dark) {
        div:hover {
          background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%);
        }
      }
    }
  }
</style>