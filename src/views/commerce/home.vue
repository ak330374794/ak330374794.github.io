<template>
  <CommerceLayout>
    <div class="commerce-shell commerce-home">
      <section class="hero-grid">
        <aside class="category-panel">
          <RouterLink v-for="item in commerceCategories" :key="item.slug" :to="{ name: 'commerce-category', params: { slug: item.slug } }">
            <strong>{{ item.name }}</strong>
            <span>{{ item.description }}</span>
          </RouterLink>
        </aside>

        <section class="hero-panel">
          <div class="hero-copy">
            <span>{{ commerceHero.title }}</span>
            <h1>{{ commerceHero.subtitle }}</h1>
            <div class="hero-tags">
              <em v-for="tag in commerceHero.tags" :key="tag">{{ tag }}</em>
            </div>
          </div>
          <img :src="commerceHero.image" :alt="commerceHero.title" class="hero-image" />
        </section>

        <aside class="board-panel">
          <article v-for="item in homeBoards" :key="item.title" class="board-card" :style="{ background: item.color }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </aside>
      </section>

      <section class="flash-panel panel">
        <div class="panel-head">
          <h2>限时秒杀</h2>
          <span>距结束 01 : 42 : 18</span>
        </div>
        <div class="flash-grid">
          <CommerceProductCard v-for="item in flashItems" :key="item.slug" :product="item" />
        </div>
      </section>

      <section class="dual-grid">
        <section class="panel cross-panel">
          <div class="panel-head">
            <div>
              <h2>跨境海外购</h2>
              <p>保税仓直发、税费试算、品牌授权链路透明</p>
            </div>
            <RouterLink :to="{ name: 'commerce-category', params: { slug: 'cross-border' } }">进入专区</RouterLink>
          </div>
          <div class="cross-grid">
            <RouterLink
              v-for="item in crossBorderProducts"
              :key="item.slug"
              class="cross-card"
              :to="{ name: 'commerce-product', params: { slug: item.slug } }"
            >
              <img :src="item.image" :alt="item.title" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.summary }}</p>
                <strong>¥{{ item.price }}</strong>
              </div>
            </RouterLink>
          </div>
        </section>

        <section class="panel brand-panel">
          <div class="panel-head">
            <div>
              <h2>品牌馆</h2>
              <p>平台精选品牌与官方旗舰权益</p>
            </div>
          </div>
          <div class="brand-grid">
            <article v-for="item in brandBoards" :key="item.title" class="brand-card">
              <strong>{{ item.title }}</strong>
              <span>{{ item.desc }}</span>
            </article>
          </div>
        </section>
      </section>

      <section v-for="section in floorSections" :key="section.title" class="panel">
        <div class="panel-head">
          <div>
            <h2>{{ section.title }}</h2>
            <p>{{ section.subtitle }}</p>
          </div>
          <RouterLink :to="{ name: 'commerce-category', params: { slug: section.slug } }">查看更多</RouterLink>
        </div>
        <div class="product-grid">
          <CommerceProductCard v-for="item in section.items" :key="item.slug" :product="item" />
        </div>
      </section>
    </div>
  </CommerceLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import CommerceProductCard from '@/components/commerce/CommerceProductCard.vue'
import { commerceCategories, commerceHero, commerceProducts, homeBoards, productSections } from '@/data/commerceSite'

const flashItems = computed(() => [commerceProducts[0], commerceProducts[4], commerceProducts[8], commerceProducts[12]].filter(Boolean))
const crossBorderProducts = computed(() => commerceProducts.filter((item) => item.category === 'cross-border').slice(0, 2))
const brandBoards = [
  { title: 'Apple 数码馆', desc: '12 期免息、以旧换新、官方延保。' },
  { title: '国际美妆馆', desc: '正品溯源、品牌小样、会员专享价。' },
  { title: '品质生鲜馆', desc: '冷链直送、坏损包退、极速赔付。' },
  { title: '服饰生活馆', desc: '尺码助手、穿搭推荐、退换无忧。' },
]

const floorSections = computed(() =>
  productSections.map((section) => ({
    ...section,
    slug: commerceProducts.find((item) => item.slug === section.products[0])?.category,
    items: section.products.map((slug) => commerceProducts.find((item) => item.slug === slug)).filter(Boolean),
  }))
)
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.commerce-home {
  display: grid;
  gap: 18px;
}

.hero-grid,
.flash-grid,
.product-grid,
.dual-grid,
.cross-grid,
.brand-grid {
  display: grid;
  gap: 16px;
}

.hero-grid {
  grid-template-columns: 240px 1fr 280px;
}

.category-panel,
.panel,
.hero-panel,
.board-card {
  border-radius: 14px;
}

.category-panel,
.panel {
  background: #fff;
}

.category-panel {
  display: grid;
  gap: 0;
  padding: 12px;
}

.category-panel a {
  display: grid;
  gap: 6px;
  padding: 14px 12px;
  border-bottom: 1px solid #f1f1f1;
}

.category-panel a:last-child {
  border-bottom: 0;
}

.category-panel strong,
.panel-head h2,
.board-card h3 {
  color: #222;
}

.category-panel span,
.board-card p,
.panel-head p {
  color: #666;
  font-size: 12px;
  line-height: 1.7;
}

.hero-panel {
  display: grid;
  grid-template-columns: 1fr 360px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffede9, #fff6f4);
}

.hero-copy {
  padding: 28px;
}

.hero-copy span {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 2px;
  color: #fff;
  background: #df1f26;
  font-size: 11px;
  font-weight: 700;
}

.hero-copy h1 {
  margin-top: 18px;
  color: #222;
  font-size: clamp(34px, 3.6vw, 52px);
  line-height: 1.18;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.hero-tags em {
  padding: 6px 10px;
  border-radius: 2px;
  color: #df1f26;
  background: rgba(255, 255, 255, 0.76);
  font-size: 12px;
  font-style: normal;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
}

.board-panel {
  display: grid;
  gap: 12px;
}

.board-card {
  padding: 18px;
}

.panel {
  padding: 20px;
}

.panel-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
}

.panel-head a,
.panel-head span {
  color: #df1f26;
  font-size: 13px;
  font-weight: 600;
}

.flash-grid,
.product-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 18px;
}

.dual-grid {
  grid-template-columns: minmax(0, 1.4fr) 360px;
}

.cross-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
}

.cross-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 14px;
  padding: 14px;
  border-radius: 12px;
  background: #fafafa;
}

.cross-card img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
}

.cross-card h3,
.brand-card strong {
  color: #222;
}

.cross-card p,
.brand-card span {
  margin-top: 8px;
  color: #666;
  font-size: 12px;
  line-height: 1.7;
}

.cross-card strong {
  display: block;
  margin-top: 10px;
  color: #df1f26;
  font-size: 24px;
}

.brand-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
}

.brand-card {
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg, #fff8f6, #fff);
}

@media (max-width: 1080px) {
  .hero-grid,
  .hero-panel,
  .flash-grid,
  .product-grid,
  .dual-grid,
  .cross-grid,
  .brand-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .commerce-home {
    gap: 14px;
  }

  .category-panel {
    padding: 8px;
  }

  .category-panel a {
    padding: 12px 10px;
  }

  .hero-copy {
    padding: 18px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 36px);
  }

  .hero-image {
    min-height: 220px;
  }

  .board-card,
  .panel {
    padding: 16px;
  }

  .panel-head {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .cross-card {
    grid-template-columns: 96px 1fr;
  }

  .cross-card img {
    width: 96px;
    height: 96px;
  }
}

@media (max-width: 640px) {
  .hero-copy {
    padding: 16px;
  }

  .hero-tags {
    gap: 8px;
  }

  .cross-card,
  .brand-card {
    padding: 12px;
  }

  .cross-card {
    grid-template-columns: 1fr;
  }

  .cross-card img {
    width: 100%;
    height: 180px;
  }
}
</style>
