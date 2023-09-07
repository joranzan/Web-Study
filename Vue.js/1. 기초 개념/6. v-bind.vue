<template>
    <div>
        <button @click="setURLNaver"> 네이버 </button>
        <button @click="setURLGoogle"> 구글 </button>

    </div>
</template>

<script setup>

import {ref} from "vue";

const url = ref("");

function setURLNaver(){
    url.value = "https://www.naver.com";
}
    
function setURLGoogle(){
    url.value = "https://www.google.com";
}

</script>

<style lang="scss" scoped>

</style>