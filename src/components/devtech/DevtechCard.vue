<template>
  <article class="dev-card">
    <img :src="item.image" :alt="item.title" class="dev-image" />
    <div class="dev-body">
      <strong>{{ item.title }}</strong>
      <span>{{ item.meta }}</span>
    </div>
  </article>
</template>
<script setup>
defineProps({ item: { type: Object, required: true } })
</script>
<style scoped>
.dev-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}
.dev-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #334155;
}
.dev-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}
.dev-body strong {
  color: #fff;
  font-size: 20px;
  line-height: 1.3;
}
.dev-body span {
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  line-height: 1.7;
}
</style>
