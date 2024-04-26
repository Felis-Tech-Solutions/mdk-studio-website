<template>
  <div class="mt-12 sm:mt-8 ">
    <div>
      <div class="flex flex-col">
        <h2 class="font-bold xl:text-3xl 2xl:text-[32px] text-lg">
          {{  roofConstructionData.title }}
        </h2>
        <hr class="border-b-8 border-primary w-64 lg:w-96 rounded-2xl">
      </div>
      <div class="mt-2 lg:mt-12 2xl:gap-x-8 flex justify-between flex-col lg:flex-row" v-if=" pageLinks.length == 3">
        <RoofOfConstructionBox
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[0]"
            :link-to-page="pageLinks[0]"
        />
        <RoofOfConstructionBox
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[1]"
            :link-to-page="pageLinks[1]"
        />
        <RoofOfConstructionBox
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[2]"
            :link-to-page="pageLinks[2]"
        />
      </div>
      <div class="mt-2 lg:mt-12 2xl:gap-x-8 flex justify-between flex-col lg:flex-row" v-if=" pageLinks.length == 0">
        <WindowFrameConstructions
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[0]"
        />
        <WindowFrameConstructions
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[1]"
        />
        <WindowFrameConstructions
            :roof-construction-component-data="roofConstructionData.roofConstructionComponent[2]"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import RoofOfConstructionBox from "~/components/Index/Partials/RoofConstructionBox.vue";
import WindowFrameConstructions from "~/components/Index/Partials/WindowFrameConstructions.vue";

defineProps({
  roofConstructionData: {
    type: Object,
    required: true
  },
  pageLinks: {
    type: Object,
    required: true
  }
})
</script>
