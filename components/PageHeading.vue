<template>
  <section class="paragraph">
    <p class="text-5xl md:text-6xl font-bold font-serif">{{title}}</p>
    <span v-html="subTitle"></span>
  </section>
</template>

<style>
.paragraph {
  @apply flex flex-col gap-4 items-center text-center;
}
</style>

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
    },
    head: {
      type: String,
      default: 'h1',
      validator: (value: string) => ['h1', 'h2', 'h3', 'h4'].includes(value)
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

    const headingClass = computed(() => {
      switch (props.head) {
        case 'h1':
          return 'text-6xl font-bold';
        case 'h2':
          return 'text-4xl font-bold';
        case 'h3':
          return 'text-2xl font-bold';
        case 'h4':
          return 'font-bold';
        default:
          return 'text-6xl font-bold';
      }
    });

    return {
      justifyClass,
      headingClass
    };
  }
});
</script>