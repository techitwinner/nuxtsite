<template>
<section class="flex flex-col h-fit mb-6">
    <section :class="['flex flex-col', justifyClass]">
        <p class="font-bold text-6xl my-4 sm:text-7xl">{{title}}</p>
        <p v-if="subTitle">{{subTitle}}</p>
    </section>
</section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
name: 'PageHeading',
props: {
    title: {
    type: String,
    required: true
    },
    subTitle: {
    type: String,
    default: undefined
    },
    justify: {
      type: String,
      default: 'left',
      validator: (value: string) => ['left', 'center', 'right'].includes(value)
    }
},
  setup(props) {
    const justifyClass = computed(() => {
      switch (props.justify) {
        case 'center':
          return 'items-center text-center';
        case 'right':
          return 'items-end text-end';
        default:
          return 'items-start text-start';
      }
    });

    return {
      justifyClass
    };
  }
});
</script>