import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const title = ref("치킨은 맛있다")
  const salt = ref(30)

  return { title:title, salt:salt }
})
