<template>
  <base-layout page-title="Add a Memory" pageDefaultBackLink="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';
export default {
  components: {
    CreateMemoryForm
  },
  setup(){
    const router = useRouter()
    const store = useStore()
    const saveMemory = (memoryData) =>{
      store.dispatch('addMemory',memoryData.value)
      console.log(memoryData.value);
      router.replace('/memories')
    }
    return{
      saveMemory

    }
  }
};
</script>

<style></style>
