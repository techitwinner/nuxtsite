<template>
  <div class="w-full">
    <div class="w-full h-full overflow-y-auto bg-base-200 p-8 flex flex-col items-start gap-4">
      <div v-if="error" class="text-error">
        Error: {{ error.message || 'Failed to load files.' }}
      </div>
      <div v-if="isLoading">Loading files...</div>
      <p class="text-5xl font-mono" v-if="path">{{ path }}</p>
      <div class="flex flex-row w-full">
        <input class="input input-sm font-mono w-full" v-model="inputPath" @keyup.enter="navigateToPath" placeholder="Enter directory path" />
        <slot/>
      </div>
      <div v-if="!isLoading && files.length > 0" class="w-full">
        <section class="font-mono">
          <button class="select-none cursor-pointer h-8 bg-base-200 hover:bg-base-100 active:opacity-50 px-4 py-1 rounded-lg w-full text-sm text-base-content text-start justify-start" v-if="path !== '/'" @click="goToParentDirectory">../</button>
          <div class="select-none cursor-pointer grid grid-cols-12 h-8 bg-base-200 hover:bg-base-100 active:opacity-50 px-4 py-1 rounded-lg w-full text-sm text-base-content text-start justify-start" v-for="(file, index) in files" :key="index" @click="handleFileClick(file)">
            <p class="col-span-11 md:col-span-9 lg:col-span-6 gap-2 flex items-center">
              <icon class="w-5 h-5" :name="file.type === 'directory' ? 'ph:folder-duotone' : 'ph:file-duotone'" />{{file.name}}
            </p>
            <p class="hidden md:flex lg:col-span-2">{{file.type}}</p>
            <p class="hidden lg:flex col-span-4">{{file.mtime}}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLocalePath } from '#i18n';

definePageMeta({
  layout: 'nothing'
})

const baseUrl = 'https://files.techit.win';
const files = ref([]);
const error = ref(null);
const isLoading = ref(false);
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

// Initialize path based on route param
const path = ref(route.params.path ? route.params.path.join('/') : '/');
const inputPath = ref(path.value);

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(`${baseUrl}/${path.value}`);
    if (!response.ok) throw new Error('Network response was not ok');
    files.value = await response.json();
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

const navigateToPath = () => {
  // Ensure the input path is cleaned up
  const cleanedPath = inputPath.value.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
  router.push(localePath(`/stuff/${cleanedPath}`));
};

// Handle file click (e.g., for navigation or other actions)
const handleFileClick = (file) => {
  if (file.type === 'directory') {
    path.value = `${path.value}/${file.name}`.replace(/^\/+|\/+$/g, ''); // Clean up slashes
    router.push(localePath(`/stuff/${path.value}`));
  } else if (file.type === 'file') {
    window.open(`${baseUrl}/${path.value}/${file.name}`, '_blank');
  }
};

// Go to the parent directory
const goToParentDirectory = () => {
  const segments = path.value.split('/').filter(Boolean);
  if (segments.length > 0) {
    segments.pop(); // Remove the last segment
    path.value = segments.join('/').replace(/^\/+|\/+$/g, ''); // Clean up slashes
    router.push(localePath(`/stuff/${path.value}`));
  }
};

// Watch route changes to trigger data fetch
watch(route, () => {
  path.value = route.params.path ? route.params.path.join('/') : '/';
  inputPath.value = path.value;
  fetchData();
});

// Fetch initial data on mount
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.page-enter-active,
.layout-enter-active,
.page-leave-active,
.layout-leave-active {
  transition: none;
}
</style>
