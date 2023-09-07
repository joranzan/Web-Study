<template>
    <div>
        <h1>BMI 계산기</h1>
        신장:
        <input v-model="userHeight" type="text"><br>
        체중:
        <input v-model="userWeight" type="text">
        <div v-if="BMI<18.5">저체중</div>
        <div v-else-if="BMI>=18.5&&BMI<23">정상</div>
        <div v-else-if="BMI>=23&&BMI<25">과체중</div>
        <div v-else-if="BMI>=25">비만</div>
        <div v-else>계산 불가</div>

    </div>
</template>

<script setup>
import {ref,computed} from "vue";

const userHeight = ref(0);
const userWeight = ref(0);

const BMI = computed(() =>{
    return 10000 * userWeight.value / (userHeight.value * userHeight.value);
})


</script>

<style lang="scss" scoped>

</style>