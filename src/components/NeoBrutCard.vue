<template>
  <div class="relative isolate transition delay-150 duration-300 ease-in-out z-20 font-lexend">
    <div class="group relative">
      <!-- Main Card -->
      <div 
        tabindex="1"
        class="flex flex-col items-center min-w-72 w-full overflow-visible
                border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)]
                hover:shadow-none hover:translate-x-2 hover:translate-y-2 
                focus:outline-2 focus:outline-offset-2 focus:outline-black focus:translate-x-2 focus:translate-y-2 focus:shadow-none
                transition-all delay-150 duration-300 ease-in-out"
        :style="{ backgroundColor: bgColor }"
        @click="toggleExpand"
      >
        <section 
          class="relative flex items-center justify-between w-full min-h-22 text-gray-700 cursor-pointer"
        >
          <!-- Group Name -->
          <div class="absolute w-full items-center top-3 left-0 rounded-br-lg">
            <div class="flex justify-center text-xl leading-none font-black">{{ groupName }}</div>
          </div>
          <!-- Left Side Info -->
          <div class="flex flex-col items-start h-full pl-3 pt-8 pb-4">
            <div class="text-l leading-none pt-2">{{ leftInfo }}</div>
          </div>
          <!-- Right Side Info -->
          <div class="flex flex-col items-end h-full pr-3 pt-8 pb-4">
            <div>
              <div class="text-l leading-none pt-2">{{ rightInfo }}</div>
            </div>
          </div>
        </section>
        
        <!-- Lower Section -->
        <section class="w-full">
          <div class="relative flex items-center justify-center min-w-full h-16 p-3 border-t-2 border-black bg-neutral-100 z-10 rounded-md">
            <slot name="dynamic-content" />
          </div> 
        </section>
      </div>

      <!-- Triangle indicators -->
      <div 
        v-if="props.subgroup.length"
        class="absolute translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2
               group-focus-within:translate-x-2 group-focus-within:translate-y-2
               transition-all delay-150 duration-300 ease-in-out z-30" 
        :class="{ 'rotate-180': isExpanded }"
        :style="{
          right: '-34px',
          bottom: '-34px',
          width: 0,
          height: 0,
          borderLeft: '34px solid transparent',
          borderRight: '34px solid transparent',
          borderTop: '66px solid black'
        }"
      ></div>
      <div 
        v-if="props.subgroup.length"
        class="absolute translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2
               group-focus-within:translate-x-2 group-focus-within:translate-y-2
               transition-all delay-150 duration-300 ease-in-out z-40" 
        :class="{ 'rotate-180': isExpanded }"
        :style="{
          right: '-30px',
          bottom: '-30px',
          width: 0,
          height: 0,
          borderLeft: '30px solid transparent',
          borderRight: '30px solid transparent',
          borderTop: `60px solid ${props.bgColor}`
        }"
      ></div>
    </div>

    <!-- Subgroups -->
    <transition name="expand" class="scale-x-95 origin-top-right mt-2">
      <div v-if="isExpanded" class="w-full relative z-10">
        <NeoBrutCard
          v-for="(subgroup, index) in subgroup"
          class="pt-8"
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
import { defineProps, ref } from 'vue';

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
</script>

<style>
</style>
