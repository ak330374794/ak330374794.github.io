<template>
  <CommerceLayout>
    <div v-if="product" class="commerce-shell product-page">
      <section class="panel product-main">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-copy">
          <div class="product-meta">
            <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
          </div>
          <h1>{{ product.title }}</h1>
          <p>{{ product.summary }}</p>
          <div class="price-wrap">
            <strong>¥{{ product.price }}</strong>
            <small v-if="product.originalPrice">¥{{ product.originalPrice }}</small>
          </div>
          <div class="benefit-strip">
            <span>满 300 减 50</span>
            <span>PLUS 会员再减 20</span>
            <span>12 期免息</span>
          </div>
          <div class="option-block">
            <strong>规格</strong>
            <div class="option-list">
              <button v-for="item in skuOptions" :key="item" type="button" class="option-chip">{{ item }}</button>
            </div>
          </div>
          <div class="option-block">
            <strong>配送</strong>
            <div class="delivery-card">
              <span>北京 朝阳区</span>
              <p>现货，预计今日下单次日达，支持送货上门与运费险。</p>
            </div>
          </div>
          <div class="service-list">
            <article>品牌保障</article>
            <article>极速发货</article>
            <article>7 天无理由</article>
            <article>企业采购支持</article>
          </div>
          <div class="cta-row">
            <RouterLink class="cta-primary" to="/commerce/cart.html">加入购物车</RouterLink>
            <RouterLink class="cta-buy" to="/commerce/checkout.html">立即购买</RouterLink>
            <RouterLink class="cta-secondary" :to="{ name: 'commerce-category', params: { slug: product.category } }">返回频道</RouterLink>
          </div>
        </div>
      </section>

      <section class="detail-grid">
        <section class="panel detail-panel">
          <div class="panel-head">
            <h2>商品详情</h2>
          </div>
          <div class="spec-grid">
            <article v-for="item in specList" :key="item.label" class="spec-item">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </article>
          </div>
          <p>支持主图视频、规格参数对比、售后服务与评价模块展示。当前案例页重点还原电商详情页常见的信息结构、价格权益和购买决策区。</p>
        </section>

        <aside class="panel review-panel">
          <div class="panel-head">
            <h2>商品评价</h2>
            <span>{{ product.rating }} 分</span>
          </div>
          <div class="review-list">
            <article v-for="item in reviewList" :key="item.author" class="review-item">
              <strong>{{ item.author }}</strong>
              <p>{{ item.content }}</p>
              <small>{{ item.tag }}</small>
            </article>
          </div>
        </aside>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>搭配推荐</h2>
        </div>
        <div class="recommend-grid">
          <RouterLink
            v-for="item in relatedProducts"
            :key="item.slug"
            class="recommend-card"
            :to="{ name: 'commerce-product', params: { slug: item.slug } }"
          >
            <img :src="item.image" :alt="item.title" />
            <h3>{{ item.title }}</h3>
            <strong>¥{{ item.price }}</strong>
          </RouterLink>
        </div>
      </section>
    </div>

    <div v-else class="commerce-shell panel">
      <h1>商品不存在</h1>
    </div>
  </CommerceLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import { commerceProducts, getCommerceProduct } from '@/data/commerceSite'

const route = useRoute()
const product = computed(() => getCommerceProduct(route.params.slug))
const skuOptions = computed(() => ['标准版', '礼盒装', '加购赠品'])
const specList = computed(() => [
  { label: '品牌', value: product.value?.seller || '平台自营' },
  { label: '品类', value: product.value?.category || '综合品类' },
  { label: '销量', value: product.value?.sold || '1万+' },
  { label: '评分', value: `${product.value?.rating || '4.8'} 分` },
])
const reviewList = computed(() => [
  { author: '用户 A23', content: '到货很快，包装完整，价格比活动前实惠很多。', tag: '物流很快' },
  { author: '用户 M18', content: '页面介绍清晰，活动叠加后价格很有优势，整体体验不错。', tag: '价格优惠' },
  { author: '用户 K09', content: '商品和描述一致，客服响应及时，适合回购。', tag: '服务到位' },
])
const relatedProducts = computed(() => commerceProducts.filter((item) => item.slug !== product.value?.slug).slice(0, 4))
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.product-page {
  display: grid;
  gap: 18px;
}

.detail-grid,
.spec-grid,
.review-list,
.recommend-grid {
  display: grid;
  gap: 18px;
}

.panel {
  padding: 20px;
  border-radius: 14px;
  background: #fff;
}

.product-main {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 28px;
}

.product-image {
  width: 100%;
  border-radius: 12px;
  aspect-ratio: 1;
  object-fit: cover;
}

.product-copy h1,
.panel-head h2 {
  color: #222;
}

.product-copy h1 {
  margin-top: 12px;
  font-size: 34px;
  line-height: 1.3;
}

.product-copy p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.product-meta,
.service-list,
.cta-row,
.option-list,
.benefit-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-meta span,
.service-list article,
.benefit-strip span {
  padding: 6px 10px;
  border-radius: 2px;
  color: #df1f26;
  background: #fff1f0;
  font-size: 12px;
}

.price-wrap {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 18px;
}

.price-wrap strong {
  color: #df1f26;
  font-size: 42px;
  line-height: 1;
}

.price-wrap small {
  color: #999;
  text-decoration: line-through;
}

.benefit-strip,
.option-block,
.service-list,
.cta-row {
  margin-top: 18px;
}

.option-block strong {
  color: #222;
  font-size: 14px;
}

.option-list {
  margin-top: 10px;
}

.option-chip {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid #e7c3c0;
  border-radius: 20px;
  color: #555;
  background: #fff;
  font-size: 13px;
}

.delivery-card {
  margin-top: 10px;
  padding: 14px;
  border-radius: 10px;
  background: #fafafa;
}

.delivery-card span,
.spec-item span,
.review-item small {
  color: #999;
  font-size: 12px;
}

.delivery-card p {
  margin-top: 8px;
}

.cta-primary,
.cta-buy,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
}

.cta-primary {
  color: #fff;
  background: #df1f26;
}

.cta-buy {
  color: #fff;
  background: #ff8a00;
}

.cta-secondary {
  color: #df1f26;
  background: #fff1f0;
}

.detail-grid {
  grid-template-columns: minmax(0, 1fr) 340px;
}

.spec-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 16px;
}

.spec-item {
  padding: 16px;
  border-radius: 10px;
  background: #fafafa;
}

.spec-item strong,
.review-item strong,
.recommend-card h3 {
  display: block;
  margin-top: 8px;
  color: #222;
}

.detail-panel p {
  margin-top: 14px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.review-list {
  margin-top: 16px;
}

.review-item {
  padding-bottom: 14px;
  border-bottom: 1px solid #efefef;
}

.review-item p {
  margin-top: 8px;
  color: #666;
  font-size: 13px;
  line-height: 1.8;
}

.recommend-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 18px;
}

.recommend-card {
  padding: 14px;
  border-radius: 12px;
  background: #fafafa;
}

.recommend-card img {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  object-fit: cover;
}

.recommend-card strong {
  display: block;
  margin-top: 8px;
  color: #df1f26;
  font-size: 22px;
}

@media (max-width: 960px) {
  .product-main,
  .detail-grid,
  .recommend-grid {
    grid-template-columns: 1fr;
  }

  .spec-grid {
    grid-template-columns: 1fr;
  }
}
</style>
