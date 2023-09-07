<template>
    <div>
        <header >
            <div>
            <h1 class="fw-bold text-center">ToDo List</h1>
            </div>
            <div class="w-100">
                <div>
            <input style="width: 600px;" v-model="todo" type="text" placeholder="할 일을 입력하세요">
            <button @click="addList">추가</button>
        </div>
            </div>
        </header>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useCounterStore} from "../stores/counter";

const todo = ref("");
const counter = useCounterStore();

function addList(){
    console.log("받음");
    console.log(todo.value)
    if(todo.value){
        counter.todoLists.push(todo.value);
    }
    todo.value = "";
}

</script>

<style lang="scss" scoped>

</style>