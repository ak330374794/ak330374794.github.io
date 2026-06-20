<template>
  <SportsLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">赛事直播中心</span>
          <h1>赛程、比分、数据和回放，构建完整赛事内容中心。</h1>
          <p>支持多场次赛程日历、实时比分、解说直播和关键事件提醒，更接近体育直播平台的赛事频道页。</p>
        </div>
        <article class="scoreboard">
          <span>NBA 季后赛</span>
          <strong>湖人 76 : 72 勇士</strong>
          <p>第三节 04:21 · 詹姆斯 24 分 · 库里 19 分</p>
        </article>
      </section>

      <section class="match-strip">
        <article class="match-card">足球</article>
        <article class="match-card">篮球</article>
        <article class="match-card">网球</article>
        <article class="match-card">电竞</article>
      </section>

      <section class="grid">
        <article v-for="item in sportsLivePanels" :key="item.title" class="panel card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </SportsLayout>
</template>

<script setup>
import SportsLayout from '@/components/sports/SportsLayout.vue'
import { sportsLivePanels } from '@/data/sportsSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.match-strip {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hero,
.card {
  padding: 24px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) 340px;
  gap: 18px;
  background: linear-gradient(135deg, #f0fdf4, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.card strong,
.scoreboard strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p,
.scoreboard p {
  color: #64748b;
}

.hero p,
.card p,
.scoreboard p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.85;
}

.scoreboard {
  padding: 18px;
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff, #f0fdf4);
}

.scoreboard span {
  display: inline-flex;
  color: #15803d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scoreboard strong {
  display: block;
  margin-top: 12px;
  font-size: 28px;
}

.match-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.match-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f0fdf4);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
  font-weight: 700;
}

.grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .hero,
  .match-strip,
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
