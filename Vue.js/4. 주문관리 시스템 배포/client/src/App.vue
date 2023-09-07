<script setup>
import {RouterView, RouterLink, useRouter} from "vue-router";
import {useCommonStore} from "../src/stores/common";

const common = useCommonStore();
common.changeTitle("MY CAFE");

</script>

<template>
  <div id="app">
    <header class="app-header">
      <h1>{{ common.title }}</h1>
    </header>
    <main class="app-main">
      
      <RouterView /> 
    </main>

    <footer class="app-footer">
      <div class="footer-text">All right reserved</div>
      <RouterLink :to="{name:'menus-home'}">관리자 페이지(메뉴)</RouterLink>
      <RouterLink :to="{name:'home'}">메인 페이지(주문)</RouterLink>
    </footer>

  </div>
</template>



<style scoped>
.app-header,
.app-footer {
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  text-align: center;
  height: 100px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display:flex;
  text-align: center;
  height: 80px;
}

.app-main {
  flex: 1;
}
</style>
