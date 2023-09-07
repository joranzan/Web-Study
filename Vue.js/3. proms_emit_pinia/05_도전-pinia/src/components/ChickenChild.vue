<template>
    <div>
        <h3>ChickenChild</h3>
        <div>{{ chicken.title }}</div>
        <div>{{ chicken.salt }}</div>
        
    </div>
</template>

<script setup>
//console.log(titleProp);
import {useCounterStore} from "../stores/counter";

const chicken = useCounterStore();





</script>

<style lang="scss" scoped>

</style>