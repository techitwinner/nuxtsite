<template>
  <div>
    <section id="container" class="overflow-hidden relative justify-center py-20">
      <div id="wrapper" class="flex flex-col items-center gap-8 z-[1]">
        <div class="rounded-md max-w-64 max-h-64">
          <img alt="picture of me" class="h-full w-full rounded-xl" src="https://files.techit.win/images/custom/PFP/realtechit.jpg"/>
        </div>
        <div class="flex flex-col w-full items-center gap-3">
          <p>{{$t('pages.home.aboutMe.greeting')}}&excl; {{$t('pages.home.aboutMe.myNameIs')}}</p>
          <h0 class="m-0 text-center line-height-1 drop-shadow-[0_1px_13px_rgba(255,255,255,0.5)]">{{$t('generic.identity.me.name.firstLast')}}</h0>
          <p>{{$t('generic.dictionary.abbreviation.aka')}} TechitWinner&comma; {{$t('generic.identity.me.name.nick')}}</p>
        </div>
        <UDivider label="👇👇👇"/>
        <UButtonGroup size="xl">
          <UButton target="_blank" color="black" to="https://github.com/techitwinner/"><i class="ph ph-github-logo text-[24px]"/>GitHub</UButton>
        </UButtonGroup>
        <p class="text-sm select-none animate-bounce opacity-25">&downarrow; {{$t('ui.action.readMore')}} &downarrow;</p>
      </div>
      <img class="absolute fade-in object-cover h-full opacity-50" src="/__content__/bg/AuroraScratch.png"/>
    </section>
    <section id="container" class="overflow-hidden relative py-4">
      <div id="wrapper2" class="flex flex-col items-center gap-8 z-[1]">
        <div class="flex flex-col w-full items-start gap-4">
          <h0 class="">{{$t('pages.home.aboutMe.whoAmI.title')}}</h0>
          <p>{{$t('pages.home.aboutMe.whoAmI.content')}}</p>
        </div>
      </div> <!-- ABOUT ME WRAPPER -->
      <div id="wrapper2" class="flex flex-col items-center gap-8 z-[1]">
        <div class="flex flex-col w-full items-start gap-4">
          <h3 class="">{{$t('pages.home.technology.title')}}</h3>
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col gap-2">
              <h4>{{$t('pages.home.technology.content.1.title')}}</h4>
              <section class="flex flex-wrap gap-2">
                <UBadge class="gap-1" size="lg" v-for="item in technoLang" :key="item.key" color="gray">
                  <i v-if="item.isInIcon" :class="`ph ph-${item.inIcon} text-[20px]`"></i>
                  <img v-if="!item.isInIcon" :src="item.exIcon" class="w-6 h-6"/>
                  {{item.name}}
                </UBadge>
              </section>
            </div>
            <div class="flex flex-col gap-2">
              <h4>{{$t('pages.home.technology.content.2.title')}}</h4>
              <section class="flex flex-wrap gap-2">
                <UBadge class="gap-1" size="lg" v-for="item in technoSftwre" :key="item.key" color="gray">
                  <i v-if="item.isInIcon" :class="`ph ph-${item.inIcon} text-[20px]`"></i>
                  <img v-if="!item.isInIcon" :src="item.exIcon" class="w-6 h-6"/>
                  {{item.name}}
                </UBadge>
              </section>
            </div>
            <div class="flex flex-col gap-2">
              <h4>{{$t('pages.home.technology.content.3.title')}}</h4>
              <section class="flex flex-wrap gap-2">
                <UBadge class="gap-1" size="lg" v-for="item in technoFrmewrk" :key="item.key" color="gray">
                  <i v-if="item.isInIcon" :class="`ph ph-${item.inIcon} text-[20px]`"></i>
                  <img v-if="!item.isInIcon" :src="item.exIcon" class="w-6 h-6"/>
                  {{item.name}}
                </UBadge>
              </section>
            </div>
          </section>
        </div>
      </div> <!-- TECHNOLOGY WRAPPER -->
      <div id="wrapper2" class="flex flex-col items-center gap-8 z-[1]">
        <ContactCard/>
      </div> <!-- GET IN TOUCH WRAPPER -->
    </section>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const technoLang = [
  { key: 1, name: "HTML", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2U0NGQyNiIgZD0iTTE5LjAzNyAxMTMuODc2TDkuMDMyIDEuNjYxaDEwOS45MzZsLTEwLjAxNiAxMTIuMTk4bC00NS4wMTkgMTIuNDh6Ii8+PHBhdGggZmlsbD0iI2YxNjUyOSIgZD0ibTY0IDExNi44bDM2LjM3OC0xMC4wODZsOC41NTktOTUuODc4SDY0eiIvPjxwYXRoIGZpbGw9IiNlYmViZWIiIGQ9Ik02NCA1Mi40NTVINDUuNzg4TDQ0LjUzIDM4LjM2MUg2NFYyNC41OTlIMjkuNDg5bC4zMyAzLjY5MmwzLjM4MiAzNy45MjdINjR6bTAgMzUuNzQzbC0uMDYxLjAxN2wtMTUuMzI3LTQuMTRsLS45NzktMTAuOTc1SDMzLjgxNmwxLjkyOCAyMS42MDlsMjguMTkzIDcuODI2bC4wNjMtLjAxN3oiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjMuOTUyIDUyLjQ1NXYxMy43NjNoMTYuOTQ3bC0xLjU5NyAxNy44NDlsLTE1LjM1IDQuMTQzdjE0LjMxOWwyOC4yMTUtNy44MmwuMjA3LTIuMzI1bDMuMjM0LTM2LjIzM2wuMzM1LTMuNjk2aC0zLjcwOHptMC0yNy44NTZ2MTMuNzYyaDMzLjI0NGwuMjc2LTMuMDkybC42MjgtNi45NzhsLjMyOS0zLjY5MnoiLz48L3N2Zz4="},
  { key: 2, name: "CSS", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iIzE1NzJiNiIgZD0iTTE4LjgxNCAxMTQuMTIzTDguNzYgMS4zNTJoMTEwLjQ4bC0xMC4wNjQgMTEyLjc1NGwtNDUuMjQzIDEyLjU0M3oiLz48cGF0aCBmaWxsPSIjMzNhOWRjIiBkPSJtNjQuMDAxIDExNy4wNjJsMzYuNTU5LTEwLjEzNmw4LjYwMS05Ni4zNTRoLTQ1LjE2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NC4wMDEgNTEuNDI5aDE4LjMwMmwxLjI2NC0xNC4xNjNINjQuMDAxVjIzLjQzNWgzNC42ODJsLS4zMzIgMy43MTFsLTMuNCAzOC4xMTRoLTMwLjk1eiIvPjxwYXRoIGZpbGw9IiNlYmViZWIiIGQ9Im02NC4wODMgODcuMzQ5bC0uMDYxLjAxOGwtMTUuNDAzLTQuMTU5bC0uOTg1LTExLjAzMUgzMy43NTJsMS45MzcgMjEuNzE3bDI4LjMzMSA3Ljg2M2wuMDYzLS4wMTh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTgxLjEyNyA2NC42NzVsLTEuNjY2IDE4LjUyMmwtMTUuNDI2IDQuMTY0djE0LjM5bDI4LjM1NC03Ljg1OGwuMjA4LTIuMzM3bDIuNDA2LTI2Ljg4MXoiLz48cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJNNjQuMDQ4IDIzLjQzNXYxMy44MzFIMzAuNjRsLS4yNzctMy4xMDhsLS42My03LjAxMmwtLjMzMS0zLjcxMXptLS4wNDcgMjcuOTk2djEzLjgzMUg0OC43OTJsLS4yNzctMy4xMDhsLS42MzEtNy4wMTJsLS4zMy0zLjcxMXoiLz48L3N2Zz4=" },
  { key: 3, name: "JavaScript", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNmNWRlMTkiIGQ9Ik0yIDJoMjh2MjhIMnoiLz48cGF0aCBkPSJNMjAuODA5IDIzLjg3NWEyLjg3IDIuODcgMCAwIDAgMi42IDEuNmMxLjA5IDAgMS43ODctLjU0NSAxLjc4Ny0xLjNjMC0uOS0uNzE2LTEuMjIyLTEuOTE2LTEuNzQ3bC0uNjU4LS4yODJjLTEuOS0uODA5LTMuMTYtMS44MjItMy4xNi0zLjk2NGMwLTEuOTczIDEuNS0zLjQ3NiAzLjg1My0zLjQ3NmEzLjg5IDMuODkgMCAwIDEgMy43NDIgMi4xMDdMMjUgMTguMTI4QTEuNzkgMS43OSAwIDAgMCAyMy4zMTEgMTdhMS4xNDUgMS4xNDUgMCAwIDAtMS4yNTkgMS4xMjhjMCAuNzg5LjQ4OSAxLjEwOSAxLjYxOCAxLjZsLjY1OC4yODJjMi4yMzYuOTU5IDMuNSAxLjkzNiAzLjUgNC4xMzNjMCAyLjM2OS0xLjg2MSAzLjY2Ny00LjM2IDMuNjY3YTUuMDYgNS4wNiAwIDAgMS00Ljc5NS0yLjY5MVptLTkuMjk1LjIyOGMuNDEzLjczMy43ODkgMS4zNTMgMS42OTMgMS4zNTNjLjg2NCAwIDEuNDEtLjMzOCAxLjQxLTEuNjUzdi04Ljk0N2gyLjYzMXY4Ljk4MmMwIDIuNzI0LTEuNiAzLjk2NC0zLjkyOSAzLjk2NGE0LjA4NSA0LjA4NSAwIDAgMS0zLjk0Ny0yLjRaIi8+PC9zdmc+" },
  { key: 4, name: "TypeScript", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgeD0iMiIgeT0iMiIgZmlsbD0iIzMxNzhjNiIgcng9IjEuMzEyIi8+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMjQ1IDIzLjc1OXYzLjA2OGE2LjUgNi41IDAgMCAwIDEuNzY0LjU3NWExMS42IDExLjYgMCAwIDAgMi4xNDYuMTkyYTEwIDEwIDAgMCAwIDIuMDg4LS4yMTFhNS4xIDUuMSAwIDAgMCAxLjczNS0uN2EzLjU0IDMuNTQgMCAwIDAgMS4xODEtMS4yNjZhNC40NyA0LjQ3IDAgMCAwIC4xODYtMy4zOTRhMy40IDMuNCAwIDAgMC0uNzE3LTEuMTE3YTUuMiA1LjIgMCAwIDAtMS4xMjMtLjg3N2ExMiAxMiAwIDAgMC0xLjQ3Ny0uNzM0cS0uNi0uMjQ5LTEuMDgtLjQ4NGE1LjUgNS41IDAgMCAxLS44MTMtLjQ3OWEyLjEgMi4xIDAgMCAxLS41MTYtLjUxOGExLjEgMS4xIDAgMCAxLS4xODEtLjYxOGExLjA0IDEuMDQgMCAwIDEgLjE2Mi0uNTcxYTEuNCAxLjQgMCAwIDEgLjQ1OS0uNDM2YTIuNCAyLjQgMCAwIDEgLjcyNi0uMjgzYTQuMiA0LjIgMCAwIDEgLjk1Ni0uMWE2IDYgMCAwIDEgLjgwOC4wNThhNiA2IDAgMCAxIC44NTYuMTc3YTYgNiAwIDAgMSAuODM2LjNhNC43IDQuNyAwIDAgMSAuNzUxLjQyMlYxMy45YTcuNSA3LjUgMCAwIDAtMS41MjUtLjRhMTIuNCAxMi40IDAgMCAwLTEuOS0uMTI5YTguOCA4LjggMCAwIDAtMi4wNjQuMjM1YTUuMiA1LjIgMCAwIDAtMS43MTYuNzMzYTMuNjYgMy42NiAwIDAgMC0xLjE3MSAxLjI3MWEzLjczIDMuNzMgMCAwIDAtLjQzMSAxLjg0NWEzLjYgMy42IDAgMCAwIC43ODkgMi4zNGE2IDYgMCAwIDAgMi4zOTUgMS42MzlxLjYzLjI2IDEuMTc1LjUwOWE2LjUgNi41IDAgMCAxIC45NDIuNTE3YTIuNSAyLjUgMCAwIDEgLjYyNi41ODVhMS4yIDEuMiAwIDAgMSAuMjMuNzE5YTEuMSAxLjEgMCAwIDEtLjE0NC41NTJhMS4zIDEuMyAwIDAgMS0uNDM1LjQ0MWEyLjQgMi40IDAgMCAxLS43MjYuMjkyYTQuNCA0LjQgMCAwIDEtMS4wMTguMTA1YTUuOCA1LjggMCAwIDEtMS45NjktLjM1YTUuOSA1LjkgMCAwIDEtMS44MDUtMS4wNDVtLTUuMTU0LTcuNjM4aDR2LTIuNTI3SDUuOTM4djIuNTI3SDkuOTJ2MTEuMjU0aDMuMTcxWiIvPjwvc3ZnPg==" },
]

const technoSftwre = [
  { key: 1, name: "Linux", isInIcon: false, inIcon: "", exIcon: "/__content__/icons/devicon--linux.svg"},
  { key: 2, name: "Git", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2YzNGYyOSIgZD0iTTEyNC43MzcgNTguMzc4TDY5LjYyMSAzLjI2NGMtMy4xNzItMy4xNzQtOC4zMi0zLjE3NC0xMS40OTcgMEw0Ni42OCAxNC43MWwxNC41MTggMTQuNTE4YzMuMzc1LTEuMTM5IDcuMjQzLS4zNzUgOS45MzIgMi4zMTRjMi43MDMgMi43MDYgMy40NjEgNi42MDcgMi4yOTQgOS45OTNsMTMuOTkyIDEzLjk5M2MzLjM4NS0xLjE2NyA3LjI5Mi0uNDEzIDkuOTk0IDIuMjk1YzMuNzggMy43NzcgMy43OCA5LjkgMCAxMy42NzlhOS42NzMgOS42NzMgMCAwIDEtMTMuNjgzIDBhOS42OCA5LjY4IDAgMCAxLTIuMTA1LTEwLjUyMUw2OC41NzQgNDcuOTMzbC0uMDAyIDM0LjM0MWE5LjcgOS43IDAgMCAxIDIuNTU5IDEuODI4YzMuNzc4IDMuNzc3IDMuNzc4IDkuODk4IDAgMTMuNjgzYy0zLjc3OSAzLjc3Ny05LjkwNCAzLjc3Ny0xMy42NzkgMGMtMy43NzgtMy43ODQtMy43NzgtOS45MDUgMC0xMy42ODNhOS43IDkuNyAwIDAgMSAzLjE2Ny0yLjExVjQ3LjMzM2E5LjYgOS42IDAgMCAxLTMuMTY3LTIuMTExYy0yLjg2Mi0yLjg2LTMuNTUxLTcuMDYtMi4wODMtMTAuNTc2TDQxLjA1NiAyMC4zMzNMMy4yNjQgNTguMTIzYTguMTMzIDguMTMzIDAgMCAwIDAgMTEuNWw1NS4xMTcgNTUuMTE0YzMuMTc0IDMuMTc0IDguMzIgMy4xNzQgMTEuNDk5IDBsNTQuODU4LTU0Ljg1OGE4LjEzNSA4LjEzNSAwIDAgMC0uMDAxLTExLjUwMSIvPjwvc3ZnPg=="},
  { key: 3, name: "GitHub", isInIcon: true, inIcon: "github-logo", exIcon: ""},
]

const technoFrmewrk = [
  { key: 1, name: "Nuxt", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjUzZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDE2OCI+PHBhdGggZmlsbD0iIzAwZGM4MiIgZD0iTTE0My42MTggMTY3LjAyOWg5NS4xNjZjMy4wMjMgMCA1Ljk5Mi0uNzcxIDguNjEtMi4yMzdhMTYuOTYgMTYuOTYgMCAwIDAgNi4zMDItNi4xMTVhMTYuMyAxNi4zIDAgMCAwIDIuMzA0LTguMzUyYzAtMi45MzItLjc5OS01LjgxMS0yLjMxMi04LjM1TDE4OS43NzggMzQuNmExNi45NyAxNi45NyAwIDAgMC02LjMwMS02LjExM2ExNy42IDE3LjYgMCAwIDAtOC42MDgtMi4yMzhjLTMuMDIzIDAtNS45OTEuNzcyLTguNjA5IDIuMjM4YTE2Ljk2IDE2Ljk2IDAgMCAwLTYuMyA2LjExM2wtMTYuMzQyIDI3LjQ3M2wtMzEuOTUtNTMuNzI0YTE3IDE3IDAgMCAwLTYuMzA0LTYuMTEyQTE3LjY0IDE3LjY0IDAgMCAwIDk2Ljc1NCAwYy0zLjAyMiAwLTUuOTkyLjc3Mi04LjYxIDIuMjM3YTE3IDE3IDAgMCAwLTYuMzAzIDYuMTEyTDIuMzEgMTQxLjk3NWExNi4zIDE2LjMgMCAwIDAtMi4zMSA4LjM1YzAgMi45MzIuNzkzIDUuODEzIDIuMzA0IDguMzUyYTE2Ljk2IDE2Ljk2IDAgMCAwIDYuMzAyIDYuMTE1YTE3LjYgMTcuNiAwIDAgMCA4LjYxIDIuMjM3aDU5LjczN2MyMy42NjkgMCA0MS4xMjMtMTAuMDg0IDUzLjEzNC0yOS43NThsMjkuMTU5LTQ4Ljk4M2wxNS42MTgtMjYuMjE1bDQ2Ljg3NCA3OC43NDJoLTYyLjQ5MnptLTY3LjY0LTI2LjI0bC00MS42ODgtLjAxTDk2Ljc4MiAzNS43OTZsMzEuMTgxIDUyLjQ5MmwtMjAuODc3IDM1LjA4NGMtNy45NzYgMTIuNzY1LTE3LjAzNyAxNy40MTYtMzEuMTA3IDE3LjQxNiIvPjwvc3ZnPg=="},
  { key: 2, name: "Next", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiLz48cGF0aCBmaWxsPSJ1cmwoI2Rldmljb25OZXh0anMwKSIgZD0iTTEwNi4zMTcgMTEyLjAxNEw0OS4xNjcgMzguNEgzOC40djUxLjE3OWg4LjYxNHYtNDAuMjRsNTIuNTQgNjcuODg0YTY0IDY0IDAgMCAwIDYuNzYzLTUuMjA5Ii8+PHBhdGggZmlsbD0idXJsKCNkZXZpY29uTmV4dGpzMSkiIGQ9Ik04MS43NzggMzguNGg4LjUzM3Y1MS4yaC04LjUzM3oiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImRldmljb25OZXh0anMwIiB4MT0iMTA5IiB4Mj0iMTQ0LjUiIHkxPSIxMTYuNSIgeTI9IjE2MC41IiBncmFkaWVudFRyYW5zZm9ybT0ic2NhbGUoLjcxMTExKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkZXZpY29uTmV4dGpzMSIgeDE9IjEyMSIgeDI9IjEyMC43OTkiIHkxPSI1NCIgeTI9IjEwNi44NzUiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSguNzExMTEpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"},
  { key: 3, name: "Tailwind CSS", isInIcon: false, inIcon: "", exIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iIzM4YmRmOCIgZD0iTTY0LjAwNCAyNS42MDJjLTE3LjA2NyAwLTI3LjczIDguNTMtMzIgMjUuNTk3YzYuMzk4LTguNTMxIDEzLjg2Ny0xMS43MyAyMi4zOTgtOS41OTdjNC44NzEgMS4yMTQgOC4zNTIgNC43NDYgMTIuMjA3IDguNjZDNzIuODgzIDU2LjYyOSA4MC4xNDUgNjQgOTYuMDA0IDY0YzE3LjA2NiAwIDI3LjczLTguNTMxIDMyLTI1LjYwMnEtOS42IDEyLjgwMy0yMi4zOTkgOS42MDJjLTQuODctMS4yMTUtOC4zNDctNC43NDYtMTIuMjA3LTguNjZjLTYuMjctNi4zNjctMTMuNTMtMTMuNzM4LTI5LjM5NC0xMy43MzhNMzIuMDA0IDY0Yy0xNy4wNjYgMC0yNy43MyA4LjUzMS0zMiAyNS42MDJROS42MDMgNzYuNzk5IDIyLjQwMiA4MGM0Ljg3MSAxLjIxNSA4LjM1MiA0Ljc0NiAxMi4yMDcgOC42NmM2LjI3NCA2LjM2NyAxMy41MzYgMTMuNzM4IDI5LjM5NSAxMy43MzhjMTcuMDY2IDAgMjcuNzMtOC41MyAzMi0yNS41OTdxLTkuNiAxMi43OTctMjIuMzk5IDkuNTk3Yy00Ljg3LTEuMjE0LTguMzQ3LTQuNzQ2LTEyLjIwNy04LjY2QzU1LjEyOCA3MS4zNzEgNDcuODY4IDY0IDMyLjAwNCA2NG0wIDAiLz48L3N2Zz4="},
]

const goTo = (path: string) => {
  if (path) {
    router.push(path).catch((err) => {
      if (err.name !== 'NavigationDuplicated') {
        console.error(err)
      }
    })
  }
}
</script>