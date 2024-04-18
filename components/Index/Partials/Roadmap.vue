<template>
  <div>
    <div class="flex flex-col items-center pt-12 lg;pt-0">
      <h2 class="font-bold text-[32px]">
        {{ roadmapComponentData.title }}
      </h2>
      <hr class="border-b-8 border-primary w-96 rounded-2xl">
    </div>
    <div class="flex flex-col lg:flex-row justify-around lg:mt-16 mt-8">
      <StepComponent v-for="roadmapStep in roadmapComponentData.roadmapSteps" :roadmap-component="roadmapStep"/>
    </div>
    <div class="flex justify-center">
      <a href="/contact" class="bg-primary hover:bg-red-800 py-2 px-4 md:px-12 rounded-xl text-white text-sm md:text-base">
        Vraag naar de mogelijkheden
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import StepComponent from "~/components/Index/Partials/StepComponent.vue";

defineProps({
  roadmapComponentData: {
    type: String,
    required: true
  },
})
</script>
