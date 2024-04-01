<template>
  <div class="flex flex-col text-white py-2 lg:px-0">
      <span class="text-2xl xl:text-3xl 2xl:text-[54px] font-semibold">
        {{ title }}
      </span>
    <span class="flex justify-center text-l xl:text-xl 2xl:text-2xl lg:pt-4">
        {{ subTitle }}
      </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
})
</script>

