<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <div class="rounded-md max-w-64 max-h-64">
          <img alt="picture of me" class="h-full w-full" src="https://files.techit.win/images/custom/PFP/realtechit.jpg"/>
        </div>
        <div class="flex flex-col w-full items-center">
          <p>{{$t('pages.home.aboutMe.greeting')}}&excl; {{$t('pages.home.aboutMe.myNameIs')}}</p>
          <h0 class="m-0 drop-shadow-[0_1px_13px_rgba(255,255,255,0.5)]">{{$t('generic.identity.me.name.firstLast')}}</h0>
          <p>{{$t('generic.dictionary.abbreviation.aka')}} {{$t('TechitWinner')}} </p>
        </div>
        <UDivider label="👇👇👇"/>
        <UButtonGroup size="xl">
          <UButton target="_blank" color="black" to="https://github.com/techitwinner/"><i class="ph ph-github-logo text-[24px]"/>GitHub</UButton>
          <UButton color="white">{{$t('ui.action.readMore')}}</UButton>
        </UButtonGroup>
        <p class="text-xs opacity-25">* READ MORE BUTTON DOESN'T WORKS, I DIDN&apos;T IMPLEMENT THE SCROLL FUNCTION YET.<br>CONSIDER USE YOUR FINGER TO SCROLL BY YOURSELF FOR NOW!</p>
      </div>
      <img class="absolute fade-in object-cover h-full opacity-50" src="https://files.techit.win/images/background/AuroraScratch.png"/>
    </section>
    <section id="container" class="overflow-hidden relative py-4">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <div class="flex flex-col w-full items-start">
          <h0 class="">{{$t('pages.home.aboutMe.whoAmI.title')}}</h0>
          <p>{{$t('pages.home.aboutMe.whoAmI.content')}}</p>
        </div>
      </div>
    </section>
  </div>
</template>