<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-xl ">
                <div class="flex h-full flex-col overflow-y-scroll py-6 shadow-xl justify-between px-5 bg-red-50">
                  <div class=" sm:px-6">
                    <div class="flex items-center justify-between w-full">
                      <Logo/>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                            type="button" class="relative rounded-md bg-white text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            @click="closeNavBar"
                        >
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-8 w-8 hover:ring-primary" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <div class="space-y-1 px-2 pb-3 pt-2 flex justify-center flex-col text-black">
                        <NuxtLink
                            v-for="item in navigation"
                            :key="item.name"
                            :to="item.href"
                            class="inline-flex items-center flex justify-left font-semibold py-2 hover:text-gray-700 hover:border-primary w-full text-2xl"
                            activeClass="border-b-2 border-primary text-black"
                            @click="closeNavBar"
                            :aria-label="item.name"
                        >
                          {{ item.name }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p class="text-xs leading-5 text-gray-500">&copy; 2024 FelisTS - DKDesigns, Inc. All rights reserved.</p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import XMarkIcon from "~/icons/XMarkIcon.vue";
import Logo from "~/icons/Logo.vue";

defineProps({
  navigation: {
    type: Array,
    default: () => ([])
  },
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close']);

const closeNavBar = () => {
  emit('close');
}
</script>
