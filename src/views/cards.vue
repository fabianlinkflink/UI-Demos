<script setup lang="ts">
import FlatCard from '@/components/FlatCard.vue';
import ColorfulCard from '../components/ColorfulCard.vue';
import GlassCard from '../components/GlassCard.vue';
import MappingBar from '../components/MappingBar.vue';
import NeoBrutCard from '@/components/NeoBrutCard.vue';
</script>

<template>
  <!-- The outer container centers all content -->
  <div class="cards-container min-h-screen flex items-center justify-center overflow-y-scroll">
    <!-- Constrain the width of the content -->
    <div class="flex flex-row p-4">
      <div class="w-fit p-4">
        <ColorfulCard
          groupName="DepthCard"
          leftTitle="Left Title"
          leftInfo="Left Info"
          rightTitle="Right Title"
          rightInfo="Right Info"
          bgColor="rgb(194,207,179)"
          :subgroup="[ 
            { 
              groupName: 'Subgroup 1', 
              leftTitle: 'Left 1', 
              leftInfo: 'Info 1', 
              rightTitle: 'Right 1', 
              rightInfo: 'Info 1', 
              bgColor: 'rgb(120, 170, 220)', 
              subgroup: [ 
                { 
                  groupName: 'SubSubgroup 1', 
                  leftTitle: 'Left 1', 
                  leftInfo: 'Info 1', 
                  rightTitle: 'Right 1', 
                  rightInfo: 'Info 1', 
                  bgColor: 'rgb(120, 170, 220)',
                  subgroup: [
                    {
                      groupName: 'SubSubSubgroup 1',
                      leftTitle: 'Left 1',
                      leftInfo: 'Info 1',
                      rightTitle: 'Right 1',
                      rightInfo: 'Info 1',
                      bgColor: 'rgb(120, 170, 220)'
                    }
                  ]
                },
                { 
                  groupName: 'SubSubgroup 2', 
                  leftTitle: 'Left 2', 
                  leftInfo: 'Info 2', 
                  rightTitle: 'Right 2', 
                  rightInfo: 'Info 2', 
                  bgColor: 'rgb(90, 140, 190)' 
                }
              ] 
            },
            { 
              groupName: 'Subgroup 2', 
              leftTitle: 'Left 2', 
              leftInfo: 'Info 2', 
              rightTitle: 'Right 2', 
              rightInfo: 'Info 2', 
              bgColor: 'rgb(90, 140, 190)' 
            }
          ]"
        >
          <template v-slot:dynamic-content>
            <MappingBar />
          </template>
        </ColorfulCard>
      </div>

      <div class="w-fit p-4">
        <GlassCard
          groupName="GlassCard"
          leftTitle="Left Title"
          leftInfo="Left Info"
          rightTitle="Right Title"
          rightInfo="Right Info"
          bgColor="rgb(194,207,179)"
          :subgroup="[ 
            { 
              groupName: 'Subgroup 1', 
              leftTitle: 'Left 1', 
              leftInfo: 'Info 1', 
              rightTitle: 'Right 1', 
              rightInfo: 'Info 1', 
              bgColor: 'rgb(120, 170, 220)', 
              subgroup: [ 
                { 
                  groupName: 'SubSubgroup 1', 
                  leftTitle: 'Left 1', 
                  leftInfo: 'Info 1', 
                  rightTitle: 'Right 1', 
                  rightInfo: 'Info 1', 
                  bgColor: 'rgb(120, 170, 220)',
                  subgroup: [
                    {
                      groupName: 'SubSubSubgroup 1',
                      leftTitle: 'Left 1',
                      leftInfo: 'Info 1',
                      rightTitle: 'Right 1',
                      rightInfo: 'Info 1',
                      bgColor: 'rgb(120, 170, 220)'
                    }
                  ]
                },
                { 
                  groupName: 'SubSubgroup 2', 
                  leftTitle: 'Left 2', 
                  leftInfo: 'Info 2', 
                  rightTitle: 'Right 2', 
                  rightInfo: 'Info 2', 
                  bgColor: 'rgb(90, 140, 190)' 
                }
              ] 
            },
            { 
              groupName: 'Subgroup 2', 
              leftTitle: 'Left 2', 
              leftInfo: 'Info 2', 
              rightTitle: 'Right 2', 
              rightInfo: 'Info 2', 
              bgColor: 'rgb(90, 140, 190)' 
            }
          ]"
        >
          <template v-slot:dynamic-content>
            <MappingBar />
          </template>
        </GlassCard>
      </div>
      <div class="w-fit p-4">
        <FlatCard
          groupName="FlatCard"
          leftTitle="Left Title"
          leftInfo="Left Info"
          rightTitle="Right Title"
          rightInfo="Right Info"
          bgColor="rgb(194,207,179)"
          :subgroup="[ 
            { 
              groupName: 'Subgroup 1', 
              leftTitle: 'Left 1', 
              leftInfo: 'Info 1', 
              rightTitle: 'Right 1', 
              rightInfo: 'Info 1', 
              bgColor: 'rgb(120, 170, 220)', 
              subgroup: [ 
                { 
                  groupName: 'SubSubgroup 1', 
                  leftTitle: 'Left 1', 
                  leftInfo: 'Info 1', 
                  rightTitle: 'Right 1', 
                  rightInfo: 'Info 1', 
                  bgColor: 'rgb(120, 170, 220)',
                  subgroup: [
                    {
                      groupName: 'SubSubSubgroup 1',
                      leftTitle: 'Left 1',
                      leftInfo: 'Info 1',
                      rightTitle: 'Right 1',
                      rightInfo: 'Info 1',
                      bgColor: 'rgb(120, 170, 220)'
                    }
                  ]
                },
                { 
                  groupName: 'SubSubgroup 2', 
                  leftTitle: 'Left 2', 
                  leftInfo: 'Info 2', 
                  rightTitle: 'Right 2', 
                  rightInfo: 'Info 2', 
                  bgColor: 'rgb(90, 140, 190)' 
                }
              ] 
            },
            { 
              groupName: 'Subgroup 2', 
              leftTitle: 'Left 2', 
              leftInfo: 'Info 2', 
              rightTitle: 'Right 2', 
              rightInfo: 'Info 2', 
              bgColor: 'rgb(90, 140, 190)' 
            }
          ]"
        >
          <template v-slot:dynamic-content>
            <MappingBar />
          </template>
        </FlatCard>
      </div>
      <div class="w-fit p-4">
        <NeoBrutCard
          groupName="NeoBrutalism"
          leftTitle="Left Title"
          leftInfo="Left Info"
          rightTitle="Right Title"
          rightInfo="Right Info"
          bgColor="rgb(194,207,179)"
          :subgroup="[ 
            { 
              groupName: 'Subgroup 1', 
              leftTitle: 'Left 1', 
              leftInfo: 'Info 1', 
              rightTitle: 'Right 1', 
              rightInfo: 'Info 1', 
              bgColor: 'rgb(120, 170, 220)', 
              subgroup: [ 
                { 
                  groupName: 'SubSubgroup 1', 
                  leftTitle: 'Left 1', 
                  leftInfo: 'Info 1', 
                  rightTitle: 'Right 1', 
                  rightInfo: 'Info 1', 
                  bgColor: 'rgb(120, 170, 220)',
                  subgroup: [
                    {
                      groupName: 'SubSubSubgroup 1',
                      leftTitle: 'Left 1',
                      leftInfo: 'Info 1',
                      rightTitle: 'Right 1',
                      rightInfo: 'Info 1',
                      bgColor: 'rgb(120, 170, 220)'
                    }
                  ]
                },
                { 
                  groupName: 'SubSubgroup 2', 
                  leftTitle: 'Left 2', 
                  leftInfo: 'Info 2', 
                  rightTitle: 'Right 2', 
                  rightInfo: 'Info 2', 
                  bgColor: 'rgb(90, 140, 190)' 
                }
              ] 
            },
            { 
              groupName: 'Subgroup 2', 
              leftTitle: 'Left 2', 
              leftInfo: 'Info 2', 
              rightTitle: 'Right 2', 
              rightInfo: 'Info 2', 
              bgColor: 'rgb(90, 140, 190)' 
            }
          ]"
        >
          <template v-slot:dynamic-content>
            <MappingBar class="z-0" />
          </template>
        </NeoBrutCard>
      </div>
    </div>
  </div>
</template>

<style>
.cards-container {
  /* Hide scrollbar for IE, Firefox, Chrome, Safari */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
  -webkit-overflow-scrolling: touch;
}
.cards-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>