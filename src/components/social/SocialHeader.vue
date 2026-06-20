<template>
  <header class="social-header">
    <div class="social-top">
      <div class="social-shell top-inner">
        <RouterLink class="brand" to="/home.html">
          <strong>同频社</strong>
          <small>SOCIAL</small>
        </RouterLink>

        <div class="search-box">
          <input type="text" value="搜索圈子 / 笔记 / 用户 / 商品" readonly />
          <button type="button">搜索</button>
        </div>

        <div class="header-actions">
          <RouterLink to="/social/messages.html">消息</RouterLink>
          <RouterLink to="/social/profile.html">我的</RouterLink>
        </div>
      </div>
    </div>

    <div class="social-nav-bar">
      <div class="social-shell nav-inner">
        <nav class="nav-list">
          <RouterLink v-for="item in socialNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { socialNav } from '@/data/socialSite'
</script>

<style scoped>
.social-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: #fff;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
}

.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.social-top {
  background: linear-gradient(90deg, #ff4f6d, #ff7b54);
}

.top-inner,
.nav-inner {
  display: flex;
  align-items: center;
}

.top-inner {
  gap: 24px;
  min-height: 82px;
}

.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 132px;
  color: #fff;
}

.brand strong {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.brand small {
  font-size: 11px;
  letter-spacing: 0.3em;
  opacity: 0.84;
}

.search-box {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 92px;
  gap: 12px;
}

.search-box input {
  min-height: 44px;
  padding: 0 16px;
  border: 0;
  border-radius: 22px;
  color: #64748b;
  background: #fff;
  font-size: 14px;
}

.search-box button {
  border: 0;
  border-radius: 22px;
  color: #ff4f6d;
  background: #fff0f3;
  font-size: 14px;
  font-weight: 700;
}

.header-actions,
.nav-list {
  display: flex;
  align-items: center;
  gap: 18px;
}

.header-actions a {
  color: #fff;
  font-size: 13px;
}

.social-nav-bar {
  background: #fff;
}

.nav-inner {
  min-height: 48px;
}

.nav-list a {
  position: relative;
  padding: 12px 0;
  color: #334155;
  font-size: 14px;
  font-weight: 600;
}

.nav-list a.router-link-active {
  color: #ff4f6d;
}

.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #ff4f6d;
}

@media (max-width: 960px) {
  .top-inner {
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
