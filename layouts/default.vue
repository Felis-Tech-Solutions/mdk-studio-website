<template>
  <div v-if="isLoading">
    Loading
  </div>
  <div v-else>
    <div  class="lg:h-screen">
      <Header class="lg:h-1/6 h-32" v-if="HeroComponentApiResponse.data && ContactInformationApiResponse.data" :hero="HeroComponentApiResponse.data.attributes" :contactInformation="ContactInformationApiResponse.data"/>
      <slot/>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Layout/Header.vue";
import Footer from "~/components/Layout/Footer.vue";
const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: HeroComponentApiResponse, pending } = useFetch(
    `${strapiBaseBaseUri}/hero-component?populate[informationBlocks][populate]=*&populate[image][populate]=*`
);

const { data: ContactInformationApiResponse, pending: contactIsLoading,error: contactError } = useFetch(
    `${strapiBaseBaseUri}/contact-information`
);

</script>


