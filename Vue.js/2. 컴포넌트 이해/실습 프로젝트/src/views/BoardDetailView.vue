<template>
    <div>
        Board Detail
        <!-- route에서 받아올 수 있다 -->
        <h1>{{ route.params.id }}번 페이지</h1>

    </div>
</template>

<script setup>

import {useRoute} from "vue-router";

//useRouter : 페이지 이동 등 (API 이동)
//useRoute : 라우터 정보를 가져올 때
const route = useRoute();
console.log(route);
console.log(route.params.id);

</script>

<style lang="scss" scoped>

</style>