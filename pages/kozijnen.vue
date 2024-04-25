<template>
  <div v-if="isLoading">
    loading
  </div>
  <div v-else>
    <WindowFramePage :pageData="pageData" v-if="pageData.data"/>
  </div>
</template>
<script setup>
import WindowFramePage from "~/components/WindowFrames/WindowFramePage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/kozijnen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[roofConstructionComponent][populate][roofConstructionComponent][populate][image]=*&populate[TextBlocks][populate]=*&populate[slidingDoorsInfo][populate]=*`
)

defineOgImageComponent('NuxtSeo', {
  title: 'MDK Studio | Kozijnen',
  description: 'Ontdek ons uitgebreide assortiment kozijnen van topmerken zoals Schüco, VEKA en Keralit. Of u nu zoekt naar deuren kozijnen, ramen kozijnen, of schuifpuien kozijnen, wij bieden duurzame en stijlvolle oplossingen voor elk type woning. Bekijk onze producten en verbeter uw huis met kwaliteit en stijl.',
  theme: '#BE0F0F',
  colorMode: 'dark',
  siteName: 'MDK Studio',
});

useHead({
  title: 'MDK Studio | Kozijnen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek ons uitgebreide assortiment kozijnen van topmerken zoals Schüco, VEKA en Keralit. Of u nu zoekt naar deuren kozijnen, ramen kozijnen, of schuifpuien kozijnen, wij bieden duurzame en stijlvolle oplossingen voor elk type woning. Bekijk onze producten en verbeter uw huis met kwaliteit en stijl.'
    },
    {
      name: 'keywords',
      content: 'deuren kozijnen, ramen kozijnen, schuifpuien kozijnen, Schüco kozijnen, VEKA kozijnen, Keralit kozijnen, duurzame kozijnen, energiebesparende kozijnen, kwaliteitskozijnen, maatwerk kozijnen, kozijnen installatie, kozijnen Nederland'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})

definePageMeta({
  title: 'MDK Studio | Kozijnen ',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Ontdek ons uitgebreide assortiment kozijnen van topmerken zoals Schüco, VEKA en Keralit. Of u nu zoekt naar deuren kozijnen, ramen kozijnen, of schuifpuien kozijnen, wij bieden duurzame en stijlvolle oplossingen voor elk type woning. Bekijk onze producten en verbeter uw huis met kwaliteit en stijl.'
    },
    {
      name: 'keywords',
      content: 'deuren kozijnen, ramen kozijnen, schuifpuien kozijnen, Schüco kozijnen, VEKA kozijnen, Keralit kozijnen, duurzame kozijnen, energiebesparende kozijnen, kwaliteitskozijnen, maatwerk kozijnen, kozijnen installatie, kozijnen Nederland'
    },
    { name: 'lang', content: 'nl' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
  ]
})
</script>

