<script setup lang="ts">

  defineProps({
    square: {
      type: Boolean,
      default: false
    },
    displayLocaleValue: {
      type: Boolean,
      default: true
    }
  });

  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useSwitchLocalePath } from '#i18n'
  import { useRouter } from 'vue-router'

  const { t, locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = locale.value === 'en' ? 'th' : 'en'
    router.push(switchLocalePath(newLocale))
  }
  const setLocale = (newLocale) => {
    locale.value = newLocale;
    router.push(switchLocalePath(newLocale))
  };

  const buttonText = computed(() => locale.value === 'en' ? 'TH' : 'EN')
  const localeList = [
    [
      {label: 'English (English)', click: () => {setLocale('en')} },
      {label: 'German (Deutsch)', click: () => {setLocale('de')} },
      {label: 'Thai (ภาษาไทย)', click: () => {setLocale('th')} }
    ]
  ];
</script>

<template>
<!--  <UTooltip :text="t('ui.tooltips.navigationBar.langSwitcher')">-->
<!--    <UButton :square="square ? 'true' : 'false'" variant="solid" color="white" size="xl" class="" @click="toggleLanguage">-->
<!--      <i class="ph ph-globe text-[24px]"></i><span v-if="displayLocaleValue">{{ buttonText }}</span>-->
<!--    </UButton>-->
<!--  </UTooltip>-->
  <UDropdown :items="localeList" :popper="{ placement: 'bottom-end' }">
    <UButton square color="white" label="Locale" :color="locale.value === 'en' ? 'black' : 'white'" size="xl"><i class="text-[24px] ph ph-globe"></i></UButton>
  </UDropdown>
</template>