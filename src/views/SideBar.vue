<template>
  <div
    class="sidebar-container relative h-screen w-screen bg-transparent"
    style="height: calc(100vh - 4rem)"
  >
    <!-- Control Panel -->
    <div class="control-panel p-2 bg-gray-200 flex space-x-2">
      <button
        @click="cardType = 'Glass'"
        :class="{
          'bg-gray-700 text-white': cardType === 'Glass',
          'bg-white text-gray-700': cardType !== 'Glass'
        }"
        class="px-3 py-1 rounded"
      >
        GlassCard
      </button>
      <button
        @click="cardType = 'Colorful'"
        :class="{
          'bg-gray-700 text-white': cardType === 'Colorful',
          'bg-white text-gray-700': cardType !== 'Colorful'
        }"
        class="px-3 py-1 rounded"
      >
        DepthCard
      </button>
      <button
        @click="cardType = 'Flat'"
        :class="{
          'bg-gray-700 text-white': cardType === 'Flat',
          'bg-white text-gray-700': cardType !== 'Flat'
        }"
        class="px-3 py-1 rounded"
      >
        Flatcard
      </button>
      <button
        @click="cardType = 'NeoBrut'"
        :class="{
          'bg-gray-700 text-white': cardType === 'NeoBrut',
          'bg-white text-gray-700': cardType !== 'NeoBrut'
        }"
        class="px-3 py-1 rounded"
      >
        Neo Brutalism
      </button>
      <button
        @click="toggleSlideout"
        class="px-3 py-1 rounded bg-blue-500 text-white"
      >
        Toggle Slideout
      </button>
    </div>

    <!-- Left-side cards overlay -->
    <div class="relative w-100 h-full">
      <div
        class="cards-container absolute left-0 top-14 bottom-0 w-full overflow-y-auto overflow-x-visible p-2"
      >
        <div class="relative">
          <template v-for="(card, index) in cards" :key="index">
            <!-- Switch rendering based on selected cardType -->
            <GlassCard
              v-if="cardType === 'Glass'"
              :groupName="card.groupName"
              :leftTitle="card.leftTitle"
              :leftInfo="card.leftInfo"
              :rightTitle="card.rightTitle"
              :rightInfo="card.rightInfo"
              :bgColor="card.bgColor"
              :subgroup="card.subgroup"
              class="mb-4"
            />
            <ColorfulCard
              v-else-if="cardType === 'Colorful'"
              :groupName="card.groupName"
              :leftTitle="card.leftTitle"
              :leftInfo="card.leftInfo"
              :rightTitle="card.rightTitle"
              :rightInfo="card.rightInfo"
              :bgColor="card.bgColor"
              :subgroup="card.subgroup"
              class="mb-4"
            />
            <Flatcard
              v-else-if="cardType === 'Flat'"
              :groupName="card.groupName"
              :leftTitle="card.leftTitle"
              :leftInfo="card.leftInfo"
              :rightTitle="card.rightTitle"
              :rightInfo="card.rightInfo"
              :bgColor="card.bgColor"
              :subgroup="card.subgroup"
            />
            <NeoBrutCard
              v-else-if="cardType === 'NeoBrut'"
              :groupName="card.groupName"
              :leftTitle="card.leftTitle"
              :leftInfo="card.leftInfo"
              :rightTitle="card.rightTitle"
              :rightInfo="card.rightInfo"
              :bgColor="card.bgColor"
              :subgroup="card.subgroup"
              class="mb-8 w-80"
            />
          </template>
        </div>
      </div>
    </div>
    <transition name="slide">
      <component v-if="showSlideout" :is="currentSlideout" @slideOutToggle="toggleSlideout"/>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import GlassCard from '@/components/GlassCard.vue';
import ColorfulCard from '@/components/ColorfulCard.vue';
import Flatcard from '@/components/FlatCard.vue';
import NeoBrutCard from '@/components/NeoBrutCard.vue';

import SlideoutPanelGlass from '@/components/SlideoutPanelGlass.vue';
import SlideoutPanelColorful from '@/components/SlideoutPanelColorful.vue';
import SlideoutPanelFlat from '@/components/SlideoutPanelFlat.vue';
import SlideoutPanelNeoBrut from '@/components/SlideoutPanelNeoBrut.vue';

import groupData from '@/data/groupData';

interface Card {
  groupName: string;
  leftTitle: string;
  leftInfo: string;
  rightTitle: string;
  rightInfo: string;
  bgColor: string;
  subgroup: Card[];
}

const cards: Card[] = [];
function mapGroup(group: any): Card {
  return {
    groupName: group.name,
    leftTitle: 'Material',
    leftInfo: 'Mixed',
    rightTitle: 'Included',
    rightInfo: 'Yes',
    bgColor: group.color ? group.color : 'bg-gray-800',
    subgroup: group.children ? group.children.map(mapGroup) : []
  }
}

groupData.forEach((group: any) => {
  cards.push(mapGroup(group));
});

const cardType = ref('Glass');
const showSlideout = ref(false);

// Dynamically choose the slideout component based on cardType
const currentSlideout = computed(() => {
  if (cardType.value === 'Colorful') {
    return SlideoutPanelColorful;
  } else if (cardType.value === 'Flat') {
    return SlideoutPanelFlat;
  } else if (cardType.value === 'NeoBrut') {
    return SlideoutPanelNeoBrut;
  }
  // Default to Glass (or include additional logic for 'Flat')
  return SlideoutPanelGlass;
});

const toggleSlideout = () => {
  showSlideout.value = !showSlideout.value;
};
</script>

<style scoped>
.cards-container {
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.cards-container::-webkit-scrollbar {
  display: none;
}

/* Slideout transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* Optional styling for the control panel */
.control-panel button {
  transition: background-color 0.2s;
}
</style>