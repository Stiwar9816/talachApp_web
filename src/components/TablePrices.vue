<template>
  <div class="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg max-h-80 bg-red-500">
    <table class="w-full text-sm text-left text-black-500 dark:text-white">
      <thead
        class="text-sm text-black-700 uppercase bg-orange-100 dark:bg-orange-500 dark:text-black-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3" v-for="nameColumn in nameColumns" :key="nameColumn">
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
            <ButtonsActions
              @handle-update="storeProduct.onlyProduct(data.id)"
              @handle-delete="storeProduct.deleteProduct(data.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Store
import { useProductStore } from '@/stores/products'
// Components
import ButtonsActions from './ButtonsActions.vue'
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
  }
})
</script>
