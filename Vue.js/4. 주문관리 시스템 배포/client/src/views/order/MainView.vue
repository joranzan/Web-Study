<template>
    <div>
        <main class="main-container" >
            <div class="cafe-img" :style="`background-image: url('http://43.200.7.210:8080/public/cafe.jpg');`"></div>
            <div class="order-button-wrapper">
                <RouterLink :to="{name:'order-register'}">
                    <button type="button" class="w-100 order-button bg-warning btn btn-outline-dark">
                        주문하기
                    </button>
                </RouterLink>
            </div>

            <div class="order-button-wrapper">
                <RouterLink :to="{name:'orders'}">
                    <button type="button" class="w-100 order-button bg-dark text-light mt-3 btn btn-outline-dark">
                        전체 주문 목록 조회
                    </button>
                </RouterLink>                    
            </div>

            <div class="icon-wrapper">
                <span class="main-icon material-symbols-outlined">
                    local_cafe
                </span>
            </div>

        </main>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useCommonStore} from "@/stores/common";
import { RouterLink, useRouter } from "vue-router";
const common = useCommonStore();
const orderNum = ref("");
const router = useRouter();

common.changeTitle("My CAFE");



</script>

<style scoped>

.main-container{
    position: absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
}

.menu-button-wrapper,
.icon-wrapper{
    text-align: center;
    margin-top: 30px;
}
.main-icon{
    font-size : 80px;
}

.menu-button{
    min-width: 180px;
}

.cafe-img {
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 500px;
  margin-bottom: 50px;
}

</style>