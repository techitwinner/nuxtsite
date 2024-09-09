<script setup lang="ts">

  defineProps({
    square: {
      type: Boolean,
      default: false
    },
    displayLocaleValue: {
      type: Boolean,
      default: true
    },
    class: {
      type: String,
    }
  });

  import { computed, inject } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useSwitchLocalePath } from '#i18n'
  import { useRouter } from 'vue-router'

  const { t, locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const router = useRouter()

  const setLocale = (newLocale) => {
    locale.value = newLocale;
    router.push(switchLocalePath(newLocale))
  };

  const buttonText = computed(() => locale.value === 'en' ? 'TH' : 'EN')
  const localeList = [
    {key: 1, label: 'English (English)', labelCode: 'en', click: () => {setLocale('en')} },
    {key: 2, label: 'Thai (ภาษาไทย)', labelCode: 'th', click: () => {setLocale('th')} }
  ];

  const closeNavDrawer = inject<() => void>('closeNavDrawer')
</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle"><icon name="ph:globe" class="swap-off fill-current h-6 w-6"/></div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li v-for="item in localeList" :key="item.key" :class="locale.value === item.labelCode ? 'bg-primary' : ''" @click="item.click"><a>{{item.label}}</a></li>
    </ul>
  </div>
</template>