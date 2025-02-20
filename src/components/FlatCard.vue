<template>
  <div class="group relative transition delay-150 duration-300 ease-in-out z-20">
    <!-- Main Card -->
    <div 
      class="flex flex-col items-center min-w-72 w-full overflow-hidden shadow-sm border
             hover:bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(0,0,0,0.05)] 
             transition-all delay-150 duration-300 ease-in-out"
      :style="{ backgroundColor: bgColor, borderColor: borderColor }"
      @click="toggleExpand"
    >
      <section 
        class="relative flex items-center justify-between w-full min-h-22 text-gray-700 cursor-pointer"
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
      <section class="w-full">
        <div class="relative flex items-center justify-center min-w-full h-16 p-3
                    border border-white/15 shadow-sm bg-white/10">
          <slot name="dynamic-content" />
        </div> 
      </section>
    </div>
    
    <!-- Subgroups -->
    <transition name="expand" class="scale-90 origin-top-right">
      <div v-if="isExpanded" class="w-full">
        <FlatCard
          v-for="(subgroup, index) in subgroup"
          :key="index"
          :groupName="subgroup.groupName"
          :leftTitle="subgroup.leftTitle"
          :leftInfo="subgroup.leftInfo"
          :rightTitle="subgroup.rightTitle"
          :rightInfo="subgroup.rightInfo"
          :bgColor="subColor"
          :subgroup="subgroup.subgroup? subgroup.subgroup : []"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';

interface Group {
  groupName: string;
  leftTitle: string;
  leftInfo: string;
  rightTitle: string;
  rightInfo: string;
  bgColor: string;
  subgroup?: Group[]
}

const props = defineProps<{
  groupName: string;
  leftTitle: string;
  leftInfo: string;
  rightTitle: string;
  rightInfo: string;
  bgColor: string;
  subgroup: Group[];
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

const subColor = brightenColor(props.bgColor, 20);
const borderColor = brightenColor(props.bgColor, -10);
</script>

<style>
</style>
