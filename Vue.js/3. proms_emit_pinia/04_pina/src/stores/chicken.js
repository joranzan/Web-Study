import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChickenStore = defineStore('chicken', () => {
  const drumstick = ref(2);

  function decrement() {
    drumstick.value--;
  }

  return { drumstick:drumstick , decrement:decrement }
})
