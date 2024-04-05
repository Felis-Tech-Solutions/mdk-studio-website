<template>
  <div class="md:max-w-screen h-auto flex flex-col lg:flex-row px-0 md:px-24 lg:px-52 2xl:px-[18vw] md:py-32 bg-primary text-white gap-x-20 mt-8 lg:mt-0 pb-10">
    <div class="lg:w-1/2 px-8 lg:px-0 pt-6 lg:pt-0">
      <NuxtImg
          provider="strapi"
          class="w-full 2xl:w-[45rem] h-[30rem] 2xl:h-[25rem] object-cover rounded-2xl"
          fit='cover'
          loading="lazy"
          format='webp'
          quality="auto"
          :src="imageWithTextData.image.data.attributes.url"
      />
    </div>
    <div class="lg:w-1/2 flex items-center md:items-start flex-col mt-4 md:mt-0 px-6 md:px-0">
      <span class="text-[32px]">
        {{ imageWithTextData.title }}
      </span>
      <hr class="border-b-8 border-white w-40 rounded-2xl">
      <div class="mt-2 leading-6 md:leading-7 text-sm md:text-base">
        {{ imageWithTextData.description }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  imageWithTextData: {
    type: String,
    required: true
  },
})
</script>
