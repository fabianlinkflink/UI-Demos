<template>
  <div class="group relative transition delay-150 duration-300 ease-in-out z-20">
    <!-- Main Card -->
    <div 
      class="flex flex-col items-center min-w-72 w-full rounded-xl overflow-hidden
             bg-clip-padding backdrop-filter backdrop-blur-sm shadow-sm 
             hover:backdrop-blur-md hover:shadow-lg hover:scale-105
             transition delay-150 duration-600 ease-in-out"
      :style="{ backgroundColor: glassBg }"
      @click="toggleExpand"
    >
      <section 
        class="relative flex items-center justify-between w-full min-h-22 text-gray-600 cursor-pointer"
      >
        <!-- Group Name -->
        <div class="absolute w-full items-center top-3 left-0 rounded-br-lg">
          <div class="flex justify-center text-xl leading-none">{{ groupName }}</div>
        </div>
        <!-- Left Side Info -->
        <div class="flex flex-col items-start h-full pl-3 pt-6 pb-4">
          <div class="text-sm leading-none">{{ leftTitle }}</div>
          <div class="text-l leading-none pt-2">{{ leftInfo }}</div>
        </div>
        <!-- Right Side Info -->
        <div class="flex flex-col items-end h-full pr-3 pt-6 pb-4">
          <div>
            <div class="text-sm leading-none">{{ rightTitle }}</div>
            <div class="text-l leading-none pt-2">{{ rightInfo }}</div>
          </div>
        </div>
      </section>
      
      <!-- Lower Section -->
      <section class="w-full p-3">
        <div class="relative flex items-center justify-center min-w-full h-16 rounded-md p-3
                    border border-white/15 shadow-sm bg-white/30">
          <slot name="dynamic-content" />
        </div> 
      </section>
    </div>
    
    <!-- Subgroups -->
    <transition-group
      name="stacked-expand"
      tag="div"
      class="relative"
      :style="{
        position: 'relative', 
        height: isExpanded ? auto : 0, 
        overflow: 'visible'
      }"
    >
      <div
        v-for="(subgroup, index) in props.subgroups"
        :key="index"
        class="transition delay-150 duration-300 ease-in-out"
        :style="{
          transform: isExpanded
            ? 'translateY(0)'
            : `translateY(-${168 * (index + 1)}px)`,
          zIndex: isExpanded ? 0 : -1 - index,
          position: 'relative'
        }"
      >
        <div :class="{ 'custom-bounce': index === props.subgroups.length - 1 && !isExpanded }">
          <GlassCard
            :groupName="subgroup.groupName"
            :leftTitle="subgroup.leftTitle"
            :leftInfo="subgroup.leftInfo"
            :rightTitle="subgroup.rightTitle"
            :rightInfo="subgroup.rightInfo"
            :bgColor="subColor"
            :subgroups="[]"
            :style="{ transform: 'scale(0.95)' }"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';
import GlassCard from './GlassCard.vue'; // used for nesting subgroups

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

function glassBackground(rgb: string, alpha: number = 0.1): string {
  const match = rgb.match(/\d+/g);
  if (match && match.length >= 3) {
    const [r, g, b] = match;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return rgb;
}

const glassBg = computed(() => glassBackground(props.bgColor, 0.3));

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

const subColor = brightenColor(props.bgColor, 20);
</script>

<style>
@keyframes customBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.custom-bounce {
  animation: customBounce 2s infinite;
}
</style>
