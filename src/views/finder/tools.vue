<template>
  <FinderLayout>
    <div class="finder-shell tools-page">
      <section class="panel hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">实用工具站</span>
          <h1>从 PDF、文档转换到代码工具，覆盖高频办公与开发需求。</h1>
          <p>把文档处理、图片编辑、在线计算、代码校验和便民查询聚合在一个页面里，提升工具完成率与回访率。</p>
          <div class="search-bar">
            <span>搜索 PDF、压缩、翻译、正则、JSON、房贷计算器</span>
            <button type="button">搜索工具</button>
          </div>
        </div>
        <article class="hero-side">
          <span>热门工具趋势</span>
          <strong>PDF 工具箱</strong>
          <p>近 24 小时调用 12.4 万次，常见于工具站首页的热门推荐位。</p>
          <div class="hero-tags">
            <span>文档处理</span>
            <span>AI 摘要</span>
            <span>站长工具</span>
          </div>
        </article>
      </section>

      <section class="category-strip">
        <article class="category-card">办公文档</article>
        <article class="category-card">图片处理</article>
        <article class="category-card">开发效率</article>
        <article class="category-card">便民查询</article>
      </section>

      <section class="tools-grid">
        <FinderToolCard v-for="item in finderTools" :key="item.slug" :tool="item" />
      </section>

      <section class="content-grid">
        <section class="panel feature-panel">
          <div class="panel-head">
            <div>
              <h2>重点能力面板</h2>
              <p>支持差异化运营位，承接活动工具、AI 能力和站长服务。</p>
            </div>
          </div>
          <div class="feature-grid">
            <article v-for="item in finderToolPanels" :key="item.title" class="feature-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.description }}</p>
              <span>{{ item.meta }}</span>
            </article>
          </div>
        </section>

        <aside class="panel side-panel">
          <div class="panel-head compact">
            <div>
              <h2>快捷入口</h2>
              <p>工具站常见的专题推荐与高频直达。</p>
            </div>
          </div>
          <div class="shortcut-list">
            <article class="shortcut-item">
              <strong>AI 长文总结</strong>
              <span>输入网页链接，生成结构化摘要</span>
            </article>
            <article class="shortcut-item">
              <strong>简历优化</strong>
              <span>PDF 上传、智能改写与导出</span>
            </article>
            <article class="shortcut-item">
              <strong>开发者套件</strong>
              <span>JSON、正则、Base64、时间戳转换</span>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </FinderLayout>
</template>

<script setup>
import FinderLayout from '@/components/finder/FinderLayout.vue'
import FinderToolCard from '@/components/finder/FinderToolCard.vue'
import { finderToolPanels, finderTools } from '@/data/finderSite'
</script>

<style scoped>
.finder-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.tools-page,
.tools-grid,
.content-grid,
.category-strip,
.hero-tags,
.shortcut-list {
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
.feature-panel {
  padding: 22px;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.78fr);
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
.panel-head h2,
.feature-card strong,
.hero-side strong,
.shortcut-item strong {
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
.feature-card p,
.feature-card span,
.hero-side p,
.shortcut-item span {
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

.hero-side,
.side-panel {
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
}

.hero-side strong {
  display: block;
  margin-top: 12px;
  font-size: 28px;
  line-height: 1.15;
}

.hero-tags {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.hero-tags span,
.feature-card span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 12px;
  font-weight: 700;
}

.category-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.category-card {
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

.tools-grid,
.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
  gap: 18px;
}

.content-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
}

.feature-grid {
  margin-top: 18px;
}

.feature-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.feature-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.feature-card span {
  margin-top: 10px;
}

.shortcut-list {
  gap: 12px;
}

.shortcut-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #f8fafc;
}

@media (max-width: 1080px) {
  .tools-grid,
  .feature-grid,
  .content-grid,
  .category-strip,
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
  .feature-panel,
  .side-panel {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-side strong {
    font-size: 24px;
  }

  .feature-card,
  .shortcut-item {
    padding: 16px;
  }

  .category-card {
    min-height: 68px;
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .hero-side,
  .feature-panel,
  .side-panel {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }
}
</style>
