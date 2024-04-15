<template>
  <div
      class="md:max-w-screen h-auto flex flex-col px-0 md:px-24 lg:px-24 2xl:px-96 md:py-32 gap-x-20 mt-8 lg:mt-0 pb-10"
      :class="imageWithTextData.imageType === 'ImageRight' ? 'lg:flex-row-reverse ' : 'lg:flex-row bg-primary text-white'"
  >
    <div class="lg:w-1/2 px-8 lg:px-0 pt-12 pb-6 lg:[b-0 lg:pt-0 2xl:mx-24">
      <NuxtImg
          provider="strapi"
          class="w-full 2xl:w-[45rem] h-[20rem] 2xl:h-[30rem] object-cover rounded-2xl"
          fit='cover'
          loading="lazy"
          format='webp'
          quality="auto"
          :src="imageWithTextData.image.data.attributes.url"
      />
    </div>
    <div class="lg:w-1/2 flex items-center md:items-start flex-col mt-4 md:mt-0 px-6 md:px-0">
      <div class="w-full md:w-auto lg:flex lg:flex-col lg:items-center">
        <span class="text-[32px] md:pr-24 font-bold text">
          {{ imageWithTextData.title }}
        </span>
        <hr class="border-b-8 w-full rounded-2xl" :class="imageWithTextData.imageType === 'ImageRight' ? 'border-primary' : 'border-white'">
      </div>
      <div class="mt-6 leading-6 md:leading-7 text-sm md:text-base">
        {{ imageWithTextData.description }}
      </div>
      <NuxtLink to="/offerte-aanvragen"
          v-if="imageWithTextData.buttonText"
          href="/"
          class="border rounded-lg bg-primary md:text-sm lg:text-base py-3 px-8 mt-10"
          :class="imageWithTextData.imageType === 'ImageRight' ? 'bg-primary hover:bg-[#990c0c] text-white' : 'bg-white text-primary hover:bg-gray-200'"
      >
        {{ imageWithTextData.buttonText }}
      </NuxtLink>

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
