<template>
  <div class="screen flex flex-col justify-between h-screen">
    <Disclosure as="nav" class="flex items-center">
      <div class="mx-auto">
        <div class="relative flex items-center">
          <div class="flex flex-1 items-stretch justify-between">
            <nav class="w-full flex justify-between">
              <div class="flex justify-center items-center xl:pt-4">
                <a href="/">
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
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
            </nav>
            <div class="flex items-center md:hidden pt-4 justify-between w-screen px-5 md:mt-0">
              <Logo class="h-10 pr-14"/>
              <Bars3Icon @click="open = true" class="block h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar :navigation="navigation" :open="open" @close="open = false" @click="open = false" />
    </Disclosure>
    <main class="h-auto flex justify-center items-center flex-col">
      <span class="text-primary text-3xl mt-48">
        Een error is opgetreden
      </span>
      <span class="mt-8 text-2xl text-primary">{{ error.statusCode }}</span>
    </main>
    <footer aria-labelledby="footer-heading" class="mt-40">
      <div class="bg-[#252323]">
        <div class="pt-12 lg:pt-44 lg:px-40 grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-2 flex justify-center md:block">
            <LightLogo class="w-[300px] xl:w-[325px] 2xl:w-[388px]"/>
          </div>
          <div class="flex flex-col gap-y-4 col-span-2 md:col-span-1 items-center md:items-start mt-10 md:mt-0">
            <span class="text-[#9CA3AF] uppercase">
              Contact
            </span>
            <span class="text-[#D1D5DB]">

            </span>
            <span class="text-[#D1D5DB]">

            </span>
            <span class="text-[#D1D5DB]">

            </span>
          </div>
          <div class="flex flex-col gap-y-4 col-span-2 md:col-span-1 items-center md:items-start mt-10 md:mt-0">
            <span class="text-[#9CA3AF] uppercase">
              Paginas
            </span>
            <span class="text-[#D1D5DB]">
              Homepagina
            </span>
            <span class="text-[#D1D5DB]">
              Dakkapellen
            </span>
            <span class="text-[#D1D5DB]">
              Kozijnen
            </span>
            <span class="text-[#D1D5DB]">
              Contact
            </span>
          </div>
          <div class="flex flex-col gap-y-2 md:gap-y-4 col-span-2 mt-8 md:mt-0 mx-20 md:mx-0">
            <span class="text-[#9CA3AF] uppercase flex justify-center md:justify-start">
              Vraag offerte aan
            </span>
            <span class="text-[#D1D5DB]">
              Vraag een vrijblijvende offerte aan of neem contact op met ons.
            </span>
            <NuxtLink to="/offerte-aanvragen">
              <button class="bg-primary hover:bg-red-800 py-2 w-40 rounded-xl text-white text-sm md:text-base">
                Offerte aanvragen
              </button>
            </NuxtLink>
          </div>
        </div>
        <hr class="border my-8 border-[#4B5563] mx-6">
        <div class="flex justify-center items-center pt-4 pb-32">
            <span class="text-[#9CA3AF] mx-8 md:mx-0">
              @ 2024 Felis Tech Solutions - DKDesigns, Inc. All rights reserved.
            </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {Disclosure} from "@headlessui/vue";
import {ref} from "vue";

const open = ref(false)

import type { NuxtError } from '#app'
import MobileNavbar from "~/components/Layout/Partials/MobileNavbar.vue";
import Bars3Icon from "~/icons/Bars3Icon.vue";
import Logo from "~/icons/Logo.vue";
import LightLogo from "~/icons/LightLogo.vue";

const props = defineProps({
  error: Object as () => NuxtError
})

const navigation = [
  { name: 'Homepagina', href: '/', current: false },
  { name: 'Dakkapellen', href: '/dakkapellen', current: false },
  { name: 'Kozijnen', href: '/kozijnen', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Offerte aanvragen', href: '/offerte-aanvragen', current: false , button: 'button' },
]
</script>