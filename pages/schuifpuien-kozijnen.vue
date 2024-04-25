<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <SlidingDoorsPage :pageData="pageData" v-if="pageData"/>
  </div>
</template>
<script setup>
const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/schuifpuien-ramen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[slidingDoorsInfo][populate]=*`
)

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Schuifpuien kozijnen',
  description: 'Ontdek ons uitgebreide aanbod aan schuifpuien kozijnen van topmerken als Schüco, VEKA en Keralit. Geniet van de combinatie van stijl, duurzaamheid en energie-efficiëntie die onze schuifpuien bieden. Leer meer over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor gedetailleerde informatie en vraag een offerte aan!',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Schuifpuien kozijnen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek ons uitgebreide aanbod aan schuifpuien kozijnen van topmerken als Schüco, VEKA en Keralit. Geniet van de combinatie van stijl, duurzaamheid en energie-efficiëntie die onze schuifpuien bieden. Leer meer over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor gedetailleerde informatie en vraag een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco schuifpuien kozijnen, VEKA schuifpuien kozijnen, Keralit schuifpuien kozijnen, schuifpuien kozijnen Nederland, energiebesparende schuifpuien kozijnen, duurzame schuifpuien kozijnen, kwaliteitsschuifpuien kozijnen, maatwerk schuifpuien kozijnen, installatie schuifpuien kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Schuifpuien kozijnen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek ons uitgebreide aanbod aan schuifpuien kozijnen van topmerken als Schüco, VEKA en Keralit. Geniet van de combinatie van stijl, duurzaamheid en energie-efficiëntie die onze schuifpuien bieden. Leer meer over onze maatwerkoplossingen en professionele installatieservice. Bezoek onze website voor gedetailleerde informatie en vraag een offerte aan!'
    },
    {
      name: 'keywords',
      content: 'Schüco schuifpuien kozijnen, VEKA schuifpuien kozijnen, Keralit schuifpuien kozijnen, schuifpuien kozijnen Nederland, energiebesparende schuifpuien kozijnen, duurzame schuifpuien kozijnen, kwaliteitsschuifpuien kozijnen, maatwerk schuifpuien kozijnen, installatie schuifpuien kozijnen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
