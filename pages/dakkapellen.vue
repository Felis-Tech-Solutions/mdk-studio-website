<template>
<!--  <div v-if="error ">-->
<!--    <ErrorComponent/>-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    <DormerPage :data="data" v-if="data.data"/>-->
<!--  </div>-->
  <DormerPage :data="data" v-if="data.data"/>

</template>
<script setup>
import DormerPage from "~/components/Dormers/DormerPage.vue";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data, pending: isLoading, error } = useFetch(
    `${strapiBaseBaseUri}/dakkappellen-page?populate[image][populate]&populate[informationBlocks][populate]=*&populate[TextBlocks][populate]=*&populate[roofConstructionComponent][populate][RoofConstructionsExampleComponent][populate][image]=*`
)
</script>