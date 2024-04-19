<template>
  <div class="flex flex-col">
    <span class="text-[22px] font-bold pb-2">
        {{ informationDetailBlock.title}}
    </span>
    <span class="leading-8 text-lg">
      {{ informationDetailBlock.description}}
    </span>
    <div class="mt-4 md:mt-0 flex justify-between 3xl:w-2/3 gap-x-8" v-if="informationDetailBlock.showPartnersImages">
      <Schuco class="3xl:w-60"/>
      <VekaLogo class="3xl:w-60"/>
      <Keralt class="3xl:w-60"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import Keralt from "~/icons/Keralt.vue";
import Schuco from "~/icons/Schuco.vue";
import VekaLogo from "~/icons/VekaLogo.vue";

defineProps({
  informationDetailBlock: {
    type: Object,
    required: true
  },
})
</script>
