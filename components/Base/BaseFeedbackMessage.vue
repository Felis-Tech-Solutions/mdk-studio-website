<template>
  <div class="rounded-md bg-green-100 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-green-800">
          {{ message }}
        </h3>
        <div class="mt-2 text-sm text-green-700">
          <p>{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckCircleIcon from "~/icons/CheckCircleIcon.vue";

defineProps({
  message: {
    type: String,
    default: "Verzinding succesvol",
  },
  description: {
    type: String,
    default: "Je bericht is succesvol verzonden!.",
  },
})
</script>