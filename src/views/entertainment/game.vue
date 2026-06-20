<template>
  <EntertainmentLayout>
    <div class="ent-shell game-page">
      <section class="hero-panel">
        <img :src="gameFeature.image" :alt="gameFeature.title" class="hero-image" />
        <div class="hero-overlay">
          <span class="hero-badge">游戏官网</span>
          <h1>{{ gameFeature.title }}</h1>
          <p>{{ gameFeature.subtitle }}</p>
          <div class="hero-tags">
            <em v-for="tag in gameFeature.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>核心功能区</h2>
            <p>资讯、下载、活动和赛事直播是游戏官网首页的四个高频入口。</p>
          </div>
        </div>
        <div class="panel-grid">
          <article v-for="item in gamePanels" :key="item.title" class="info-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>
    </div>
  </EntertainmentLayout>
</template>

<script setup>
import EntertainmentLayout from '@/components/entertainment/EntertainmentLayout.vue'
import { gameFeature, gamePanels } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.game-page {
  display: grid;
  gap: 18px;
}

.hero-panel,
.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero-panel {
  position: relative;
  overflow: hidden;
  min-height: 460px;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 460px;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  padding: 30px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.84));
}

.hero-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  color: #7dd3fc;
  background: rgba(125, 211, 252, 0.12);
  font-size: 11px;
  font-weight: 700;
}

.hero-overlay h1,
.panel-head h2,
.info-card strong {
  color: #fff;
}

.hero-overlay h1 {
  font-size: clamp(36px, 4.6vw, 62px);
  line-height: 1.06;
}

.hero-overlay p,
.panel-head p,
.info-card p {
  color: rgba(255, 255, 255, 0.68);
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-tags em {
  padding: 7px 12px;
  border-radius: 999px;
  color: #7dd3fc;
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
  font-style: normal;
}

.panel {
  padding: 20px;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.info-card {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
}

.info-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-panel {
    min-height: 380px;
  }

  .hero-image {
    min-height: 380px;
  }

  .hero-overlay,
  .panel,
  .info-card {
    padding: 18px;
  }

  .hero-overlay h1 {
    font-size: clamp(28px, 8vw, 40px);
  }

  .hero-overlay p,
  .info-card p {
    font-size: 12px;
    line-height: 1.75;
  }
}

@media (max-width: 640px) {
  .hero-panel {
    min-height: 320px;
  }

  .hero-image {
    min-height: 320px;
  }

  .hero-overlay,
  .panel,
  .info-card {
    padding: 16px;
  }

  .hero-tags {
    gap: 8px;
  }

  .hero-tags em {
    padding: 6px 10px;
    font-size: 11px;
  }
}
</style>
