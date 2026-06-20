<template>
  <article class="service-card">
    <img :src="item.image" :alt="item.title" class="service-image" />
    <div class="service-body">
      <strong>{{ item.title }}</strong>
      <span>{{ item.meta }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.service-card {
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.service-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #fed7aa;
}

.service-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

.service-body strong {
  color: #0f172a;
  font-size: 20px;
  line-height: 1.3;
}

.service-body span {
  color: #64748b;
  font-size: 12px;
  line-height: 1.7;
}
</style>
