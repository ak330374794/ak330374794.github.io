<template>
  <header class="gov-header">
    <div class="gov-shell top-row">
      <RouterLink class="brand" to="/home.html"><strong>政务通</strong><small>GOV</small></RouterLink>
      <div class="search-box"><input type="text" value="搜索政策文件、办事事项、公共查询" readonly /><button type="button">办事</button></div>
      <div class="header-actions"><RouterLink to="/gov/services.html">在线办事</RouterLink><RouterLink to="/gov/profile.html">互动</RouterLink></div>
    </div>
    <div class="gov-nav-bar"
      ><div class="gov-shell nav-row"
        ><nav class="nav-list"
          ><RouterLink v-for="item in govNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav
        ></div
      ></div
    >
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { govNav } from '@/data/govSite'
</script>
<style scoped>
.gov-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.08);
}
.gov-shell {
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
  color: #1d4ed8;
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
  border: 1px solid rgba(29, 78, 216, 0.12);
  border-radius: 24px;
  color: #64748b;
  background: #eff6ff;
  font-size: 14px;
}
.search-box button {
  border: 0;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
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
.gov-nav-bar {
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
  color: #1d4ed8;
}
.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #1d4ed8;
}
</style>
