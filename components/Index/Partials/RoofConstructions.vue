<template>
  <div class="mt-12 sm:mt-8 ">
    <div>
      <div class="flex flex-col">
        <h2 class="font-bold xl:text-3xl 2xl:text-[32px] text-lg">
          {{  roofConstructionData.title }}
        </h2>
        <hr class="border-b-8 border-primary w-64 lg:w-96 rounded-2xl">
      </div>
      <div class="mt-2 lg:mt-12 2xl:gap-x-8 flex justify-between flex-col lg:flex-row">
        <RoofOfConstructionBox :roof-construction-component-data="roofConstructionData.roofConstructionComponent[0]" link-to-page="/dakkapellen"/>
        <RoofOfConstructionBox :roof-construction-component-data="roofConstructionData.roofConstructionComponent[1]" link-to-page="/dakkapellen"/>
        <RoofOfConstructionBox :roof-construction-component-data="roofConstructionData.roofConstructionComponent[2]" link-to-page="/dakkapellen"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import RoofOfConstructionBox from "~/components/Index/Partials/RoofConstructionBox.vue";

defineProps({
  roofConstructionData: {
    type: Object,
    required: true
  },
})
</script>
