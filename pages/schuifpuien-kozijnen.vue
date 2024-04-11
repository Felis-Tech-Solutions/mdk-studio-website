<template>
  <div v-if="error ">
    <ErrorComponent/>
  </div>
  <div v-if="loading">
    loading
  </div>
  <div v-else>
    <div>
      <SmallHero v-if="pageData.data" :hero="pageData.data.attributes"/>
      <div class="px-6 lg:px-24 2xl:px-96 flex flex-col lg:gap-y-32 md:py-24">
        <InformationBlocks :information-blocks-data="pageData.data.attributes.informationBlocks" v-if="pageData.data.attributes.informationBlocks" class="2xl:mx-24"/>
      </div>
      <ImageWithText :image-with-text-data="pageData.data.attributes.TextBlocks"/>
    </div>
  </div>
</template>
<script setup>
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";
import RoofConstructions from "~/components/Index/Partials/RoofConstructions.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: pageData, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/schuifpuien-ramen-page?populate[image]=*&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*`
)
</script>