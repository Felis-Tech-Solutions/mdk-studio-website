<template>
  <div class="h-96 w-full md:px-32 lg:px-0 lg:w-[347px]">
    <div class="flex items-center justify-center">
      <component :is="getIconComponent(roadmapComponent.icon)" class="h-40"/>
    </div>
    <div class="flex justify-center mt-2">
      <span class="font-bold text-[20px] w-56 flex justify-center text-center h-14">
        {{ roadmapComponent.title }}
      </span>
    </div>
    <div class="mt-2">
      <span class="text-sm break-words leading-7">
        {{ roadmapComponent.description }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import MeetingIcon from "~/icons/MeetingIcon.vue";
import MeetingWIthLaptopIcon from "~/icons/MeetingWIthLaptopIcon.vue";
import WomanByHouseIcon from "~/icons/WomanByHouseIcon.vue";
import PersonWithCheckIcon from "~/icons/PersonWithCheckIcon.vue";

defineProps({
  roadmapComponent: {
    type: String,
    required: true
  },
})

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'MeetingIcon': return MeetingIcon;
    case 'MeetingWIthLaptopIcon': return MeetingWIthLaptopIcon;
    case 'WomanByHouseIcon': return WomanByHouseIcon;
    case 'PersonWithCheckIcon': return PersonWithCheckIcon;
    default:
      return null;
  }
}
</script>