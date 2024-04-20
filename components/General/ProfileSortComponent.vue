<template>
  <div class="col-span-1 flex flex-col bg-primary">
    <div class="w-full mt-4  bg-primary text-white">
      <NuxtImg
        provider="strapi"
        class="w-full h-2/3 img rounded"
        loading="lazy"
        format='webp'
        quality="auto"
        :src="profileSort.image.data.attributes.url"
        alt="roof-construction"
        />
      <div class="flex justify-center mt-2">
        <span class="text-2xl">
          {{ profileSort.type }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profileSort: {
    type: String,
    required: true
  },
})
</script>
