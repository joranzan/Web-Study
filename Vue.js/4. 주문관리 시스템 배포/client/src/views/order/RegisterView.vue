<template>
    <div>
        <h1>주문하기</h1>
        <ul>
            <li v-for="menu in menus" :key="menu.id"
            >
                <div class="menu-container">
                    <div class="menu-image"
                    :style="`background-image: url(${setImage(menu.image_src)})`"
                    ></div>
                    <div class="menu-info-wrapper">
                        <h2 class="menu-name">{{ menu.name }}</h2>
                        <p class="menu-description">{{ menu.description }}</p>
                        
                        <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            주문하기
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">주문하기</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    
                                    <h2>수량</h2>
                                    <input class="fw-bold h-3 text-center" v-model="quantity" type="number" placeholder="0">
                                    <div class="mb-3">
                                        <h2>
                                        <label for="message-text" class="col-form-label">요청사항:</label></h2>
                                        <textarea v-model="request_detail" class="form-control" id="message-text"></textarea>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                    <button @click="orderCreate(menu.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">주문</button>
                                </div>
                                </div>
                            </div>
                            </div>                            
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import {ref, computed} from "vue";
import {useCommonStore} from '@/stores/common';
import {useRoute, useRouter} from "vue-router";
import {api2} from "@/utils/axios";
import { api } from "@/utils/axios";

const menus = ref([]);
const name = ref("");
const description = ref("");
const common = useCommonStore();
const route = useRoute();
const router = useRouter();


const quantity = ref(0);
const request_detail = ref("");
const previousMenu = ref(0);

//메뉴 목록 보여주는 부분
async function getMenus(){
    const result = await api.findAll();
    console.log(result.data);
    menus.value = result.data;
}
getMenus();
function setImage(image_src){
    return `${common.myDomain}/public/${image_src}`;
}
//메뉴 목록 끝


//메뉴 수정 파트
//업데이트인지 추가인지 구분해주는 부분


if(route.params.id){
    common.changeTitle("주문 다시하기")
    //해당 id로 api 호출
    
}
else{
    common.changeTitle("메뉴 목록")
}


//주문 추가하는 함수
async function orderCreate(menu_id){
    
    if(!route.params.id){
      const result = await api2.create(
        quantity.value,
        request_detail.value, 
        menu_id
    );
    //요청 성공
    if(result.data.success){
        alert(result.data.message);
    }

    //요청 실패
    if(!result.data.success){
        alert(result.data.message);
    }
    }

    else{
      console.log(route.params.id);
      console.log(menu_id);
      const result = await api2.update(
        route.params.id,
        quantity.value,
        request_detail.value,
        menu_id,
      );
      if(result.data.success){
        alert(result.data.message);
        router.push({
          name: "order-detail",
          params:{ id: route.params.id}
        });
    }

    //요청 실패
    if(!result.data.success){
        alert(result.data.message);
    }
    }
    
}

//name과 description 업데이트 함수
async function orderUpdate() {
  const result = await api2.update(
    route.params.id,
    name.value,
    description.value
  );
  console.log(result);
  alert(result.data.message);
  router.push({
    name: "order-detail",
    params: {id: route.params.id}, 
  });
}




//주문 완료하면 Main 페이지로 돌아가기
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



<!-- modal
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



 -->