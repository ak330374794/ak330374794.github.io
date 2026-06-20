<template>
  <HousingLayout>
    <div class="shell page">
      <section class="hero panel">
        <div class="hero-copy">
          <span class="badge">房产找房与装修平台</span>
          <h1>{{ housingHero.title }}</h1>
          <p>{{ housingHero.subtitle }}</p>
          <div class="search-panel">
            <div class="search-tabs">
              <span class="active">买新房</span>
              <span>二手房</span>
              <span>租房</span>
              <span>装修</span>
            </div>
            <div class="search-box">
              <span>请输入城市 / 区域 / 地铁 / 小区 / 学区</span>
              <button type="button">搜索房源</button>
            </div>
          </div>
          <div class="tags">
            <em v-for="tag in housingHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="housingHero.image" :alt="housingHero.title" class="hero-image" />
          <article class="price-card">
            <span>本周热门小区均价</span>
            <strong>¥ 68,500 / 平</strong>
            <p>支持地图找房、历史成交、VR 看房和通勤圈展示，更接近房产平台首页视觉。</p>
          </article>
        </div>
      </section>

      <section class="stats">
        <article v-for="item in housingStats" :key="item.label" class="panel stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="entry-grid">
        <article v-for="item in housingCards" :key="item.title" class="entry-card">
          <img :src="item.image" :alt="item.title" />
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.meta }}</p>
          </div>
        </article>
      </section>

      <section class="grid">
        <section class="panel listing-panel">
          <div class="head">
            <div>
              <span>Property</span>
              <h2>房产交易服务</h2>
            </div>
            <p>更像链家、贝壳类房源首页的买房决策入口，强调房源真实性、交易流程与小区信息。</p>
          </div>
          <div class="list two-column">
            <article v-for="item in housingPropertyPanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="col side">
          <section class="panel">
            <div class="head">
              <div>
                <span>Design</span>
                <h2>装修家居服务</h2>
              </div>
            </div>
            <div class="list">
              <article v-for="item in housingDesignPanels" :key="item.title" class="info-card warm-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>

          <section class="panel district-panel">
            <div class="head">
              <div>
                <span>District</span>
                <h2>热门板块</h2>
              </div>
            </div>
            <div class="district-list">
              <article class="district-card">
                <strong>滨江新城</strong>
                <p>地铁直达 · 新房热度上涨 18%</p>
              </article>
              <article class="district-card">
                <strong>科技园</strong>
                <p>改善型三居成交活跃 · 租售比稳定</p>
              </article>
              <article class="district-card">
                <strong>城西青年社区</strong>
                <p>整租公寓集中 · 通勤圈 30 分钟内</p>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </HousingLayout>
</template>

<script setup>
import HousingLayout from '@/components/housing/HousingLayout.vue'
import { housingCards, housingDesignPanels, housingHero, housingPropertyPanels, housingStats } from '@/data/housingSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.col,
.list,
.entry-grid,
.district-list {
  display: grid;
  gap: 18px;
}

.panel {
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
  background: radial-gradient(circle at top right, rgba(234, 88, 12, 0.14), transparent 24%), linear-gradient(135deg, #fff7ed, #ffffff 45%, #fffbf6);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.stat-card strong,
.head h2,
.entry-card strong,
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
.entry-card p,
.price-card p,
.info-card p {
  color: #64748b;
}

.hero-copy > p {
  margin-top: 18px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.search-panel {
  margin-top: 28px;
  padding: 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: inset 0 0 0 1px rgba(234, 88, 12, 0.08);
}

.search-tabs,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-tabs span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #64748b;
  background: #fff2eb;
  font-size: 12px;
  font-weight: 600;
}

.search-tabs .active {
  color: #fff;
  background: #ea580c;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
  padding: 12px 12px 12px 16px;
  border: 1px solid rgba(234, 88, 12, 0.08);
  border-radius: 999px;
  background: #fff;
}

.search-box span {
  color: #94a3b8;
  font-size: 14px;
}

.search-box button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #ea580c, #f97316);
  font-weight: 700;
}

.tags {
  margin-top: 20px;
}

.tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 12px;
  font-style: normal;
}

.hero-visual {
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 22px;
}

.price-card {
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

.price-card span,
.head span {
  display: inline-flex;
  color: #ea580c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.price-card strong {
  display: block;
  margin-top: 10px;
  color: #0f172a;
  font-size: 28px;
}

.price-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.stats {
  display: grid;
  gap: 16px;
}

.stats {
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

.entry-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.entry-card {
  display: grid;
  gap: 14px;
  padding: 16px;
  border: 1px solid rgba(15, 23, 42, 0.05);
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff, #fffbf7);
}

.entry-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 18px;
  object-fit: cover;
}

.entry-card strong {
  font-size: 20px;
}

.entry-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.7;
}

.grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
}

.panel {
  padding: 24px;
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

.two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 20px;
}

.list {
  margin-top: 18px;
}

.info-card {
  padding: 18px;
  border-radius: 22px;
  background: #f8fafc;
}

.warm-card,
.district-card {
  background: linear-gradient(180deg, #ffffff, #fff7ed);
}

.info-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.district-card {
  padding: 18px;
  border-radius: 22px;
}

.district-card strong {
  color: #0f172a;
}

.district-card p {
  margin-top: 8px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .hero,
  .grid,
  .stats,
  .entry-grid,
  .two-column {
    grid-template-columns: 1fr;
  }

  .price-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }

  .search-box {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
