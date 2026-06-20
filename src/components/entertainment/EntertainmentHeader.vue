<template>
  <header class="ent-header">
    <div class="ent-shell top-row">
      <RouterLink class="brand" to="/home.html">
        <strong>星幕</strong>
        <small>MEDIA</small>
      </RouterLink>

      <div class="search-box">
        <input type="text" value="搜索剧集 / 电影 / 音乐 / 游戏 / 资讯" readonly />
        <button type="button">搜索</button>
      </div>

      <div class="header-actions">
        <RouterLink to="/entertainment/video.html">追剧</RouterLink>
        <RouterLink to="/entertainment/profile.html">会员</RouterLink>
      </div>
    </div>

    <div class="ent-nav-bar">
      <div class="ent-shell nav-row">
        <nav class="nav-list">
          <RouterLink v-for="item in entertainmentNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { entertainmentNav } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(8, 11, 20, 0.94);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}

.ent-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.top-row,
.nav-row {
  display: flex;
  align-items: center;
}

.top-row {
  gap: 24px;
  min-height: 78px;
}

.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 132px;
  color: #f5c451;
}

.brand strong {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.brand small {
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  letter-spacing: 0.3em;
}

.search-box {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 94px;
  gap: 12px;
}

.search-box input {
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  font-size: 14px;
}

.search-box button {
  border: 0;
  border-radius: 24px;
  color: #101828;
  background: linear-gradient(90deg, #f5c451, #f59e0b);
  font-size: 14px;
  font-weight: 700;
}

.header-actions,
.nav-list {
  display: flex;
  align-items: center;
  gap: 18px;
}

.header-actions a,
.nav-list a {
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 600;
}

.ent-nav-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-row {
  min-height: 48px;
}

.nav-list a {
  position: relative;
  padding: 12px 0;
  font-size: 14px;
}

.nav-list a.router-link-active {
  color: #f5c451;
}

.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #f5c451;
}

@media (max-width: 960px) {
  .top-row {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .search-box,
  .header-actions {
    flex-basis: 100%;
  }

  .header-actions {
    justify-content: space-between;
  }

  .nav-list {
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
