<template>
  <DevtechLayout>
    <div class="shell page">
      <section class="hero panel">
        <div class="hero-copy">
          <span class="badge">DEVELOPER PLATFORM</span>
          <h1>{{ devtechHero.title }}</h1>
          <p>{{ devtechHero.subtitle }}</p>
          <div class="terminal-card">
            <span>$ npm create ecosystem</span>
            <strong>repo / api / tools / docs</strong>
            <p>更像 GitHub、Vercel、Stripe Docs 这类开发者平台首页，先突出生态与能力，再承接工具入口。</p>
          </div>
          <div class="tags">
            <em v-for="tag in devtechHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="devtechHero.image" :alt="devtechHero.title" class="hero-image" />
        </div>
      </section>

      <section class="stats">
        <article v-for="item in devtechStats" :key="item.label" class="panel stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="board-grid">
        <section class="panel dark-panel">
          <div class="head">
            <div>
              <span>Open Source</span>
              <h2>开源协作工作区</h2>
            </div>
          </div>
          <div class="list">
            <article v-for="item in devtechOpenSourcePanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <section class="panel dark-panel">
          <div class="head">
            <div>
              <span>API Platform</span>
              <h2>API 服务平台</h2>
            </div>
          </div>
          <div class="list">
            <article v-for="item in devtechApiPanels" :key="item.title" class="info-card blue-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>
      </section>

      <section class="panel dark-panel tools-panel">
        <div class="head">
          <div>
            <span>Tools</span>
            <h2>开发者工具矩阵</h2>
          </div>
          <p>在线 IDE、代码运行、JSON 工具和压测服务，以更接近开发者门户的方式聚合到首页。</p>
        </div>
        <div class="card-grid">
          <DevtechCard v-for="item in devtechToolCards" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </DevtechLayout>
</template>

<script setup>
import DevtechCard from '@/components/devtech/DevtechCard.vue'
import DevtechLayout from '@/components/devtech/DevtechLayout.vue'
import { devtechApiPanels, devtechHero, devtechOpenSourcePanels, devtechStats, devtechToolCards } from '@/data/devtechSite'
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
.board-grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  overflow: hidden;
  padding: 32px;
  background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.14), transparent 24%),
    linear-gradient(135deg, rgba(8, 15, 31, 0.96), rgba(15, 23, 42, 0.94));
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

h1,
.stat-card strong,
.head h2,
.terminal-card strong,
.info-card strong {
  color: #fff;
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
.terminal-card p,
.info-card p {
  color: rgba(255, 255, 255, 0.68);
}

.hero-copy > p {
  margin-top: 18px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.terminal-card {
  margin-top: 28px;
  padding: 18px;
  border: 1px solid rgba(56, 189, 248, 0.14);
  border-radius: 24px;
  background: rgba(2, 6, 23, 0.74);
}

.terminal-card span {
  display: inline-flex;
  color: #67e8f9;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 13px;
}

.terminal-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
  font-family: Consolas, 'Courier New', monospace;
}

.terminal-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 22px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  font-size: 12px;
  font-style: normal;
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

.board-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.dark-panel {
  padding: 24px;
}

.head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.head span {
  display: inline-flex;
  color: #38bdf8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.list {
  margin-top: 20px;
}

.info-card {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
}

.blue-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(8, 47, 73, 0.88));
}

.info-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.tools-panel .head p {
  max-width: 420px;
  font-size: 14px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

@media (max-width: 1080px) {
  .hero,
  .stats,
  .board-grid,
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
