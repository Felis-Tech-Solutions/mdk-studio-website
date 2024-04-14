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
</script>