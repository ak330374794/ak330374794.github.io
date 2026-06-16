<template>
  <nav class="section-nav" aria-label="项目分区导航">
    <a v-for="item in items" :key="item.href" class="section-link" :href="item.href">
      <span>{{ item.label }}</span>
      <small>{{ item.note }}</small>
    </a>
  </nav>
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
.section-nav {
  position: sticky;
  top: 88px;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.section-link {
  display: grid;
  gap: 6px;
  padding: 16px 18px;
  border: 1px solid rgba(23, 32, 51, 0.07);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 12px 24px rgba(17, 24, 39, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.section-link:hover {
  transform: translateY(-2px);
  border-color: rgba(24, 167, 135, 0.18);
  box-shadow: 0 16px 28px rgba(17, 24, 39, 0.08);
}

.section-link span {
  color: #172033;
  font-size: 14px;
  font-weight: 700;
}

.section-link small {
  color: #7b8590;
  font-size: 12px;
  line-height: 1.5;
}

@media (max-width: 960px) {
  .section-nav {
    position: static;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .section-nav {
    grid-template-columns: 1fr;
  }
}
</style>
