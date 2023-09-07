<template>
    <div>
        <RouterLink :to="{name: 'menus-register'}">
            <button type="button" class="order-button btn btn-outline-dark bg-warning w-100">
            메뉴를 등록하려면 여기를 누르세요.
            </button>

        </RouterLink>

        <ul>
            <li v-for="menu in menus"  :key="menu.id"
            @click="moveDetail(menu.id)">
                <div class="menu-container">
                    <div class="menu-image"
                    :style="`background-image: url(${setImage(menu.image_src)})`"
                    ></div>
                    <div class="menu-info-wrapper">
                        <h2 class="menu-name">{{ menu.name }}</h2>
                        <p class="menu-description">{{ menu.description }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {useCommonStore} from "@/stores/common";
import { api } from "@/utils/axios";
import {useRouter, RouterLink} from "vue-router"

const common = useCommonStore();
const menus = ref([]);
const router = useRouter();

async function getMenus(){
    const result = await api.findAll();
    console.log(result);
    menus.value = result.data;
}

function setImage(image_src){
    return `${common.myDomain}/public/${image_src}`;
}


// api/admin/menus 가면 메뉴 목록으로 변경됨 
common.changeTitle("메뉴 목록");
getMenus();

function moveDetail(id){
    //menu-detail 이동
    //router 이동 
    //router.push(`/admin/menus/${id}`)
    router.push({
        name: 'menus-detail',
        params:{
            id : id
        }
    });
}

</script>

<style scoped>
.menu-container {
  display: flex;
  align-items: center;
  border-bottom: 3px solid black;
}

.menu-info-wrapper {
  margin: 0 auto;
  text-align: center;
}

.menu-name {
  font-size: 25px;
  font-weight: bold;
}

.menu-description {
  padding-top: 10px;
}

.menu-image {
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 180px;
}
</style>