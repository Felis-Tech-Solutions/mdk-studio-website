<template>
  <div v-if="error">
    Error
  </div>
  <div v-else-if="isLoading">
    Loading...
  </div>
  <div class="relative bg-white" v-else>
    <ContactPage v-if="contactPageApiResponse.data" :contact-page-api-response="contactPageApiResponse" :strapi-base-base-uri="strapiBaseBaseUri"/>
  </div>
</template>
<script setup lang="ts">
const strapiBaseBaseUri = inject('strapiBaseBaseUri');
const { data: contactPageApiResponse, pending: isLoading, error,  } = useFetch(
    `${strapiBaseBaseUri}/contact-page?populate[image][populate]=*`
);

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Contact',
  description: 'Neem contact op met MDK-Studio voor meer informatie over onze dakkapellen, kozijnen, en andere diensten. Vind hier ons adres, telefoonnummer, en e-mail voor directe communicatie of het aanvragen van een offerte. Bezoek ons in Nederland of bel onze klantenservice voor al uw vragen.',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Contact ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Neem contact op met MDK-Studio voor meer informatie over onze dakkapellen, kozijnen, en andere diensten. Vind hier ons adres, telefoonnummer, en e-mail voor directe communicatie of het aanvragen van een offerte. Bezoek ons in Nederland of bel onze klantenservice voor al uw vragen.'
    },
    {
      name: 'keywords',
      content: 'contact MDK-Studio, MDK-Studio adres, MDK-Studio telefoonnummer, MDK-Studio e-mail, offerte aanvragen, klantenservice MDK-Studio, MDK-Studio Nederland, locatie MDK-Studio'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Contact ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Neem contact op met MDK-Studio voor meer informatie over onze dakkapellen, kozijnen, en andere diensten. Vind hier ons adres, telefoonnummer, en e-mail voor directe communicatie of het aanvragen van een offerte. Bezoek ons in Nederland of bel onze klantenservice voor al uw vragen.'
    },
    {
      name: 'keywords',
      content: 'contact MDK-Studio, MDK-Studio adres, MDK-Studio telefoonnummer, MDK-Studio e-mail, offerte aanvragen, klantenservice MDK-Studio, MDK-Studio Nederland, locatie MDK-Studio'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
