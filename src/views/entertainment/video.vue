<template>
  <EntertainmentLayout>
    <div class="ent-shell video-page">
      <section class="hero-banner panel">
        <img :src="featuredShows[0].image" :alt="featuredShows[0].title" class="hero-cover" />
        <div class="hero-overlay">
          <span class="hero-badge">长视频平台</span>
          <h1>{{ featuredShows[0].title }}</h1>
          <p>{{ featuredShows[0].meta }} · 支持 4K / 杜比 / 多字幕 / 投屏 / 倍速播放</p>
          <div class="hero-actions">
            <button type="button">立即播放</button>
            <button type="button" class="secondary">加入追剧</button>
          </div>
        </div>
      </section>

      <section class="channel-strip">
        <article class="channel-card">电视剧</article>
        <article class="channel-card">电影</article>
        <article class="channel-card">综艺</article>
        <article class="channel-card">动漫</article>
      </section>

      <section class="panel" v-for="row in videoRows" :key="row.title">
        <div class="panel-head">
          <div>
            <h2>{{ row.title }}</h2>
            <p>续播推荐、相似片单与会员抢先内容。</p>
          </div>
        </div>
        <div class="video-grid">
          <EntertainmentPosterCard v-for="item in row.items" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </EntertainmentLayout>
</template>

<script setup>
import EntertainmentLayout from '@/components/entertainment/EntertainmentLayout.vue'
import EntertainmentPosterCard from '@/components/entertainment/EntertainmentPosterCard.vue'
import { featuredShows, videoRows } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.video-page {
  display: grid;
  gap: 18px;
}

.channel-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.channel-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 22px;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero-banner {
  position: relative;
  overflow: hidden;
  min-height: 460px;
}

.hero-cover {
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
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.82));
}

.hero-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  color: #f5c451;
  background: rgba(245, 196, 81, 0.12);
  font-size: 11px;
  font-weight: 700;
}

.hero-overlay h1,
.panel-head h2 {
  color: #fff;
}

.hero-overlay h1 {
  font-size: clamp(36px, 4.6vw, 62px);
  line-height: 1.06;
}

.hero-overlay p,
.panel-head p {
  color: rgba(255, 255, 255, 0.68);
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.hero-actions button {
  min-width: 112px;
  min-height: 44px;
  border: 0;
  border-radius: 22px;
  color: #111827;
  background: linear-gradient(90deg, #f5c451, #f59e0b);
  font-weight: 700;
}

.hero-actions .secondary {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}

.panel {
  padding: 20px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 1080px) {
  .channel-strip,
  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
