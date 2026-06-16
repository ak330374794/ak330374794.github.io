<template>
  <RouterLink class="product-card" :to="{ name: 'commerce-product', params: { slug: product.slug } }">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.summary }}</p>
      <div class="product-tags">
        <span v-for="tag in product.tags.slice(0, 2)" :key="tag">{{ tag }}</span>
      </div>
      <div class="product-price">
        <strong>¥{{ product.price }}</strong>
        <small v-if="product.originalPrice">¥{{ product.originalPrice }}</small>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.product-card {
  display: grid;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(34, 34, 34, 0.08);
}

.product-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  object-fit: cover;
  background: #f0f0f0;
}

.product-info h3 {
  color: #222;
  font-size: 16px;
  line-height: 1.5;
}

.product-info p {
  margin-top: 8px;
  color: #666;
  font-size: 12px;
  line-height: 1.7;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.product-tags span {
  padding: 4px 8px;
  border-radius: 2px;
  color: #df1f26;
  background: #fff1f0;
  font-size: 11px;
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 12px;
}

.product-price strong {
  color: #df1f26;
  font-size: 24px;
  line-height: 1;
}

.product-price small {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
}
</style>
