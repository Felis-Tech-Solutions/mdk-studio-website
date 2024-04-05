<template>
  <div class="flex flex-col lg:gap-y-32 h-full lg:mt-32">
    <div class="px-6 lg:px-24 2xl:px-32 flex flex-col lg:gap-y-32">
      <RoofConstructions :roof-construction-data="pageData.roofConstructionComponent"/>
    </div>
    <ImageWithText :image-with-text-data="pageData.aboutUs"/>
<!--    <div class="px-6 lg:px-24 2xl:px-32 flex flex-col lg:gap-y-32">-->
<!--      <InformationBlocks :information-blocks-data="pageData.informationBlocks"/>-->
<!--    </div>-->
  </div>
</template>
<script setup lang="ts">
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";

defineProps({
  pageData: {
    type: String,
    required: true
  },
})
</script>