<template>
  <header class="ls-header">
    <div class="ls-shell top-row">
      <RouterLink class="brand" to="/home.html">
        <strong>城享生活</strong>
        <small>LIFESERVICE</small>
      </RouterLink>

      <div class="search-box">
        <input type="text" value="搜索美食 / 酒店 / 航班 / 职位 / 商家" readonly />
        <button type="button">搜索</button>
      </div>

      <div class="header-actions">
        <RouterLink to="/lifeservice/local.html">服务</RouterLink>
        <RouterLink to="/lifeservice/profile.html">我的</RouterLink>
      </div>
    </div>

    <div class="ls-nav-bar">
      <div class="ls-shell nav-row">
        <nav class="nav-list">
          <RouterLink v-for="item in lifeServiceNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { lifeServiceNav } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.08);
}

.ls-shell {
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
  min-width: 156px;
  color: #ea580c;
}

.brand strong {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.brand small {
  color: #64748b;
  font-size: 11px;
  letter-spacing: 0.2em;
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
  border: 1px solid rgba(234, 88, 12, 0.12);
  border-radius: 24px;
  color: #64748b;
  background: #fff7ed;
  font-size: 14px;
}

.search-box button {
  border: 0;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(90deg, #ea580c, #f97316);
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
  color: #334155;
  font-size: 13px;
  font-weight: 600;
}

.ls-nav-bar {
  border-top: 1px solid rgba(15, 23, 42, 0.05);
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
  color: #ea580c;
}

.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #ea580c;
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
