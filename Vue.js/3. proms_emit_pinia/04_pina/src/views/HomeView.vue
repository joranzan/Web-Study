<template>
  <div>
    <!-- {{ counter.count }}
    {{ counter.doubleCount }} -->
  

    <button @click="counter.increment">click</button>
  </div>
</template>

<script setup>

import {useCounterStore} from "@/stores/counter";
import {useChickenStore} from "@/stores/chicken";

const counter = useCounterStore();
const chicken = useChickenStore();
console.log(chicken.drumstick);

//value가 아니다!
//chicken.drumstick = chicken.drumstick - 1;

</script>

<style lang="scss" scoped>

</style>