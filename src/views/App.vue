<script setup lang="ts">
import { ref } from 'vue';

const isAltBackground = ref(false);
const toggleBackground = () => {
  isAltBackground.value = !isAltBackground.value;
}
</script>

<template>
  <div :class="[ isAltBackground ? 'alt-bg' : 'default-bg', 'min-h-screen min-w-screen' ]">
    <nav class="flex justify-around items-center bg-gray-800 text-white shadow-lg">
      <router-link to="/cards" class="px-4 py-2 hover:bg-gray-700 rounded">
        Cards
      </router-link>
      <router-link to="/sidebar" class="px-4 py-2 hover:bg-gray-700 rounded">
        Sidebar
      </router-link>
      <button @click="toggleBackground" class="px-4 py-2 hover:bg-gray-700 rounded">
        Toggle Background
      </button>
    </nav>
    <!-- Routed content displayed below the navbar -->
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
/* Background style for default view */
.default-bg {
  background-color: #859ebc;
  background-image: radial-gradient(rgba(12,12,12,0.171) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
  z-index: 0;
}
/* Alternative background style */
.alt-bg {
  width: 100%;
  height: 100%;
  --s: 100px; /* control the size */
  --c1: #f8b195;
  --c2: #355c7d;

  --_g: var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%,
    var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%,
    var(--c1) 76% 86%, var(--c2) 86% 96%;
  background: radial-gradient(
      100% 100% at 100% 0,
      var(--c1) 4%,
      var(--_g),
      #0008 96%,
      #0000
    ),
    radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #0008 4%,
        var(--_g),
        var(--c1) 96%
      )
      var(--c1);
  background-size: var(--s) var(--s);
  z-index: 0;
}
</style>