// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  site: {
    indexable: process.env.NODE_ENV === 'production',
    url: 'https://mdk-studio.nl',
    name: 'Dakkappellen en Kozijnen',
    description: 'MDK studio',
    defaultLocale: 'nl', // not needed if you have @nuxtjs/i18n installed
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'nl'
      },
      title: 'MDK Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'MDK studio' }
      ],
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", '@nuxtjs/seo', '@nuxt/devtools'],

  // @ts-ignore
  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      strapiBaseBaseUri: process.env.STRAPI_BASE_API_URL,
      strapiAssetsBaseBaseUri: process.env.STRAPI_ASSETS_BASE_API_URL,
    },
  },
  image: {
    provider: 'strapi',
    strapi: {
      baseURL: 'http://localhost:1337'
    },
    inject: true,
    quality: 100,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    domains: ['http://localhost:1337/']
  },
});