<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Todo List</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </header>
  <nav>

    </nav>
  <RouterView />
</template>


