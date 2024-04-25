<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <DoorsFramesPage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/deuren-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[profileSort][populate][profileSorts][populate][image]=*`
)

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Deuren kozijnen',
  description: 'Ontdek onze hoogwaardige deuren kozijnen van topmerken als Schüco, VEKA en Keralit. Kies uit een verscheidenheid aan duurzame en energiebesparende opties die perfect passen bij uw woning. Kom meer te weten over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor meer informatie en vraag vandaag nog een offerte aan!',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Deuren kozijnen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze hoogwaardige deuren kozijnen van topmerken als Schüco, VEKA en Keralit. Kies uit een verscheidenheid aan duurzame en energiebesparende opties die perfect passen bij uw woning. Kom meer te weten over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor meer informatie en vraag vandaag nog een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco deuren kozijnen, VEKA deuren kozijnen, Keralit deuren kozijnen, deuren kozijnen Nederland, energiebesparende deuren kozijnen, duurzame deuren kozijnen, kwaliteitsdeuren kozijnen, maatwerk deuren kozijnen, installatie deuren kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Deuren kozijnen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze hoogwaardige deuren kozijnen van topmerken als Schüco, VEKA en Keralit. Kies uit een verscheidenheid aan duurzame en energiebesparende opties die perfect passen bij uw woning. Kom meer te weten over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor meer informatie en vraag vandaag nog een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco deuren kozijnen, VEKA deuren kozijnen, Keralit deuren kozijnen, deuren kozijnen Nederland, energiebesparende deuren kozijnen, duurzame deuren kozijnen, kwaliteitsdeuren kozijnen, maatwerk deuren kozijnen, installatie deuren kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
