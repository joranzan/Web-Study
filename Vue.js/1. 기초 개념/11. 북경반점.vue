<template>
    <div>
        <h1>북경반점</h1>
        <ul>
            <span v-for="menu in menus" :key="menu.id">
            <li v-if="menu.isPossible">
            {{ menu.name }} - {{ menu.price }}
            </li>
            </span>
        </ul>

    <!-- v-model은 양방향이므로 데이터가 변경되면 HTML도 변경됨 -->
    <div>
        <input v-model="input_name" type="text">메뉴이름<br>
        <input v-model="input_price" type="number">가격
    </div>
        
    <button @click="addList">추가</button>
  
    </div>
  </template>
  
  <script setup>
import {ref} from "vue";
  
const menus = ref([
    {id:1, name:"짜장면", price: 6000, isPossible:true},
    {id:2, name:"짬뽕", price: 7000, isPossible:true},
    {id:3, name:"탕수육", price: 18000, isPossible:false},
    {id:4, name:"군만두", price: 5000, isPossible:true}
  ])

const input_name = ref("");
const input_price = ref(0);

function addList(){
    
    if(!input_name.value||!input_price.value){
        alert("올바른 값을 입력해주세요");
        return;
    }

    const add_id = menus[menus.value.length-1].id + 1;
    menus.value.push(
        {   id: add_id, 
            name: input_name.value, 
            price: input_price.value, 
            isPossible:true}
            );        
  }
  
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>