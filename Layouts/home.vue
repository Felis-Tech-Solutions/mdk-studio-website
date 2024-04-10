<template>
  <div v-if="error || contactError">
    <ErrorComponent/>
    <h1>
      Error
    </h1>
  </div>
  <div v-else-if="isLoading">
    <h1>
      Loading
    </h1>
  </div>
  <div v-else>
    <div class="lg:h-screen">
      <Header class="lg:h-1/6 h-32" v-if="HeroComponentApiResponse.data && ContactInformationApiResponse.data" :hero="HeroComponentApiResponse.data.attributes" :contactInformation="ContactInformationApiResponse.data"/>
      <Hero v-if="HeroComponentApiResponse.data" :hero="HeroComponentApiResponse.data.attributes"/>
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

const { data: ContactInformationApiResponse, pending: contactIsLoading,error: contactError } = useFetch<ContactInformationApiResponse>(
    `${strapiBaseBaseUri}/contact-information`
);

</script>
