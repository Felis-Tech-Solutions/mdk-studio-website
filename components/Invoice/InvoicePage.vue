<template>
  <div class="lg:absolute lg:inset-0 lg:left-1/2 xl:mr-36 2xl:mr-56 3xl:mr-96 xl:h-[60rem]">
    <NuxtImg
        provider="strapi"
        class="h-64 w-[90rem] md:h-96 xl:w-[55rem] lg:h-[70rem] object-cover"
        :src="contactPageApiResponse.data.attributes.image.data.attributes.url"
        fit="cover"
        format='webp'
        quality='100'
        alt="invoice-image"
    />
  </div>
  <div class="pb-12 md:pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ contactPageApiResponse.data.attributes.title }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          {{ contactPageApiResponse.data.attributes.subTitle }}
        </p>
        <form @submit.prevent="submitForm" method="POST" class="mt-16">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-x-8">
              <div>
                <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Naam</label>
                <div class="mt-2.5">
                  <input
                      v-model="formData.name"
                      type="text"
                      name="name"
                      required
                      id="name"
                      autocomplete="name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="mt-6 md:mt-0">
                <label for="surName" class="block text-sm font-semibold leading-6 text-gray-900">Achternaam</label>
                <div class="mt-2.5">
                  <input
                      v-model="formData.surname"
                      type="text"
                      name="surName"
                      id="surName"
                      required
                      autocomplete="surName"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input
                    v-model="formData.email"
                    id="email"
                    name="email"
                    required
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-x-8">
              <div>
                <div class="flex justify-between text-sm leading-6">
                  <label for="postalCode" class="block text-sm font-semibold leading-6 text-gray-900">Postcode</label>
                </div>
                <div class="mt-2.5">
                  <input
                      v-model="formData.postalCode"
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      required
                      autocomplete="postalCode"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="mt-6 md:mt-0">
                <div class="flex justify-between text-sm leading-6">
                  <label for="residence" class="block text-sm font-semibold leading-6 text-gray-900">Woonplaats</label>
                </div>
                <div class="mt-2.5">
                  <input
                      v-model="formData.residence"
                      type="text"
                      name="residence"
                      required
                      id="residence"
                      autocomplete="residence"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div class="flex justify-between text-sm leading-6">
                <label for="phone" class="block font-semibold text-gray-900">Telefoon</label>
              </div>
              <div class="mt-2.5">
                <input
                    v-model="formData.phone"
                    type="tel"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    aria-describedby="phone-description"
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-2">
              <div class="flex justify-between text-sm leading-6">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
                  Waarvoor vraag je een offerte aan?
                </label>
              </div>
              <div class="space-y-5 mt-2.5">
                <div class="relative flex items-start">
                  <div class="flex h-6 items-center">
                    <input
                        id="dormer"
                        v-model="formData.dormer"
                        aria-describedby="dormer"
                        name="dormer"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="dormer" class="font-medium text-gray-900 cursor-pointer flex flex-col">
                          <span>
                            Dakkapel
                          </span>
                      <span id="dormern" class="text-gray-500">Vraag een dakkapel offerte aan</span>
                    </label>
                    <div  class="text-gray-500 ">
                      <div  v-show="formData.dormer" class="flex items-center">
                        <label for="" class="pr-2">
                          Verwacht aantal dakkapel ramen:
                        </label>
                        <input
                            id="dormerAmount"
                            v-model="formData.dormerAmount"
                            name="dormerAmount"
                            type="number"
                            required
                            class="block w-24 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex h-6 items-center">
                    <input id="windowFrame" v-model="formData.windowFrame" aria-describedby="windowFrame" name="windowFrame" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="windowFrame" class="font-medium text-gray-900 cursor-pointer flex flex-col">
                          <span>
                            Raamkozijn
                          </span>
                      <span id="cwindowFrame" class="text-gray-500">Vraag een raamkozijnen offerte aan</span>
                    </label>
                    <div  class="text-gray-500 ">
                      <div  v-show="formData.windowFrame" class="flex items-center ">
                        <label for="" class="pr-2">
                          Verwacht aantal kozijnen:
                        </label>
                        <input
                            id="dormerAmount"
                            v-model="formData.windowFrameAmount"
                            name="dormerAmount"
                            type="number"
                            required
                            class="block w-24 rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative flex items-start">
                  <div class="flex h-6 items-center">
                    <input
                        id="both"
                        v-model="formData.both"
                        aria-describedby="both"
                        name="both"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        @click="setBothInvoiceValues"
                    />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="both" class="font-medium text-gray-900 cursor-pointer flex flex-col" @click="setBothInvoiceValues">
                          <span>
                            Beide
                          </span>
                      <span id="both" class="text-gray-500">Vraag een dakkapel en raamkozijnenofferte</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between text-sm leading-6">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
                  Opmerking
                </label>
                <p id="message-description" class="text-gray-400">Max 500 characters</p>
              </div>
              <div class="mt-2.5">
                <textarea v-model="formData.message" id="message" name="message" rows="4" aria-describedby="message-description" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
          <div class="flex flex-col-reverse md:flex-row justify-between mt-4 pt-4 ">
            <div class="mt-6 md:mt-0">
              <BaseFeedbackMessage v-if="showSuccessMessage" class="w-full md:w-96"/>
              <BaseErrorMessage v-if="showErrorMessage" :errorMessage="errorMessage" class="w-full md:w-96"/>
            </div>
            <div class="border-gray-900/10 md:mt-12">
              <button
                  type="submit"
                  class="flex justify-center w-24 inline-flex items-center gap-x-1.5 rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  :disabled="isSubmitting"
              >
                <BaseSpinner v-if="isSubmitting" />
                <span v-else class="text-white font-bold">
                        Verzenden
                      </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseFeedbackMessage from "~/components/Base/BaseFeedbackMessage.vue";
import BaseSpinner from "~/components/Base/BaseSpinner.vue";
import BaseErrorMessage from "~/components/Base/BaseErrorMessage.vue";

const props = defineProps({
  contactPageApiResponse: {
    type: Object,
    required: true
  },
  strapiBaseBaseUri: {
    type: String,
    required: true
  }
});

const { strapiBaseBaseUri } = toRefs(props);

const formData = ref({
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
  postalCode: "",
  residence: "",
  dormer: false,
  dormerAmount: null,
  windowFrame: false,
  windowFrameAmount: null,
  both: false,
});

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref(null);

const resetForm = () => {
  formData.value.name = "";
  formData.value.surname = "";
  formData.value.email = "";
  formData.value.postalCode = "";
  formData.value.phone = "";
  formData.value.message = "";
  formData.value.residence = "";
  formData.value.dormer = false;
  formData.value.dormerAmount = null;
  formData.value.windowFrame = false;
  formData.value.windowFrameAmount = null;
  formData.value.both = false;
  showSuccessMessage.value = false;
  showErrorMessage.value = false;
  errorMessage.value = null;
};

const submitForm = async () => {
  showSuccessMessage.value = false;
  showErrorMessage.value = false;

  try {
    const response = await fetch(`${strapiBaseBaseUri.value}/quote-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: formData.value.name,
          surname: formData.value.surname,
          email: formData.value.email,
          postalCode: formData.value.postalCode,
          phone: formData.value.phone,
          message: formData.value.message,
          residence: formData.value.residence,
          dormer: formData.value.dormer,
          dormerAmount: formData.value.dormerAmount,
          windowFrame: formData.value.windowFrame,
          windowFrameAmount: formData.value.windowFrameAmount,
          both: formData.value.both,
        }
      })
    });

    if (response.ok) {
      resetForm();
      showSuccessMessage.value = true;
    } else {
      const responseData = await response.json();
      errorMessage.value = responseData.error.message;
      showErrorMessage.value = true;
    }
  } catch (error) {
    showErrorMessage.value = true;
  } finally {
    isSubmitting.value = false;
  }
}

const setBothInvoiceValues = () => {
  formData.value.dormer = !formData.value.both;
  formData.value.windowFrame = !formData.value.both;
}
</script>
