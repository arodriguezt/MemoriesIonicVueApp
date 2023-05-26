<template>
  <base-layout
    :pageTitle="value ? value.title : 'Loading...'"
    pageDefaultBackLink="/memories"
  >
    <h2 v-if="!value">Could not find this memory</h2>
    <memory-overview v-else :title="value.title" :image="value.image" :description="value.description"></memory-overview>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";
import { defineComponent, watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import MemoryOverview from "../components/memories/MemoryOverview.vue";

export default defineComponent({
  components: {
    IonImg,
    MemoryOverview
  },
  setup() {
    const memoryId = ref(null);

    const route = useRoute();

    const store = useStore();

    watch(
      () => route.params.id,
      () => {
        memoryId.value = route.params.id;
      },
      { immediate: true }
    );

    const { value } = computed(() => {
      return store.getters.memory(memoryId.value);
    });

    return {
      memoryId,

      value,
    };
  },
});
</script>

<style scoped></style>
