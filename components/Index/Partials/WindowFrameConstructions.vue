<template>
  <div
      class="lg:w-[25vw] 3xl:w-[20vw] 4xl:w-[20vw] rounded-t-2xl shadow-2xl  text-white  mt-4 lg:mt-0"
      aria-label="roof-construction-link"
  >
    <div>
      <NuxtImg
          provider="strapi"
          :src="roofConstructionComponentData.image.data.attributes.url"
          alt="hero-image"
          loading="lazy"
          class="h-64 w-[90rem] md:h-96 lg:h-[15rem] xl:w-[35rem] xl:h-[15rem] object-cover rounded-t-2xl"
          fit="cover"
          quality="auto"
      />
    </div>
    <div class="h-12 lg:h-1/6 bg-primary flex justify-center items-center rounded-b-2xl z-10">
      <div class="flex items-center">
         <span class="text-base underline underline-offset-4">
          {{ roofConstructionComponentData.title }}
        </span>
<!--        <RightArrowIcon class="h-4 w-4 lg:h-5 lg:w-5 pt-1"/>-->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import RightArrowIcon from "~/icons/RightArrowIcon.vue";

defineProps({
  roofConstructionComponentData: {
    type: Object,
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
  object-fit: cover; /* Ensure the image covers the container without losing aspect ratio */
}
@media (max-width: 768px) {
  .nuxt-img-responsive {
    width: 100%; /* Adjust width and height as necessary */
    height: 5100px;
  }
}
</style>
