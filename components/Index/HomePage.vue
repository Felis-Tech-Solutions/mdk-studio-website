<template>
  <div class="flex flex-col lg:gap-y-32 h-full lg:mt-24">
    <div class="px-6 lg:px-24 xl:px-40 2xl:px-52 3xl:px-72 4xl:px-80 flex flex-col lg:gap-y-32 lg:mb-24">
      <RoofConstructions
          :roof-construction-data="pageData.roofConstructionComponent"
          v-if="pageData.roofConstructionComponent" class="2xl:mx-24"
          :page-links="pageLinks"
      />
      <Roadmap :roadmap-component-data="pageData.Roadmap" v-if="pageData.Roadmap"/>
    </div>
    <ImageWithText :image-with-text-data="pageData.aboutUs" v-if="pageData.aboutUs"/>
    <div class="px-6 lg:px-24 2xl:px-80 flex flex-col lg:gap-y-32">
      <InformationBlocks :information-blocks-data="pageData.informationBlocks" v-if="pageData.informationBlocks" class="2xl:mx-24"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import Roadmap from "~/components/Index/Partials/Roadmap.vue";

const  pageLinks = [
    '/dakkapellen',
    '/dakkapellen',
    '/dakkapellen'
]

defineProps({
  pageData: {
    type: Object,
    required: true
  },
})
</script>
