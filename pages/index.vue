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

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio',
  description: 'MDK studio, dakkappellen en kozijnen. mdk-studio.nl is uw vertrouwde partner voor betaalbare, kwaliteitsdakkapellen en raamkozijnen.',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio Home page ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'MDK studio, dakkappellen en kozijnen. mdk-studio.nl is uw vertrouwde partner voor betaalbare, kwaliteitsdakkapellen en raamkozijnen.'},
    { name: 'keywords', content: 'dakkapellen plaatsen, kozijnen vervangen, Schüco kozijnen, VEKA kozijnen, Keralit gevelbekleding, kunststof kozijnen, aluminium kozijnen, Nederland, duurzame kozijnen, energiebesparende dakkapellen, kozijnen installatie service'},
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio Home page ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'MDK studio, dakkappellen en kozijnen. mdk-studio.nl is uw vertrouwde partner voor betaalbare, kwaliteitsdakkapellen en raamkozijnen.'},
    { name: 'keywords',  content: 'dakkapellen plaatsen, kozijnen vervangen, Schüco kozijnen, VEKA kozijnen, Keralit gevelbekleding, kunststof kozijnen, aluminium kozijnen, Nederland, duurzame kozijnen, energiebesparende dakkapellen, kozijnen installatie service'},
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
