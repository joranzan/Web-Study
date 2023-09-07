<!-- vbase-3-setup -->

<template>

    <div>
        message : {{ message }}
        <input type="text" v-model="message">
    </div>
        
</template>

<script setup>
//import parameter from "vue"
//parameter.ref

import { ref } from "vue"

//ref reactive reference <-- 동적으로 변하는 무언가
const message = ref("Hello Vue");

</script>

<style lang="scss" scoped>

</style>