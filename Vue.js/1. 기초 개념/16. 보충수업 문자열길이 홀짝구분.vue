<template>
    <div>
      <h2>동적 리스트 생성하기</h2>
      <input v-model="newItem" @keyup.enter="addItem" placeholder="새로운 항목 추가">
      <div v-for="(item, index) in oddItems" :key="index" class="odd-item">{{ item }}</div>
      <div v-for="(item, index) in evenItems" :key="index" class="even-item">{{ item }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  
  const newItem = ref('');
  const items = ref([]);
  
  const oddItems = computed(() => {
    return items.value.filter(item => item.length % 2 !== 0);
  });
  
  const evenItems = computed(() => {
    return items.value.filter(item => item.length % 2 === 0);
  });
  
  const addItem = () => {
    if(newItem.value.trim() !== ''){
      items.value.push(newItem.value);
      newItem.value = '';
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