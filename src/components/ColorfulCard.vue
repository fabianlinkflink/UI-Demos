<template>
  <div class="group relative hover:scale-105 transition delay-150 duration-300 ease-in-out">
    <!-- Main Card -->
    <div 
      class="flex flex-col items-center min-w-72 w-full rounded-xl overflow-hidden shadow-lg border-2 
        transition delay-150 duration-300 ease-in-out group-hover:shadow-xl"
      :style="{ borderColor: rgbToHex(props.bgColor) }"
      @click="toggleExpand"
    >
      <!-- Parent Group Header -->
      <section 
        class="relative flex items-center justify-between w-full min-h-22 text-white cursor-pointer"
        :style="{ backgroundColor: bgColor }"
      >
        <!-- Group Name -->
        <div class="absolute w-full items-center top-2 left-0 z-10 rounded-br-lg">
          <div class="flex text-xl justify-center items">{{ groupName }}</div>
        </div>
        <!-- Left Side Info -->
        <div class="flex flex-col items-start h-full pl-4 z-10 pt-6 pb-4">
          <div class="text-sm leading-none">{{ leftTitle }}</div>
          <div class="text-l leading-none pt-2">{{ leftInfo }}</div>
        </div>
        <!-- Right Side Info -->
        <div class="flex flex-col items-end h-full pr-4 z-10 pt-6 pb-4">
          <div>
            <div class="text-sm leading-none">{{ rightTitle }}</div>
            <div class="text-l leading-none pt-2">{{ rightInfo }}</div>
          </div>
        </div>
      </section>
      
      <!-- Lower Section -->
      <section 
        class="relative flex items-center justify-between w-full h-16 border-t border-white/25 bg-[var(--lowerBgColor)]
               bg-gradient-to-b from-[var(--lowerBgColor)] to-[rgba(255,255,255,0.2)]"
        :style="{ '--lowerBgColor': lowerBgColor }"
      >
        <slot name="dynamic-content" />
        <div class="absolute inset-0 pointer-events-none shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
      </section>
    </div>
    
    <!-- Expand/Collapse Icon (placed outside the card) -->
    <div 
      class="text-center cursor-pointer text-xl -mt-2"
      @click="toggleExpand"
      :style="{ color: rgbToHex(props.bgColor) }"
    >
      {{ isExpanded ? "" : "▼" }}
    </div>
    
    <!-- Subgroups (Expandable) -->
    <transition name="expand" class="scale-90">
      <div v-if="isExpanded" class="w-full">
        <ColorfulCard
          v-for="(subgroup, index) in subgroups"
          :key="index"
          :groupName="subgroup.groupName"
          :leftTitle="subgroup.leftTitle"
          :leftInfo="subgroup.leftInfo"
          :rightTitle="subgroup.rightTitle"
          :rightInfo="subgroup.rightInfo"
          :bgColor="subColor"
          :subgroups="[]"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';
import ColorfulCard from './ColorfulCard.vue'; // used for nesting subgroups

interface Group {
  groupName: string;
  leftTitle: string;
  leftInfo: string;
  rightTitle: string;
  rightInfo: string;
  bgColor: string;
}

const props = defineProps<{
  groupName: string;
  leftTitle: string;
  leftInfo: string;
  rightTitle: string;
  rightInfo: string;
  bgColor: string;
  subgroups: Group[];
}>();

const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

function brightenColor(rgb: string, increase: number = 20): string {
  const match = rgb.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/);
  if (match) {
    let [r, g, b] = match.slice(1, 4).map(Number);
    r = Math.min(255, r + increase);
    g = Math.min(255, g + increase);
    b = Math.min(255, b + increase);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return rgb;
}

function rgbToHex(rgb: string): string {
  const match = rgb.match(/\d+/g);
  if (!match || match.length !== 3) {
    throw new Error("Invalid RGB format");
  }
  const [r, g, b] = match.map(Number);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

const bgColor = props.bgColor; // top section uses exactly bgColor
// Lower section uses a slightly darker hue:
const lowerBgColor = computed(() => brightenColor(props.bgColor, -20));
// Subgroups use a slightly brighter hue:
const subColor = brightenColor(props.bgColor, 20);
</script>

<style>
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
