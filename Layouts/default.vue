<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Layout/Header.vue";
import Footer from "~/components/Layout/Footer.vue";
</script>
