<template>
  <div v-if="error ">
    <ErrorComponent/>
  </div>
  <div v-if="loading">
    loading
  </div>
  <div v-else>
    <WindowFramesPage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/ramen-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*`
)
</script>