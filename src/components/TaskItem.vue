<template>
  <Draggable
    class="p-2.5 rounded-3 bg-white hover:bg-gray-100 text-cold-100 font-medium shadow-md mb-2.5 last:mb-0"
  >
    {{ item.data }}
  </Draggable>
</template>

<script>
import { Draggable } from 'vue3-smooth-dnd';

export default {
  props: {
    item: { type: Object, default: () => ({}) }
  },
  components: {
    Draggable
  }
}
</script>
