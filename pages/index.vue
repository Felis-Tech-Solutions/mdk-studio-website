<template>
  <div v-if="error">
    Error
  </div>
  <div v-else-if="isLoading">
    Loading
  </div>
  <div v-else>
    <HomePage :page-data="HomePageApiResponse.data.attributes" v-if="HomePageApiResponse"/>
  </div>
</template>
<script setup lang="ts">
import HomePage from "~/components/Index/HomePage.vue";
import { type HomePageApiResponse } from "~/types/HomePage";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

definePageMeta({
  layout: 'home'
})

const { data: HomePageApiResponse, pending: isLoading, error } = useFetch<HomePageApiResponse>(
    `${strapiBaseBaseUri}/home-page?populate[Roadmap][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*&populate[aboutUs][populate]=*&populate[informationBlocks][populate]=*`
)
</script>