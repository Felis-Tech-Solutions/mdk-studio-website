<template>
  <div>
    <SmallHero v-if="pageData.data" :hero="pageData.data.attributes"/>
    <div class="px-6 lg:px-24 3xl:px-96 flex flex-col lg:gap-y-32 md:py-24">
      <InformationBlocks :information-blocks-data="pageData.data.attributes.informationBlocks" v-if="pageData.data.attributes.informationBlocks" class="2xl:mx-24"/>
    </div>
    <ProfileSorts :profileSorts="pageData.data.attributes.profileSort" class="mt-12 md:mt-0"/>
    <ImageWithText :image-with-text-data="pageData.data.attributes.TextBlocks"/>
  </div>
</template>
<script setup lang="ts">
import SmallHero from "~/components/General/SmallHero.vue";
import InformationBlocks from "~/components/General/InformationBlocks.vue";
import ProfileSorts from "~/components/General/ProfileSorts.vue";
import ImageWithText from "~/components/General/ImageWithText.vue";

defineProps({
  pageData: {
    type: Object,
    required: true
  }
})
</script>
