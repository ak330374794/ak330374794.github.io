<template>
  <header class="commerce-header">
    <div class="commerce-top">
      <div class="commerce-shell top-inner">
        <RouterLink class="brand" to="/home.html">
          <strong>优选购</strong>
          <small>SHOP</small>
        </RouterLink>
        <div class="search-box">
          <input type="text" value="手机 / 美妆 / 生鲜 / 海外购" readonly />
          <button type="button">搜索</button>
        </div>
        <div class="header-actions">
          <RouterLink to="/commerce/cart.html">购物车</RouterLink>
          <RouterLink to="/commerce/seller.html">商家中心</RouterLink>
        </div>
      </div>
    </div>

    <div class="commerce-nav-bar">
      <div class="commerce-shell nav-inner">
        <nav class="nav-list">
          <RouterLink v-for="item in commerceNav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { commerceNav } from '@/data/commerceSite'
</script>

<style scoped>
.commerce-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: #fff;
  box-shadow: 0 1px 0 #ececec;
}

.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.commerce-top {
  background: linear-gradient(90deg, #df1f26, #f44721);
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
  color: #666;
  background: #fff;
  font-size: 14px;
}

.search-box button {
  border: 0;
  border-radius: 22px;
  color: #df1f26;
  background: #fff3ef;
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

.commerce-nav-bar {
  background: #fff;
}

.nav-inner {
  min-height: 48px;
}

.nav-list a {
  position: relative;
  padding: 12px 0;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.nav-list a.router-link-active {
  color: #df1f26;
}

.nav-list a.router-link-active::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #df1f26;
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
