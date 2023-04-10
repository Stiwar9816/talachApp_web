<template>
  <main>
    <NavigationPrice class="my-5" actual-page="Costos Fijos" />
    <table-prices page-text="Costo Fijo"/>
  </main>
</template>

<script setup>
import TablePrices from '../components/TablePrices.vue'
import NavigationPrice from '../components/NavigationPrice.vue'
</script>
