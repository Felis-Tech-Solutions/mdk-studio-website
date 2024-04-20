<template>
  <div class="bg-primary">
    <div class="w-full md:w-auto lg:flex lg:flex-col  px-6 lg:px-24 3xl:px-96  pt-10 md:pt-6">
        <span class="text-[32px] font-bold text text-white mt-12">
          {{ profileSorts.title }}
        </span>
      <hr class="border-b-8 md:w-96 rounded-2xl border-white">
    </div>
    <div class="px-6 lg:px-24 3xl:px-96 flex flex-col lg:gap-y-32 bg-primary">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 lg:gap-x-36 mt-83xl:mx-24">
        <ProfileSortComponent
            :profile-sort="profileSort"
            v-for="profileSort in profileSorts.profileSorts"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileSortComponent from "~/components/General/ProfileSortComponent.vue";

defineProps({
  profileSorts: {
    type: Object,
    required: true
  },
})
</script>
