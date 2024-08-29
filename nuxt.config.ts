// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['./assets/css/main.css', './assets/css/font-faces.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'th', iso: 'th-TH', file: 'th.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'assets/i18n/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-anchorscroll'],
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://unpkg.com/@phosphor-icons/web',
          defer: true
        }
      ],
      titleTemplate: 'Techit Thawiang',
      htmlAttrs: {
        lang: 'th'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Noto+Color+Emoji&display=swap' }
      ]
    }
  },
})