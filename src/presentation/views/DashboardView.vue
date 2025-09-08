<template>
  <template v-if="!loading">
    <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
          v-for="metric in metrics"
          :title="metric.title"
          :value="metric.value.isMoney ? formatCurrency(metric.value.number) : metric.value.number"
          :subtitle="metric.subtitle"
      />
    </div>
  </template>
  <template v-if="loading">
    <div class="p-6">
      <p>Cargando...</p>
    </div>
  </template>
  <div class="p-6">
    <SalesChart />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MetricCard from '@/presentation/components/MetricCard.vue'
import SalesChart from '@/presentation/components/SalesChart.vue'
import { MetricRepositoryImpl } from '@/infrastructure/repositories/MetricRepositoryImpl.ts'
import type {Metric} from "@/domain/entities/Metric.ts";

const metrics = ref<Metric[]>([])
const loading = ref(true)
const metricRepository = new MetricRepositoryImpl()

onMounted(async () => {
  metrics.value = await metricRepository.getMetrics()
  loading.value = false
})

const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
</script>