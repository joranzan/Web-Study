<template>
  <div>
    <h1>Home</h1>
    <div>{{ title }}</div>
    <div>{{ salt }}</div>
    <FriedChicken @myFirstEmit="changeSalt" :titleProp="title" :saltProp="salt" />
  </div>
</template>

<script setup>
import FriedChicken from "../components/FriedChicken.vue";
import {ref} from "vue";

const title = ref("치킨은 맛있다");
const salt = ref(30);

function changeSalt(){
  console.log("자식으로부터 요청받음");
  salt.value = 20;
}

</script>

<style lang="scss" scoped>

</style>