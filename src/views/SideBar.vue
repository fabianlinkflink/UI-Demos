<template>
  <div
    class="sidebar-container relative h-screen w-screen bg-transparent overflow-hidden"
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
        @click="toggleSlideout"
        class="px-3 py-1 rounded bg-blue-500 text-white"
      >
        Toggle Slideout
      </button>
    </div>

    <!-- Left-side cards overlay -->
    <div
      class="cards-container absolute left-0 top-14 bottom-0 w-80 overflow-y-scroll p-2"
    >
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
      </template>
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
import Flatcard from '@/components/Flatcard.vue';
import SlideoutPanelGlass from '@/components/SlideoutPanelGlass.vue';
import SlideoutPanelColorful from '@/components/SlideoutPanelColorful.vue';
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
  /* Hide scrollbar for IE, Firefox, Chrome, Safari */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}
.cards-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
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