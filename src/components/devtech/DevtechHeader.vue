<template>
  <header class="dev-header">
    <div class="dev-shell top-row">
      <RouterLink class="brand" to="/home.html"><strong>CodeHub</strong><small>DEVTECH</small></RouterLink>
      <div class="search-box"><input type="text" value="搜索仓库、API、文章、工具、组织" readonly /><button type="button">开始构建</button></div>
      <div class="header-actions"><RouterLink to="/devtech/api.html">API</RouterLink><RouterLink to="/devtech/profile.html">控制台</RouterLink></div>
    </div>
    <div class="dev-nav-bar"
      ><div class="dev-shell nav-row"
        ><nav class="nav-list"
          ><RouterLink v-for="item in devtechNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav
        ></div
      ></div
    >
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { devtechNav } from '@/data/devtechSite'
</script>
<style scoped>
.dev-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(15, 23, 42, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}
.dev-shell {
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
  color: #38bdf8;
}
.brand strong {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.04em;
}
.brand small {
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  letter-spacing: 0.24em;
}
.search-box {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 118px;
  gap: 12px;
}
.search-box input {
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  color: rgba(255, 255, 255, 0.68);
  background: rgba(255, 255, 255, 0.06);
  font-size: 14px;
}
.search-box button {
  border: 0;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  font-size: 14px;
  font-weight: 700;
}
.header-actions,
.nav-list {
  gap: 18px;
}
.header-actions a,
.nav-list a {
  color: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 600;
}
.dev-nav-bar {
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
  color: #38bdf8;
}
.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #38bdf8;
}
</style>
