<script setup lang="ts">
import ColorfulCard from '../components/ColorfulCard.vue';
import GlassCard from '../components/GlassCard.vue';
import MappingBar from '../components/MappingBar.vue';

</script>

<template>
  <div class="max-w-100">
    <div class="pt-10">
      <ColorfulCard
        groupName="Group"
        leftTitle="Left Title"
        leftInfo="Left Info"
        rightTitle="Right Title"
        rightInfo="Right Info"
        bgColor="rgb(194,207,179)"
        :subgroups="[
          { groupName: 'Subgroup 1', leftTitle: 'Left 1', leftInfo: 'Info 1', rightTitle: 'Right 1', rightInfo: 'Info 1', bgColor: 'rgb(120, 170, 220)' },
          { groupName: 'Subgroup 2', leftTitle: 'Left 2', leftInfo: 'Info 2', rightTitle: 'Right 2', rightInfo: 'Info 2', bgColor: 'rgb(90, 140, 190)' }
        ]"
      >
        <template v-slot:dynamic-content>
          <MappingBar />
        </template>
      </ColorfulCard>
    </div>

    <div class="pt-10">
      <GlassCard
        groupName="Group"
        leftTitle="Left Title"
        leftInfo="Left Info"
        rightTitle="Right Title"
        rightInfo="Right Info"
        bgColor="rgb(194,207,179)"
        :subgroups="[
          { groupName: 'Subgroup 1', leftTitle: 'Left 1', leftInfo: 'Info 1', rightTitle: 'Right 1', rightInfo: 'Info 1', bgColor: 'rgb(120, 170, 220)' },
          { groupName: 'Subgroup 2', leftTitle: 'Left 2', leftInfo: 'Info 2', rightTitle: 'Right 2', rightInfo: 'Info 2', bgColor: 'rgb(90, 140, 190)' }
        ]"
      >
        <template v-slot:dynamic-content>
          <MappingBar />
        </template>
      </GlassCard>
    </div>
  </div>
</template>
