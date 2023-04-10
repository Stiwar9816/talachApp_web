<template>
  <!-- Input Search -->
  <div class="pb-4 bg-white dark:bg-black-900">
    <label for="table-search" class="sr-only">{{ labelSearch }}</label>
    <div class="relative mt-1">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <!-- Icon Search -->
        <MagnifyingGlassIcon class="h-6 w-6 text-gray-400" />
        <!-- End Icon Search -->
      </div>
      <input
        type="text"
        id="table-search"
        class="block p-2 pl-10 text-md text-gray-900 border border-gray-400 rounded-lg w-80 bg-white focus:ring-orange-300 focus:border-orange-300 dark:bg-orange-600 dark:border-orange-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
        :placeholder="labelSearch"
      />
    </div>
  </div>
  <!-- Input Search -->
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
  labelSearch: {
    type: String,
    default: 'Buscar'
  }
})
</script>
