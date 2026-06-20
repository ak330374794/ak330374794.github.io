<template>
  <GovLayout>
    <div class="shell page">
      <section class="notice-bar">
        <span>政务服务动态</span>
        <p>本周已上线 18 项高频事项网办服务，支持电子证照联调与“一件事一次办”主题套餐。</p>
      </section>

      <section class="hero panel">
        <div class="hero-copy">
          <span class="badge">政务公共服务类案例</span>
          <h1>{{ govHero.title }}</h1>
          <p>{{ govHero.subtitle }}</p>
          <div class="service-search">
            <span>搜索办事事项 / 政策文件 / 查询服务</span>
            <button type="button">进入大厅</button>
          </div>
          <div class="tags">
            <em v-for="tag in govHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="govHero.image" :alt="govHero.title" class="hero-image" />
          <article class="process-card">
            <span>当前办件</span>
            <strong>医保报销复审中</strong>
            <p>更接近政务门户首页的“查询 / 办理 / 进度”聚合卡结构。</p>
          </article>
        </div>
      </section>

      <section class="stats">
        <article v-for="item in govStats" :key="item.label" class="panel stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="service-grid">
        <article v-for="item in govServicePanels" :key="item.title" class="service-card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>

      <section class="grid">
        <section class="panel">
          <div class="head">
            <div>
              <span>Portal</span>
              <h2>政府门户</h2>
            </div>
            <p>公开、新闻和政策文件统一呈现，更像市级政务门户首页主栏目布局。</p>
          </div>
          <div class="card-grid">
            <article v-for="item in govPortalPanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="head">
            <div>
              <span>Query</span>
              <h2>公共查询</h2>
            </div>
            <p>社保、公积金、违章和环境查询从首页直达。</p>
          </div>
          <div class="card-grid">
            <article v-for="item in govQueryPanels" :key="item.title" class="info-card blue-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <section class="panel interaction-panel">
          <div class="head">
            <div>
              <span>Interaction</span>
              <h2>政民互动</h2>
            </div>
            <p>把 12345、领导信箱、意见征集与政策咨询放在首页重点入口区。</p>
          </div>
          <div class="interaction-list">
            <article class="interaction-card">
              <strong>12345 热线</strong>
              <p>提交诉求、工单查询、满意度评价与热点问题分析。</p>
            </article>
            <article class="interaction-card">
              <strong>领导信箱</strong>
              <p>按部门提交建议、投诉与举报，公开办理结果。</p>
            </article>
            <article class="interaction-card">
              <strong>民意征集</strong>
              <p>问卷调查、意见反馈和政策解读统一承接。</p>
            </article>
          </div>
        </section>
      </section>
    </div>
  </GovLayout>
</template>

<script setup>
import GovLayout from '@/components/gov/GovLayout.vue'
import { govHero, govPortalPanels, govQueryPanels, govServicePanels, govStats } from '@/data/govSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.card-grid,
.service-grid,
.interaction-list {
  display: grid;
  gap: 18px;
}

.notice-bar {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 16px;
  align-items: center;
  padding: 14px 18px;
  border: 1px solid rgba(29, 78, 216, 0.1);
  border-radius: 20px;
  background: linear-gradient(180deg, #f7fbff, #eff6ff);
}

.notice-bar span {
  display: inline-flex;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.notice-bar p {
  color: #475569;
  font-size: 14px;
}

.panel {
  padding: 24px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  overflow: hidden;
  padding: 32px;
  background: radial-gradient(circle at top right, rgba(29, 78, 216, 0.12), transparent 24%), linear-gradient(135deg, #eff6ff, #ffffff 48%, #f8fbff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.stat-card strong,
.head h2,
.service-card strong,
.process-card strong,
.info-card strong {
  color: #0f172a;
}

h1 {
  margin-top: 20px;
  font-size: clamp(40px, 4.8vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

p,
.stat-card span,
.head p,
.service-card p,
.process-card p,
.info-card p {
  color: #64748b;
}

.hero-copy > p {
  margin-top: 18px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.service-search,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.service-search {
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  padding: 12px 12px 12px 16px;
  border: 1px solid rgba(29, 78, 216, 0.08);
  border-radius: 999px;
  background: #fff;
}

.service-search span {
  color: #94a3b8;
  font-size: 14px;
}

.service-search button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  font-weight: 700;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 22px;
}

.hero-visual {
  position: relative;
}

.tags {
  margin-top: 20px;
}

.tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.08);
  font-size: 12px;
  font-style: normal;
}

.process-card {
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 280px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.88);
}

.process-card span,
.head span {
  display: inline-flex;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.process-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
}

.process-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  padding: 20px;
  text-align: center;
}

.stat-card strong {
  display: block;
  font-size: 34px;
}

.stat-card span {
  display: block;
  margin-top: 8px;
  font-size: 13px;
}

.service-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.service-card {
  padding: 18px;
  border: 1px solid rgba(29, 78, 216, 0.08);
  border-radius: 22px;
  background: linear-gradient(180deg, #ffffff, #f8fbff);
}

.service-card p {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.8;
}

.grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.info-card {
  padding: 18px;
  border-radius: 22px;
  background: #f8fafc;
}

.blue-card,
.interaction-card {
  background: linear-gradient(180deg, #ffffff, #eff6ff);
}

.info-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.interaction-list {
  margin-top: 20px;
}

.interaction-card {
  padding: 18px;
  border-radius: 22px;
}

.interaction-card strong {
  color: #0f172a;
}

.interaction-card p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .hero,
  .notice-bar,
  .stats,
  .service-grid,
  .grid,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .process-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }

  .service-search {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
