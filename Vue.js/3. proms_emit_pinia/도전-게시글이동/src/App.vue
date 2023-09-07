<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

function moveBoard() {
  //해당 라우터로 이동 
  router.push({name:'board'})
  // router.push('/board')
}

function moveBoarDetail() {
  router.push("/board/3")

  // router.push({
  //   name: 'detail', params: {
  //     id: 3
  //   }
  // });
}

</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name:'detail', params:{
        id:3
      }}">3번게시판</RouterLink> |
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    
      <!-- v-bind -->
      <RouterLink :to="{name : 'board'}"> Board</RouterLink>
      <button @click="moveBoard">게시판 이동</button>
      |

      <RouterLink :to="{name : 'post'}"> Post </RouterLink>

    </nav>
  </header>
  <RouterView />
</template>


