<!-- vbase-3-setup -->

<template>

    <div>
        {{ text }}
        <!-- v-on : 이벤트 명 = "이벤트함수" -->
        <button v-on:click="changeText">클릭</button>

        <!-- v-on @ 와 같다 -->
        <button @click="changeText">클릭</button>
    </div>
        
</template>

<script setup>
//import parameter from "vue"
//parameter.ref

import { ref } from "vue"

const text = ref("???");
function changeText(){
    console.log(text);
    //script에서 ref의 내용을 접근할 때는 .value로 접근해야 한다
    console.log(text.value);
    text.value = "짜잔";
}


</script>

<style lang="scss" scoped>

</style>