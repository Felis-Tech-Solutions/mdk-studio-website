<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <FramePage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>

import FramePage from "~/components/Frame/FramePage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/ramen-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[profileSort][populate][profileSorts][populate][image]=*`
)
</script>
