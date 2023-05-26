<template>
  <ion-list>
    <memory-list-item  v-for="memory in memories" :key="memory.id" :memory="memory"></memory-list-item>
    </ion-list>
</template>

<script>
import { IonList} from "@ionic/vue";
import { defineComponent,ref} from "vue";
import MemoryListItem from "./MemoryListItem.vue";
import {useStore} from 'vuex'

export default defineComponent({
  components: {
    IonList,
    MemoryListItem
  },
  setup() {
    const memory = ref ()
    const memories = ref();

    const store = useStore()

    memories.value = store.getters.memories

    return {
      memories,
      memory
    };
  },
});

</script>

<style>

</style>