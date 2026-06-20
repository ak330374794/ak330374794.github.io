<template>
  <NewsSiteLayout>
    <div class="news-shell news-home">
      <section class="hero-grid">
        <article class="hero-main">
          <span class="hero-kicker">{{ homeHero.title }}</span>
          <h1>{{ homeHero.headline }}</h1>
          <p>{{ homeHero.summary }}</p>

          <div class="hero-actions">
            <RouterLink class="hero-primary" :to="{ name: 'news-channel', params: { slug: 'headline' } }">进入头条频道</RouterLink>
            <RouterLink class="hero-secondary" :to="{ name: 'news-search' }">查看热搜</RouterLink>
          </div>

          <div class="hero-tags">
            <span v-for="item in homeHero.featured" :key="item">{{ item }}</span>
          </div>
        </article>

        <aside class="hero-side">
          <article v-for="item in headlineCards" :key="item.title" class="headline-card">
            <span>{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
            <small>{{ item.note }}</small>
          </article>
        </aside>
      </section>

      <section class="story-board panel">
        <div class="section-head">
          <h2>头条速览</h2>
          <RouterLink :to="{ name: 'news-channel', params: { slug: 'headline' } }">进入头条频道</RouterLink>
        </div>
        <div class="story-grid">
          <article v-for="item in topStoryBoard" :key="item.title" class="story-card">
            <span>{{ item.tag }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>

      <section class="content-grid">
        <div class="left-column">
          <section class="panel flash-panel">
            <div class="section-head">
              <h2>滚动快讯</h2>
              <span class="section-meta">24 小时更新</span>
            </div>
            <div class="flash-list">
              <article v-for="item in quickFlashes" :key="`${item.time}-${item.title}`" class="flash-item">
                <span class="flash-time">{{ item.time }}</span>
                <div>
                  <strong>{{ item.tag }}</strong>
                  <p>{{ item.title }}</p>
                </div>
              </article>
            </div>
          </section>

          <section class="panel">
            <div class="section-head">
              <h2>推荐信息流</h2>
              <RouterLink :to="{ name: 'news-channel', params: { slug: 'headline' } }">全部内容</RouterLink>
            </div>
            <div class="feed-list">
              <RouterLink v-for="item in newsFeed" :key="item.slug" class="feed-card" :to="{ name: 'news-article', params: { slug: item.slug } }">
                <div class="feed-copy">
                  <span class="feed-channel">{{ channelName(item.channel) }}</span>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.summary }}</p>
                  <small>{{ item.author }} · {{ item.date }}</small>
                </div>
                <img :src="getArticleImage(item.title, item.channel)" :alt="item.title" class="feed-image" />
              </RouterLink>
            </div>
          </section>

          <section class="panel feature-panel">
            <div class="section-head">
              <h2>深度栏目</h2>
            </div>
            <div class="column-grid">
              <article v-for="item in featuredColumns" :key="item.name" class="column-card">
                <span>{{ item.count }}</span>
                <h3>{{ item.name }}</h3>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>

          <section class="panel video-panel">
            <div class="section-head">
              <h2>视频资讯</h2>
              <span class="section-meta">多媒体内容</span>
            </div>
            <div class="video-grid">
              <article v-for="item in videoHighlights" :key="item.title" class="video-card">
                <div class="video-thumb">
                  <span>{{ item.label }}</span>
                  <strong>{{ item.duration }}</strong>
                </div>
                <h3>{{ item.title }}</h3>
              </article>
            </div>
          </section>
        </div>

        <aside class="right-column">
          <section v-for="list in rankingLists" :key="list.title" class="panel ranking-panel">
            <div class="section-head">
              <h2>{{ list.title }}</h2>
            </div>
            <div class="ranking-list">
              <article v-for="(item, index) in list.items" :key="item.title" class="ranking-item">
                <strong>{{ index + 1 }}</strong>
                <div>
                  <h3>{{ item.title }}</h3>
                  <small>{{ item.source }} · {{ item.heat }}</small>
                </div>
              </article>
            </div>
          </section>

          <section class="panel creator-panel">
            <div class="section-head">
              <h2>创作者专区</h2>
              <RouterLink :to="{ name: 'news-creator' }">工作台</RouterLink>
            </div>
            <div class="creator-list">
              <article v-for="item in creators" :key="item.name" class="creator-card">
                <div class="avatar">{{ item.name.slice(0, 1) }}</div>
                <div>
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.role }}</p>
                  <small>{{ item.metric }}</small>
                </div>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import {
  creators,
  featuredColumns,
  headlineCards,
  homeHero,
  newsChannels,
  newsFeed,
  quickFlashes,
  rankingLists,
  topStoryBoard,
  videoHighlights,
} from '@/data/newsSite'

const channelName = (slug) => newsChannels.find((item) => item.slug === slug)?.name || '频道'

const getArticleImage = () => 'https://picsum.photos/400'
</script>

<style scoped>
.news-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.news-home {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.hero-grid,
.content-grid,
.story-grid {
  display: grid;
  gap: 20px;
}

.hero-grid {
  grid-template-columns: minmax(0, 1.5fr) 340px;
}

.content-grid {
  grid-template-columns: minmax(0, 1fr) 340px;
}

.story-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.hero-main,
.panel,
.headline-card {
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.hero-main {
  padding: 24px 28px;
  background: #fff;
}

.hero-kicker {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-main h1 {
  margin-top: 18px;
  color: #111;
  font-size: clamp(34px, 4.2vw, 54px);
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.hero-main p {
  max-width: 700px;
  margin-top: 14px;
  color: #666;
  font-size: 14px;
  line-height: 1.85;
}

.hero-actions,
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-primary,
.hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
}

.hero-primary {
  color: #fff;
  background: #c7000b;
}

.hero-secondary {
  color: #333;
  border: 1px solid #ddd;
}

.hero-tags span {
  padding: 8px 12px;
  border-radius: 2px;
  color: #666;
  background: #f7f7f7;
  font-size: 12px;
}

.hero-side {
  display: grid;
  gap: 16px;
}

.headline-card {
  padding: 18px;
}

.headline-card span,
.feed-channel {
  color: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.headline-card h3 {
  margin-top: 10px;
  color: #111;
  font-size: 20px;
  line-height: 1.3;
}

.headline-card small {
  display: block;
  margin-top: 10px;
  color: #999;
  font-size: 12px;
}

.left-column,
.right-column {
  display: grid;
  gap: 20px;
  align-content: start;
}

.panel {
  padding: 20px;
}

.story-card {
  padding: 18px;
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #fafafa;
}

.story-card span {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 2px;
  color: #c7000b;
  background: #fff1f1;
  font-size: 11px;
  font-weight: 700;
}

.story-card h3 {
  margin-top: 12px;
  color: #111;
  font-size: 20px;
  line-height: 1.45;
}

.story-card p {
  margin-top: 10px;
  color: #666;
  font-size: 13px;
  line-height: 1.8;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-head h2 {
  color: #111;
  font-size: 24px;
  line-height: 1.2;
}

.section-head a {
  color: #c7000b;
  font-size: 13px;
  font-weight: 600;
}

.section-meta {
  color: #999;
  font-size: 12px;
}

.feed-list,
.ranking-list,
.creator-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.flash-list,
.video-grid {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.flash-item {
  display: grid;
  grid-template-columns: 68px 1fr;
  gap: 14px;
  align-items: start;
  padding: 16px 0;
  border-bottom: 1px solid rgba(8, 23, 51, 0.06);
}

.flash-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.flash-time {
  color: #c7000b;
  font-size: 13px;
  font-weight: 700;
}

.flash-item strong {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 2px;
  color: #c7000b;
  background: #fff1f1;
  font-size: 11px;
}

.flash-item p {
  margin-top: 8px;
  color: #444;
  font-size: 14px;
  line-height: 1.8;
}

.feed-card {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #efefef;
}

.feed-card:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.feed-copy h3,
.ranking-item h3,
.creator-card h3,
.column-card h3 {
  color: #111;
}

.feed-copy h3 {
  margin-top: 10px;
  font-size: 26px;
  line-height: 1.25;
}

.feed-copy p,
.column-card p,
.creator-card p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.feed-copy small,
.ranking-item small,
.creator-card small,
.column-card span {
  display: block;
  margin-top: 10px;
  color: #999;
  font-size: 12px;
}

.feed-image {
  width: 100%;
  height: 150px;
  border-radius: 18px;
  object-fit: cover;
  background: #d8e0ea;
}

.column-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.column-card {
  padding: 20px;
  border-radius: 4px;
  background: #fafafa;
}

.video-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.video-card {
  display: grid;
  gap: 12px;
}

.video-thumb {
  position: relative;
  min-height: 170px;
  padding: 16px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(8, 23, 51, 0.18), rgba(8, 23, 51, 0.72)), url('https://picsum.photos/400') center/cover no-repeat;
}

.video-thumb span,
.video-thumb strong {
  color: #f8fbff;
}

.video-thumb span {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.video-thumb strong {
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-size: 14px;
}

.video-card h3 {
  color: #172033;
  font-size: 20px;
  line-height: 1.45;
}

.ranking-item,
.creator-card {
  display: grid;
  gap: 12px;
}

.ranking-item {
  grid-template-columns: 24px 1fr;
}

.ranking-item strong {
  color: #c7000b;
  font-size: 20px;
  line-height: 1.2;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #fff;
  background: #c7000b;
  font-weight: 700;
}

.creator-card {
  grid-template-columns: 44px 1fr;
}

@media (max-width: 1080px) {
  .hero-grid,
  .content-grid,
  .column-grid,
  .video-grid,
  .story-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .feed-card {
    grid-template-columns: 1fr;
  }

  .hero-main {
    padding: 24px;
  }

  .section-head,
  .hero-actions,
  .creator-card {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-primary,
  .hero-secondary {
    width: 100%;
  }

  .headline-card,
  .story-card,
  .panel {
    padding: 16px;
  }

  .flash-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .feed-image {
    width: 100%;
    min-height: 180px;
    object-fit: cover;
  }
}

@media (max-width: 640px) {
  .news-home {
    gap: 12px;
    padding-top: 12px;
  }

  .hero-main {
    padding: 18px;
  }

  .hero-main h1 {
    font-size: clamp(28px, 8vw, 36px);
  }

  .headline-card h3,
  .story-card h3,
  .video-card h3 {
    font-size: 18px;
  }

  .ranking-item,
  .creator-card {
    grid-template-columns: 1fr;
  }
}
</style>
