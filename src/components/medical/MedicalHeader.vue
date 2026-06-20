<template>
  <header class="med-header">
    <div class="med-shell top-row">
      <RouterLink class="brand" to="/home.html">
        <strong>安心医护</strong>
        <small>MEDICAL</small>
      </RouterLink>
      <div class="search-box">
        <input type="text" value="搜索医生、医院、科室、体检、药品" readonly />
        <button type="button">问医生</button>
      </div>
      <div class="header-actions">
        <RouterLink to="/medical/appointment.html">挂号</RouterLink>
        <RouterLink to="/medical/profile.html">我的健康</RouterLink>
      </div>
    </div>
    <div class="med-nav-bar">
      <div class="med-shell nav-row">
        <nav class="nav-list">
          <RouterLink v-for="item in medicalNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { medicalNav } from '@/data/medicalSite'
</script>

<style scoped>
.med-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.08);
}
.med-shell {
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
  color: #0f766e;
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
  border: 1px solid rgba(15, 118, 110, 0.12);
  border-radius: 24px;
  color: #64748b;
  background: #f0fdfa;
  font-size: 14px;
}
.search-box button {
  border: 0;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(90deg, #0f766e, #14b8a6);
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
.med-nav-bar {
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
  color: #0f766e;
}
.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #0f766e;
}
</style>
