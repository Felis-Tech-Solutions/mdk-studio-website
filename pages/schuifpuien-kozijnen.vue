<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <SlidingDoorsPage :pageData="pageData" v-if="pageData"/>
  </div>
</template>
<script setup>
const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/schuifpuien-ramen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[slidingDoorsInfo][populate]=*`
)
</script>