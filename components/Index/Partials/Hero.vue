<template>
  <div class="relative md:h-4/6 overflow-hidden -mt-10 md:mt-0">
    <NuxtImg
        provider="strapi"
        :src="hero.image.data.attributes.formats.large.url"
        alt="hero-image"
        width='1728px'
        height='945px'
        fit='cover'
        format='webp'
        quality='100'
    />
    <div class="absolute top-0 left-0 bottom-0 w-1/2 bg-black bg-opacity-75 flex justify-center items-center flex-col">
      <div class="pl-4 md:pl-0 md:h-80">
        <h1 class="text-white text-2xl md:text-[54px] break-words md:w-96 font-didact md:leading-[55px]">
          {{ hero.title }}
        </h1>
        <div class="w-full pt-4">
          <button class="bg-primary hover:bg-red-800 py-2 px-4 md:px-12 rounded text-white text-sm md:text-base">
            Vraag offerte aan
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary h-1/6 flex justify-around items-center">
    <InfoComponent v-for="info in hero.informationBlocks" :title="info.title" :sub-title="info.subtitle"/>
  </div>
</template>
<script setup lang="ts">
import InfoComponent from "~/components/Index/Partials/InfoComponent.vue";

defineProps({
  hero: {
    type: Object ,
    default: () => ({} as Hero),
  }
})
</script>