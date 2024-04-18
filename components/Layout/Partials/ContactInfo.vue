<template>
  <div class="flex">
   <div class="flex items-center" v-if="contactInformation.phoneNumber">
     <PhoneIcon class="h-3 w-3 lg:h-4 lg:w-4"/>
     <span class="text-sm lg:text-base pl-1">
       <a :href="'tel:' + contactInformation.phoneNumber">{{contactInformation.phoneNumber}}</a>
     </span>
   </div>
    <div class="flex items-center pl-4" v-if="contactInformation.infoMail">
      <MailIcon class="h-3 w-6 lg:h-4 lg:w-8 "/>
      <span class="text-sm lg:text-base -ml-1 lg:-ml-2">
        <a :href="'mailto:' + contactInformation.infoMail">{{ contactInformation.infoMail }}</a>
     </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import PhoneIcon from "~/icons/PhoneIcon.vue";
import MailIcon from "~/icons/MailIcon.vue";

defineProps({
  contactInformation: {
    type: Object ,
    default: () => ({} as contactInformation),
  }
})
</script>
