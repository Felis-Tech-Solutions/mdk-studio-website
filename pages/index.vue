<template>
  <div v-if="error || heroError">
    <ErrorComponent/>
  </div>
  <div v-else-if="isLoading || isHeroLoading">
    Loading
  </div>
  <div v-else>
    <Header class="lg:h-1/6 h-32" v-if="HeroComponentApiResponse.data && ContactInformationApiResponse.data" :hero="HeroComponentApiResponse.data.attributes" :contactInformation="ContactInformationApiResponse.data"/>
    <HomePage :page-data="HomePageApiResponse.data.attributes" v-if="HomePageApiResponse"/>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import HomePage from "~/components/Index/HomePage.vue";
import { type HomePageApiResponse } from "~/types/HomePage";
import Header from "~/components/Layout/Header.vue";
import Footer from "~/components/Layout/Footer.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: HomePageApiResponse, pending: isLoading, error } = useFetch<HomePageApiResponse>(
    `${strapiBaseBaseUri}/home-page?populate[Roadmap][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*&populate[aboutUs][populate]=*&populate[informationBlocks][populate]=*`
)

const { data: HeroComponentApiResponse, pending: isHeroLoading, error: heroError } = useFetch(
    `${strapiBaseBaseUri}/hero-component?populate[informationBlocks][populate]=*&populate[image][populate]=*`
);

const { data: ContactInformationApiResponse, pending: contactIsLoading,error: contactError } = useFetch(
    `${strapiBaseBaseUri}/contact-information`
);

</script>