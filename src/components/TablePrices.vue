<template>
  <div class="xl:lg:flex items-center justify-between pb-4">
    <InputSearch />
    <!-- Add Button Modal -->
    <button
      data-modal-target="add-modal"
      data-modal-toggle="add-modal"
      class="block text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-100 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
      type="button"
    >
      Agregar {{ pageText }}
    </button>
    <!-- Add Button Modal -->
    <!-- Add Modal -->
    <AddModal :text="pageText" />
    <!-- Add Modal -->
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-black-500 dark:text-white">
      <thead
        class="text-sm text-black-700 uppercase bg-orange-100 dark:bg-orange-500 dark:text-black-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3" v-for="(nameColumn, index) in nameColumns" :key="index">
            {{ nameColumn }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="(data, i) in dataInfo"
          :key="i"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ data.id }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ data.name }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ toCurrency(data.price) }}
          </th>

          <td class="flex px-6 py-4">
            <button @click="storeProduct.updateProduct(data.id)">
              <PencilSquareIcon class="h-6 w-6 text-blue-700 mr-2" />
            </button>
            <button @click="storeProduct.deleteProduct(data.id)">
              <TrashIcon class="h-6 w-6 text-red-700" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Store
import { useProductStore } from '@/stores/products'
// Icons
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import { TrashIcon } from '@heroicons/vue/24/outline'
// Components
import InputSearch from './InputSearch.vue'
import AddModal from './AddModal.vue'
// Utils
import { toCurrency } from '../utils/formatCurrency'
// Initialization store
const storeProduct = useProductStore()

const props = defineProps({
  labelSearch: {
    type: String,
    default: 'Buscar'
  },
  nameColumns: {
    type: Array,
    default: ['ID', 'Nombre', 'Precio', 'Acciones']
  },
  dataInfo: {
    type: Object,
    default: [
      {
        id: 1,
        name: 'Instalar nueva llanta',
        price: 2000
      },
      {
        id: 2,
        name: 'Cambio de refacción',
        price: 3000
      }
    ]
  },
  pageText: {
    type: String,
    default: 'Actual Page'
  },
  deleteItem: String,
  updateItem: String
})
</script>
