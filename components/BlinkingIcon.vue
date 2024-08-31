<template>
  <i v-if="!blinkWithDifferentIcon" :class="['text-[288px]', currentIcon]" class="transition-all duration-1000" />
  <i v-if="blinkWithDifferentIcon" :class="['text-[288px]', currentDifferentIcon]" class="transition-all duration-1000" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  iconName: string
  secondIconName?: string
  iconWeight?: string
  blinkWithDifferentIcon?: boolean
}>();

const filledIconClass = `ph-fill ph-${props.iconName}`;
const outlineIconClass = `ph ph-${props.iconName}`;

const prop3 = `ph-${props.iconWeight} ph-${props.iconName}`;
const prop4 = `ph-${props.iconWeight} ph-${props.secondIconName}`;

const currentIcon = ref(filledIconClass);
const currentDifferentIcon = ref(prop3);

const toggleIcon = () => {
  currentIcon.value = currentIcon.value === filledIconClass
      ? outlineIconClass
      : filledIconClass;
};

const toggleIcon2 = () => {
  currentDifferentIcon.value = currentDifferentIcon.value === prop4
      ? prop3
      : prop4;
};

watchEffect(() => {
  const interval = setInterval(toggleIcon, 1000);
  return () => clearInterval(interval); // Cleanup interval on component unmount
});

watchEffect(() => {
  const interval2 = setInterval(toggleIcon2, 1000);
  return () => clearInterval(interval2); // Cleanup interval on component unmount
});
</script>
