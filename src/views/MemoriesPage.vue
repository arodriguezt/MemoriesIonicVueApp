<template>
  <base-layout pageTitle="All memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list></memories-list>
  </base-layout>
</template>

<script>
import { defineComponent } from "vue";
import MemoriesList from "../components/memories/MemoriesList.vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

export default defineComponent({
  components: {
    MemoriesList,IonButton,IonIcon
  },
  setup() {
    return {
      add,
    };
  },
});
</script>

<style scoped></style>
