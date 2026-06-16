<template>
  <CommerceLayout>
    <div class="commerce-shell category-page">
      <section class="category-hero panel">
        <div>
          <span>{{ category.name }}</span>
          <h1>{{ category.description }}</h1>
        </div>
        <div class="hero-tags">
          <RouterLink v-for="item in commerceCategories" :key="item.slug" :to="{ name: 'commerce-category', params: { slug: item.slug } }">
            {{ item.name }}
          </RouterLink>
        </div>
      </section>

      <section class="product-layout">
        <div class="panel">
          <div class="panel-head">
            <h2>{{ category.name }}精选</h2>
            <span>{{ products.length }} 件商品</span>
          </div>
          <div class="product-grid">
            <CommerceProductCard v-for="item in products" :key="item.slug" :product="item" />
          </div>
        </div>

        <aside class="panel side-panel">
          <h2>频道权益</h2>
          <div class="benefit-list">
            <article>官方补贴 + 平台券自动叠加</article>
            <article>支持包邮、次日达和售后保障</article>
            <article>频道专题活动与榜单持续更新</article>
          </div>
        </aside>
      </section>
    </div>
  </CommerceLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import CommerceProductCard from '@/components/commerce/CommerceProductCard.vue'
import { commerceCategories, getCommerceCategory, getCommerceProductsByCategory } from '@/data/commerceSite'

const route = useRoute()
const category = computed(() => getCommerceCategory(route.params.slug))
const products = computed(() => getCommerceProductsByCategory(route.params.slug))
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.category-page {
  display: grid;
  gap: 18px;
}

.panel {
  padding: 20px;
  border-radius: 14px;
  background: #fff;
}

.category-hero span {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #df1f26;
  font-size: 11px;
  font-weight: 700;
}

.category-hero h1 {
  margin-top: 16px;
  color: #222;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.35;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.hero-tags a {
  padding: 8px 12px;
  border-radius: 2px;
  color: #555;
  background: #f7f7f7;
  font-size: 13px;
}

.hero-tags a.router-link-active {
  color: #fff;
  background: #df1f26;
}

.product-layout,
.product-grid {
  display: grid;
  gap: 16px;
}

.product-layout {
  grid-template-columns: 1fr 280px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.panel-head h2 {
  color: #222;
  font-size: 24px;
}

.panel-head span {
  color: #999;
  font-size: 12px;
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 16px;
}

.side-panel h2 {
  color: #222;
  font-size: 22px;
}

.benefit-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.benefit-list article {
  padding: 16px;
  border-radius: 8px;
  color: #666;
  background: #fafafa;
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .product-layout,
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
