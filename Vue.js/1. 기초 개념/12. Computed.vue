<template>
    <div>

        <div v-for="menu in filteredMenus" :key="menu.id">
        {{ menu.name }} - {{ menu.price }}
        </div>

    </div>
</template>

<script setup>
import {ref, computed} from "vue";
  
  const menus = ref([
      {id:1, name:"짜장면", price: 6000, isPossible:true},
      {id:2, name:"짬뽕", price: 7000, isPossible:true},
      {id:3, name:"탕수육", price: 18000, isPossible:false},
      {id:4, name:"군만두", price: 5000, isPossible:true}
    ])

    //가격이 6000원 이상이면서 menu가 isPossible 인것

    //computed <- 계산된 속성 (캐싱 O) ref의 값을 바꾸면 X

    const filteredMenus = computed(() => {
  return menus.value.filter(menu => menu.price >=6000& menu.isPossible);
})

</script>

<style lang="scss" scoped>

</style>