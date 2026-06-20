<template>
  <LifeServiceLayout>
    <div class="ls-shell travel-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">出行服务</span>
          <h1>从机票火车票到打车租车与自由行，统一管理城市与跨城出行需求。</h1>
          <p>支持价格趋势、余票查询、在线值机、候补购票、行程分享与一键生成行程单，满足商务差旅和旅游度假场景。</p>
        </div>
      </section>

      <section class="travel-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>出行产品</h2>
              <p>预订、用车、租车和行程管理核心功能。</p>
            </div>
          </div>
          <div class="product-grid">
            <article v-for="item in travelProducts" :key="item.title" class="product-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="panel">
          <div class="panel-head">
            <div>
              <h2>行程提醒</h2>
              <p>航班动态、酒店入住和待出发订单汇总。</p>
            </div>
          </div>
          <div class="trip-list">
            <article class="trip-card">
              <strong>明日出发：上海 - 北京</strong>
              <span>MU5101 · 08:45 起飞</span>
            </article>
            <article class="trip-card">
              <strong>酒店入住：北京国贸店</strong>
              <span>06-21 18:00 后可办理入住</span>
            </article>
            <article class="trip-card">
              <strong>预约用车：首都机场接送</strong>
              <span>已预约商务车型 · 可分享行程</span>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </LifeServiceLayout>
</template>

<script setup>
import LifeServiceLayout from '@/components/lifeservice/LifeServiceLayout.vue'
import { travelProducts } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.travel-page,
.travel-grid,
.product-grid,
.trip-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, #fff7ed, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2,
.product-card strong,
.trip-card strong {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.panel-head p,
.product-card p,
.trip-card span {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.travel-grid {
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
}

.product-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.product-card,
.trip-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.product-card p,
.trip-card span {
  display: block;
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .travel-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .panel,
  .product-card,
  .trip-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }
}

@media (max-width: 640px) {
  .panel,
  .product-card,
  .trip-card {
    padding: 16px;
  }
}
</style>
