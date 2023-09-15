<script setup>
import { Line } from "vue-chartjs";
import { ref } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { useChartStore } from "@/stores/chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//chart reference 홈페이지 : https://vue-chartjs.org/examples/

const chartStore = useChartStore();

const chartOptions = ref({
  responsive: true,   //기본설정 true (정적/동적 크기변경하려면 false로 변경해야함)
});



</script>

<template>
  
  <br>
  <h1>기간 내 검색 횟수 비율 차트</h1>
  <br>
  <Line id="my-chart-id" style="width:62vw" :options="chartOptions" :data="chartStore.chartData"> </Line>
</template>


<style lang="css" scoped>
</style>