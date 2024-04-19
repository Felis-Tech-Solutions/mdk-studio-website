<template>
  <div>
    <SmallHero v-if="data.data" :hero="data.data.attributes"/>
    <div class="px-6 lg:px-24 3xl:px-96 flex flex-col lg:gap-y-32 md:py-24">
      <InformationBlocks :information-blocks-data="data.data.attributes.informationBlocks" v-if="data.data.attributes.informationBlocks" class="2xl:mx-24"/>
    </div>
    <div class="px-6 lg:px-24 3xl:px-96 flex flex-col lg:gap-y-32 md:pb-24 bg-primary" v-if="data.data.attributes.roofConstructionComponent">
      <RoofConstructionsExamples :roof-construction-data="data.data.attributes.roofConstructionComponent"/>
    </div>
    <ImageWithText :image-with-text-data="textBlock" v-for="textBlock in data.data.attributes.TextBlocks"/>
  </div>
</template>
<script setup lang="ts">
import SmallHero from "~/components/General/SmallHero.vue";
import RoofConstructionsExamples from "~/components/General/RoofConstructionsExamples.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
