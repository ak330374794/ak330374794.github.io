<template>
  <NewsSiteLayout>
    <div class="news-shell creator-page">
      <section class="workspace-grid">
        <aside class="workspace-sidebar">
          <div class="panel creator-profile">
            <div class="profile-avatar">林</div>
            <div>
              <h2>林岚</h2>
              <p>主编 / 产品观察</p>
            </div>
          </div>
          <nav class="panel workspace-menu">
            <a href="#" class="menu-item active">内容概览</a>
            <a href="#" class="menu-item">文章管理</a>
            <a href="#" class="menu-item">数据分析</a>
            <a href="#" class="menu-item">收益中心</a>
            <a href="#" class="menu-item">粉丝管理</a>
          </nav>
        </aside>

        <div class="workspace-main">
          <section class="creator-hero panel">
            <div>
              <span class="creator-kicker">创作者工作台</span>
              <h1>内容生产、数据反馈与收益经营整合到同一工作流</h1>
            </div>
          </section>

          <section class="stats-grid">
            <article v-for="item in creatorDashboard.stats" :key="item.label" class="stat-card">
              <span>{{ item.label }}</span>
              <strong>{{ item.value }}</strong>
            </article>
          </section>

          <section class="panel">
            <div class="section-head">
              <h2>内容管理</h2>
            </div>
            <div class="content-table">
              <article v-for="item in creatorDashboard.contents" :key="item.title" class="table-row">
                <div>
                  <h3>{{ item.title }}</h3>
                  <small>{{ item.status }}</small>
                </div>
                <div class="table-metrics">
                  <span>阅读 {{ item.views }}</span>
                  <span>评论 {{ item.comments }}</span>
                </div>
              </article>
            </div>
          </section>

          <section class="panel">
            <div class="section-head">
              <h2>运营建议</h2>
            </div>
            <div class="tips-list">
              <article class="tip-card">优先补齐头条与搜索类内容，当前相关选题点击率更高。</article>
              <article class="tip-card">建议本周发布 2 篇深读专题与 1 篇热点快评，提升推荐覆盖面。</article>
              <article class="tip-card">读者对“平台治理”和“收益结构”类内容互动更集中，可持续加码。</article>
            </div>
          </section>
        </div>
      </section>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import { creatorDashboard } from '@/data/newsSite'
</script>

<style scoped>
.news-shell {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
}

.creator-page {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.creator-hero,
.panel,
.stat-card {
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.creator-kicker {
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

.creator-hero h1 {
  margin-top: 14px;
  color: #111;
  font-size: clamp(28px, 3vw, 40px);
}

.workspace-grid {
  display: grid;
  gap: 18px;
}

.stats-grid,
.workspace-main,
.workspace-menu,
.content-table,
.tips-list {
  display: grid;
  gap: 14px;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.workspace-grid {
  grid-template-columns: 220px 1fr;
}

.creator-profile {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  align-items: center;
}

.profile-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: #fff;
  background: #c7000b;
  font-size: 24px;
  font-weight: 700;
}

.creator-profile h2,
.section-head h2,
.table-row h3 {
  color: #111;
}

.creator-profile p,
.table-row small,
.stat-card span {
  color: #999;
  font-size: 12px;
}

.menu-item {
  display: flex;
  align-items: center;
  min-height: 42px;
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

.stat-card strong {
  display: block;
  margin-top: 10px;
  color: #111;
  font-size: 30px;
}

.section-head h2 {
  font-size: 24px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  padding: 18px;
  border-radius: 4px;
  background: #fafafa;
}

.table-metrics {
  display: grid;
  gap: 8px;
  color: #666;
  font-size: 13px;
  text-align: right;
}

.tip-card {
  padding: 18px;
  border-radius: 4px;
  color: #666;
  background: #fafafa;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 960px) {
  .stats-grid,
  .workspace-grid,
  .table-row {
    grid-template-columns: 1fr;
  }

  .table-metrics {
    text-align: left;
  }
}
</style>
