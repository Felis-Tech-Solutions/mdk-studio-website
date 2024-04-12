<template>
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
            {{ FooterComponentApiResponse.data.attributes.mail }}
          </span>
          <span class="text-[#D1D5DB]">
            {{ FooterComponentApiResponse.data.attributes.city }}
          </span>
          <span class="text-[#D1D5DB]">
            {{ FooterComponentApiResponse.data.attributes.streetNameAndHouseNumber }}
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
            Portfolio
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
</template>
<script setup lang="ts">
import LightLogo from "~/icons/LightLogo.vue";
import { type FooterComponentApiResponse } from "~/types/FooterComponent";

const strapiBaseBaseUri = inject('strapiBaseBaseUri');

const { data: FooterComponentApiResponse, pending: isLoading, error } = useFetch<FooterComponentApiResponse>(
    `${strapiBaseBaseUri}/footer-component`
)
</script>