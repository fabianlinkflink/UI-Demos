<template>
  <!-- Main Slideout Container -->
  <div 
    class="slideout flex flex-col absolute right-0 top-14 bottom-0 items-center h-fit w-80 rounded-lg overflow-hidden border-2 transition delay-150 duration-300 ease-in-out group-hover:shadow-xl"
    :style="{ borderColor: bgColor }"
  >
    <section 
      class="flex items-center justify-center w-full h-16 text-white bg-indigo-400 cursor-pointer"
      :style="{ backgroundColor: bgColor }"
      @click="toggleSlideout"
    >
      <div class="text-xl font-bold">Slideout Panel</div>
    </section>
    
    <section 
      class="relative flex items-center justify-between h-full w-full border-t border-white/25 bg-[var(--lowerBgColor)]
              bg-gradient-to-b from-[var(--lowerBgColor)] to-[rgba(255,255,255,0.2)]"
      :style="{ '--lowerBgColor': lowerBgColor }"
    >
      <div class="flex flex-col p-4 text-black text-left space-y-2">
        <p>This is where content goes </p>
        <p>Could be material table </p>
        <p>Could be save form </p>
        <p>Results viewer etc. </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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