<template>
  <header class="sports-header">
    <div class="sports-shell top-row">
      <RouterLink class="brand" to="/home.html"><strong>动能</strong><small>SPORTS</small></RouterLink>
      <div class="search-box"><input type="text" value="搜索赛事、课程、跑团、装备、活动" readonly /><button type="button">开练</button></div>
      <div class="header-actions"
        ><RouterLink to="/sports/live.html">直播</RouterLink><RouterLink to="/sports/profile.html">我的运动</RouterLink></div
      >
    </div>
    <div class="sports-nav-bar"
      ><div class="sports-shell nav-row"
        ><nav class="nav-list"
          ><RouterLink v-for="item in sportsNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav
        ></div
      ></div
    >
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { sportsNav } from '@/data/sportsSite'
</script>
<style scoped>
.sports-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.08);
}
.sports-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}
.top-row,
.nav-row,
.header-actions,
.nav-list {
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
  color: #15803d;
}
.brand strong {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.04em;
}
.brand small {
  color: #64748b;
  font-size: 11px;
  letter-spacing: 0.24em;
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
  border: 1px solid rgba(21, 128, 61, 0.12);
  border-radius: 24px;
  color: #64748b;
  background: #f0fdf4;
  font-size: 14px;
}
.search-box button {
  border: 0;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(90deg, #15803d, #22c55e);
  font-size: 14px;
  font-weight: 700;
}
.header-actions,
.nav-list {
  gap: 18px;
}
.header-actions a,
.nav-list a {
  color: #334155;
  font-size: 13px;
  font-weight: 600;
}
.sports-nav-bar {
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
  color: #15803d;
}
.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #15803d;
}
</style>
