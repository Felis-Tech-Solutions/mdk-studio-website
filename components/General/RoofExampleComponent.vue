<template>
  <div class="col-span-1 h-[25rem]  4xl:h-[28rem] flex flex-col bg-primary">
      <NuxtImg
          provider="strapi"
          class="w-full h-2/3 img rounded"
          loading="lazy"
          format='webp'
          quality="auto"
          :src="roofConstructionData.image.data.attributes.url"
          alt="roof-construction"
      >
      </NuxtImg>
    <div class="grid grid-cols-2 grid-rows-2 w-full mt-4 gap-y-4 bg-primary text-white">
      <span>
        {{roofConstructionData.textFieldOne}}
      </span>
      <span>
        {{roofConstructionData.textFieldTwo}}
      </span>
      <span>
        {{roofConstructionData.textFieldThree}}
      </span>
      <span>
        {{roofConstructionData.textFieldFour}}
      </span>
    </div>
    <div class="mt-5 w-full">
      <NuxtLink
          to="/offerte-aanvragen"
          class="flex w-full"
          aria-label="offer-aanvragen">
        <button class="h-10 pl-4 bg-white text-primary hover:bg-gray-100  w-2/3">
          {{ roofConstructionData.buttenText }}
        </button>
        <div class="bg-black text-white w-1/3 flex justify-center items-center">
          {{ roofConstructionData.price }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  roofConstructionData: {
    type: String,
    required: true
  },
})
</script>

<style scoped lang="scss">
.img {
  object-fit:cover;
}
</style>
