<template>
  <footer class="sticky z-[999]">
    <div class="footer ice border-t p-10">
      <aside class="flex flex-col gap-0">
        <section class="flex flex-col gap-2">
          <img alt="Techit&apos;s logo" class="w-16 h-16" src="https://files.techit.win/images/logos/techit.win/techitThawiangLogo40.svg"/>
          <p class="text-2xl font-bold">{{$t('generic.identity.me.name.firstLast')}}</p>
        </section>
        <p>{{ $t('ui.footer.copyright', { year: currentYear, name: t('generic.identity.me.name.firstLast') }) }}</p>
      </aside>
      <nav>
        <LazyNuxtLink :href="localePath('/sitemap')" class="footer-title link link-hover">{{$t('ui.footer.category.siteMap')}}</LazyNuxtLink>
        <nuxt-link :href="link.link" v-for="link in footerSiteMap" class="link link-hover">{{ link.name }}</nuxt-link>
      </nav>
      <nav>
        <h6 class="footer-title">{{$t('ui.footer.category.legal')}}</h6>
        <nuxt-link :href="link.link" v-for="link in footerLegal" class="link link-hover">{{ link.name }}</nuxt-link>
      </nav>
      <nav>
        <h6 class="footer-title">{{$t('ui.footer.category.social')}}</h6>
        <nuxt-link :href="link.link" v-for="link in footerSocial" class="link link-hover">{{ link.name }}</nuxt-link>
      </nav>
    </div>
  </footer>
</template>
<style scoped>
.footer-title {
  @apply font-serif;
}
</style>
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
    {name: t('ui.navigate.about'), link: localePath('/about')},
    {name: t('ui.navigate.projects'), link: localePath('/projects')},
  ]);
  const footerLegal = computed(() => [
    {name: t('ui.navigate.copyrightNotice'), link: localePath('/copyright-notice')},
  ]);
  const footerSocial = computed(() => [
    {name: 'GitHub', icon: 'ph-github-logo', link: 'https://github.com/techitwinner/'},
    {name: 'Discord', icon: 'ph-discord-logo', link: 'https://discord.com/xwPNqpdsYK/'},
    {name: 'Telegram', icon: 'ph-telegram-logo', link: 'https://t.me/techitdotwin/'},
    {name: 'X (Twitter)', icon: 'ph-x-logo', link: 'https://x.com/techitwinner/'},
  ]);
</script>