<template>
  <div class="rounded-md bg-red-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          {{ message }}
        </h3>
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc space-y-1 pl-5">
            <li class="capitalize">
              {{ errorMessage }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import XCircleIcon from "~/icons/XCircleIcon.vue";

defineProps({
  message: {
    type: String,
    default: "Er ging iets mis bij het versturen van je bericht.",
  },
  errorMessage: {
    type: String,
    default: "Je bericht is niet verzonden."
  },
})
</script>