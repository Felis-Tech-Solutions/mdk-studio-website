<template>
  <div class="relative md:max-h-[32rem] overflow-hidden -mt-10 md:mt-0">
    <div>
      <NuxtImg
          provider="strapi"
          :src="hero.image.data.attributes.url"
          alt="hero-image"
          class="h-64 md:h-96 lg:h-[15rem] w-screen xl:h-[28rem] object-cover"
          fit="contain"
          format='webp'
          quality="auto"
      />
    </div>
    <div class="absolute top-0 left-0 bottom-0 w-1/2 bg-black bg-opacity-75 flex justify-center items-center flex-col">
      <div class="pl-4 md:pl-0 ">
        <h1 class="text-white text-2xl md:text-[54px] break-words md:w-96 font-didact md:leading-[55px]" v-if="hero.title">
          {{ hero.title }}
        </h1>
        <div class="w-full pt-4">
          <NuxtLink
              to="/offerte-aanvragen"
              aria-label="offerte-aanvragen"
          >
            <button class="bg-primary hover:bg-red-800 py-2 px-4 md:px-12 rounded text-white text-sm md:text-base">
              Vraag offerte aan
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  hero: {
    type: Object ,
    default: () => ({} as Hero),
  }
})
</script>
