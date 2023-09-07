<template>
  <div>
    Board Detail
    <h1>{{ route.params.id }} 번 페이지</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

// useRouter  <- 페이지 이동등
// useRoute <- 라우터 정보를 가져올때 
const route = useRoute();
console.log(route);
console.log(route.params);

</script>

<style lang="scss" scoped>

</style>
