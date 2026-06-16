<template>
  <NewsSiteLayout>
    <div class="news-shell search-page">
      <section class="search-hero">
        <div class="search-bar">
          <input v-model="keyword" type="text" placeholder="搜索 AI 搜索、创作者收益、频道改版..." />
          <button type="button">搜索</button>
        </div>
        <div class="trend-tags quick-tags">
          <button v-for="item in searchTrends" :key="item" type="button" @click="keyword = item">{{ item }}</button>
        </div>
      </section>

      <section class="result-layout">
        <div class="result-panel">
          <div class="filter-bar">
            <span class="filter-item active">综合</span>
            <span class="filter-item">最新</span>
            <span class="filter-item">热度</span>
            <span class="filter-item">文章</span>
            <span class="filter-item">作者</span>
            <span class="filter-item">专题</span>
          </div>

          <div class="section-head">
            <h2>搜索结果</h2>
            <span>{{ filtered.length }} 条内容</span>
          </div>

          <div class="result-list">
            <RouterLink v-for="item in filtered" :key="item.slug" class="result-item" :to="{ name: 'news-article', params: { slug: item.slug } }">
              <span>{{ channelName(item.channel) }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <small>{{ item.author }} · {{ item.date }}</small>
            </RouterLink>
          </div>
        </div>

        <aside class="result-side">
          <section class="side-panel">
            <h2>热门搜索</h2>
            <div class="side-tags">
              <span v-for="item in searchTrends" :key="item">{{ item }}</span>
            </div>
          </section>

          <section class="side-panel">
            <h2>热榜推荐</h2>
            <div class="hot-list">
              <article v-for="(item, index) in filtered.slice(0, 5)" :key="`hot-${item.slug}`" class="hot-item">
                <strong>{{ index + 1 }}</strong>
                <RouterLink :to="{ name: 'news-article', params: { slug: item.slug } }">{{ item.title }}</RouterLink>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </NewsSiteLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import NewsSiteLayout from '@/components/news/NewsSiteLayout.vue'
import { newsChannels, newsFeed, searchTrends } from '@/data/newsSite'

const keyword = ref('AI 搜索')

const filtered = computed(() => {
  const value = keyword.value.trim()
  if (!value) {
    return newsFeed
  }
  return newsFeed.filter((item) => item.title.includes(value) || item.summary.includes(value) || item.tags.some((tag) => tag.includes(value)))
})

const channelName = (slug) => newsChannels.find((item) => item.slug === slug)?.name || '频道'
</script>

<style scoped>
.news-shell {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
}

.search-page {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.search-hero,
.result-panel,
.side-panel {
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background: #fff;
  box-shadow: none;
}

.search-bar {
  display: grid;
  grid-template-columns: 1fr 92px;
  gap: 12px;
}

.search-bar input {
  width: 100%;
  min-height: 56px;
  padding: 0 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #fff;
  font-size: 15px;
}

.search-bar button {
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: #c7000b;
  font-size: 15px;
  font-weight: 600;
}

.trend-tags,
.side-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.quick-tags {
  margin-top: 14px;
}

.trend-tags button,
.side-tags span {
  padding: 8px 12px;
  border: 0;
  border-radius: 2px;
  color: #666;
  background: #f7f7f7;
  font-size: 12px;
}

.result-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 20px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-head h2,
.side-panel h2 {
  color: #111;
  font-size: 24px;
}

.section-head span {
  color: #999;
  font-size: 12px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid #efefef;
}

.filter-item {
  padding: 7px 12px;
  border-radius: 2px;
  color: #666;
  background: #f6f6f6;
  font-size: 12px;
}

.filter-item.active {
  color: #fff;
  background: #c7000b;
}

.result-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.result-item {
  padding-bottom: 14px;
  border-bottom: 1px solid #efefef;
}

.result-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.result-item span {
  color: #c7000b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.result-item h3 {
  margin-top: 8px;
  color: #111;
  font-size: 24px;
  line-height: 1.3;
}

.result-item p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.result-item small {
  display: block;
  margin-top: 10px;
  color: #999;
  font-size: 12px;
}

.hot-list {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.hot-item {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #efefef;
}

.hot-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.hot-item strong {
  color: #c7000b;
  font-size: 18px;
}

.hot-item a {
  color: #333;
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .result-layout {
    grid-template-columns: 1fr;
  }

  .search-bar {
    grid-template-columns: 1fr;
  }
}
</style>
