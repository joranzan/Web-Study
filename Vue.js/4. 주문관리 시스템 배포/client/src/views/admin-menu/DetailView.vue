<template>
    <div class="card mb-2" v-if="data">
        <img class="card-img-top w-25" 
        :src="setImage()" 
        alt="menu">
        <div class="card-body">
            <h5
            class="card-title">{{ data.name }}
            </h5>
            <p
            class="card-text">{{ data.description }}
            </p>
            <button type="button" class="btn btn-primary"
            @click="moveRegister">수정하기
            </button>
            <button type="button"
            class="btn btn-danger"
            @click="deleteMenu">삭제
            </button>
            <button type="button" class="btn btn-outline-primary"
            @click="moveList">목록
            </button>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { api } from "@/utils/axios";
import { useCommonStore } from "../../stores/common";


const route = useRoute();
const router = useRouter();
const data = ref(null);
const common = useCommonStore();
//메뉴에 관한 데이터 받기
async function getMenu(){
    const result = await api.findOne(route.params.id);
    console.log(result.data);
    data.value = result.data;
    
};
getMenu();

function setImage(){
    console.log(data.value.image_src);
    return `${common.myDomain}/public/${data.value.image_src}`;
}

function moveRegister(){
    router.push({
        name: "menus-update",
        params: {id : route.params.id}
    });
}

async function deleteMenu(){
    const confirmResult = confirm("삭제하시겠습니까?");
    if(confirmResult){
        const result = await api.delete(route.params.id);
        alert(result.data.message);
        router.push({name: "menus"});
    }
}

function moveList(){
    router.push({name: "menus"});
}



</script>

<style lang="scss" scoped>

</style>