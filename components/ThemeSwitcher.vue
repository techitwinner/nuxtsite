<template>
  <div class="theme-controller">
    <button @click="cycleTheme" :class="['btn btn-square btn-ghost btn-circle', props.additionalClass]">
      <icon :name="currentIcon" :class="props.additionalIconClass === '' ? 'w-6 h-6' : props.additionalIconClass"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '~/composables/useThemeSwitch'
import {useI18n} from "vue-i18n";

const props = defineProps({
  additionalClass: String,
  additionalIconClass: String,
})

const { currentTheme, cycleTheme } = useTheme()
const {t} = useI18n()

const themeIcons = {
  system: 'ph:monitor',
  light: 'ph:sun',
  dark: 'ph:moon'
}

const themeLabel = {
  system: t('ui.theme.system'),
  light: t('ui.theme.light'),
  dark: t('ui.theme.dark')
}

const currentIcon = computed(() => themeIcons[currentTheme.value])
const currentThemeLabel = computed(() => themeLabel[currentTheme.value])
</script>