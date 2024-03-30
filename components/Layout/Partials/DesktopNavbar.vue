<template>
  <nav class="flex w-screen flex-col pb-16">
    <div class="w-screen flex justify-end pr-16 py-6">
      <ContactInfo/>
    </div>
    <div class="flex justify-center">
      <Logo class="h-16 hidden md:block"/>
      <div class="hidden ml-8 md:ml-14 sm:flex sm:space-x-8 items-center">
        <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="item.button
              ? 'border rounded-3xl bg-primary text-xl py-2 px-4 text-white hover:bg-[#990c0c]'
              : 'inline-flex items-center font-medium h-10 hover:text-gray-700 hover:border-b-2 hover:border-primary text-passive-gray w-auto text-xl'"
            activeClass="border-b-2 border-primary text-black"
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
  }
})
</script>