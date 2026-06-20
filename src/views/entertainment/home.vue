<template>
  <EntertainmentLayout>
    <div class="ent-shell ent-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">影音娱乐类案例</span>
          <h1>{{ entertainmentHero.title }}</h1>
          <p>{{ entertainmentHero.subtitle }}</p>
          <div class="hero-actions">
            <button type="button">立即开播</button>
            <button type="button" class="ghost">片单推荐</button>
          </div>
          <div class="hero-tags">
            <em v-for="tag in entertainmentHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="entertainmentHero.image" :alt="entertainmentHero.title" class="hero-image" />
          <article class="badge-card">
            <span>本周热播榜</span>
            <strong>TOP 1《城市边界》</strong>
            <p>更像长视频平台首页的焦点轮播区与内容运营横幅。</p>
          </article>
        </div>
      </section>

      <section class="channel-strip">
        <article class="channel-card">电影</article>
        <article class="channel-card">剧集</article>
        <article class="channel-card">综艺</article>
        <article class="channel-card">动漫</article>
        <article class="channel-card">音乐</article>
        <article class="channel-card">游戏</article>
      </section>

      <section class="stats-row">
        <article v-for="item in entertainmentStats" :key="item.label" class="stats-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="content-grid">
        <div class="left-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>重磅热播</h2>
                <p>围绕剧集、电影和综艺内容构建强运营首页。</p>
              </div>
            </div>
            <div class="poster-grid">
              <EntertainmentPosterCard v-for="item in featuredShows" :key="item.title" :item="item" />
            </div>
          </section>

          <section class="panel" v-for="row in videoRows" :key="row.title">
            <div class="panel-head">
              <div>
                <h2>{{ row.title }}</h2>
                <p>长视频推荐流与会员片单组合展示。</p>
              </div>
            </div>
            <div class="mini-grid">
              <EntertainmentPosterCard v-for="item in row.items" :key="item.title" :item="item" />
            </div>
          </section>
        </div>

        <aside class="right-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>音乐发现</h2>
                <p>承接每日推荐、排行榜和歌单推荐。</p>
              </div>
            </div>
            <div class="music-board-list">
              <article v-for="board in musicBoards" :key="board.title" class="music-card">
                <strong>{{ board.title }}</strong>
                <span v-for="song in board.songs.slice(0, 4)" :key="song">{{ song }}</span>
              </article>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>游戏焦点</h2>
                <p>游戏宣传、下载入口、版本资讯和赛事直播。</p>
              </div>
            </div>
            <div class="game-card">
              <img :src="gameFeature.image" :alt="gameFeature.title" />
              <strong>{{ gameFeature.title }}</strong>
              <p>{{ gameFeature.subtitle }}</p>
              <div class="hero-tags game-tags">
                <em v-for="tag in gameFeature.tags" :key="tag">{{ tag }}</em>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </EntertainmentLayout>
</template>

<script setup>
import EntertainmentLayout from '@/components/entertainment/EntertainmentLayout.vue'
import EntertainmentPosterCard from '@/components/entertainment/EntertainmentPosterCard.vue'
import { entertainmentHero, entertainmentStats, featuredShows, gameFeature, musicBoards, videoRows } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.ent-home,
.content-grid,
.left-column,
.right-column,
.music-board-list {
  display: grid;
  gap: 18px;
}

.hero-panel,
.stats-card,
.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
  overflow: hidden;
}

.hero-copy {
  padding: 28px;
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #f5c451;
  background: rgba(245, 196, 81, 0.12);
  font-size: 11px;
  font-weight: 700;
}

.hero-copy h1,
.panel-head h2,
.stats-card strong,
.music-card strong,
.game-card strong {
  color: #fff;
}

.hero-copy h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.6vw, 62px);
  line-height: 1.06;
}

.hero-copy p,
.panel-head p,
.stats-card span,
.music-card span,
.game-card p {
  color: rgba(255, 255, 255, 0.66);
}

.hero-copy p {
  margin-top: 16px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.85;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.hero-tags em {
  padding: 7px 12px;
  border-radius: 999px;
  color: #f5c451;
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
  font-style: normal;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
}

.stats-row,
.poster-grid,
.mini-grid {
  display: grid;
  gap: 16px;
}

.stats-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stats-card {
  padding: 18px;
  text-align: center;
}

.stats-card strong {
  display: block;
  font-size: 32px;
}

.stats-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.panel {
  padding: 20px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-actions button {
  min-height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #111827;
  background: #f5c451;
  font-weight: 700;
}

.hero-actions .ghost {
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: transparent;
}

.hero-visual {
  position: relative;
}

.badge-card {
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 260px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  backdrop-filter: blur(18px);
  background: rgba(15, 23, 42, 0.7);
}

.badge-card span {
  display: inline-flex;
  color: #f5c451;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.badge-card strong {
  display: block;
  margin-top: 10px;
  color: #fff;
  font-size: 22px;
}

.badge-card p {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.8;
}

.channel-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
}

.channel-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 22px;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
}

.content-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.85fr);
}

.poster-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mini-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.music-card,
.game-card {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
}

.music-card span {
  display: block;
  margin-top: 10px;
  font-size: 13px;
}

.game-card img {
  width: 100%;
  border-radius: 18px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.game-card strong {
  display: block;
  margin-top: 16px;
  font-size: 24px;
}

.game-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.game-tags {
  margin-top: 16px;
}

@media (max-width: 1080px) {
  .hero-panel,
  .content-grid,
  .stats-row,
  .poster-grid,
  .mini-grid,
  .channel-strip {
    grid-template-columns: 1fr;
  }

  .badge-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }
}
</style>
