<template>
  <NewsSiteLayout>
    <div v-if="article" class="news-shell article-page">
      <article class="article-wrap">
        <header class="article-header">
          <div class="article-breadcrumb">
            <RouterLink :to="{ name: 'news-home' }">首页</RouterLink>
            <span>/</span>
            <RouterLink :to="{ name: 'news-channel', params: { slug: article.channel } }">{{ channelName(article.channel) }}</RouterLink>
            <span>/</span>
            <strong>正文</strong>
          </div>
          <span class="article-channel">{{ channelName(article.channel) }}</span>
          <h1>{{ article.title }}</h1>
          <p>{{ article.summary }}</p>
          <div class="article-meta">
            <span>{{ article.author }}</span>
            <span>{{ article.date }}</span>
            <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
          </div>
        </header>

        <div class="article-body">
          <p v-for="paragraph in article.content" :key="paragraph">{{ paragraph }}</p>
        </div>

        <section class="author-card">
          <div class="author-avatar">{{ article.author.slice(0, 1) }}</div>
          <div>
            <h2>{{ article.author }}</h2>
            <p>关注平台策略、信息架构与内容产品演进，持续输出资讯网站与内容生态相关观察。</p>
          </div>
        </section>

        <section class="comment-panel">
          <div class="panel-head">
            <h2>评论区</h2>
            <span>精选评论 {{ articleComments.length }}</span>
          </div>
          <div class="comment-list">
            <article v-for="item in articleComments" :key="`${item.user}-${item.time}`" class="comment-item">
              <div class="comment-avatar">{{ item.user.slice(0, 1) }}</div>
              <div>
                <div class="comment-meta">
                  <strong>{{ item.user }}</strong>
                  <span>{{ item.role }}</span>
                  <small>{{ item.time }}</small>
                </div>
                <p>{{ item.content }}</p>
              </div>
            </article>
          </div>
        </section>
      </article>

      <aside class="article-side">
        <section class="panel">
          <h2>24小时热榜</h2>
          <div class="recommend-list compact-list">
            <article v-for="(item, index) in relatedArticles" :key="`rank-${item.slug}`" class="rank-item">
              <strong>{{ index + 1 }}</strong>
              <RouterLink :to="{ name: 'news-article', params: { slug: item.slug } }">{{ item.title }}</RouterLink>
            </article>
          </div>
        </section>

        <section class="panel">
          <h2>相关推荐</h2>
          <div class="recommend-list">
            <RouterLink
              v-for="item in relatedArticles"
              :key="item.slug"
              :to="{ name: 'news-article', params: { slug: item.slug } }"
              class="recommend-item"
            >
              <h3>{{ item.title }}</h3>
              <small>{{ item.author }} · {{ item.date }}</small>
            </RouterLink>
          </div>
        </section>
      </aside>
    </div>

    <div v-else class="news-shell empty-state">
      <h1>文章不存在</h1>
      <RouterLink :to="{ name: 'news-home' }">返回资讯首页</RouterLink>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import { articleComments, getNewsArticle, newsChannels, newsFeed } from '@/data/newsSite'

const route = useRoute()
const article = computed(() => getNewsArticle(route.params.slug))
const relatedArticles = computed(() => newsFeed.filter((item) => item.slug !== route.params.slug).slice(0, 4))
const channelName = (slug) => newsChannels.find((item) => item.slug === slug)?.name || '频道'
</script>

<style scoped>
.news-shell {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
}

.article-page {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 16px;
  padding-top: 16px;
}

.article-wrap,
.panel {
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.article-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: #999;
  font-size: 12px;
}

.article-breadcrumb a {
  color: #666;
}

.article-breadcrumb strong {
  color: #333;
}

.article-channel {
  display: inline-flex;
  margin-top: 16px;
  padding: 4px 10px;
  border-radius: 2px;
  color: #fff;
  background: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.article-header h1 {
  margin-top: 18px;
  color: #111;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.25;
}

.article-header p {
  margin-top: 14px;
  color: #666;
  font-size: 15px;
  line-height: 1.85;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.article-meta span {
  padding: 0;
  color: #999;
  background: transparent;
  font-size: 12px;
}

.article-body {
  display: grid;
  gap: 20px;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid #efefef;
}

.article-body p {
  color: #222;
  font-size: 18px;
  line-height: 2;
  text-indent: 2em;
}

.author-card,
.comment-panel {
  margin-top: 28px;
  padding: 22px;
  border-radius: 4px;
  background: #fafafa;
}

.author-card {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  align-items: start;
}

.author-avatar,
.comment-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  background: #c7000b;
  font-weight: 700;
}

.author-avatar {
  width: 56px;
  height: 56px;
  font-size: 22px;
}

.author-card h2,
.panel-head h2 {
  color: #111;
  font-size: 24px;
}

.author-card p,
.comment-item p {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
  line-height: 1.85;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.panel-head span {
  color: #999;
  font-size: 12px;
}

.comment-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.comment-item {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid #ececec;
}

.comment-item:first-child {
  padding-top: 0;
  border-top: 0;
}

.comment-avatar {
  width: 42px;
  height: 42px;
  font-size: 16px;
}

.comment-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.comment-meta strong {
  color: #111;
  font-size: 14px;
}

.comment-meta span,
.comment-meta small {
  color: #999;
  font-size: 12px;
}

.panel h2 {
  color: #111;
  font-size: 24px;
}

.recommend-list {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.recommend-item {
  padding-bottom: 14px;
  border-bottom: 1px solid #efefef;
}

.recommend-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.recommend-item h3 {
  color: #111;
  font-size: 18px;
  line-height: 1.5;
}

.recommend-item small {
  display: block;
  margin-top: 8px;
  color: #999;
  font-size: 12px;
}

.compact-list {
  gap: 12px;
}

.rank-item {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #efefef;
}

.rank-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.rank-item strong {
  color: #c7000b;
  font-size: 18px;
  line-height: 1.3;
}

.rank-item a {
  color: #333;
  font-size: 14px;
  line-height: 1.7;
}

.empty-state {
  display: grid;
  gap: 14px;
}

@media (max-width: 960px) {
  .article-page {
    grid-template-columns: 1fr;
  }

  .author-card,
  .comment-item {
    grid-template-columns: 1fr;
  }
}
</style>
