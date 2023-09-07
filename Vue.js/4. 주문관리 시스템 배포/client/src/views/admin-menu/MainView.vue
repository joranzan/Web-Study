<template>
    <div>
        <main class="main-container">
            <div class="menu-button-wrapper">
                <RouterLink :to="{name:'menus-register'}">
                    <button type="button" class="menu-button btn btn-outline-dark">
                        메뉴 추가하기
                    </button>
                </RouterLink>
            </div>

            <div class="menu-button-wrapper">
                <RouterLink :to="{name:'menus'}">
                    <button type="button" class="menu-button btn btn-outline-dark">
                        우리 가게 메뉴 확인
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

import {useCommonStore} from "@/stores/common";
import { RouterLink } from "vue-router";
const common = useCommonStore();

// api/admin/home 가면 메뉴 목록으로 변경됨 

common.changeTitle("My CAFE 관리자");

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

</style>