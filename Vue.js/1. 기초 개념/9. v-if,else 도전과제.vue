<template>
    <div>
        <h1>1 to 100</h1>
        <input v-model="num" type="number" placeholder="1 부터 100 사이 숫자를 입력하세요">
        <div v-if="num>100||num<1">1부터 100까지의 수가 아닙니다</div>
        <div v-else-if="num>Answer">Down</div>
        <div v-else-if="num<Answer">UP</div>
        <div v-else-if="num===Answer">정답</div>
        <div v-else></div>
  
    </div>
  </template>
  
  <script setup>
  import {ref} from "vue";
  
  const Answer = Math.floor(Math.random()*100)+1;
  const num = ref(null);
  
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>