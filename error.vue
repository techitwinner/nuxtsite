<template>
  <NuxtLayout name="error">
    <div id="container" class="fade-in-but-faster overflow-hidden relative justify-center h-screen py-20">
      <section id="wrapper" class="z-[1] flex flex-col items-center gap-4">
        <BlinkingIcon v-if="error.statusCode === 404" :blinkWithDifferentIcon="true" iconWeight="thin" iconName="file" secondIconName="file-dashed"/>
        <BlinkingIcon v-if="error.statusCode === 500" :blinkWithDifferentIcon="true" iconWeight="thin" iconName="warning-diamond" secondIconName="warning-circle"/>
        <h1>{{$t('ui.error.ohNo')}}! — {{ error.statusCode }}</h1>
        <pre class="whitespace-pre-wrap">{{error.message}}</pre>
        <UDivider class="my-4" :label="t('ui.error.try')"/>
        <UButtonGroup size="xl">
          <UButton @click="goBackHome" color="black">{{ $t('ui.error.back') }}</UButton>
          <UButton @click="notGoBackHome" color="white">{{ $t('ui.action.refresh') }}</UButton>
        </UButtonGroup>
      </section>
      <img alt="" class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/ErrorScratch.png"/>
    </div>
    <Footer :tagLine="t('ui.error.tag')"/>
  </NuxtLayout>
</template>

<script setup>
  import {useI18n} from "vue-i18n";
  import {clearError} from "#app";

  const {t} = useI18n();
  const error = useError();
  const router = useRouter();

  const goBackHome = () => {
    clearError();
    router.push('/');
  }
  const notGoBackHome = () => {
    clearError();
    window.location.reload();
  }
</script>