<template>
    <div>

        <ul>
            <li v-for="order in orders" :key="order.id"
            @click="moveDetail(order.id)">
                <div class="menu-container">
                    <div class="menu-image" :style="`background-image: url(${setImage(order.image_src)});`"
                    ></div>
                    <div class="menu-info-wrapper">
                        <h2 class="menu-name">주문번호 {{ order.id }}번</h2>
                            <h3>주문음료: {{ order.name }}</h3>
                            <h4>수량: {{ order.quantity }}</h4>
                        
                        <span class="menu-description">요청사항 : {{ order.request_detail }}</span>
                    </div>
                </div>
            </li>
        </ul>


    </div>
</template>

<script setup>

import { ref } from "vue";
import {useCommonStore} from "@/stores/common";
import { api2,api } from "@/utils/axios";
import {useRouter, RouterLink} from "vue-router"

const common = useCommonStore();
const orders = ref([]);
const router = useRouter();
const menus = ref({});

async function getOrders(){
    const result = await api2.findAll();
    //console.log(result);
    orders.value = result.data;
    console.log(orders.value);
}
getOrders();
common.changeTitle("전체 주문 목록");

function moveDetail(id){
    //menu-detail 이동
    //router 이동 
    //router.push(`/admin/menus/${id}`)
    router.push({
        name: 'order-detail',
        params:{
            id : id
        }
    });
}

function setImage(image_src){
    return `${common.myDomain}/public/${image_src}`;
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