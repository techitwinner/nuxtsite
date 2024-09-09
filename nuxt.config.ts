// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import Nora from '@primevue/themes/nora';
require("dotenv").config();
const strapiBaseUri = process.env.STRAPI_URL || "https://api.techit.win";

export default defineNuxtConfig({
  css: ['./assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-anchorscroll', 'nuxt-aos', '@nuxtjs/strapi', '@formkit/auto-animate', '@nuxt/image', '@nuxt/icon', '@nuxtjs/color-mode', 'shadcn-nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || 'https://api.techit.win'
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'th', iso: 'th-TH', file: 'th.json' }
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
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  },
  strapi: {
    url: strapiBaseUri,
    prefix: '/api',
    version: 'v4',
    entities: ['nuxtsite-blog-posts'],
    cookieName: 'strapi_jwt',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    }
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
        { rel: 'preconnect', href: 'https://rsms.me/'},
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&family=Noto+Color+Emoji&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap' }
      ]
    }
  },
})