<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
    <h3 class="text-lg font-bold mb-4">Ventas por mes</h3>
    <div class="h-72">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>


<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
import { Line } from 'vue-chartjs'


ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)


const chartData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Ventas',
      data: [1500, 3200, 2800, 3500, 4000, 4600],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
    },
  ],
}


const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>