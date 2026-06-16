<template>
  <div class="timeline-list">
    <article v-for="item in items" :key="item.phase" class="timeline-card">
      <span class="timeline-phase">{{ item.phase }}</span>
      <h3>{{ item.deliverable }}</h3>
      <p>{{ item.acceptance }}</p>
      <small>{{ item.period }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.timeline-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.timeline-card {
  position: relative;
  padding: 22px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 16px 34px rgba(17, 24, 39, 0.04);
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 22px;
  width: 48px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #18a787, #41d9b0);
}

.timeline-phase {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #18a787;
  background: rgba(24, 167, 135, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.timeline-card h3 {
  margin-top: 14px;
  color: #172033;
  font-size: 20px;
  line-height: 1.4;
}

.timeline-card p {
  margin-top: 10px;
  color: #67717d;
  font-size: 14px;
  line-height: 1.8;
}

.timeline-card small {
  display: inline-block;
  margin-top: 14px;
  color: #18a787;
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 960px) {
  .timeline-list {
    grid-template-columns: 1fr;
  }
}
</style>
