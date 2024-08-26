<template>
  <div>
    <section id="container" class="overflow-hidden justify-center py-24">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <div class="rounded-md max-w-64 max-h-64">
          <img alt="picture of me" class="h-full w-full" src="https://files.techit.win/images/custom/PFP/realtechit.jpg"/>
        </div>
        <div class="flex flex-col w-full items-center">
          <h0 class="m-0 drop-shadow-[0_1px_13px_rgba(255,255,255,0.5)]">Oh, it doesn't works!</h0>
        </div>
        <UDivider label="INSTEAD VISIT OTHER PAGES"/>
          <UButton color="black" size="xl" to="/"><i class="ph ph-house text-[24px]"/>Home</UButton>
      </div>
      <img class="absolute fade-in object-cover h-full opacity-50" src="https://files.techit.win/images/background/AuroraScratch.png"/>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>