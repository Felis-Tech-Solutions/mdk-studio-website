<template>
  <HomePage :page-data="HomePageApiResponse.data.attributes"/>
</template>
<script setup lang="ts">
import HomePage from "~/components/Index/HomePage.vue";
import { type HomePageApiResponse } from "~/types/HomePage";

const ErrorComponent = defineAsyncComponent(() => import("~/components/Error/ErrorComponent.vue"));
const strapiBaseBaseUri = inject('strapiBaseBaseUri');

definePageMeta({
  layout: 'home'
})

const { data: HomePageApiResponse, pending: isLoading, error } = useFetch<HeroComponentApiResponse>(
    `${strapiBaseBaseUri}/home-page?populate[Roadmap][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*`
)
</script>