<template>
  <div v-if="error">
    Error
  </div>
  <div v-else-if="isLoading">
    Loading...
  </div>
  <div class="relative bg-white" v-else>
    <div>
      <InvoicePage v-if="contactPageApiResponse.data" :contact-page-api-response="contactPageApiResponse" :strapi-base-base-uri="strapiBaseBaseUri"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseFeedbackMessage from "~/components/Base/BaseFeedbackMessage.vue";
import BaseErrorMessage from "~/components/Base/BaseErrorMessage.vue";
import BaseSpinner from "~/components/Base/BaseSpinner.vue";
const strapiBaseBaseUri = inject('strapiBaseBaseUri');
const { data: contactPageApiResponse, pending: isLoading, error,  } = useFetch(
    `${strapiBaseBaseUri}/invoice-page?populate[image][populate]=*`
);


</script>