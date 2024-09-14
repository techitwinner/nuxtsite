<template>
  <div class="home-ct">
    <section class="page-main">
      <div class="main-child flex">
        <LazyNuxtImg src="https://files.techit.win/images/custom/PFP/realtechit.jpg" class="w-56 h-56 rounded-xl"/>
        <section class="paragraph">
          <p class="text-5xl md:text-6xl font-bold font-serif">{{$t('generic.identity.me.name.firstLast')}}</p>
          <p>{{$t('pages.home.aboutMe.1')}}</p>
        </section>
        <div class="divider text-base"> {{$t('ui.footer.category.social')}} / {{$t('ui.navigate.contact')}}</div>
        <LazySocialButtons/>
        <p class="animate-bounce text-sm opacity-75">👇 {{ $t('ui.action.readMore') }}</p>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <HomeSectionLeading :title="t('pages.home.aboutMe.whoAmI.title')" :description="t('pages.home.aboutMe.whoAmI.content')" emoji="fluent-emoji-flat:boy-light"/>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <HomeSectionLeading :title="t('pages.home.technology.title')" :description="t('pages.home.technology.description')" emoji="fluent-emoji-flat:laptop"/>
        <LazyHomeTechnologies/>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <HomeSectionLeading :title="t('pages.home.blog.title')" :description="t('pages.home.blog.description')" emoji="fluent-emoji-flat:light-bulb"/>
        <ArticlesCardTray class="hidden md:grid" :maxPosts="6" :displayHeadTitle="false"/>
        <ArticlesCardTray class="sm:grid md:hidden" :maxPosts="4" :displayHeadTitle="false"/>
        <ArticlesCardTray class="grid sm:hidden" :maxPosts="3" :displayHeadTitle="false"/>
        <LazyNuxtLink class="btn btn-primary">{{$t('pages.home.blog.allPosts')}}<icon name="ph:arrow-right" class="w-5 h-5"/></LazyNuxtLink>
      </div>
    </section>
    <section class="page-main">
      <div class="main-child flex">
        <icon name="fluent-emoji-flat:envelope-with-arrow" class="h-32 w-32"/>
        <section class="paragraph">
          <p class="text-5xl font-bold font-serif">{{$t('pages.home.contact.title')}}</p>
          <p>{{$t('pages.home.contact.description')}}</p>
        </section>
      </div>
      <div class="main-child flex">
        <LazyHomeContactMeCards/>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ArticlesCardTray from "~/components/Blog/BlogArticlesCardTray.vue";

const {t} = useI18n()
</script>