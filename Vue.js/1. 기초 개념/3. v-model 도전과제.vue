<!-- vbase-3-setup -->

<template>
    <h1>회원가입</h1>
    <div>
        <div>
            <input placeholder="아이디" type="text" v-model="message_ID">
             {{ message_ID }}
        </div>
        <div>
            <input placeholder="비밀번호" type="password" v-model="message_PW">
            {{ message_PW }}
        </div>
        <div>
            <h3>동의 여부</h3>
          <input type="checkbox" v-model="state">
          {{ state }}
        </div>
        <br>
        <div>
            <h3>선호하는 색상</h3>
          <input type="radio" v-model="color" value="red">빨강
          <input type="radio" v-model="color" value="blue">파랑
          <div>
            선택된 색상 : {{ color }}
          </div>
        </div>
        <br>
  
        <div>
          <h3>직업</h3>
          <select id="select1" v-model="job">
                   <option value="student">학생</option> 
                   <option value="officer">사무직</option>
                   <option value="educator">교육직</option>
          </select>
          <div>
            선택된 직업 : {{ job }}
          </div>
          
        </div>
  
  
    </div>
        
  </template>
  
  <script setup>
  //import parameter from "vue"
  //parameter.ref
  
  import { ref } from "vue"
  
  //ref reactive reference <-- 동적으로 변하는 무언가
  
  //v-model 변수를 초기화 해줘야한다
  //User ID
  const message_ID = ref("");
  //User PW
  const message_PW = ref("");
  //동의 여부
  const state = ref("false");
  //User Color
  const color = ref("");
  //User 직업
  const job = ref("");
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>