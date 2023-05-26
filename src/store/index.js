import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/640px-Mt._Kilimanjaro_12.2006.JPG",
          title: "A trip into the mountains",
          description: "It was a really nice trip",
        },
        {
          id: "m2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/640px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg",
          title: "Surfing to the sea side",
          description: "It was a bad trip",
        },
        {
          id: "m3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Gretel_Eating_Newcomers.jpg/640px-Gretel_Eating_Newcomers.jpg",

          title: "A good eating",
          description: "It was not healty ifkwym",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description        
      }
      //Inserts new elements at the start of an array, and returns the new length of the array.
      state.memories.unshift(newMemory)
    },
  },
  actions: {
    addMemory(context,memoryData){
      context.commit('addMemory',memoryData)
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    //this getter returns a function
    memory(state) {
      return (memoryId) => {
        //returns state.memories.find, searching for a memory where the id is equal to the memory id
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
