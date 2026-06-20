<template>
  <article class="med-card">
    <img :src="item.image" :alt="item.title" class="med-image" />
    <div class="med-body">
      <strong>{{ item.title }}</strong>
      <span>{{ item.meta }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({ item: { type: Object, required: true } })
</script>

<style scoped>
.med-card {
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}
.med-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #99f6e4;
}
.med-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}
.med-body strong {
  color: #0f172a;
  font-size: 20px;
  line-height: 1.3;
}
.med-body span {
  color: #64748b;
  font-size: 12px;
  line-height: 1.7;
}
</style>
