<template>
  <div class="px-6 lg:px-24 2xl:px-32 flex flex-col lg:gap-y-32 h-full lg:mt-32">
    <RoofConstructions :roof-construction-data="pageData.roofConstructionComponent"/>
    <RoadMap :roadmap-component-data="pageData.Roadmap"/>
  </div>
</template>
<script setup lang="ts">
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";
import RoadMap from "~/components/Index/Partials/RoadMap.vue";

defineProps({
  pageData: {
    type: String,
    required: true
  },
})
</script>