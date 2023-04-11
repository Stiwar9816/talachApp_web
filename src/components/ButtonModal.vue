<template>
  <!-- Add Button Modal -->
  <button
    data-modal-target="add-modal"
    data-modal-toggle="add-modal"
    class="block text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-100 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
    type="button"
  >
    {{ text }}
  </button>
  <!-- Add Button Modal -->
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Actual Page'
  }
})
</script>
