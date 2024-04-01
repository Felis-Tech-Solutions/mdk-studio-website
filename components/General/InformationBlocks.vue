<template>
  <div class="mt-12 md:mt-0">
    <div>
      <h2 class="text-[32px]">
        {{ informationBlocksData.title }}
      </h2>
      <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12">
        <hr class="border-b-8 border-primary rounded-2xl">
      </div>
    </div>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12">
      <InformationDetailBlock v-for="informationBlock in informationBlocksData.InformationBlocks" :information-detail-block="informationBlock" class="col-span-1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import InformationDetailBlock from "~/components/General/InformationDetailBlock.vue";

defineProps({
  informationBlocksData: {
    type: String,
    required: true
  },
})
</script>