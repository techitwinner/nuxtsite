<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip text="System/Light/Dark" :popper="{ strategy: 'absolute' }">
        <UButton square @click="switchColorMode" size="xl" color="white" variant="solid">
          <i :class="['text-[24px]', phosphorIconName]"></i>
        </UButton>
      </UTooltip>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from 'vue'
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system'] as const
type ColorMode = (typeof ColorModeList)[number]

const phosphorIconName = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'ph ph-moon';
    case 'dark':
      return 'ph-fill ph-moon';
    case 'system':
    default:
      return 'ph ph-monitor';
  }
});

const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  colorMode.preference = ColorModeList[nextIndex]
}
</script>

<style></style>