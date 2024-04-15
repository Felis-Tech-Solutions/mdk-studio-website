<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <DoorsFramesPage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/deuren-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*`
)
</script>