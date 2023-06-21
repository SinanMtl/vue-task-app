<template>
  <header class="flex py-[30px]">
    <div class="flex-1">
      <h1>My Board</h1>
      <p class="text-cold-100">Lorem ipsum dolor sit amet conquest</p>
    </div>

    <div>
      <Btn class="mr-2">Add Task</Btn>
      <Btn disabled>Finish Board</Btn>
    </div>
  </header>
</template>

<script>
import Btn from './BtnComp.vue';

export default {
  components: {
    Btn
  }
}
</script>
