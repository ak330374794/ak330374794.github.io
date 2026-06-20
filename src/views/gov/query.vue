<template>
  <GovLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">公共查询中心</span>
          <h1>社保、公积金、违章与公共数据统一接入，一个入口完成查询。</h1>
          <p>页面结构更接近政务大厅里的查询中心，强调关键词搜索、查询类型切换、证件核验与最近记录回访。</p>
          <div class="search-bar">
            <span>输入身份证号、车牌号、办件编号或事项名称</span>
            <button type="button">立即查询</button>
          </div>
        </div>
        <article class="hero-side">
          <span>今日查询服务</span>
          <strong>92 项可在线办理</strong>
          <p>支持电子证照联查、实名核验和历史记录同步，常见于政务一体化平台查询页。</p>
          <div class="hero-tags">
            <span>实名校验</span>
            <span>电子证照</span>
            <span>结果留存</span>
          </div>
        </article>
      </section>

      <section class="channel-strip">
        <article class="channel-card">个人查询</article>
        <article class="channel-card">企业查询</article>
        <article class="channel-card">公共数据</article>
        <article class="channel-card">证明核验</article>
      </section>

      <section class="content-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>高频查询专区</h2>
              <p>社保、公积金、交通和环境等常用查询集中承接。</p>
            </div>
          </div>
          <div class="query-grid">
            <article v-for="item in govQueryPanels" :key="item.title" class="query-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
              <span>查看结果</span>
            </article>
          </div>
        </section>

        <aside class="panel side-stack">
          <section class="status-card">
            <span>查询结果示例</span>
            <strong>公积金贷款进度</strong>
            <p>当前状态：资料复核中，预计 2 个工作日内反馈。</p>
            <div class="status-meta">
              <span>提交时间 06-18</span>
              <span>受理机构 市住房中心</span>
            </div>
          </section>

          <section class="records-card">
            <div class="panel-head compact">
              <div>
                <h2>最近查询记录</h2>
                <p>保留已授权的历史查询，方便再次进入。</p>
              </div>
            </div>
            <div class="records-list">
              <article class="record-item">
                <strong>医保报销进度</strong>
                <span>材料复核中</span>
              </article>
              <article class="record-item">
                <strong>车辆违章处理</strong>
                <span>待缴罚款</span>
              </article>
              <article class="record-item">
                <strong>空气质量指数</strong>
                <span>今日良</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </GovLayout>
</template>

<script setup>
import GovLayout from '@/components/gov/GovLayout.vue'
import { govQueryPanels } from '@/data/govSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.content-grid,
.query-grid,
.side-stack,
.channel-strip,
.hero-tags,
.status-meta,
.records-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.75fr);
  gap: 18px;
  padding: 24px;
  background: linear-gradient(135deg, #eff6ff, #fff);
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
h2,
.query-card strong,
.hero-side strong,
.record-item strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.query-card p,
.hero-side p,
.record-item span,
.panel-head p,
.status-card span {
  color: #64748b;
}

.hero-copy p,
.hero-side p,
.panel-head p,
.query-card p,
.status-card p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
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
  box-shadow: inset 0 0 0 1px rgba(29, 78, 216, 0.08);
}

.search-bar span {
  color: #94a3b8;
  font-size: 14px;
}

button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  font-weight: 700;
}

.hero-side,
.status-card,
.records-card {
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
}

.hero-side {
  border: 1px solid rgba(29, 78, 216, 0.08);
}

.hero-side strong {
  display: block;
  margin-top: 12px;
  font-size: 30px;
  line-height: 1.15;
}

.hero-tags {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.hero-tags span,
.status-meta span {
  padding: 10px 12px;
  border-radius: 16px;
  color: #1e3a8a;
  background: #dbeafe;
  font-size: 12px;
  text-align: center;
}

.channel-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.channel-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eff6ff);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.content-grid {
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.panel-head h2 {
  font-size: 24px;
}

.query-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.query-card {
  padding: 20px;
  border-radius: 22px;
  background: #f8fafc;
}

.query-card span {
  display: inline-flex;
  margin-top: 12px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 700;
}

.status-card strong {
  display: block;
  margin-top: 10px;
  font-size: 26px;
}

.status-meta {
  grid-template-columns: 1fr;
  margin-top: 16px;
}

.records-list {
  gap: 12px;
}

.record-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #f8fafc;
}

@media (max-width: 1080px) {
  .hero,
  .content-grid,
  .query-grid,
  .channel-strip,
  .hero-tags {
    grid-template-columns: 1fr;
  }

  .search-bar,
  .record-item {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero,
  .hero-side,
  .status-card,
  .records-card,
  .panel {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-side strong,
  .status-card strong {
    font-size: 22px;
  }

  .query-card,
  .record-item {
    padding: 14px 16px;
  }
}

@media (max-width: 640px) {
  .hero,
  .hero-side,
  .status-card,
  .records-card,
  .panel {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }
}
</style>
