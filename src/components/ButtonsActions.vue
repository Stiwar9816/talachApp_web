<template>
  <button @click="onHandleUpdate">
    <PencilSquareIcon class="h-6 w-6 text-blue-700 mr-2" />
  </button>
  <button @click="onHandleDelete">
    <TrashIcon class="h-6 w-6 text-red-700" />
  </button>
</template>

<script setup>
// Icons
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import { TrashIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  onHandleUpdate: Function,
  onHandleDelete: Function
})
</script>
