<template>
  <CommerceLayout>
    <div class="commerce-shell seller-page">
      <section class="panel hero-panel">
        <span>商家经营中心</span>
        <h1>为商家提供数据驱动的商品经营、营销投放与订单履约工作台</h1>
      </section>

      <section class="stats-grid">
        <article v-for="item in sellerDashboard.stats" :key="item.label" class="stat-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </section>

      <section class="content-grid">
        <div class="panel">
          <div class="panel-head">
            <h2>订单与履约</h2>
          </div>
          <div class="list-grid">
            <article v-for="item in sellerDashboard.orders" :key="item.title" class="list-card">
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.status }}</p>
              </div>
              <strong>{{ item.count }}</strong>
            </article>
          </div>
        </div>

        <div class="panel">
          <div class="panel-head">
            <h2>营销工具</h2>
          </div>
          <div class="list-grid">
            <article v-for="item in sellerDashboard.tools" :key="item.title" class="tool-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  </CommerceLayout>
</template>

<script setup>
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import { sellerDashboard } from '@/data/commerceSite'
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.seller-page,
.stats-grid,
.content-grid,
.list-grid {
  display: grid;
  gap: 18px;
}

.panel,
.stat-card {
  padding: 20px;
  border-radius: 14px;
  background: #fff;
}

.hero-panel span {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #df1f26;
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1 {
  margin-top: 16px;
  color: #222;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.3;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card span,
.list-card p {
  color: #999;
  font-size: 12px;
}

.stat-card strong,
.list-card strong {
  display: block;
  margin-top: 10px;
  color: #222;
}

.stat-card strong {
  font-size: 30px;
}

.content-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel-head h2,
.list-card h3,
.tool-card h3 {
  color: #222;
}

.list-card,
.tool-card {
  padding: 16px;
  border-radius: 8px;
  background: #fafafa;
}

.list-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
}

.tool-card p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .stats-grid,
  .content-grid,
  .list-card {
    grid-template-columns: 1fr;
  }
}
</style>
