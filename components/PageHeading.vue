<template>
<section class="flex flex-row h-fit mb-6">
    <section class="aspect-square h-full">
        
    </section>
    <section class="flex flex-col">
        <p class="text-5xl heading">{{title}}</p>
        <p v-if="subTitle">{{subTitle}}</p>
    </section>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Props {
    title: string;
    subTitle?: string;
    isIcon?: boolean;
    iconName?: string;
    isEmoji?: boolean;
    emoji?: string;
  }
  
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
    isIcon: {
    type: Boolean,
    default: false
    },
    iconName: {
    type: String,
    default: undefined
    },
    isEmoji: {
    type: Boolean,
    default: false
    },
    emoji: {
    type: String,
    default: undefined
    }
}
});
</script>