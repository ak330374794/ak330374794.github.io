<template>
  <NewsSiteLayout>
    <div class="news-shell admin-page">
      <section class="admin-hero">
        <div>
          <span class="admin-kicker">平台管理后台</span>
          <h1>内容审核、推荐配置、数据监控与广告运营集中管理</h1>
        </div>
      </section>

      <section class="overview-grid">
        <article v-for="item in adminDashboard.overview" :key="item.label" class="overview-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </section>

      <section class="admin-layout">
        <aside class="sidebar">
          <div class="panel">
            <div class="section-head">
              <h2>功能菜单</h2>
            </div>
            <nav class="menu-list">
              <a v-for="(item, index) in adminDashboard.sidebar" :key="item" href="#" class="menu-item" :class="{ active: index === 0 }">
                {{ item }}
              </a>
            </nav>
          </div>
        </aside>

        <div class="main-panels">
          <div class="panel">
            <div class="section-head">
              <h2>审核队列</h2>
            </div>
            <div class="queue-list">
              <article v-for="item in adminDashboard.queues" :key="item.title" class="queue-card">
                <div>
                  <h3>{{ item.title }}</h3>
                  <small>{{ item.owner }}</small>
                </div>
                <span>{{ item.risk }}</span>
              </article>
            </div>
          </div>

          <div class="panel">
            <div class="section-head">
              <h2>推荐配置</h2>
            </div>
            <div class="config-list">
              <article class="config-card">
                <strong>首页焦点位 A/B</strong>
                <p>实验组 3，CTR 提升 6.8%</p>
              </article>
              <article class="config-card">
                <strong>科技频道热读权重</strong>
                <p>已提升深读类内容曝光占比</p>
              </article>
              <article class="config-card">
                <strong>搜索页热搜池</strong>
                <p>当前由编辑推荐 + 热度模型共同驱动</p>
              </article>
            </div>
          </div>

          <div class="panel">
            <div class="section-head">
              <h2>运营模块</h2>
            </div>
            <div class="config-list">
              <article v-for="item in adminDashboard.modules" :key="item.title" class="config-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.detail }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import { adminDashboard } from '@/data/newsSite'
</script>

<style scoped>
.news-shell {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
}

.admin-page {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.admin-hero,
.overview-card,
.panel {
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.admin-kicker {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.admin-hero h1 {
  margin-top: 14px;
  color: #111;
  font-size: clamp(28px, 3vw, 40px);
}

.overview-grid,
.admin-layout {
  display: grid;
  gap: 18px;
}

.overview-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.admin-layout {
  grid-template-columns: 240px 1fr;
}

.overview-card span,
.queue-card small {
  color: #999;
  font-size: 12px;
}

.overview-card strong {
  display: block;
  margin-top: 10px;
  color: #111;
  font-size: 30px;
}

.section-head h2 {
  color: #111;
  font-size: 24px;
}

.queue-list,
.config-list {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.main-panels,
.menu-list {
  display: grid;
  gap: 18px;
}

.menu-item {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 2px;
  color: #555;
  background: #f7f7f7;
  font-size: 14px;
  font-weight: 600;
}

.menu-item.active {
  color: #fff;
  background: #c7000b;
}

.queue-card,
.config-card {
  padding: 18px;
  border-radius: 4px;
  background: #fafafa;
}

.queue-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
}

.queue-card h3,
.config-card strong {
  color: #111;
}

.queue-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 6px 10px;
  border-radius: 2px;
  color: #c7000b;
  background: #fff1f1;
  font-size: 12px;
  font-weight: 600;
}

.config-card p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 960px) {
  .overview-grid,
  .admin-layout,
  .queue-card {
    grid-template-columns: 1fr;
  }
}
</style>
