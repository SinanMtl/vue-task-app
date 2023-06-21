<template>
  <div class="flex flex-col">
    <div class="rounded-t-3 text-cold-100 leading-[19px] font-semibold bg-gray-50 px-3.5 py-[23px] sticky top-0 z-20">
      {{ title }} {{ items.length }}
    </div>
    
    <Container
      v-if="!compact"
      class="bg-gray-50 rounded-b-3 flex-1 pb-3.5 px-3.5"
      group-name="col-items"
      :get-child-payload="payload"
      @drop="onTaskDrop"
    >
      <TaskItem
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </Container>
  </div>
</template>

<script>
import { Container } from 'vue3-smooth-dnd';
import TaskItem from './TaskItem.vue';

export default {
  props: {
    title: { type: String, default: 'TO DO' },
    items: { type: Array, default: () => [] },
    colid: { type: String, default: 'todo' },
    payload: { type: Function, default: () => {} },
    compact: { type: Boolean, default: false }
  },
  emits: ['action'],
  methods: {
    onTaskDrop(dropResult) {
      const { addedIndex, payload } = dropResult;

      if (addedIndex !== null && addedIndex >= 0) {
        this.$emit('action', {
          action: 'add',
          index: addedIndex,
          colid: this.colid,
          item: payload
        })
      }
    }
  },
  components: {
    TaskItem,
    Container
  }
}
</script>
