<template>
  <div v-if="error">
    <ErrorComponent/>
  </div>
  <div v-else>
    <div class="lg:h-screen">
      <Header class="lg:h-1/6 h-32" :hero="HeroComponentApiResponse.data.attributes" :contactInformation="ContactInformationApiResponse.data"/>
      <Hero :hero="HeroComponentApiResponse.data.attributes"/>
    </div>
    <slot/>
    <Footer />
  </div>


</template>

<script lang="ts" setup>
import Header from "~/components/Layout/Header.vue";
import Footer from "~/components/Layout/Footer.vue";
import { type HeroComponentApiResponse } from "~/types/HeroComponent";
import { type ContactInformationApiResponse } from "~/types/ContactInformation";
import Hero from "~/components/Index/Partials/Hero.vue";
const ErrorComponent = defineAsyncComponent(() => import("~/components/Error/ErrorComponent.vue"));

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: HeroComponentApiResponse, pending: isLoading, error } = useFetch<HeroComponentApiResponse>(
    `${strapiBaseBaseUri}/hero-component?populate[informationBlocks][populate]=*&populate[image][populate]=*`
);

const { data: ContactInformationApiResponse, pending: contactIsLoading, contactError } = useFetch<ContactInformationApiResponse>(
    `${strapiBaseBaseUri}/contact-information`
);
</script>
