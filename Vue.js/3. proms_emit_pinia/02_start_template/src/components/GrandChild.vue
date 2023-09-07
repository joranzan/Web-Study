<template>
    <div>
        <h3>Grand Child</h3>
        <div>{{ nameP }}</div>
        {{ ageP }}
    </div>
</template>

<script setup>
const props = defineProps({
    nameP: String,
    ageP: Number
})
</script>

<style lang="scss" scoped>

</style>