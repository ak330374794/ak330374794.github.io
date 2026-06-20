<template>
  <GovLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">政府门户</span>
          <h1>政策发布、政务公开、部门动态和互动交流统一汇聚成更像真实政府官网的首页。</h1>
          <p>页面不再只是能力说明，而是按政府门户常见结构组织为头条通告、政策文件、公开专栏和便民互动。</p>
        </div>
        <article class="hero-side">
          <span>本周重点公开</span>
          <strong>18 份政策文件更新</strong>
          <p>覆盖民生服务、营商环境和城市建设，支持全文检索、下载与政策解读。</p>
          <div class="hero-tags">
            <span>政策解读</span>
            <span>信息公开</span>
            <span>在线访谈</span>
          </div>
        </article>
      </section>

      <section class="news-strip">
        <article class="news-card">
          <span>头条新闻</span>
          <strong>数字政务服务专区上线，18 项高频事项实现跨部门联办</strong>
          <p>新增电子证照调用、统一身份认证和进度提醒，突出门户站首屏新闻位。</p>
        </article>
        <article class="news-card">
          <span>通知公告</span>
          <strong>2026 年人才补贴申报指南发布</strong>
          <p>支持在线测算、材料下载和专区咨询。</p>
        </article>
        <article class="news-card">
          <span>在线访谈</span>
          <strong>市住建局解读租购并举政策</strong>
          <p>直播回放与问答纪要已上线。</p>
        </article>
      </section>

      <section class="content-grid">
        <section class="panel section-panel">
          <div class="panel-head">
            <div>
              <h2>门户栏目</h2>
              <p>公开、文件、访谈和服务指南等栏目按政府门户语义承接。</p>
            </div>
          </div>
          <div class="grid">
            <article v-for="item in govPortalPanels" :key="item.title" class="card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
              <span>进入栏目</span>
            </article>
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>办事专题</h2>
                <p>常见于政府官网右侧的专题聚合区。</p>
              </div>
            </div>
            <div class="topic-list">
              <article class="topic-item">
                <strong>惠企政策直达</strong>
                <span>企业补贴、税费减免、开办服务</span>
              </article>
              <article class="topic-item">
                <strong>人才服务专区</strong>
                <span>落户、安居、创业扶持在线办理</span>
              </article>
              <article class="topic-item">
                <strong>重大项目公开</strong>
                <span>招投标、公示公告、建设进度</span>
              </article>
            </div>
          </section>

          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>互动入口</h2>
                <p>领导信箱、意见征集和 12345 常见结构。</p>
              </div>
            </div>
            <div class="topic-list">
              <article class="topic-item">
                <strong>领导信箱</strong>
                <span>提交建议、投诉与问题反馈</span>
              </article>
              <article class="topic-item">
                <strong>意见征集</strong>
                <span>围绕新政策开放社会意见</span>
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
import { govPortalPanels } from '@/data/govSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.content-grid,
.grid,
.side-stack,
.news-strip,
.hero-tags,
.topic-list {
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
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
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
.card strong,
.hero-side strong,
.news-card strong,
.topic-item strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p,
.hero-side p,
.news-card p,
.topic-item span,
.panel-head p,
.news-card span {
  color: #64748b;
}

.hero-copy p,
.hero-side p,
.news-card p,
.card p,
.panel-head p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
}

.hero-side,
.section-panel {
  padding: 22px;
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

.hero-tags span,
.card span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #1d4ed8;
  background: #dbeafe;
  font-size: 12px;
  font-weight: 700;
}

.news-strip {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.news-card,
.card,
.topic-item {
  padding: 18px;
  border-radius: 22px;
  background: #f8fafc;
}

.news-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
  line-height: 1.3;
}

.content-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.82fr);
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

.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card span {
  margin-top: 12px;
}

.topic-list {
  gap: 12px;
}

@media (max-width: 1080px) {
  .hero,
  .news-strip,
  .content-grid,
  .grid,
  .hero-tags {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero,
  .hero-side,
  .section-panel {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-side strong,
  .news-card strong {
    font-size: 22px;
  }

  .news-card,
  .card,
  .topic-item {
    padding: 16px;
  }

  .panel-head {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}

@media (max-width: 640px) {
  .hero,
  .hero-side,
  .section-panel {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }
}
</style>
