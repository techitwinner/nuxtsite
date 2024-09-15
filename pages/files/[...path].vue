<template>
  <div class="w-full">
    <div class="w-full h-full overflow-y-auto bg-base-200 p-4 md:p-8 flex flex-col items-start gap-4">
      <p class="text-5xl font-mono" v-if="path">FILES</p>
      <div class="flex flex-row w-full">
        <input class="input input-sm font-mono w-full" v-model="inputPath" @keyup.enter="navigateToPath" placeholder="Enter directory path" />
        <slot/>
      </div>
      <div v-if="error" class="text-error">
        Error: {{ error.message || 'Failed to load files.' }}
      </div>
      <div v-if="isLoading" class="font-mono">Loading files...</div>
      <div v-if="!isLoading" class="w-full">
        <section class="font-mono flex flex-wrap gap-4">
          <button class="items-center justify-center iconB flex flex-col cursor-pointer bg-base-200 pb-2 hover:bg-base-100 active:opacity-50 border-4 border-white border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 dark:border-opacity-0 px-4 py-1 rounded-2xl w-40 h-40 text-sm text-base-content text-start justify-start" v-if="path !== '/'" @click="goToParentDirectory">
            <icon class="w-32 h-32 opacity-50" name="ph:folder-open-thin"/>
            <span class="text-sm text-center px-1 absolute z-10 m-2 p-2 lbl">../</span>
          </button>
          <div class="select-none items-center justify-center iconB scale-in-blur flex line-clamp-1 flex-col break-all hover:break-words hover:z-10 cursor-pointer bg-base-200 hover:bg-base-100 border-4 border-white border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 dark:border-opacity-0 p-1 rounded-2xl w-40 h-40 text-sm text-base-content text-start" v-for="(file, index) in files" :key="index" @click="handleFileClick(file)">
            <template v-if="file?.type === 'directory'">
              <span class="text-sm text-center px-1 absolute z-10 m-2 p-2 lbl" v-if="!isImage(file?.name)">{{ file.name }}</span>
              <icon class="w-32 h-32 opacity-50" name="ph:folder-thin" />
            </template>
            <template v-else-if="isImage(file?.name)">
              <NuxtImg :quality="60" :src="`${baseUrl}/${Array.isArray(route.params.path) ? route.params.path.join('/') : route.params.path}/${file?.name}`" :alt="file?.name" class="w-full h-full object-cover thumbnail" />
            </template>
            <template v-else>
              <span class="text-sm text-center px-1 absolute z-10 m-2 p-2 lbl" v-if="!isImage(file?.name)">{{ file.name }}</span>
            </template>
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
  layout: 'stuff-listing'
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

const isImage = (fileName: string) => {
  return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(fileName);
};

const navigateToPath = () => {
  // Ensure the input path is cleaned up
  const cleanedPath = inputPath.value.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
  router.push(localePath(`/files/${cleanedPath}`));
};

// Handle file click (e.g., for navigation or other actions)
const handleFileClick = (file) => {
  if (file.type === 'directory') {
    path.value = `${path.value}/${file.name}`.replace(/^\/+|\/+$/g, ''); // Clean up slashes
    router.push(localePath(`/files/${path.value}`));
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
    router.push(localePath(`/files/${path.value}`));
  }
};

// Watch route changes to trigger data fetch
watch(route, () => {
  path.value = route.params.path ? route.params.path.join('/') : '/';
  inputPath.value = path.value;
  if (path.value) {
    fetchData();
  }
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
.iconB {
  .lbl {
    @apply bg-opacity-5 dark:bg-opacity-5 rounded-lg;
  }
}
.iconB:hover {
  .lbl {
    @apply bg-white text-black bg-opacity-100 dark:bg-opacity-100;
  }
  .thumbnail {
    @apply object-contain rounded-lg;
  }
}
.iconB:active {
  @apply scale-90;
  transition: transform 0.1s cubic-bezier(.25,.8,.25,1);
}
</style>
