<template>
  <div class="container min-h-screen flex flex-col">
    <PageHeader />

    <div
      class="grid grid-cols-4 gap-[9px] pb-10"
      :class="{ 'flex-1': !isEmpty }"
    >
      <TaskColumn
        v-for="(colItems, keyname) of columns"
        :items="colItems"
        :key="keyname"
        :title="translate[keyname]"
        :colid="keyname"
        :payload="getPayload(keyname)"
        :compact="isEmpty"
        @action="reorderItems"
      />
    </div>

    <div v-if="isEmpty" class="text-cold-100 flex-1 flex items-center justify-center text-[19px]">
      <div class="text-center max-w-[432px]">
        There is no any task yet. Click “<b>Add Task</b>” button above to fill the board
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import TaskColumn from './components/TaskColumn.vue';

function generateItems(count, creator) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }

  return result
}

const translate = {
  todo: 'TO DO',
  in_progress: 'IN PROGRESS',
  test: 'TEST',
  done: 'DONE'
}

export default {
  data() {
    return {
      items: generateItems(30, i => {
        return {
          id: window.btoa(i),
          data: 'Lorem ipsum dolor sit amet conquest ' + i,
          col: Object.keys(translate)[Math.floor(Math.random() * 4)]
        }
      })
    }
  },
  computed: {
    translate() {
      return translate;
    },
    columns() {
      return Object.keys(translate).reduce((acc, key) => {
        if (!acc[key]) acc[key] = [];
        acc[key] = this.items.filter((item) => item.col === key)
        return acc;
      }, {})
    },
    isEmpty() {
      return this.items.length === 0
    }
  },
  methods: {
    reorderItems(payload) {
      const origin = this.items.find((item) => item.id === payload.item?.id)
      if (!origin) return

      const columnItem = this.columns[payload.colid][payload.index];  // Sırası değişecek task'ten sonra gelen task'i al
      let columnItemIndex = this.items.indexOf(columnItem); // Sonraki task'in index'ini  al
      const index = this.items.indexOf(origin); // Sırası değiştirilmek istenen task'in index'ini al

      origin.col = payload.colid; // Sırası değiştirilen task'in sütununu değiştir

      this.items.splice(index, 1); // Sırası değiştirilecek task'i sil
      this.items.splice(columnItemIndex, 0, origin); // Sırası değiştirilecek task'i yeni sırasına göre ekle
    },
    getPayload(colId) {
      return index => {
        return this.items.filter((item) => item.col === colId)[index]
      }
    }
  },
  components: {
    PageHeader,
    TaskColumn
  }
}
</script>
