<template>
  <NewsSiteLayout>
    <div class="news-shell channel-page">
      <section class="channel-hero">
        <div>
          <span class="channel-kicker">频道页</span>
          <h1>{{ channel.name }}</h1>
          <p>{{ channel.description }}</p>
        </div>
        <div class="channel-tabs">
          <RouterLink
            v-for="item in newsChannels"
            :key="item.slug"
            class="tab-item"
            :class="{ active: item.slug === channel.slug }"
            :to="{ name: 'news-channel', params: { slug: item.slug } }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </section>

      <section class="channel-layout">
        <div class="channel-main">
          <section class="panel focus-panel">
            <div class="focus-grid">
              <article class="focus-main-card">
                <span>{{ channel.name }}焦点</span>
                <h2>{{ articles[0]?.title || `${channel.name}频道焦点内容` }}</h2>
                <p>{{ articles[0]?.summary || channel.description }}</p>
                <RouterLink v-if="articles[0]" :to="{ name: 'news-article', params: { slug: articles[0].slug } }">查看详情</RouterLink>
              </article>

              <div class="special-grid">
                <article v-for="item in specials" :key="item.title" class="special-card">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.desc }}</p>
                </article>
              </div>
            </div>
          </section>

          <div class="channel-list panel">
            <div class="section-head">
              <h2>频道资讯</h2>
            </div>
            <div class="article-list">
              <RouterLink v-for="item in articles" :key="item.slug" class="article-row" :to="{ name: 'news-article', params: { slug: item.slug } }">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.summary }}</p>
                  <small>{{ item.author }} · {{ item.date }}</small>
                </div>
                <img :src="getArticleImage(item.title, item.channel)" :alt="item.title" class="row-image" />
              </RouterLink>
            </div>
          </div>
        </div>

        <aside class="panel channel-side">
          <div class="section-head">
            <h2>频道热读</h2>
          </div>
          <div class="side-list">
            <article v-for="item in rankingLists[0].items" :key="item.title" class="side-item">
              <h3>{{ item.title }}</h3>
              <small>{{ item.source }} · {{ item.heat }}</small>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import { getChannelArticles, getChannelSpecials, getNewsChannel, newsChannels, rankingLists } from '@/data/newsSite'

const route = useRoute()
const channel = computed(() => getNewsChannel(route.params.slug))
const articles = computed(() => getChannelArticles(route.params.slug))
const specials = computed(() => getChannelSpecials(route.params.slug))

const getArticleImage = () => 'https://picsum.photos/400'
</script>

<style scoped>
.news-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.channel-page {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.channel-hero,
.panel {
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.channel-kicker {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.channel-hero h1 {
  margin-top: 14px;
  color: #111;
  font-size: clamp(34px, 4vw, 48px);
}

.channel-hero p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.channel-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.tab-item {
  padding: 10px 14px;
  border-radius: 2px;
  color: #555;
  background: #f7f7f7;
  font-size: 13px;
  font-weight: 600;
}

.tab-item.active {
  color: #fff;
  background: #c7000b;
}

.channel-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
}

.channel-main,
.focus-grid,
.special-grid {
  display: grid;
  gap: 16px;
}

.focus-grid {
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
}

.focus-main-card,
.special-card {
  border: 1px solid #efefef;
  border-radius: 4px;
  background: #fafafa;
}

.focus-main-card {
  padding: 22px;
}

.focus-main-card span {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #c7000b;
  font-size: 11px;
  font-weight: 700;
}

.focus-main-card h2 {
  margin-top: 14px;
  color: #111;
  font-size: 32px;
  line-height: 1.28;
}

.focus-main-card p,
.special-card p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.focus-main-card a {
  display: inline-flex;
  margin-top: 16px;
  color: #c7000b;
  font-size: 14px;
  font-weight: 600;
}

.special-card {
  padding: 18px;
}

.special-card h3 {
  color: #111;
  font-size: 20px;
  line-height: 1.45;
}

.section-head h2 {
  color: #111;
  font-size: 24px;
}

.article-list,
.side-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.article-row {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid #efefef;
}

.article-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.article-row h3,
.side-item h3 {
  color: #111;
}

.article-row h3 {
  font-size: 28px;
  line-height: 1.25;
}

.article-row p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.article-row small,
.side-item small {
  display: block;
  margin-top: 10px;
  color: #999;
  font-size: 12px;
}

.row-image {
  width: 100%;
  height: 136px;
  border-radius: 18px;
  object-fit: cover;
  background: #d8e0ea;
}

.side-item {
  padding-bottom: 14px;
  border-bottom: 1px solid #efefef;
}

.side-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

@media (max-width: 960px) {
  .channel-layout,
  .article-row,
  .focus-grid {
    grid-template-columns: 1fr;
  }
}
</style>
