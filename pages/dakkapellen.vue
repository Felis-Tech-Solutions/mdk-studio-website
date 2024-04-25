<template>
  <DormerPage :data="data" v-if="data.data"/>
</template>
<script setup>
import DormerPage from "~/components/Dormers/DormerPage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/dakkappellen-page?populate[image][populate]&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[roofConstructionComponent][populate][RoofConstructionsExampleComponent][populate][image]=*`
)

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Dakkapellen',
  description: 'Ontdek onze veelzijdige dakkapellen in houtlook, moderne en speciale stijlen met gedetailleerde prijsopgaven. Maatwerk mogelijk voor elk type woning in Nederland. Bekijk designs, vraag offertes aan en verbeter uw huis met onze duurzame, energiebesparende oplossingen.',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Dakkapellen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze veelzijdige dakkapellen in houtlook, moderne en speciale stijlen met gedetailleerde prijsopgaven. Maatwerk mogelijk voor elk type woning in Nederland. Bekijk designs, vraag offertes aan en verbeter uw huis met onze duurzame, energiebesparende oplossingen.'
    },
    {
      name: 'keywords',
      content: 'dakkapellen plaatsen, houtlook dakkapel, moderne dakkapel, speciale dakkapel, dakkapel prijzen, dakkapel kosten, maatwerk dakkapellen, dakkapel ontwerpen, duurzame dakkapellen, energiebesparende dakkapellen, dakkapellen Nederland'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Dakkapellen',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek onze veelzijdige dakkapellen in houtlook, moderne en speciale stijlen met gedetailleerde prijsopgaven. Maatwerk mogelijk voor elk type woning in Nederland. Bekijk designs, vraag offertes aan en verbeter uw huis met onze duurzame, energiebesparende oplossingen.'
    },
    {
      name: 'keywords',
      content: 'dakkapellen plaatsen, houtlook dakkapel, moderne dakkapel, speciale dakkapel, dakkapel prijzen, dakkapel kosten, maatwerk dakkapellen, dakkapel ontwerpen, duurzame dakkapellen, energiebesparende dakkapellen, dakkapellen Nederland'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>
