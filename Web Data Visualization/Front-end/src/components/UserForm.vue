<template>
    <div>
        <h1>Form</h1>
        <div>시작일 <input type="date" v-model="startDate"></div>
        <div>종료일 <input type="date" v-model="endDate"></div>
        <select v-model="timeUnit">
            <option value="date">일간</option>
            <option value="week">주간</option>
            <option value="month">월간</option>
        </select>
        
        <div>
            <br>
            그룹명: <input type="text" v-model="userInputGroupName" />
            <button v-on:click="tempGroupAdd">추가</button>
            {{ tempGroupName }}
        </div>

        <div>
            키워드: <input type="text" v-model="userInputKeyword" />
            <button v-on:click="tempKeywordAdd">추가</button>
            {{ tempKeywords }}
        </div>

        <div>
            <br>
            <button v-on:click="makeGroup">그룹 확정</button>
        </div>  

        <div>
            <br>
            <div>사용자 입력: 그룹별 키워드</div>
            <br>
            <div v-if="keywordGroups.length">
            <div v-for="(keywordGroup, index) in keywordGroups" v-bind:key="index">
                <div>그룹 이름: {{ keywordGroup.groupName }}</div>
                <div>그룹 키워드: {{ keywordGroup.keywords }}</div>
                <br>
            </div>
            </div>
        </div>
        <div>
         <input type="submit" v-on:click="sendResultToApi" />
         <button v-on:click="deleteMyGroup">전체 삭제</button>
        </div>
    </div>
    
</template>

<script setup>

import {ref} from "vue";

import {dataLab} from '../utils/axios';
import { useChartStore } from "../stores/chart";

const chartStore = useChartStore();

const startDate = ref("");
const endDate = ref("");
const timeUnit = ref("month");
const keywordGroups = ref([]);
const userInputGroupName = ref("");
const userInputKeyword = ref("");
const tempGroupName = ref("");
const tempKeywords = ref([]);

const toApiData = ref({});

function tempGroupAdd() {
    if(userInputGroupName.value){
        tempGroupName.value = userInputGroupName.value;
        userInputGroupName.value="";
    }
    else{
        alert("빈 값입니다. 입력해주세요.")
    }
    
}

function tempKeywordAdd() {
    if(userInputKeyword.value){
        tempKeywords.value.push(userInputKeyword.value);
        userInputKeyword.value = "";
    }
    else{
        alert("빈 값입니다. 입력해주세요.")
    }
}
function makeGroup() {
    console.log(startDate.value);
    console.log(endDate.value);
    if(!startDate.value){
        alert("시작일을 선택해 주세요");
    }
    else if(!endDate.value){
        alert("종료일을 선택해 주세요");
    }
    else if(startDate.value>endDate.value){
        alert("유효하지 않은 날짜 값입니다.")
    }
    else{
        console.log(tempGroupName)
        keywordGroups.value.push({
            groupName: tempGroupName.value,
            keywords: tempKeywords.value,
        });

        tempGroupName.value = "";
        tempKeywords.value = [];
        userInputGroupName.value = "";
    }
}

async function sendResultToApi() {
            toApiData.value = {
                startDate: startDate.value,
                endDate: endDate.value,
                timeUnit: timeUnit.value,
                keywordGroups: keywordGroups.value,
            };
            console.log(toApiData.value);

            await dataLab.post(toApiData.value);
            chartStore.makeChart();
}

async function deleteMyGroup(){
        //await dataLab.delete();
        keywordGroups.value = [];
}

</script>

<style lang="scss" scoped>


</style>