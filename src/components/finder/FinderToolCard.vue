<template>
  <article class="tool-card" :style="{ '--tool-accent': tool.accent }">
    <span class="tool-category">{{ tool.category }}</span>
    <h3>{{ tool.title }}</h3>
    <p>{{ tool.description }}</p>
    <strong>{{ tool.users }}</strong>
  </article>
</template>

<script setup>
defineProps({
  tool: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.tool-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 188px;
  padding: 20px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  background: linear-gradient(180deg, #fff, color-mix(in srgb, var(--tool-accent) 7%, white));
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.tool-category {
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  color: var(--tool-accent);
  background: color-mix(in srgb, var(--tool-accent) 10%, white);
  font-size: 11px;
  font-weight: 700;
}

.tool-card h3,
.tool-card strong {
  color: #0f172a;
}

.tool-card h3 {
  font-size: 24px;
  line-height: 1.2;
}

.tool-card p {
  color: #64748b;
  font-size: 13px;
  line-height: 1.8;
}

.tool-card strong {
  margin-top: auto;
  font-size: 14px;
}
</style>
