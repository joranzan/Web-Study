<template>
    <div>
        <h2>Home Child</h2>
        <div>{{ nameProp }}</div>
        <div>{{ ageProp }}</div>
        <button @click="changeAge">나이 줄이기</button>

        <GrandChild :nameP="nameProp" :ageP="ageProp"/>

    </div>
</template>

<script setup>
import GrandChild from "@/components/GrandChild.vue";

//props는 import 필요없음
//부모에서 자식으로 줄 때는 v-bind로 보내고
//자식에서 받을 때는 defineProps로 받는다
const props = defineProps({
    nameProp : String,
    ageProp : Number
})

//자식에서는 데이터 변경 안됨 -> 오로지 부모의 데이터를 참조!
//read Only라는 경고창 뜨면서 변경 안됨

// function changeAge(){
//     props.ageProp = 200;
// }

//데이터는 흐름이므로
//데이터의 방향이 일관성을 유지
//HomeView -> HomeChild -> GrandChild  
//(HomeChild에서 HomeView의 데이터인 prop을 변경히려니까 안되는거임!)


////////////emit
const emit = defineEmits(["emitTest"]);

function changeAge(){
    //부모 homeView에 emit으로
    // emit("define한 emit 명", 인자)
    emit("emitTest", 120);
}


</script>

<style lang="scss" scoped>

</style>