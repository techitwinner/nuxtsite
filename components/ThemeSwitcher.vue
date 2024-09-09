<template>
  <div class="theme-controller">
    <button @click="cycleTheme" class="btn btn-square btn-ghost btn-circle">
      <icon :name="currentIcon" class="h-6 w-6"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '~/composables/useThemeSwitch'
import {useI18n} from "vue-i18n";

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