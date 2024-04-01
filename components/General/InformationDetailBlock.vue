<template>
  <div class="flex flex-col">
    <span class="text-[22px] font-bold pb-2">
        {{ informationDetailBlock.title}}
    </span>
    <span class="leading-8 text-lg">
      {{ informationDetailBlock.description}}
    </span>
  </div>
</template>


<script setup lang="ts">
defineProps({
  informationDetailBlock: {
    type: String,
    required: true
  },
})
</script>