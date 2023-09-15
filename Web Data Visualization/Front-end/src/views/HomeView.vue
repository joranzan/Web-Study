<template>
  <div>
    <Form>
      
    </Form>
    <LineChart>

    </LineChart>


  </div>
</template>

<script setup>

import LineChart from "../components/LineChart.vue";
import Form from "../components/UserForm.vue";
import { useChartStore } from "../stores/chart";

const chartStore = useChartStore();

chartStore.makeChart();

</script>

<style lang="scss" scoped>

</style>