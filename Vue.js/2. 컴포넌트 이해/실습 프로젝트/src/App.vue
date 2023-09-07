<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

function moveBoard(){
  //해당 라우터로 이동
  //router.push({name:'board'});
  router.push('/board');
}

function moveBoardDetail(){
  router.push("/board/3");
  router.push({name:'detail', params:{
    id:3
  }});
}

</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'detail', params:{id:3}}">3번 게시판</RouterLink> |
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |



      <!-- v-bind 사용 -->
      <RouterLink :to="{name:'board'}">Board</RouterLink> |
      <button @click="moveBoard">게시판 이동</button> |

      <!-- bind해서 route를 전달해줌 -->
      <RouterLink :to="{name:'post'}">PostView</RouterLink>

    </nav>
  </header>
  <RouterView />
</template>


