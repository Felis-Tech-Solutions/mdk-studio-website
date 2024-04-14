<template>
  <div>
    <div class="lg:absolute lg:inset-0 lg:left-1/2 xl:mr-36 2xl:mr-56 3xl:mr-96">
      <NuxtImg
          provider="strapi"
          class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full rounded"
          :src="contactPageApiResponse.data.attributes.image.data.attributes.url"
          sizes='xs:300px sm:500px md:700px lg:1200px xl:1920px'
          width='1920px'
          height='1080px'
          fit='outside'
          format='webp'
          quality='100'
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
              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Naam</label>
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
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input v-model="formData.email" id="email" name="email" required type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Postcode</label>
                <div class="mt-2.5">
                  <input v-model="formData.postalCode" id="postalCode" name="postalCode" required type="text" autocomplete="postalCode" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between text-sm leading-6">
                  <label for="phone" class="block font-semibold text-gray-900">Telefoon </label>
                  <p id="phone-description" class="text-gray-400">Optional</p>
                </div>
                <div class="mt-2.5">
                  <input v-model="formData.phone" type="tel" name="phone" id="phone" autocomplete="tel"  aria-describedby="phone-description" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between text-sm leading-6">
                  <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
                    Bericht
                  </label>
                  <p id="message-description" class="text-gray-400">Max 500 characters</p>
                </div>
                <div class="mt-2.5">
                  <textarea v-model="formData.message" id="message" name="message" required rows="4" aria-describedby="message-description" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
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
  email: "",
  phone: "",
  message: "",
  postalCode: "",
});

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref(null);

const resetForm = () => {
  formData.value.name = "";
  formData.value.email = "";
  formData.value.postalCode = "";
  formData.value.phone = "";
  formData.value.message = "";

  showSuccessMessage.value = false;
  showErrorMessage.value = false;
  errorMessage.value = null;
}

const submitForm = async () => {
  console.log('submitting form')
  try {
    const response = await fetch(`${strapiBaseBaseUri.value}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: formData.value.name,
          email: formData.value.email,
          postalCode: formData.value.postalCode,
          phone: formData.value.phone,
          message: formData.value.message,
        }
      })
    });

    if (response.ok) {
      resetForm();
      showSuccessMessage.value = true;
    } else {
      const responseData = await response.json();
      console.log(responseData);
      errorMessage.value = responseData.error.message;
      console.log(errorMessage.value);
      showErrorMessage.value = true;
    }
  } catch (error) {
    showErrorMessage.value = true;
  } finally {
    isSubmitting.value = false;
  }
}
</script>