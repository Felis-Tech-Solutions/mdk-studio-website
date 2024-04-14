<template>
  <div>
    <SmallHero v-if="pageData.data" :hero="pageData.data.attributes"/>
    <div class="px-6 lg:px-24 3xl:px-80 flex flex-col lg:gap-y-32 md:py-24">
      <InformationBlocks :information-blocks-data="pageData.data.attributes.informationBlocks" v-if="pageData.data.attributes.informationBlocks" class="2xl:mx-24"/>
    </div>
    <div class="px-6 lg:px-24 3xl:px-80 flex flex-col lg:gap-y-32 -mb-12 mt-20 md:mt-8§">
      <div class="2xl:mx-24">
        <h2 class="text-[32px]">
          Soorten kozijnen profielen
        </h2>
        <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12">
          <hr class="border-b-8 border-primary rounded-2xl">
        </div>
      </div>
    </div>
    <SlidingDoorComponent v-if="pageData.data.attributes.slidingDoorsInfo" :imageWithTextData="slidingDoorsInfo" v-for="slidingDoorsInfo in pageData.data.attributes.slidingDoorsInfo"/>
    <ImageWithText :image-with-text-data="pageData.data.attributes.TextBlocks" v-if="pageData.data.attributes.TextBlocks"/>
  </div>
</template>
<script setup lang="ts">
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import SlidingDoorComponent from "~/components/SlidingDoors/Partials/SlidingDoorComponent.vue";

defineProps({
  pageData: {
    type: String,
    required: true
  },
})
</script>