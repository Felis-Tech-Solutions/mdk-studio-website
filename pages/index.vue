<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <HomePage :page-data="HomePageApiResponse.data.attributes" v-if="HomePageApiResponse"/>
  </div>
</template>
<script setup lang="ts">
import HomePage from "~/components/Index/HomePage.vue";
import { type HomePageApiResponse } from "~/types/HomePage";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: HomePageApiResponse, pending: isLoading, error } = useFetch<HomePageApiResponse>(
    `${strapiBaseBaseUri}/home-page?populate[Roadmap][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*&populate[aboutUs][populate]=*&populate[informationBlocks][populate]=*`
)

definePageMeta({
  layout: 'home'
})
</script>