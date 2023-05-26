
<template v-if="memory">
  <ion-img :src="memory.image" :alt="memory.title"></ion-img>
  <h2 class="ion-text-center">{{memory.title}}</h2>
  <p class="ion-text-center">{{memory.description}}</p>
</template>

<script>
import { IonImg } from '@ionic/vue';
import {ref} from "vue";
export default {
    components:{
        IonImg
    },
    setup(_,{attrs}){
        const memory = ref()
        memory.value = attrs

        return{
            memory
        }
    }

}
</script>

<style>

</style>