

<!-- HTML 파트 -->
<template>
    <div>
        <!-- null undefined = 0 부정  -->
        <!-- 긍정 -->
        <div v-if="isActive">보입니다</div>
        <div v-else>안보입니다</div>
    </div>
</template>

<!-- JavaScript 파트 -->
<script setup>
import {ref} from "vue";

const isActive = ref(false);



</script>

<!-- CSS 파트 -->
<style lang="scss" scoped>

</style>