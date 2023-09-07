<template>
    <div>
        <ul>
            <!-- key를 꼭 설정해야 error가 안남(중복 방지) -->
            <li v-for="menu in menus" :key="menu.id">
            {{ menu.name }}
        </li>
        </ul>

    </div>
</template>

<script setup>
import {ref} from "vue";

const menus = ref([
    {
        id:1,
        name:"짜장면"
    },
    {
        id:2,
        name:"짬뽕"
    },
    {
        id:3,
        name:"탕수육"
    }

])

</script>

<style lang="scss" scoped>

</style>