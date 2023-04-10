<template>
  <main>
    <NavigationPrice class="my-5" actual-page="Productos" />
    <table-prices page-text="Producto" :data-info="storeProduct.getDataProducts" />
  </main>
</template>

<script setup>
// Store
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
// Components
import TablePrices from '@/components/TablePrices.vue'
import NavigationPrice from '@/components/NavigationPrice.vue'
// Initialization store
const storeProduct = useProductStore()

onMounted(() => {
  storeProduct.getProduct()
})
</script>
