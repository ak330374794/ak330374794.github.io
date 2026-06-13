<template>
  <div ref="elementRef" class="stat-card">
    <div class="stat-value">{{ displayValue }}{{ stat.suffix || '' }}</div>
    <div class="stat-label">{{ stat.label }}</div>
  </div>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter'

const props = defineProps({
  stat: {
    type: Object,
    required: true,
  },
})

const { elementRef, displayValue } = useCounter(props.stat.value)
</script>
