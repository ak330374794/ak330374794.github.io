<template>
  <SportsLayout>
    <div class="shell page">
      <section class="hero panel">
        <div class="hero-copy">
          <span class="badge">SPORTS LIVE + FITNESS</span>
          <h1>{{ sportsHero.title }}</h1>
          <p>{{ sportsHero.subtitle }}</p>
          <div class="hero-actions">
            <button type="button">赛事直播</button>
            <button type="button" class="ghost">开始训练</button>
          </div>
          <div class="tags">
            <em v-for="tag in sportsHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="sportsHero.image" :alt="sportsHero.title" class="hero-image" />
          <article class="score-card">
            <span>焦点赛事</span>
            <strong>76 : 72</strong>
            <p>半场直播中，支持比分、事件流和技术统计，首页结构更接近体育直播门户。</p>
          </article>
        </div>
      </section>

      <section class="stats">
        <article v-for="item in sportsStats" :key="item.label" class="panel stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="ticker-panel">
        <article v-for="item in sportsLivePanels" :key="item.title" class="ticker-card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>

      <section class="grid">
        <section class="panel course-panel">
          <div class="head">
            <div>
              <span>Training</span>
              <h2>健身课程与训练计划</h2>
            </div>
            <p>更像 Keep / 训练类产品首页，突出计划、难度、动作和跟练入口。</p>
          </div>
          <div class="card-grid">
            <SportsCard v-for="item in sportsCourseCards" :key="item.title" :item="item" />
          </div>
        </section>

        <aside class="col side">
          <section class="panel">
            <div class="head">
              <div>
                <span>Community</span>
                <h2>运动社区</h2>
              </div>
            </div>
            <div class="list">
              <article v-for="item in sportsCommunityPanels" :key="item.title" class="info-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>

          <section class="panel challenge-panel">
            <div class="head">
              <div>
                <span>Challenge</span>
                <h2>本周挑战</h2>
              </div>
            </div>
            <div class="challenge-list">
              <article class="challenge-card">
                <strong>100 天跑步挑战</strong>
                <p>累计里程 42 公里，当前完成度 58%。</p>
              </article>
              <article class="challenge-card">
                <strong>28 天减脂计划</strong>
                <p>今日剩余任务：拉伸 15 分钟，饮食打卡 1 次。</p>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </SportsLayout>
</template>

<script setup>
import SportsCard from '@/components/sports/SportsCard.vue'
import SportsLayout from '@/components/sports/SportsLayout.vue'
import { sportsCommunityPanels, sportsCourseCards, sportsHero, sportsLivePanels, sportsStats } from '@/data/sportsSite'
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
.ticker-panel,
.challenge-list {
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
  background: radial-gradient(circle at top right, rgba(21, 128, 61, 0.14), transparent 24%), linear-gradient(135deg, #f0fdf4, #ffffff 48%, #f8fffb);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

h1,
.stat-card strong,
.head h2,
.score-card strong,
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
.score-card p,
.ticker-card p,
.info-card p {
  color: #64748b;
}

.hero-copy > p {
  margin-top: 18px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.hero-actions,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-actions {
  margin-top: 26px;
}

.hero-actions button {
  min-height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #15803d, #22c55e);
  font-weight: 700;
}

.hero-actions .ghost {
  color: #15803d;
  border: 1px solid rgba(21, 128, 61, 0.14);
  background: #fff;
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

.tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 12px;
  font-style: normal;
}

.score-card {
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 260px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.88);
}

.score-card span,
.head span {
  display: inline-flex;
  color: #15803d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.score-card strong {
  display: block;
  margin-top: 10px;
  font-size: 34px;
}

.score-card p {
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

.ticker-panel {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ticker-card {
  padding: 18px;
  border: 1px solid rgba(15, 23, 42, 0.05);
  border-radius: 22px;
  background: linear-gradient(180deg, #ffffff, #f6fff9);
}

.ticker-card p {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.8;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
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

.info-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.challenge-card {
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, #ffffff, #f0fdf4);
}

.challenge-card strong {
  color: #0f172a;
}

.challenge-card p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .hero,
  .grid,
  .stats,
  .ticker-panel,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .score-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }
}
</style>
