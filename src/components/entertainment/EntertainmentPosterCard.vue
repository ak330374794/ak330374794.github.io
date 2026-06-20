<template>
  <article class="poster-card">
    <img :src="item.image" :alt="item.title" class="poster-image" />
    <div class="poster-body">
      <strong>{{ item.title }}</strong>
      <span>{{ item.meta || item.info || item.desc }}</span>
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
.poster-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.poster-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #1e293b;
}

.poster-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

.poster-body strong {
  color: #fff;
  font-size: 20px;
  line-height: 1.3;
}

.poster-body span {
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  line-height: 1.7;
}
</style>
