<template>
  <FinderLayout>
    <div class="finder-shell navigation-page">
      <section class="panel hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">网址导航站</span>
          <h1>把门户、学习、工具、开发和消费站点聚合成清晰分类入口。</h1>
          <p>支持用户收藏、自定义分组、站点收录申请和流量排行，承接长期访问与分发场景。</p>
          <div class="search-bar">
            <span>搜索知乎、GitHub、飞书、淘宝、B 站、学术搜索</span>
            <button type="button">搜索站点</button>
          </div>
        </div>
        <article class="hero-side">
          <span>今日热榜入口</span>
          <strong>AI 工具导航榜</strong>
          <p>热点榜单、专题分组和高频收藏位，是导航站常见的首屏运营结构。</p>
          <div class="hero-tags">
            <span>热榜</span>
            <span>收藏夹</span>
            <span>专题推荐</span>
          </div>
        </article>
      </section>

      <section class="quick-strip">
        <article class="quick-card">今日热站</article>
        <article class="quick-card">AI 导航</article>
        <article class="quick-card">学习办公</article>
        <article class="quick-card">开发设计</article>
      </section>

      <section class="main-grid">
        <div class="category-column">
          <section v-for="item in finderNavCategories" :key="item.title" class="panel category-panel">
            <h2>{{ item.title }}</h2>
            <div class="site-grid">
              <article v-for="site in item.sites" :key="site" class="site-card">
                <strong>{{ site }}</strong>
                <span>优质站点入口</span>
              </article>
            </div>
          </section>
        </div>

        <aside class="side-column">
          <section class="panel">
            <h2>上升最快站点</h2>
            <div class="trending-list">
              <article v-for="item in finderTrendingSites" :key="item.title" class="trending-card">
                <strong>{{ item.title }}</strong>
                <span>{{ item.visits }}</span>
                <em>{{ item.rise }}</em>
              </article>
            </div>
          </section>

          <section class="panel widget-panel">
            <h2>便民 Widget</h2>
            <div class="widget-list">
              <article>
                <strong>快递查询</strong>
                <span>输入单号查看物流进度</span>
              </article>
              <article>
                <strong>天气预报</strong>
                <span>支持城市切换与生活指数</span>
              </article>
              <article>
                <strong>汇率换算</strong>
                <span>常用货币一键换算</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </FinderLayout>
</template>

<script setup>
import FinderLayout from '@/components/finder/FinderLayout.vue'
import { finderNavCategories, finderTrendingSites } from '@/data/finderSite'
</script>

<style scoped>
.finder-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.navigation-page,
.main-grid,
.category-column,
.side-column,
.trending-list,
.widget-list,
.quick-strip,
.hero-tags {
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
.category-panel,
.side-column > .panel {
  padding: 22px;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 18px;
  background: linear-gradient(135deg, #eef5ff, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.category-panel h2,
.side-column h2,
.site-card strong,
.trending-card strong,
.widget-list strong,
.hero-side strong {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.site-card span,
.trending-card span,
.widget-list span,
.hero-side p {
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
  padding: 12px 12px 12px 16px;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.08);
}

.search-bar span {
  color: #94a3b8;
  font-size: 14px;
}

button {
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  font-weight: 700;
}

.hero-side {
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
}

.hero-side strong {
  display: block;
  margin-top: 12px;
  font-size: 30px;
  line-height: 1.12;
}

.hero-tags {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.hero-tags span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 12px;
  font-weight: 700;
}

.quick-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.quick-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eef5ff);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.main-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.85fr);
}

.site-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.site-card,
.trending-card,
.widget-list article {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.site-card span,
.trending-card span,
.widget-list span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.trending-card em {
  display: inline-flex;
  margin-top: 8px;
  color: #16a34a;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .main-grid,
  .site-grid,
  .quick-strip,
  .hero-panel,
  .hero-tags {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero-panel,
  .hero-side,
  .category-panel,
  .side-column > .panel {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-side strong {
    font-size: 24px;
  }

  .quick-card,
  .site-card,
  .trending-card,
  .widget-list article {
    min-height: auto;
    padding: 14px 16px;
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .hero-side,
  .category-panel,
  .side-column > .panel {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }
}
</style>
