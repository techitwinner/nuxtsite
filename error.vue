<template>
  <NuxtLayout name="error">
    <div id="container" class="fade-in-but-faster justify-center min-h-screen py-20">
      <section id="wrapper" class="z-[1] flex flex-col min-h-screen items-center gap-4">
        <BlinkingIcon v-if="error.statusCode === 404" :blinkWithDifferentIcon="true" iconWeight="thin" iconName="file" secondIconName="file-dashed"/>
        <BlinkingIcon v-if="error.statusCode === 500" :blinkWithDifferentIcon="true" iconWeight="thin" iconName="warning-diamond" secondIconName="warning-circle"/>
        <h1>{{$t('ui.error.ohNo')}}! — {{ error.statusCode }}</h1>
        <div class="max-w-[1000px]" v-html="error.message"/>
        <div class="flex flex-wrap gap-2">
          <button @click="goBackHome" class="btn btn-primary">{{ $t('ui.error.back') }}</button>
          <button @click="notGoBackHome" class="btn btn-secondary">{{ $t('ui.action.refresh') }}</button>
        </div>
      </section>
    </div>
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