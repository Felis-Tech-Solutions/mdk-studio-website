<template>
  <div>
    <SmallHero v-if="pageData.data" :hero="pageData.data.attributes"/>
    <div class="px-6 lg:px-24 3xl:px-80 flex flex-col lg:gap-y-32 md:py-24">
      <InformationBlocks :information-blocks-data="pageData.data.attributes.informationBlocks" v-if="pageData.data.attributes.informationBlocks" class="2xl:mx-24"/>
    </div>
    <div class="px-6 lg:px-24 3xl:px-80 flex flex-col lg:gap-y-32 lg:mb-24 pb-24">
      <RoofConstructions :roof-construction-data="pageData.data.attributes.roofConstructionComponent" v-if="pageData.data.attributes.roofConstructionComponent" class="2xl:mx-24"/>
    </div>
    <SlidingDoorComponent v-if="pageData.data.attributes.slidingDoorsInfo" :imageWithTextData="slidingDoorsInfo" v-for="slidingDoorsInfo in pageData.data.attributes.slidingDoorsInfo"/>
    <ImageWithText :image-with-text-data="pageData.data.attributes.TextBlocks" v-if="pageData.data.attributes.TextBlocks"/>
  </div>
</template>
<script setup lang="ts">
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";
import SlidingDoorComponent from "~/components/SlidingDoors/Partials/SlidingDoorComponent.vue";
import ProfileSorts from "~/components/General/ProfileSorts.vue";

defineProps({
  pageData: {
    type: Object,
    required: true
  }
})
</script>
