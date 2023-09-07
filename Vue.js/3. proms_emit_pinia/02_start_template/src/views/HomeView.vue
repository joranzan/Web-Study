<template>
  <div>
    <h1>Home</h1>
    <div>{{ name }} </div>
    <div>{{ age }}</div>
    <button @click="changeAge">나이 바꾸기</button>

    <!-- props로 전달해줄 때 v-bind 값 -->
    <HomeChild :nameProp="name" :ageProp="age"/>

    <!-- emit으로 받아올때는 @emit이름="함수" -->
    <!-- <HomeChild @emitTest="changeFromAge" :nameProp="name" :ageProp="age"></HomeChild> -->

  </div>
</template>

<script setup>
//@는 src를 말함
import HomeChild from "@/components/HomeChild.vue";
import {ref} from "vue";

const name = ref("조한준");
const age = ref(26);

function changeAge(){
  age.value = 150;
}

function changeFromAge(number){
  console.log("자식으로부터 요청받음");
  age.value = number;
}
//120으로 바뀜

</script>

<style lang="scss" scoped>

</style>