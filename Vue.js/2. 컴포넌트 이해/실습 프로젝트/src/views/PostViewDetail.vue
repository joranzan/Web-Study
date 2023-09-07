<template>
    <div>
        {{ route.params.id }}번 게시글 입니다
        <button @click="goBack">뒤로가기</button>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";


const route = useRoute();
const router = useRouter();

function goBack(){
    //router.push('/post')
    router.push('/post');
}

</script>

<style lang="scss" scoped>

</style>