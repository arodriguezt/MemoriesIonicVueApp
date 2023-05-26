<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :atl="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{memory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
import { defineComponent, ref} from "vue";
export default defineComponent({
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  setup(_,{attrs}) {
    const memory = ref()
    memory.value = attrs.memory

    return{
        memory
    }
  },
});
</script>

<style></style>
