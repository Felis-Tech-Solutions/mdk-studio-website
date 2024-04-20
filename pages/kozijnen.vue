<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <WindowFramePage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>
import WindowFramePage from "~/components/WindowFrames/WindowFramePage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*&populate[TextBlocks][populate]=*&populate[slidingDoorsInfo][populate]=*`
)
</script>

