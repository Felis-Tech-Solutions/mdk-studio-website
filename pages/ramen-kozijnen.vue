<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <FramePage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>

import FramePage from "~/components/Frame/FramePage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/ramen-kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[profileSort][populate][profileSorts][populate][image]=*`
)
defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Ramen kozijnen',
  description: 'Ontdek onze premium ramen kozijnen van toonaangevende merken als Schüco, VEKA en Keralit. Kies uit een breed assortiment van duurzame en energiezuinige opties die naadloos aansluiten bij uw woning. Leer meer over onze op maat gemaakte oplossingen en deskundige installatieservice. Bezoek onze website voor meer details en vraag direct een offerte aan!',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Ramen kozijnen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze premium ramen kozijnen van toonaangevende merken als Schüco, VEKA en Keralit. Kies uit een breed assortiment van duurzame en energiezuinige opties die naadloos aansluiten bij uw woning. Leer meer over onze op maat gemaakte oplossingen en deskundige installatieservice. Bezoek onze website voor meer details en vraag direct een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco ramen kozijnen, VEKA ramen kozijnen, Keralit ramen kozijnen, ramen kozijnen Nederland, energiebesparende ramen kozijnen, duurzame ramen kozijnen, kwaliteitsramen kozijnen, maatwerk ramen kozijnen, installatie ramen kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Ramen kozijnen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze premium ramen kozijnen van toonaangevende merken als Schüco, VEKA en Keralit. Kies uit een breed assortiment van duurzame en energiezuinige opties die naadloos aansluiten bij uw woning. Leer meer over onze op maat gemaakte oplossingen en deskundige installatieservice. Bezoek onze website voor meer details en vraag direct een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco ramen kozijnen, VEKA ramen kozijnen, Keralit ramen kozijnen, ramen kozijnen Nederland, energiebesparende ramen kozijnen, duurzame ramen kozijnen, kwaliteitsramen kozijnen, maatwerk ramen kozijnen, installatie ramen kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
