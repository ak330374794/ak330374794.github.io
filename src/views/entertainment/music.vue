<template>
  <EntertainmentLayout>
    <div class="ent-shell music-page">
      <section class="panel hero-panel">
        <div>
          <span class="hero-badge">音乐网站</span>
          <h1>千万曲库、排行榜、歌单和无损音质，承接发现与播放全链路。</h1>
          <p>从每日推荐、热歌榜到一起听、歌单收藏和无损下载，把音乐发现、播放和会员权益聚合在一个音乐馆首页。</p>
        </div>
      </section>

      <section class="content-grid">
        <div class="left-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>歌单推荐</h2>
                <p>支持官方歌单、用户自建歌单和氛围场景推荐。</p>
              </div>
            </div>
            <div class="playlist-grid">
              <article v-for="item in playlistCards" :key="item.title" class="playlist-card">
                <img :src="item.image" :alt="item.title" />
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>
        </div>

        <aside class="right-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>榜单与推荐</h2>
                <p>飙升榜、新歌榜和氛围歌单组合展示。</p>
              </div>
            </div>
            <div class="board-list">
              <article v-for="board in musicBoards" :key="board.title" class="board-card">
                <strong>{{ board.title }}</strong>
                <span v-for="song in board.songs" :key="song">{{ song }}</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </EntertainmentLayout>
</template>

<script setup>
import EntertainmentLayout from '@/components/entertainment/EntertainmentLayout.vue'
import { musicBoards, playlistCards } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.music-page,
.content-grid,
.board-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, rgba(76, 29, 149, 0.4), rgba(15, 23, 42, 0.9));
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #c4b5fd;
  background: rgba(196, 181, 253, 0.12);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2,
.playlist-card strong,
.board-card strong {
  color: #fff;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.panel-head p,
.playlist-card p,
.board-card span {
  color: rgba(255, 255, 255, 0.68);
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.content-grid {
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.playlist-card,
.board-card {
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
}

.playlist-card img {
  width: 100%;
  border-radius: 18px;
  aspect-ratio: 1;
  object-fit: cover;
}

.playlist-card strong {
  display: block;
  margin-top: 14px;
  font-size: 22px;
}

.playlist-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
}

.board-card span {
  display: block;
  margin-top: 10px;
  font-size: 13px;
}

@media (max-width: 1080px) {
  .content-grid,
  .playlist-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .panel,
  .playlist-card,
  .board-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .playlist-card strong {
    font-size: 18px;
  }

  .playlist-card p,
  .board-card span {
    font-size: 12px;
    line-height: 1.7;
  }
}

@media (max-width: 640px) {
  .panel,
  .playlist-card,
  .board-card {
    padding: 16px;
    border-radius: 20px;
  }

  .hero-panel p {
    font-size: 13px;
    line-height: 1.75;
  }

  .playlist-card img {
    border-radius: 16px;
  }
}
</style>
