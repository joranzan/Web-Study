<template>
    <div>
        <h2>FriedChicken</h2>
        <div>{{ titleProp }}</div>
        <div>{{ saltProp }}</div>
        <button @click="changeSalt">소금양 변경하기</button>
        <ChickenChild :titlePropaa="titleProp" :saltPropaa="saltProp"></ChickenChild>
    </div>
</template>

<script setup>

import ChickenChild from "../components/ChickenChild.vue";

const props = defineProps({
    titleProp : String,
    saltProp : Number
})

const emit = defineEmits(["myFirstEmit"]);

function changeSalt(){
    emit("myFirstEmit");
}

</script>

<style lang="scss" scoped>

</style>