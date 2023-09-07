<template>
    <div>
        <h3>ChickenChild</h3>
        <div>{{ titlePropaa }}</div>
        <div>{{ saltPropaa }}</div>
        
    </div>
</template>

<script setup>
//console.log(titleProp);
const props = defineProps({
    titlePropaa : String,
    saltPropaa : Number
})



</script>

<style lang="scss" scoped>

</style>