<template>
  <div class="md:max-w-screen h-auto flex flex-col md:flex-row md:px-80 md:py-36 bg-primary text-white gap-x-20 mt-8 lg:mt-0">
    <div class="md:w-1/2 px-8 lg:px-0 pt-6 lg:pt-0">
      <NuxtImg
          provider="strapi"
          class="w-full h-full object-cover rounded-2xl"
          fit='cover'
          loading="lazy"
          format='webp'
          quality="auto"
          :src="imageWithTextData.image.data.attributes.url"
      />
    </div>
    <div class="md:w-1/2 flex items-center md:items-start flex-col mt-4 md:mt-0 px-6 md:px-0">
      <span class="text-[32px]">
        {{ imageWithTextData.title }}
      </span>
      <hr class="border-b-8 border-white w-40 rounded-2xl">
      <div class="mt-2 leading-6 md:leading-7">
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
