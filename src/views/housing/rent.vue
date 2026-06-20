<template>
  <HousingLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">租房服务</span>
          <h1>整租、合租、公寓与民宿统一筛选，支持在线签约和租后服务。</h1>
          <p>围绕真实性核验、合同签署、押金托管、维修报修和室友匹配构建租住服务闭环。</p>
          <div class="search-bar">
            <span>搜索区域、地铁、整租/合租、预算</span>
            <button type="button">找房</button>
          </div>
        </div>
      </section>

      <section class="quick-grid">
        <article class="quick-card">整租</article>
        <article class="quick-card">合租</article>
        <article class="quick-card">品牌公寓</article>
        <article class="quick-card">民宿短租</article>
      </section>

      <section class="listing-panel">
        <article class="rental-card">
          <div class="rental-cover"></div>
          <div class="rental-copy">
            <strong>城西青年公寓 · 一室一厅</strong>
            <p>近地铁 · 拎包入住 · 房东实名认证 · 支持电子合同签约</p>
            <div class="rental-meta">
              <span>月租 3200</span>
              <span>押一付一</span>
              <span>随时入住</span>
            </div>
            <em>在线签约</em>
          </div>
        </article>
      </section>

      <section class="grid">
        <HousingCard v-for="item in housingCards.slice(0, 2)" :key="item.title" :item="item" />
        <article class="panel card">
          <strong>租后服务</strong>
          <p>维修报修、退租申请、转租发布和租金分期功能统一管理。</p>
        </article>
        <article class="panel card">
          <strong>合租功能</strong>
          <p>室友匹配、公共区域管理和费用分摊，提升合租体验。</p>
        </article>
      </section>
    </div>
  </HousingLayout>
</template>

<script setup>
import HousingCard from '@/components/housing/HousingCard.vue'
import HousingLayout from '@/components/housing/HousingLayout.vue'
import { housingCards } from '@/data/housingSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.quick-grid {
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

.search-bar,
.rental-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-bar {
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding: 12px 12px 12px 16px;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(234, 88, 12, 0.08);
}

.search-bar span {
  color: #94a3b8;
  font-size: 14px;
}

.search-bar button {
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #ea580c, #f97316);
  font-weight: 700;
}

.quick-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.quick-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #fff7ed);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.listing-panel {
  display: grid;
}

.rental-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.rental-cover {
  min-height: 240px;
  background: url('https://picsum.photos/640/420') center/cover no-repeat;
}

.rental-copy {
  padding: 22px;
}

.rental-copy strong {
  color: #0f172a;
  font-size: 24px;
}

.rental-copy p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.rental-meta {
  margin-top: 14px;
}

.rental-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #64748b;
  background: #fff7ed;
  font-size: 12px;
}

.rental-copy em {
  display: inline-flex;
  margin-top: 16px;
  color: #ea580c;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}

.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .quick-grid,
  .rental-card,
  .grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero,
  .card,
  .rental-copy {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .rental-copy strong {
    font-size: 22px;
  }

  .quick-card {
    min-height: 68px;
  }

  .rental-cover {
    min-height: 220px;
  }
}

@media (max-width: 640px) {
  .hero,
  .card,
  .rental-copy {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }

  .rental-cover {
    min-height: 180px;
  }
}
</style>
