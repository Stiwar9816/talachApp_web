<template>
  <!-- Main modal -->
  <div
    id="add-modal"
    hide
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
  >
    <div class="relative w-full h-full max-w-md md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          id="closeModal"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="add-modal"
        >
          <!-- Icon Close -->
          <XMarkIcon class="h-6 w-6 text-gray-500" />
          <!-- Icon Close -->
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-6 text-xl font-medium text-gray-800 dark:text-white">{{ textTitle }}</h3>
          <form class="space-y-6" @submit.prevent="onHandleSubmit">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nombre</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Ingrese un nombre"
                required
                v-model="storeProduct.dataProduct.name"
              />
            </div>
            <div>
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Precio</label
              >
              <input
                type="number"
                name="price"
                id="price"
                placeholder="$"
                min="0"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-300 focus:border-orange-300 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                v-model="storeProduct.dataProduct.price"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-300 dark:hover:bg-orange-300 dark:focus:ring-orange-400"
            >
              {{ textButton }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Store
import { useProductStore } from '@/stores/products'
// Components
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  textTitle: {
    type: String,
    default: 'No Name'
  },
  textButton: {
    type: String,
    default: 'No Name'
  },
  onHandleSubmit: Function
})
// Initialization store
const storeProduct = useProductStore()
</script>
