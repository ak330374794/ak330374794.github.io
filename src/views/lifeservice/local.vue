<template>
  <LifeServiceLayout>
    <div class="ls-shell local-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">本地生活</span>
          <h1>把外卖、到店、酒店、票务和到家服务聚合到一个城市生活入口。</h1>
          <p>支持商家筛选、套餐团购、预约订座、票务预订、酒店搜索和探店社区内容，提升决策效率与履约体验。</p>
          <div class="search-bar">
            <span>搜索美食、酒店、景点、休闲娱乐</span>
            <button type="button">搜索商家</button>
          </div>
        </div>
      </section>

      <section class="quick-grid">
        <article class="quick-card">美食团购</article>
        <article class="quick-card">酒店民宿</article>
        <article class="quick-card">休闲玩乐</article>
        <article class="quick-card">丽人洗护</article>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>热门服务卡片</h2>
            <p>本地高频消费场景的核心入口。</p>
          </div>
        </div>
        <div class="service-grid">
          <LifeServiceCard v-for="item in localServiceCards" :key="item.title" :item="item" />
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>城市榜单与社区</h2>
            <p>榜单、探店和商家口碑组合为消费决策模块。</p>
          </div>
        </div>
        <div class="board-grid">
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
import { localBoards, localServiceCards } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.local-page,
.service-grid,
.board-grid,
.quick-grid {
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
.board-card strong {
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
.board-card p {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
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

.service-grid,
.board-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.board-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.board-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .quick-grid,
  .service-grid,
  .board-grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
