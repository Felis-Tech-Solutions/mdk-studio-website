<template>
  <nav class="w-full flex justify-between">
    <div class="flex justify-end pr-12 lg:-mr-42 lg:pt-4 mt-3 2xl:mt-0">
      <ContactInfo :contactInformation="contactInformation" v-if="contactInformation"/>
    </div>
    <div class="flex justify-center items-center xl:pt-4">
      <a href="/" aria-label="home-page">
        <Logo class="h-16 md:h-10 xl:h-16 hidden md:block hover:cursor-pointer md:pt-1 lg:pt-0"/>
      </a>
      <div class="hidden ml-8 md:ml-14 sm:flex sm:space-x-8 md:space-x-2 lg:space-x-8 items-center">
        <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="item.button
              ? 'border rounded-3xl bg-primary md:text-sm lg:text-base py-2 px-4 text-white hover:bg-[#990c0c]'
              : 'inline-flex items-center font-medium h-10 hover:text-gray-700 hover:border-b-2 hover:border-primary text-passive-gray w-auto text-xl md:text-sm lg:text-base'"
            activeClass="border-b-2 border-primary text-gray-900"
            :aria-label="item.name"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from "~/icons/Logo.vue";
import ContactInfo from "~/components/Layout/Partials/ContactInfo.vue";

defineProps({
  navigation: {
    type: Array,
    default: () => ([])
  },
  contactInformation: {
    type: Object ,
    default: () => ({} as contactInformation),
  }
})
</script>
