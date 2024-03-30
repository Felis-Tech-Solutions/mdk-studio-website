<template>
  <div class="flex">
   <div class="flex items-center">
     <PhoneIcon class="h-4 w-4"/>
     <span class="text-base pl-1">
       <a href="tel:0512-0123456">0512-0123456</a>
     </span>
   </div>
    <div class="flex items-center pl-4">
      <MailIcon class="h-4 w-8 "/>
      <span class="text-base -ml-2">
         <a href="mailto:info@mdk-studio.nl"> info@mdk-studio.nl</a>
     </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import PhoneIcon from "~/icons/PhoneIcon.vue";
import MailIcon from "~/icons/MailIcon.vue";
</script>