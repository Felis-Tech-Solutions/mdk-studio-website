<template>
  <div v-if="error ">
    <ErrorComponent/>
  </div>
  <div v-if="loading">
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
    `${strapiBaseBaseUri}/ramen-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*`
)
</script>