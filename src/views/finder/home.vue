<template>
  <FinderLayout>
    <div class="finder-shell finder-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">搜索引擎与工具站案例</span>
          <h1>{{ finderHero.title }}</h1>
          <p>{{ finderHero.subtitle }}</p>

          <div class="hero-search">
            <input type="text" value="输入关键词开始搜索..." readonly />
            <button type="button">极搜一下</button>
          </div>

          <div class="hot-list">
            <span v-for="item in finderHero.hotKeywords" :key="item">{{ item }}</span>
          </div>
        </div>

        <div class="knowledge-grid">
          <article v-for="item in finderKnowledgeCards" :key="item.title" class="knowledge-card">
            <span>{{ item.title }}</span>
            <strong>{{ item.value }}</strong>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </section>

      <section class="stats-row">
        <article v-for="item in finderStats" :key="item.label" class="stats-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="main-grid">
        <div class="left-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>搜索结果预览</h2>
                <p>综合网页、AI 结果和导航入口的典型结果页结构。</p>
              </div>
            </div>
            <div class="result-list">
              <article v-for="item in finderSearchResults" :key="item.title" class="result-card">
                <span class="result-tag">{{ item.tag }}</span>
                <h3>{{ item.title }}</h3>
                <a href="/" @click.prevent>{{ item.url }}</a>
                <p>{{ item.summary }}</p>
              </article>
            </div>
          </section>

          <section class="panel tools-panel">
            <div class="panel-head">
              <div>
                <h2>高频工具</h2>
                <p>覆盖办公、查询、图片处理和开发效率场景。</p>
              </div>
            </div>
            <div class="tools-grid">
              <FinderToolCard v-for="item in finderTools.slice(0, 4)" :key="item.slug" :tool="item" />
            </div>
          </section>
        </div>

        <aside class="right-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>热门能力</h2>
                <p>AI 搜索、站长工具和网盘能力组合成平台差异化入口。</p>
              </div>
            </div>
            <div class="feature-list">
              <article v-for="item in finderToolPanels" :key="item.title" class="feature-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.description }}</p>
                <span>{{ item.meta }}</span>
              </article>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>导航分类</h2>
                <p>从门户到开发设计，支撑上网第一站场景。</p>
              </div>
            </div>
            <div class="nav-category-list">
              <article v-for="item in finderNavCategories" :key="item.title" class="nav-category-card">
                <strong>{{ item.title }}</strong>
                <div class="site-tags">
                  <span v-for="site in item.sites.slice(0, 4)" :key="site">{{ site }}</span>
                </div>
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
import FinderToolCard from '@/components/finder/FinderToolCard.vue'
import {
  finderHero,
  finderKnowledgeCards,
  finderNavCategories,
  finderSearchResults,
  finderStats,
  finderToolPanels,
  finderTools,
} from '@/data/finderSite'
</script>

<style scoped>
.finder-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.finder-home,
.main-grid,
.left-column,
.right-column,
.result-list,
.feature-list,
.nav-category-list {
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
  grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
  gap: 18px;
  padding: 26px;
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

.hero-copy h1 {
  margin-top: 18px;
  color: #0f172a;
  font-size: clamp(36px, 4.5vw, 60px);
  line-height: 1.08;
}

.hero-copy p {
  margin-top: 16px;
  max-width: 620px;
  color: #64748b;
  font-size: 15px;
  line-height: 1.85;
}

.hero-search {
  display: grid;
  grid-template-columns: 1fr 132px;
  gap: 12px;
  margin-top: 24px;
}

.hero-search input {
  min-height: 54px;
  padding: 0 18px;
  border: 1px solid rgba(37, 99, 235, 0.12);
  border-radius: 27px;
  color: #94a3b8;
  background: #fff;
}

.hero-search button {
  border: 0;
  border-radius: 27px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  font-weight: 700;
}

.hot-list,
.site-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hot-list {
  margin-top: 18px;
}

.hot-list span,
.site-tags span {
  padding: 7px 12px;
  border-radius: 999px;
  color: #334155;
  background: #fff;
  font-size: 12px;
}

.knowledge-grid,
.stats-row,
.tools-grid {
  display: grid;
  gap: 16px;
}

.knowledge-grid {
  grid-template-columns: 1fr;
}

.knowledge-card,
.result-card,
.feature-card,
.nav-category-card {
  border-radius: 20px;
  background: #fff;
}

.knowledge-card {
  padding: 18px;
}

.knowledge-card span,
.result-card a,
.feature-card span,
.nav-category-card span {
  color: #64748b;
}

.knowledge-card strong,
.stats-card strong,
.panel-head h2,
.result-card h3,
.feature-card strong,
.nav-category-card strong {
  color: #0f172a;
}

.knowledge-card strong {
  display: block;
  margin-top: 8px;
  font-size: 28px;
}

.knowledge-card p,
.feature-card p {
  margin-top: 8px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
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
  font-size: 30px;
}

.stats-card span {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
}

.main-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.85fr);
}

.panel {
  padding: 20px;
}

.panel-head p {
  margin-top: 6px;
  color: #94a3b8;
  font-size: 13px;
}

.result-card,
.feature-card,
.nav-category-card {
  padding: 18px;
}

.result-tag {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.result-card h3 {
  margin-top: 10px;
  font-size: 22px;
  line-height: 1.35;
}

.result-card a {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
}

.result-card p {
  margin-top: 10px;
  color: #475569;
  font-size: 13px;
  line-height: 1.8;
}

.tools-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.feature-card span {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

@media (max-width: 1080px) {
  .hero-panel,
  .main-grid,
  .stats-row,
  .tools-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-panel {
    padding: 18px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-search {
    grid-template-columns: 1fr;
  }

  .hero-search button {
    min-height: 44px;
  }

  .knowledge-card,
  .result-card,
  .feature-card,
  .nav-category-card,
  .panel {
    padding: 16px;
  }

  .result-card h3 {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .finder-home {
    gap: 14px;
  }

  .hero-panel {
    padding: 16px;
  }

  .knowledge-card strong,
  .stats-card strong {
    font-size: 24px;
  }

  .hot-list,
  .site-tags {
    gap: 8px;
  }
}
</style>
