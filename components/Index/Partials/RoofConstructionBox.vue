<template>
<!--  <a href="/" class="w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] h-[340px] rounded-t-2xl shadow-2xl hover:cursor-pointer text-white hover:text-gray-400">-->
  <a href="/" class="lg:w-[25vw] rounded-t-2xl shadow-2xl hover:cursor-pointer text-white hover:text-gray-400 rounded-b-2xl mt-4 lg:mt-0 ">
      <div class="h-12 lg:h-1/6 text-base font-semibold flex justify-center items-center">
        <span class="text-primary">
          {{ roofConstructionComponentData.title }}
        </span>
      </div>
      <div class="h-4/6 responsive-image-wrapper border">
        <NuxtImg
            provider="strapi"
            :src="roofConstructionComponentData.image.data.attributes.url"
            alt="hero-image"
            class="nuxt-img-responsive"
            fit='cover'
            loading="lazy"
            format='webp'
            quality="auto"
        />
      </div>
      <div class="h-12 lg:h-1/6 bg-primary flex justify-center items-center rounded-b-2xl">
        <div class="flex items-center">
           <span class="text-base underline underline-offset-4">
            Lees meer
          </span>
            <RightArrowIcon class="h-4 w-4 lg:h-5 lg:w-5 pt-1"/>
        </div>
      </div>
2
  </a>
</template>
<script setup lang="ts">
import RightArrowIcon from "~/icons/RightArrowIcon.vue";

defineProps({
  roofConstructionComponentData: {
    type: String,
    required: true
  },
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
