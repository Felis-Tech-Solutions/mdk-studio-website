<template>
 <div>
   <div class="w-full md:w-auto lg:flex lg:flex-col lg:items-center">
        <span class="text-[32px] font-bold text text-white mt-12">
          {{ roofConstructionData.title }}
        </span>
     <hr class="border-b-8 w-96 rounded-2xl border-white">
   </div>
   <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 lg:gap-x-36 gap-y-24 mt-16">
    <RoofExampleComponent
        :roof-construction-data="RoofConstructionsExampleComponent"
        v-for="RoofConstructionsExampleComponent in roofConstructionData.RoofConstructionsExampleComponent"
    />
   </div>
 </div>
</template>
<script setup lang="ts">
import RoofExampleComponent from "~/components/General/RoofExampleComponent.vue";

defineProps({
  roofConstructionData: {
    type: String,
    required: true
  },
})
</script>
