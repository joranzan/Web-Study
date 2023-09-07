<template>
  <div>
      v-model <input type="text" v-model="message">
      <br>
      
      v-bind <input type="text" :value="message">
      <br>
      {{ message }}
  </div>
</template>

<script setup>

import {ref} from "vue";

const message = ref("");

</script>

<style lang="scss" scoped>

</style>