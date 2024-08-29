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

  const buttonText = computed(() => locale.value === 'en' ? 'TH' : 'EN')
</script>

<template>
  <UTooltip :text="t('ui.tooltips.navigationBar.langSwitcher')">
    <UButton :square="square ? 'true' : 'false'" variant="solid" color="white" size="xl" class="" @click="toggleLanguage">
      <i class="ph ph-globe text-[24px]"></i><span v-if="displayLocaleValue">{{ buttonText }}</span>
    </UButton>
  </UTooltip>
</template>