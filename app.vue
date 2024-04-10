<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>

<script setup>
const strapiBaseBaseUri = useRuntimeConfig().public.strapiBaseBaseUri;

provide('strapiBaseBaseUri', strapiBaseBaseUri);
</script>