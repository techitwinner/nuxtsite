<template>
  <main class="text-slate-950 dark:text-slate-50">
    <div class="fixed -z-[100] bg-slate-50 dark:bg-slate-950 h-full w-full"></div>
    <NavigationBar/>
    <section class="flex flex-col w-full transition-all nuxtsite">
      <slot/>
    </section>
    <Footer/>
  </main>
</template>

<script setup lang="ts">
const closeNavDrawer = () => {
  const drawerToggle = document.getElementById('navDrawer') as HTMLInputElement
  if (drawerToggle) {
    drawerToggle.checked = false // Uncheck the checkbox to close the drawer
  }
}

provide('closeNavDrawer', closeNavDrawer)
</script>

<style>
.nuxtsite {
  .ct, .home-ct {
    @apply w-full flex flex-col justify-center items-center;
    .page-main {
      @apply w-full py-10 first:pt-32 last:pb-32 items-center flex flex-col;
    }
    .social-div {
      @apply flex flex-wrap gap-2;
      .instagram-btn:hover {
        @apply border-none text-white;
        background: #833ab4;
        background: linear-gradient(to right, #833ab4,#fd1d1d,#fcb045);
      }
    }
    .page-main {
      .main-child {
        @apply flex-col w-full max-w-[64rem] justify-center items-center gap-8 p-4;
      }
      .main-child-row {
        @apply flex w-full max-w-[64rem] items-start gap-8 p-4;
      }
      .main-child, .main-child-row {
        .paragraph {
          @apply flex flex-col gap-4 items-center text-center;
        }
      }
      .blog-card-child {
        @apply flex flex-col w-full max-w-[56rem] justify-center items-center gap-8 p-4 mt-8;
      }
      .main-child-no-display {
        @apply w-full max-w-[64rem] justify-center items-center gap-8 p-4;
      }
      .blog-slug-child {
        @apply flex w-full max-w-[56rem] justify-center items-center gap-8 p-4 mt-8;
        .addt {
          @apply justify-center text-center flex-1
        }
      }
    }
  }
}
</style>