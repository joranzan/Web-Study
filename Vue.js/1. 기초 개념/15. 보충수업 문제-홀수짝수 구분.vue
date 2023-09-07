<template>
    <div>
      <h2>동적 리스트 생성하기</h2>
      <input v-model="newItem" @keyup.enter="addItem" placeholder="새로운 항목 추가">
      <div v-for="(item, idx) in oddItems" :key="idx" class="odd-item">{{ item }}</div>
      <div v-for="(item, idx) in evenItems" :key="idx" class="even-item">{{ item }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  
  const newItem = ref('');
  const items = ref([]);
  
  //여기 어떻게 해야하지??
  const oddItems = computed(() => {
    return items.value.filter(item => item.number%2===1);  
  });
  //여기 어떻게 해야하지??
  const evenItems = computed(() => {
    return items.value.filter(item => item.number%2===0);  
  });
  
  const addItem = () => {
    if(!newItem.value) return;
    if(items.value.length===0){
        items.value.push({id:0, number: newItem.value});
    }
    else{
        const newID = items.value[items.value.length-1].id + 1;
        items.value.push({id:newID, number: newItem.value});
    }
    
  };
  </script>
  
  <style>
    .odd-item {
      background-color: blue;
      color: white;
      margin: 5px;
      padding: 5px;
    }
    .even-item {
      background-color: yellow;
      margin: 5px;
      padding: 5px;
    }
  </style>