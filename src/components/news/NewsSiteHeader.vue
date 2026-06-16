<template>
  <header class="news-header">
    <div class="news-shell news-header-main">
      <RouterLink class="news-brand" to="/home.html">
        <strong>今日热讯</strong>
        <small>NEWS</small>
      </RouterLink>

      <div class="news-search">
        <span>热搜</span>
        <RouterLink class="search-link" to="/news/search.html">AI 搜索 / 创作者收益 / 热点聚合</RouterLink>
      </div>

      <div class="news-actions">
        <RouterLink class="action-link" to="/news/creator.html">创作者中心</RouterLink>
        <RouterLink class="action-primary" to="/news/admin.html">后台管理</RouterLink>
      </div>
    </div>

    <div class="news-channel-bar">
      <div class="news-shell channel-bar-inner">
        <nav class="news-nav">
          <RouterLink v-for="item in newsNavSections" :key="item.to" :to="item.to">
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { newsNavSections } from '@/data/newsSite'
</script>

<style scoped>
.news-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.news-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.news-topbar {
  background: #f7f7f7;
  border-bottom: 1px solid #ededed;
}

.news-header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.news-header-main {
  min-height: 76px;
}

.news-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  color: #c7000b;
}

.news-brand strong {
  font-size: 34px;
  font-family: 'Times New Roman', 'STSong', serif;
  line-height: 1;
  letter-spacing: -0.04em;
}

.news-brand small {
  margin-top: 2px;
  color: #999;
  font-size: 11px;
  letter-spacing: 0.3em;
}

.news-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  overflow-x: auto;
  padding: 0 0 2px;
}

.news-channel-bar {
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #ececec;
  background: #fff;
}

.channel-bar-inner {
  min-height: 48px;
  display: flex;
  align-items: center;
}

.news-nav a,
.action-link,
.search-link {
  color: #333;
  font-size: 14px;
}

.news-nav a {
  position: relative;
  padding: 14px 0 12px;
  white-space: nowrap;
}

.news-nav a.router-link-active {
  color: #c7000b;
  font-weight: 700;
}

.news-nav a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #c7000b;
}

.news-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.news-search {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 560px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 21px;
  background: #f5f5f5;
}

.news-search span {
  color: #c7000b;
  font-size: 13px;
  font-weight: 700;
}

.action-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 4px;
  color: #fff;
  background: #c7000b;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 960px) {
  .news-header-main {
    flex-wrap: wrap;
    justify-content: start;
    padding: 14px 0;
  }

  .news-nav {
    gap: 18px;
  }

  .news-search {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }
}
</style>
