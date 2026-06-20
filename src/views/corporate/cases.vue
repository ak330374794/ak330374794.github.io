<template>
  <CorporateLayout>
    <div class="corp-shell cases-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">客户案例</span>
          <h1>按行业展示项目背景、挑战、方案与成果，沉淀可复用的行业案例库。</h1>
          <p>通过案例详情、数据成果和客户证言强化品牌可信度，帮助潜在客户快速理解产品价值与落地能力。</p>
        </div>
      </section>

      <section class="case-grid">
        <article v-for="item in corporateCaseCards" :key="item.title" class="panel case-card">
          <strong>{{ item.title }}</strong>
          <em>{{ item.metric }}</em>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </CorporateLayout>
</template>

<script setup>
import CorporateLayout from '@/components/corporate/CorporateLayout.vue'
import { corporateCaseCards } from '@/data/corporateSite'
</script>

<style scoped>
.corp-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.cases-page,
.case-grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero-panel,
.case-card {
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #0f172a;
  background: rgba(15, 23, 42, 0.06);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.case-card strong {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.case-card p,
.case-card em {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.case-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-card em {
  display: inline-flex;
  margin-top: 10px;
  color: #0f172a;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
}

.case-card p {
  margin-top: 12px;
  font-size: 13px;
  line-height: 1.85;
}

@media (max-width: 1080px) {
  .case-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-panel,
  .case-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .case-card {
    padding: 16px;
  }
}
</style>
