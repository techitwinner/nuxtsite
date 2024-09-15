<template>
  <div v-if="props.showAllAddress" :class="[sizeClass, 'font-mono']">
    <p>techit<span class="text-pink-300">[at]</span>dailitation<span class="text-orange-300">[dot]</span>xyz</p>
    <p>techit.th<span class="text-pink-300">[at]</span>proton<span class="text-orange-300">[dot]</span>me</p>
    <p>techitwinner<span class="text-pink-300">[at]</span>gmail<span class="text-orange-300">[dot]</span>com</p>
  </div>
  <div v-else :class="[sizeClass, 'font-mono']">
    <p>techit<span class="text-pink-300">[at]</span>dailitation<span class="text-orange-300">[dot]</span>xyz</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props with type and validator
const props = defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
  showAllAddress?: boolean
}>();

// Define a computed property to map the size to the appropriate Tailwind CSS class
const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm';
    case 'md':
      return ''; // No class for 'md'
    case 'lg':
      return 'text-lg';
    case 'xl':
      return 'text-xl';
    case '2xl':
      return 'text-2xl';
    case '3xl':
      return 'text-3xl';
    default:
      return ''; // Default class (or empty if invalid)
  }
});
</script>