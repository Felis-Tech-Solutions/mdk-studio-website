<template>
  <div v-if="error ">
    <ErrorComponent/>
  </div>
  <div v-else>
    <div>
      <SmallHero v-if="data.data" :hero="data.data.attributes"/>
      <div class="px-6 lg:px-24 2xl:px-96 flex flex-col lg:gap-y-32 md:py-24">
        <InformationBlocks :information-blocks-data="data.data.attributes.informationBlocks" v-if="data.data.attributes.informationBlocks" class="2xl:mx-24"/>
      </div>
      <ImageWithText :image-with-text-data="textBlock" v-for="textBlock in data.data.attributes.TextBlocks"/>
    </div>
  </div>
</template>
<script setup>
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/dakkappellen-page?populate[image][populate]&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*`
)
</script>