<template>
  <div style="width : 700px;">
  <div class="p-3">
    <myHeader />
    <myBody />
  </div>
  <button class="bg-primary text-light m-3">완료된 항목 숨기기</button>
</div>
</template>

<script setup>
import myHeader from "../components/header.vue";
import myBody from "../components/todoList.vue";
import {useCounterStore} from "../stores/counter";
</script>

<style lang="scss" scoped>



</style>