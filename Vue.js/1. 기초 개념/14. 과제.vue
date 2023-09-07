<template>
    <div>
        <input v-model="userInput" type="text">
        <button @click="addList">할 일 추가</button>
    </div>
    <ul>
        <div v-for="todo in todoList">
            <li >{{ todo.list }}
            <button @click="abc(todo.id)">X</button>
            </li>
        </div>
    </ul>
    
  </template>
  
  <script setup>
  import {ref, computed} from "vue";
  
  let todoList = ref([
    {id:1, list: "밥먹기"},
    {id:2, list: "잠자기"},
    {id:3, list: "코딩하기"}
  ])
  const userInput = ref("");
  function addList(){
    if(!userInput.value) return;
    const newID = todoList.value[todoList.value.length-1].id-1;
    todoList.value.push({id:newID, list: userInput.value});
  }
  
  function abc(id){
      todoList =  computed(()=> {
          return todoList.value.filter(todo => todo.id!==id);
      })
  }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>