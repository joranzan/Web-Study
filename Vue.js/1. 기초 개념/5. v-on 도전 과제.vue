<template>
    <div>
        <h1>로또 번호 생성기</h1>
        <!-- click 이벤트 발생 시 displayNum 함수 호출 -->
        <button @click = "displayNum">번호 생성</button>
        {{ lottoNums }}
    </div>
  </template>
  
  <script setup>
  
  import {ref} from "vue";
  
  //배열로 선언된 것이 아니라 reference로 선언된 거임
  const lottoNums = ref([]);
  
  function displayNum(){
    lottoNums.value = [];
    while(lottoNums.value.length<6){
      var num = Math.floor(Math.random() * 45) + 1;
      if(!lottoNums.value.includes(num)){
        lottoNums.value.push(num);
      }
    }
    lottoNums.value.sort((a,b)=>a-b);
  }
  
  
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>