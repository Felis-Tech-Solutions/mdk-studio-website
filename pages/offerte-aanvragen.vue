<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div class="relative bg-white" v-else>
    <div>
      <InvoicePage v-if="contactPageApiResponse.data" :contact-page-api-response="contactPageApiResponse" :strapi-base-base-uri="strapiBaseBaseUri"/>
    </div>
  </div>
</template>
<script setup lang="ts">

const strapiBaseBaseUri = inject('strapiBaseBaseUri');
const { data: contactPageApiResponse, pending: isLoading, error,  } = useFetch(
    `${strapiBaseBaseUri}/invoice-page?populate[image][populate]=*`
);

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Offerte aanvragen',
  description: 'Vraag gemakkelijk en snel een offerte aan bij MDK-Studio voor dakkapellen, kozijnen, en meer. Vul ons korte formulier in en ontvang een gepersonaliseerde prijsopgave. Ontdek onze concurrerende prijzen en uitstekende service, afgestemd op uw behoeften.',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Offerte aanvragen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Vraag gemakkelijk en snel een offerte aan bij MDK-Studio voor dakkapellen, kozijnen, en meer. Vul ons korte formulier in en ontvang een gepersonaliseerde prijsopgave. Ontdek onze concurrerende prijzen en uitstekende service, afgestemd op uw behoeften.'
    },
    {
      name: 'keywords',
      content: 'offerte aanvragen, gratis offerte, prijsopgave dakkapellen, prijsopgave kozijnen, MDK-Studio offerte, kostenschatting kozijnen, aanvraagformulier offerte, gepersonaliseerde offerte, kostenvoorstel aanvragen, offerte kozijnen en dakkapellen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Offerte aanvragen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Vraag gemakkelijk en snel een offerte aan bij MDK-Studio voor dakkapellen, kozijnen, en meer. Vul ons korte formulier in en ontvang een gepersonaliseerde prijsopgave. Ontdek onze concurrerende prijzen en uitstekende service, afgestemd op uw behoeften.'
    },
    {
      name: 'keywords',
      content: 'offerte aanvragen, gratis offerte, prijsopgave dakkapellen, prijsopgave kozijnen, MDK-Studio offerte, kostenschatting kozijnen, aanvraagformulier offerte, gepersonaliseerde offerte, kostenvoorstel aanvragen, offerte kozijnen en dakkapellen'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
