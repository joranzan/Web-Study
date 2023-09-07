<template>
  <div>
    <h1>Home</h1>
    <div>{{ chicken.title }}</div>
    <div>{{ chicken.salt }}</div>
    <FriedChicken />
  </div>
</template>

<script setup>
import FriedChicken from "../components/FriedChicken.vue";
import {useCounterStore} from "../stores/counter";

const chicken = useCounterStore();


//counter.js 수정 후
//컴포넌트 어디던 그냥 불러오면 다 데이터 변경 가능

</script>

<style lang="scss" scoped>

</style>

