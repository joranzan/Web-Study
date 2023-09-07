<template>
    <div>
        v-model <input v-model="message">
        <br>
        
        v-bind <input v-bind="message">
        <br>
        {{ message }}
    </div>
</template>

<script setup>

import {ref} from "vue";

const message = ref("글자를 지워보자");

</script>

<style lang="scss" scoped>

</style>