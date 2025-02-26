<template>
  <!-- Main Slideout Container -->
  <div 
    class="slideout flex flex-col absolute right-0 top-14 bottom-0 items-center h-fit w-80 transition delay-150 duration-300 ease-in-out
          border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] font-lexend
            hover:shadow-none hover:translate-x-2 hover:translate-y-2"
    :style="{ backgroundColor: bgColor }"
  >
    <section 
      class="flex items-center justify-center w-full h-16 text-white cursor-pointer"

      @click="toggleSlideout"
    >
      <div class="text-xl font-bold">Slideout Panel</div>
    </section>
    
    <section 
      class="relative flex items-center justify-center min-w-full h-fit p-3 border-t-2 border-black bg-neutral-100 z-10 rounded-md"
    >
      <div class="flex flex-col p-4 font-serif text-black text-left space-y-2">
        <p>This is where content goes </p>
        <p>Could be material table </p>
        <p>Could be save form </p>
        <p>Results viewer etc. </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>  
        <div class="absolute inset-0 pointer-events-none shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['slideOutToggle']);

const bgColor = 'rgb(194,207,179)';
const lowerBgColor = 'rgb(214,227,199)';
const toggleSlideout = () => {
  emit('slideOutToggle', toggleSlideout);
}

// No additional logic is required at the moment.
</script>

<style scoped>
/* Add any extra scoped styles here if needed */
</style>