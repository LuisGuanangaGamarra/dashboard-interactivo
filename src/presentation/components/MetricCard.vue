<template>
  <div class="metrics-card bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col justify-between h-full">
    <h3 class="text-gray-600 text-sm">{{ title }}</h3>
    <p class="text-2xl font-semibold mt-2">{{ value }}</p>
    <p class="text-xs text-gray-400 mt-1">{{ subtitle }}</p>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  subtitle?: string
}>()
</script>