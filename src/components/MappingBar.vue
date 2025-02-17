<template>
  <div class="w-full h-full flex flex-col items-center text-white">
    <div class="w-full h-2/3 flex"> 
      <div class="transition-all ease-out duration-1000 h-full bg-green-300 justify-center flex items-center text-gray-600" :style="{ width: percentMapped + '%' }">
      </div>
      <div class="transition-all ease-out duration-1000 w-1 h-full bg-white border-transparent border-r"></div>
      <div class="transition-all ease-out duration-1000 h-full bg-red-300 justify-center flex items-center" :style="{ width: (100 - percentMapped) + '%' }">
      </div>
    </div>
    <div class="mt-1 flex h-1/3 w-full items-center justify-between text-xs p-2">
      <div>Mapped</div>
      <label class="text-center">{{ percentMapped }}%</label>
      <div>Not mapped</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const _props = defineProps<{
  groups?: object
}>()

// Randomize percentage mapped on component initialization
const percentMapped = ref(parseFloat((Math.random() * 100).toFixed(1)))
</script>