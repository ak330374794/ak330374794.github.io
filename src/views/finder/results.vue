<template>
  <FinderLayout>
    <div class="finder-shell results-page">
      <section class="search-head panel">
        <div class="search-bar">
          <input type="text" value="AI 搜索摘要工具" readonly />
          <button type="button">搜索</button>
        </div>
        <div class="search-tabs">
          <span v-for="item in tabs" :key="item" :class="{ active: item === '网页' }">{{ item }}</span>
        </div>
      </section>

      <section class="mode-strip">
        <article class="mode-card">AI 摘要</article>
        <article class="mode-card">网页结果</article>
        <article class="mode-card">知识图谱</article>
        <article class="mode-card">相关工具</article>
      </section>

      <section class="content-grid">
        <div class="results-column">
          <section class="ai-answer panel">
            <span class="ai-badge">AI 直接答案</span>
            <h1>AI 搜索摘要工具可以显著减少阅读长网页的时间成本。</h1>
            <p>综合现有工具能力，主流方案通常支持 URL 粘贴、引用来源、结构化提炼和重点高亮。适用于新闻、论文、行业报告和长篇教程等内容。</p>
            <div class="source-list">
              <span>来源 1：开发者效率工具站</span>
              <span>来源 2：行业产品分析报告</span>
              <span>来源 3：用户使用体验反馈</span>
            </div>
          </section>

          <section class="natural-results">
            <article v-for="item in finderSearchResults" :key="item.title" class="result-card panel">
              <span class="result-tag">{{ item.tag }}</span>
              <h2>{{ item.title }}</h2>
              <a href="/" @click.prevent>{{ item.url }}</a>
              <p>{{ item.summary }}</p>
            </article>
          </section>
        </div>

        <aside class="side-column">
          <section class="panel">
            <h2>相关搜索</h2>
            <div class="chip-list">
              <span v-for="item in relatedSearches" :key="item">{{ item }}</span>
            </div>
          </section>

          <section class="panel">
            <h2>知识卡片</h2>
            <div class="knowledge-list">
              <article v-for="item in finderKnowledgeCards" :key="item.title" class="knowledge-card">
                <span>{{ item.title }}</span>
                <strong>{{ item.value }}</strong>
                <p>{{ item.detail }}</p>
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
import { finderKnowledgeCards, finderSearchResults } from '@/data/finderSite'

const tabs = ['网页', '图片', '视频', '新闻', '学术', '工具']
const relatedSearches = ['AI 摘要网页工具', '长文自动总结', '对话式搜索引擎', '网页内容提炼工具']
</script>

<style scoped>
.finder-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.results-page,
.content-grid,
.results-column,
.natural-results,
.side-column,
.knowledge-list,
.mode-strip {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.search-head,
.ai-answer,
.side-column > .panel,
.result-card {
  padding: 20px;
}

.search-bar {
  display: grid;
  grid-template-columns: 1fr 110px;
  gap: 12px;
}

.search-bar input {
  min-height: 52px;
  padding: 0 18px;
  border: 1px solid rgba(37, 99, 235, 0.12);
  border-radius: 26px;
  background: #f8fbff;
}

.search-bar button {
  border: 0;
  border-radius: 26px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  font-weight: 700;
}

.search-tabs,
.chip-list,
.source-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-tabs {
  margin-top: 16px;
}

.search-tabs span,
.chip-list span,
.source-list span {
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
}

.search-tabs span {
  color: #475569;
  background: #f1f5f9;
}

.search-tabs span.active {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
}

.content-grid {
  grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.8fr);
}

.mode-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.mode-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 22px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eef5ff);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.ai-badge,
.result-tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.ai-badge {
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
}

.ai-answer h1,
.side-column h2,
.result-card h2,
.knowledge-card strong {
  color: #0f172a;
}

.ai-answer h1 {
  margin-top: 14px;
  font-size: clamp(30px, 3.8vw, 42px);
  line-height: 1.2;
}

.ai-answer p,
.result-card p,
.knowledge-card p {
  margin-top: 12px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.85;
}

.source-list {
  margin-top: 16px;
}

.source-list span {
  color: #475569;
  background: #f8fafc;
}

.result-tag {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
}

.result-card h2 {
  margin-top: 10px;
  font-size: 22px;
  line-height: 1.35;
}

.result-card a,
.knowledge-card span {
  color: #64748b;
  font-size: 12px;
}

.result-card a {
  display: inline-block;
  margin-top: 8px;
}

.chip-list {
  margin-top: 16px;
}

.chip-list span {
  color: #334155;
  background: #f8fafc;
}

.knowledge-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.knowledge-card strong {
  display: block;
  margin-top: 8px;
  font-size: 24px;
}

@media (max-width: 1080px) {
  .mode-strip,
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
