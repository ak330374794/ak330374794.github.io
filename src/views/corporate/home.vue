<template>
  <CorporateLayout>
    <div class="corp-shell corp-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">ENTERPRISE WEBSITE</span>
          <h1>{{ corporateHero.title }}</h1>
          <p>{{ corporateHero.subtitle }}</p>
          <div class="hero-actions">
            <RouterLink to="/corporate/landing.html">预约演示</RouterLink>
            <RouterLink class="ghost" to="/corporate/cases.html">查看案例</RouterLink>
          </div>
          <div class="hero-tags">
            <em v-for="tag in corporateHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="corporateHero.image" :alt="corporateHero.title" class="hero-image" />
          <div class="signal-card">
            <span>品牌增长面板</span>
            <strong>线索转化率 3.8%</strong>
            <p>统一官网、解决方案页与客户案例页后，获客与留资路径更清晰。</p>
          </div>
        </div>
      </section>

      <section class="logo-strip">
        <span>服务品牌</span>
        <strong>NEBULA</strong>
        <strong>SKYLINE</strong>
        <strong>FUSION</strong>
        <strong>ARCFLOW</strong>
        <strong>VENTURE+</strong>
      </section>

      <section class="stats-row">
        <article v-for="item in corporateStats" :key="item.label" class="stats-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="section-head">
        <div>
          <span>Solutions</span>
          <h2>产品与解决方案矩阵</h2>
        </div>
        <p>更接近 SaaS 企业官网和营销型品牌站的首屏往下展开方式，先建立信任，再承接转化。</p>
      </section>

      <section class="solution-grid">
        <article v-for="item in corporateProducts" :key="item.title" class="solution-card">
          <img :src="item.image" :alt="item.title" />
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </div>
        </article>
      </section>

      <section class="story-grid">
        <section class="panel narrative-panel">
          <div class="panel-head">
            <div>
              <span>Highlights</span>
              <h2>官网核心模块</h2>
            </div>
          </div>
          <div class="highlight-grid">
            <article v-for="item in corporateHighlights" :key="item.title" class="highlight-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="panel proof-panel">
          <div class="panel-head">
            <div>
              <span>Proof</span>
              <h2>客户案例与成效</h2>
            </div>
          </div>
          <div class="case-list">
            <article v-for="item in corporateCaseCards" :key="item.title" class="case-card">
              <div>
                <strong>{{ item.title }}</strong>
                <em>{{ item.metric }}</em>
              </div>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </aside>
      </section>

      <section class="panel investor-panel">
        <div class="panel-head">
          <div>
            <span>Investor Relations</span>
            <h2>投资者关系与内容中心</h2>
          </div>
        </div>
        <div class="investor-grid">
          <article v-for="item in investorPanels" :key="item.title" class="investor-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>
    </div>
  </CorporateLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import CorporateLayout from '@/components/corporate/CorporateLayout.vue'
import { corporateCaseCards, corporateHero, corporateHighlights, corporateProducts, corporateStats, investorPanels } from '@/data/corporateSite'
</script>

<style scoped>
.corp-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.corp-home,
.solution-grid,
.story-grid,
.highlight-grid,
.case-list,
.investor-grid {
  display: grid;
  gap: 18px;
}

.corp-home {
  gap: 22px;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(420px, 0.9fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.22), transparent 28%), linear-gradient(145deg, #0f172a, #111827 48%, #1e293b);
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.28);
}

.hero-copy {
  padding: 42px;
}

.hero-badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.hero-copy h1,
.signal-card strong,
.stats-card strong,
.section-head h2,
.panel-head h2,
.solution-card strong,
.highlight-card strong,
.case-card strong,
.investor-card strong {
  color: #fff;
}

.hero-copy h1 {
  margin-top: 22px;
  max-width: 680px;
  font-size: clamp(42px, 5vw, 74px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-copy p,
.signal-card p,
.stats-card span,
.section-head p,
.panel-head span,
.highlight-card p,
.case-card p,
.investor-card p,
.case-card em,
.logo-strip span {
  color: rgba(255, 255, 255, 0.72);
}

.hero-copy p {
  margin-top: 20px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.hero-actions,
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-actions {
  margin-top: 28px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  color: #0f172a;
  background: #fff;
  font-size: 14px;
  font-weight: 700;
}

.hero-actions .ghost {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
}

.hero-tags {
  margin-top: 20px;
}

.hero-tags em {
  padding: 7px 14px;
  border-radius: 999px;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
  font-style: normal;
}

.hero-visual {
  position: relative;
  min-height: 100%;
  padding: 24px;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 24px;
}

.signal-card {
  position: absolute;
  right: 42px;
  bottom: 38px;
  max-width: 280px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  background: rgba(15, 23, 42, 0.68);
}

.signal-card span,
.section-head span,
.panel-head span {
  display: inline-flex;
  color: #93c5fd;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.signal-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
}

.signal-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
}

.logo-strip,
.stats-row {
  display: grid;
  grid-template-columns: 160px repeat(5, minmax(0, 1fr));
  gap: 14px;
  align-items: center;
  padding: 18px 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(15, 23, 42, 0.86));
}

.logo-strip strong {
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.06em;
}

.stats-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0;
  background: transparent;
  border: 0;
}

.stats-card,
.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: linear-gradient(180deg, #131d31, #0f172a);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
}

.stats-card {
  padding: 24px;
}

.stats-card strong {
  display: block;
  font-size: 40px;
}

.stats-card span {
  display: block;
  margin-top: 8px;
  font-size: 13px;
}

.section-head {
  display: grid;
  grid-template-columns: minmax(0, 360px) 1fr;
  gap: 24px;
  align-items: end;
}

.section-head h2 {
  margin-top: 10px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.1;
}

.section-head p {
  font-size: 14px;
  line-height: 1.9;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.solution-card {
  display: grid;
  gap: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.86), rgba(15, 23, 42, 0.96));
}

.solution-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 18px;
  object-fit: cover;
}

.solution-card strong {
  font-size: 22px;
}

.solution-card p {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 14px;
  line-height: 1.8;
}

.story-grid {
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.9fr);
}

.panel {
  padding: 24px;
}

.panel-head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.highlight-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.highlight-card,
.case-card,
.investor-card {
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
}

.highlight-card p,
.case-card p,
.investor-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.case-list {
  margin-top: 20px;
}

.case-card em {
  display: inline-flex;
  margin-top: 8px;
  color: #93c5fd;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
}

.investor-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 20px;
}

@media (max-width: 1080px) {
  .hero-panel,
  .section-head,
  .solution-grid,
  .story-grid,
  .stats-row,
  .highlight-grid,
  .investor-grid,
  .logo-strip {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .hero-visual {
    padding: 24px;
  }

  .signal-card {
    position: static;
    max-width: none;
    margin-top: 18px;
  }
}

@media (max-width: 768px) {
  .corp-home {
    gap: 16px;
  }

  .hero-copy,
  .hero-visual,
  .panel {
    padding: 20px;
  }

  .hero-copy h1 {
    font-size: clamp(30px, 8vw, 42px);
  }

  .hero-copy p {
    font-size: 14px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions a {
    width: 100%;
  }

  .hero-image {
    min-height: 260px;
  }

  .logo-strip,
  .stats-card {
    padding: 16px;
  }

  .section-head {
    gap: 12px;
  }

  .solution-card,
  .highlight-card,
  .case-card,
  .investor-card {
    padding: 16px;
  }
}

@media (max-width: 640px) {
  .hero-copy,
  .hero-visual,
  .panel {
    padding: 16px;
  }

  .signal-card strong,
  .stats-card strong {
    font-size: 24px;
  }

  .logo-strip strong {
    font-size: 16px;
  }
}
</style>
