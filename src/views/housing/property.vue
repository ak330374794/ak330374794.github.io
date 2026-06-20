<template>
  <HousingLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">房产交易</span>
          <h1>地图找房、VR 看房与交易服务，提升买房决策透明度。</h1>
          <p>支持学区、地铁、商圈和小区维度筛选，并提供历史成交、房价评估与房贷计算能力。</p>
          <div class="filter-bar">
            <span>杭州</span>
            <span>近地铁</span>
            <span>总价 300-500 万</span>
            <span>三居</span>
            <button type="button">地图找房</button>
          </div>
        </div>
      </section>

      <section class="listing-panel">
        <article class="house-card">
          <div class="house-cover"></div>
          <div class="house-copy">
            <strong>滨江新城 · 帝景苑 3 室 2 厅</strong>
            <p>地铁口 · 南北通透 · 精装修 · 满五唯一 · 支持 VR 看房</p>
            <div class="house-meta">
              <span>98㎡</span>
              <span>高层 / 共 27 层</span>
              <span>2018 年建</span>
            </div>
            <em>¥ 428 万</em>
          </div>
        </article>
        <aside class="panel side-panel">
          <strong>买房工具</strong>
          <p>房贷计算器、历史成交、税费试算与过户预约统一放在列表侧栏。</p>
        </aside>
      </section>

      <section class="grid">
        <article v-for="item in housingPropertyPanels" :key="item.title" class="panel card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </HousingLayout>
</template>

<script setup>
import HousingLayout from '@/components/housing/HousingLayout.vue'
import { housingPropertyPanels } from '@/data/housingSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hero,
.card {
  padding: 24px;
}

.hero {
  background: linear-gradient(135deg, #fff7ed, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.card strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p {
  color: #64748b;
}

.hero p,
.card p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.85;
}

.filter-bar,
.house-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-bar {
  margin-top: 24px;
}

.filter-bar span,
.house-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #64748b;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(234, 88, 12, 0.08);
  font-size: 12px;
}

.filter-bar button {
  min-height: 38px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #ea580c, #f97316);
  font-weight: 700;
}

.listing-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) 320px;
  gap: 18px;
}

.house-card,
.side-panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.house-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  overflow: hidden;
}

.house-cover {
  min-height: 240px;
  background: url('https://picsum.photos/640/420') center/cover no-repeat;
}

.house-copy {
  padding: 22px;
}

.house-copy strong,
.side-panel strong {
  color: #0f172a;
  font-size: 24px;
}

.house-copy p,
.side-panel p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.house-meta {
  margin-top: 14px;
}

.house-copy em {
  display: inline-flex;
  margin-top: 16px;
  color: #ea580c;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
}

.side-panel {
  padding: 22px;
}

.grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .listing-panel,
  .house-card,
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
