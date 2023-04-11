<template>
  <main>
    <NavigationPrice class="my-5" actual-page="Productos" />
    <div class="xl:lg:flex items-center justify-between pb-4">
      <InputSearch />
      <!-- ButtonModal -->
      <ButtonModal text="Agregar Producto" />
      <!-- ButtonModal -->
      <!-- Add Modal -->
      <AddModal
        textTitle="Agregar Producto"
        text-button="Agregar"
        :on-handle-submit="storeProduct.addProduct"
      />
      <!-- Add Modal -->
    </div>
    <TablePrices :data-info="storeProduct.getDataProducts" />
  </main>
</template>

<script setup>
// Store
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
// Components
import TablePrices from '@/components/TablePrices.vue'
import NavigationPrice from '@/components/NavigationPrice.vue'
import InputSearch from '@/components/InputSearch.vue'
import AddModal from '@/components/AddModal.vue'
import ButtonModal from '@/components/ButtonModal.vue'
// Initialization store
const storeProduct = useProductStore()

onMounted(() => {
  storeProduct.getProduct()
})
</script>
