<template>
  <!-- Main Slideout Container -->
  <div 
    class="
      slideout flex flex-col absolute right-0 top-14 bottom-0 
      items-center h-fit w-80 rounded-lg overflow-hidden 
      bg-clip-padding backdrop-filter backdrop-blur-sm shadow-sm 
      transition delay-150 duration-300 ease-in-out"
    :style="{ backgroundColor: glassBg }"
  >
    <section 
      class="flex items-center justify-center w-full h-16 text-gray-600 cursor-pointer"
      @click="toggleSlideout"
    >
      <div class="text-xl font-bold">Slideout Panel</div>
    </section>
    
    <section 
      class="w-full p-3"
      :style="{ '--lowerBgColor': lowerBgColor }"
    >
      <div class="
        relative flex flex-col text-left min-w-full space-y-2 rounded-md p-4
        border border-white/15 shadow-sm bg-white/30
        ">
        <p>This is where content goes </p>
        <p>Could be material table </p>
        <p>Could be save form </p>
        <p>Results viewer etc. </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>  
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from 'vue';
const emit = defineEmits(['slideOutToggle']);

const bgColor = 'rgb(194,207,179)';
const lowerBgColor = 'rgb(214,227,199)';
const toggleSlideout = () => {
  emit('slideOutToggle', toggleSlideout);
}

function glassBackground(rgb: string, alpha: number = 0.1): string {
  const match = rgb.match(/\d+/g);
  if (match && match.length >= 3) {
    const [r, g, b] = match;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return rgb;
}

const glassBg = computed(() => glassBackground(bgColor, 0.3));


</script>