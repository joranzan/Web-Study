<template>
    <div v-if="data" class="d-flex justify-content-center h-100" >
        <div class="card w-50 mt-5" style="width: 18rem;">
            <div class="card-header text-center">
                <h2>주문번호 {{ data.id }} </h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="fw-bold list-group-item">주문음료: {{ data.name }}</li>
                <li class="fw-bold list-group-item">수량 : {{ data.quantity }}</li>
                <li class="fw-bold list-group-item">요청사항: {{ data.request_detail }}</li>
                <li class="d-flex justify-content-between list-group-item">
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
                </li>
                
            </ul>
            
        </div>

    </div>
    <div v-else>
        <h1 class="mt-5">주문 내역이 없습니다.</h1>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { api2 } from "@/utils/axios";
import {useCommonStore} from "@/stores/common";

const route = useRoute();
const router = useRouter();
const data = ref({});
const common = useCommonStore();

common.changeTitle("주문 상세조회");


//메뉴에 관한 데이터 받기
async function getOrder(){
    const result = await api2.findOne(route.params.id);
    console.log(result.data);
    data.value = result.data[0];
};



getOrder();

//수정하기
function moveRegister(){
    router.push({
        name: "order-update",
        params: {id : route.params.id}
    });
}




//삭제하기
async function deleteMenu(){
    const confirmResult = confirm("삭제하시겠습니까?");
    if(confirmResult){
        const result = await api2.delete(route.params.id);
        alert(result.data.message);
        router.push({name: "orders"});
    }
}

function moveList(){
    router.push({name: "orders"});
}



</script>

<style lang="scss" scoped>

</style>