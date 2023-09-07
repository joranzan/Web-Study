<template>
    <div>
        <ul>
            <li v-for="article in articles" :key="article.id">
            
                <button @click="moveDetail(article.id)">{{ article.title }}</button> -->
            
                <RouterLink :to="{name:'postDetail', params:{
                    id: article.id
                }}">
                    {{ article.title }}
                </RouterLink>


            </li>
        </ul>
    </div>
</template>

<script setup>

import {ref} from "vue";
import {RouterLink, useRouter} from "vue-router";
import {useRoute} from "vue-router";
const route = useRoute();
console.log(route.name);

const articles = ref([
    {id:1, title: "즐거운 프론트엔드"},
    {id:2, title: "vue할만함?"},
    {id:3, title: "임베디드 화이팅"}
]);

const router = useRouter();
function moveDetail(id){
    console.log(id);
    router.push(`/post/${id}`);
}

</script>

<style lang="scss" scoped>

</style>