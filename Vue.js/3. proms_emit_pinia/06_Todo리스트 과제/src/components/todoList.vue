<template>
    <div>        
        <ul class="d-flex flex-column align-items-start p-1" style="list-style:none;" >
            <div class="mt-1" v-if="todoList.length===0">할 일이 없습니다.</div>
            <li class="d-flex mt-1" v-for="(todo ,idx) in todoList" :key="idx" >
            <input class="form-check-input me-3" type="checkbox"> {{todo}}
            <div class="ms-5 d-flex justify-content-end"><button  class="ms-1">X</button></div>
            </li>
            
        </ul>
    </div>
</template>

<script setup>
import {useCounterStore} from "../stores/counter";

const counter = useCounterStore();
const todoList = counter.todoLists;


</script>

<style lang="scss" scoped>

</style>