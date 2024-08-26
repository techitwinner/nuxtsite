<template>
  <div>
    <div class="fixed -z-[100] h-full w-full bg-[var(--neo-background)]"></div>
    <NavigationHead/>
    <NavigationBar/>
    <main class="flex flex-col bg-[var(--neo-background)] items-center">
      <div class="flex flex-col w-full">
        <slot/>
      </div>
    </main>
  </div>
</template>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 2rem 1rem;
    max-width: 1024px;
    width: 100%;
  }
}

.h-full {
  height: calc(100vh - 72px);
}
</style>