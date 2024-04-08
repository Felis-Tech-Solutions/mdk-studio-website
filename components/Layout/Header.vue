<template>
  <Disclosure as="nav" class="flex items-center">
    <div class="mx-auto">
      <div class="relative flex items-center">
        <div class="flex flex-1 items-stretch justify-between lg:-mt-12">
          <DesktopNavbar :navigation="navigation" :contactInformation="contactInformation.attributes" class="hidden md:block"/>
          <div class="flex items-center md:hidden pt-4 justify-between w-screen px-5 -mt-14 md:mt-0">
            <Logo class="h-10"/>
            <Bars3Icon @click="open = true" class="block h-6 w-6" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
    <MobileNavbar :navigation="navigation" :open="open" @close="open = false" @click="open = false" />
  </Disclosure>
</template>
<script setup lang="ts">
import {Disclosure} from "@headlessui/vue";
import Bars3Icon from "~/icons/Bars3Icon.vue";
import Logo from "~/icons/Logo.vue";
import DesktopNavbar from "~/components/Layout/Partials/DesktopNavbar.vue";
import MobileNavbar from "~/components/Layout/Partials/MobileNavbar.vue";
import { ref } from 'vue'

const route = useRoute()
const currentRoute = ref(null);
const open = ref(false)

const navigation = [
  { name: 'Homepagina', href: '/', current: false },
  { name: 'Dakkapellen', href: '/dakkapellen', current: false },
  { name: 'Kozijnen', href: '/', current: false },
  { name: 'Portfolio', href: '/', current: false },
  { name: 'Contact', href: '/', current: false },
  { name: 'Offerte aanvragen', href: '/', current: false , button: 'button' },
]

watch(
    () => route.path,
    () => {
      currentRoute.value = route.path;
    },
);

defineProps({
  hero: {
    type: Object ,
    default: () => ({} as Hero),
  },
  contactInformation: {
    type: Object ,
    default: () => ({} as contactInformation),
  }
})
</script>