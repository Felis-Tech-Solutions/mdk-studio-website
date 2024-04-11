<template>
  <div class="relative md:h-[35vh] overflow-hidden -mt-10 md:mt-0">
    <div class="responsive-image-wrapper">
      <NuxtImg
          v-if="hero.image"
          provider="strapi"
          :src="hero.image.data.attributes.url"
          alt="hero-image"
          class="nuxt-img-responsive object-bottom md:pb-56"
          fit='inside'
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
          <button class="bg-primary hover:bg-red-800 py-2 px-4 md:px-12 rounded text-white text-sm md:text-base">
            Vraag offerte aan
          </button>
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

<style>
.responsive-image-wrapper {
  position: relative;
  width: 100%; /* Use 100% width for responsiveness */
  padding-top: 56.25%; /* This is an example for a 16:9 aspect ratio (height / width * 100%) */
}
.nuxt-img-responsive {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container without losing aspect ratio */
}
@media (max-width: 768px) {
  .nuxt-img-responsive {
    width: 100%; /* Adjust width and height as necessary */
    height: auto;
  }
}
</style>
