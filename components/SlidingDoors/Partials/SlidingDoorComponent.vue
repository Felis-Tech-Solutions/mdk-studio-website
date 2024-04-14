<template>
  <div
      class="md:max-w-screen h-auto flex flex-col px-0 md:px-12 lg:px-24 3xl:px-80 md:py-32 gap-x-20 mt-8 lg:mt-0 pb-10"
      :class="imageWithTextData.imageType === 'ImageRight' ? 'lg:flex-row-reverse ' : 'lg:flex-row bg-primary text-white'"
  >
    <div class="2xl:mx-24 flex flex-col md:flex-row md:gap-x-12" :class="imageWithTextData.imageType === 'ImageRight' ? 'md:flex-row-reverse ' : 'md:flex-row bg-primary text-white'">
      <div class="px-4 md:px-0 lg:px-0 pt-12 pb-6 lg:pb-0 mx-auto max-w-screen-lg">
        <NuxtImg
            provider="strapi"
            class="w-64 h-64 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[35rem] xl:h-[35rem] object-cover rounded-2xl"
            fit="cover"
            loading="lazy"
            format="webp"
            quality="auto"
            :src="imageWithTextData.image.data.attributes.url"
        />
      </div>

      <div class="md:w-1/2 flex items-center md:items-start flex-col mt-4 md:mt-0 px-6 md:px-0">
        <div class="w-full md:w-auto lg:flex lg:flex-col lg:items-center">
        <span class="md:text-xl lg:text-2xl md:pr-24 font-bold text">
          {{ imageWithTextData.title }}
        </span>
        </div>
        <div class="mt-6 leading-6 md:leading-7 text-sm md:text-base lg:text-2xl font-light">
          {{ imageWithTextData.description }}
        </div>
        <ol class="mt-4 text-sm md:text-base lg:text-xl 2xl:text-2xl font-light list-disc pl-4">
          <li v-for="item in imageWithTextData.listItems" :key="item">
            {{ item.title }}
          </li>
        </ol>
        <NuxtLink to="/offerte-aanvragen"
                  v-if="imageWithTextData.buttonText"
                  class="border rounded-lg bg-primary md:text-sm lg:text-base py-3 px-8 mt-10"
                  :class="imageWithTextData.imageType === 'ImageRight' ? 'bg-primary hover:bg-[#990c0c] text-white' : 'bg-white text-primary hover:bg-gray-200'"
        >
          {{ imageWithTextData.buttonText }}
        </NuxtLink>
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
