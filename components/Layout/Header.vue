<template>
  <Disclosure as="nav" class="bg-white">
    <div class="mx-auto">
      <div class="relative flex items-center justify-between">
        <div class="flex flex-1 items-stretch justify-start">
          <DesktopNavbar :navigation="navigation" class="hidden md:block"/>
          <div class="flex items-center sm:hidden pt-4 justify-between w-screen px-5">
            <Logo class="h-10"/>
            <Bars3Icon @click="open = true" class="block h-6 w-6" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
    <MobileNavbar :navigation="navigation" :open="open" @close="open = false" @click="open = false" />
  </Disclosure>
</template>
<script setup>
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
  { name: 'Dakkapellen', href: '/board', current: false },
  { name: 'Kozijnen', href: '/committee', current: false },
  { name: 'Portfolio', href: '/partners', current: false },
  { name: 'Contact', href: '/documents', current: false },
  { name: 'Offerte aanvragen', href: '/gallery', current: false , button: 'button' },
]

watch(
    () => route.path,
    () => {
      currentRoute.value = route.path;
    },
);
</script>