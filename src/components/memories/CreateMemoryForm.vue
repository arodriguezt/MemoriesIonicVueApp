<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating" id="title">Title</ion-label>
        <ion-input
          type="text"
          required
          v-model="enteredTitle"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="enteredImageUrl" alt="">
        </ion-thumbnail>
        <ion-button fill="clear" @click="takePhoto" type="button">
          <ion-icon :icon="camera" slot="start"></ion-icon>
          Take photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea
          rows="5"
          required
          v-model="enteredDescription"
        ></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button expand="block" type="submit">Save</ion-button>
  </form>
</template>

<script>
import { Camera, CameraResultType,CameraSource } from "@capacitor/camera";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { ref,watch } from "vue";
import {camera} from 'ionicons/icons'
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,

    Camera,
    CameraResultType,
    CameraSource
  },
  setup(_, context) {
    const enteredTitle = ref();
    const enteredImageUrl = ref();
    const enteredDescription = ref();

    const takePhoto = async () =>{
      const image = await Camera.getPhoto({
        quality:60,
        allowEditing:true,
        resultType: CameraResultType.Uri,
        source:CameraSource.Camera
      })   
      enteredImageUrl.value = image.webPath   
    }
    const memoryData = ref({
      title: enteredTitle.value,
      imageUrl: enteredImageUrl.value,
      description: enteredDescription.value,
    });

    watch([enteredTitle, enteredImageUrl, enteredDescription], ([title, imageUrl, description]) => {
      memoryData.value = { title, imageUrl, description };
    });
    
    const submitForm = () => {
      context.emit("save-memory", memoryData);
    };


    return {
      memoryData,
      enteredImageUrl,
      enteredTitle,
      enteredDescription,
      camera,


      takePhoto,
      submitForm,
    };
  },
};
</script>

<style></style>
