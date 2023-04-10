<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <router-link
          to="/"
          class="inline-flex items-center text-md font-semibold text-gray-700 hover:text-orange-400 dark:text-gray-400 dark:hover:text-white"
        >
          <!-- Icon Home -->
          <HomeIcon class="h-6 w-6 text-orange-400 mr-2" />
          <!-- Icon Home -->
          Inicio
        </router-link>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <!-- Icon Arrow Right -->
          <ChevronRightIcon class="h-5 w-5 text-orange-300" />
          <!-- Icon Arrow Right -->
          <span class="ml-1 text-md font-semibold text-gray-500 md:ml-2 dark:text-gray-400"
            >Precios</span
          >
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <!-- Icon Arrow Right -->
          <ChevronRightIcon class="h-5 w-5 text-orange-300" />
          <!-- Icon Arrow Right -->
          <span class="ml-1 text-md font-semibold text-gray-500 md:ml-2 dark:text-gray-400">{{
            actualPage
          }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  actualPage: {
    type: String,
    default: 'Page'
  }
})
</script>
