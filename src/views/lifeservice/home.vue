<template>
  <LifeServiceLayout>
    <div class="ls-shell ls-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">LOCAL LIFE SUPER APP</span>
          <h1>{{ lifeServiceHero.title }}</h1>
          <p>{{ lifeServiceHero.subtitle }}</p>
          <div class="hero-tags">
            <em v-for="tag in lifeServiceHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <img :src="lifeServiceHero.image" :alt="lifeServiceHero.title" class="hero-image" />
      </section>

      <section class="quick-grid">
        <article class="quick-card">外卖</article>
        <article class="quick-card">酒店</article>
        <article class="quick-card">电影</article>
        <article class="quick-card">出行</article>
        <article class="quick-card">招聘</article>
        <article class="quick-card">到家</article>
        <article class="quick-card">团购</article>
        <article class="quick-card">生活缴费</article>
      </section>

      <section class="stats-row">
        <article v-for="item in lifeServiceStats" :key="item.label" class="stats-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Services</span>
              <h2>热门服务入口</h2>
            </div>
          </div>
          <div class="service-grid">
            <LifeServiceCard v-for="item in localServiceCards" :key="item.title" :item="item" />
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Travel</span>
              <h2>出行服务</h2>
            </div>
          </div>
          <div class="info-grid">
            <article v-for="item in travelProducts" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Jobs</span>
              <h2>职位精选</h2>
            </div>
          </div>
          <div class="job-list">
            <article v-for="item in jobCards.slice(0, 3)" :key="item.title" class="job-card">
              <strong>{{ item.title }}</strong>
              <span>{{ item.company }}</span>
              <em>{{ item.salary }}</em>
            </article>
          </div>
        </section>
      </section>

      <section class="panel city-panel">
        <div class="panel-head">
          <div>
            <span>City Trends</span>
            <h2>城市榜单</h2>
          </div>
        </div>
        <div class="board-list">
          <article v-for="item in localBoards" :key="item.title" class="board-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>
    </div>
  </LifeServiceLayout>
</template>

<script setup>
import LifeServiceCard from '@/components/lifeservice/LifeServiceCard.vue'
import LifeServiceLayout from '@/components/lifeservice/LifeServiceLayout.vue'
import { jobCards, lifeServiceHero, lifeServiceStats, localBoards, localServiceCards, travelProducts } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.ls-home,
.main-grid,
.board-list,
.job-list {
  display: grid;
  gap: 18px;
}

.hero-panel,
.stats-card,
.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
  overflow: hidden;
}

.hero-copy {
  padding: 28px;
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

.hero-copy h1,
.stats-card strong,
.panel-head h2,
.info-card strong,
.board-card strong,
.job-card strong {
  color: #0f172a;
}

.hero-copy h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.6vw, 62px);
  line-height: 1.06;
}

.hero-copy p,
.stats-card span,
.panel-head p,
.info-card p,
.board-card p,
.job-card span,
.job-card em {
  color: #64748b;
}

.hero-copy p {
  margin-top: 16px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.85;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.hero-tags em {
  padding: 7px 12px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 12px;
  font-style: normal;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 14px;
}

.quick-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 22px;
  color: #0f172a;
  background: linear-gradient(180deg, #fff7ed, #fff);
  font-weight: 700;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.stats-row,
.service-grid,
.info-grid {
  display: grid;
  gap: 16px;
}

.stats-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stats-card {
  padding: 18px;
  text-align: center;
}

.stats-card strong {
  display: block;
  font-size: 32px;
}

.stats-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.panel {
  padding: 20px;
}

.panel-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.panel-head span {
  display: inline-flex;
  color: #ea580c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.panel-head h2 {
  margin-top: 10px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.info-card,
.board-card,
.job-card {
  padding: 16px;
  border-radius: 20px;
  background: #f8fafc;
}

.info-card p,
.board-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
}

.job-card span,
.job-card em {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.job-card em {
  color: #ea580c;
  font-style: normal;
}

.main-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.city-panel {
  margin-top: 4px;
}

.board-list {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 20px;
}

@media (max-width: 1080px) {
  .hero-panel,
  .main-grid,
  .stats-row,
  .service-grid,
  .info-grid,
  .quick-grid,
  .board-list {
    grid-template-columns: 1fr;
  }
}
</style>
