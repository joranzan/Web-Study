<template>
    <div>
        <h2>FriedChicken</h2>
        <div>{{ chicken.title }}</div>
        <div>{{ chicken.salt }}</div>
        <button @click="changeSalt">소금양 변경하기</button>
        <ChickenChild />
    </div>
</template>

<script setup>

import ChickenChild from "../components/ChickenChild.vue";
import {useCounterStore} from "../stores/counter";

const chicken = useCounterStore();

function changeSalt(){
    chicken.salt += 20;
}

</script>

<style lang="scss" scoped>

</style>