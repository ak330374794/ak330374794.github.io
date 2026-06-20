<template>
  <GovLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">在线办事大厅</span>
          <h1>个人办事、法人办事与主题套餐服务整合到统一办事大厅。</h1>
          <p>支持材料清单、预约服务、进度查询、电子证照和统一支付，更接近地方政务大厅办事页结构。</p>
          <div class="search-bar">
            <span>搜索事项名称，如：社保转移、公积金提取、营业执照</span>
            <button type="button">搜索事项</button>
          </div>
        </div>
      </section>

      <section class="shortcut-grid">
        <article class="shortcut-card">个人办事</article>
        <article class="shortcut-card">法人办事</article>
        <article class="shortcut-card">一件事一次办</article>
        <article class="shortcut-card">进度查询</article>
      </section>

      <section class="grid">
        <article v-for="item in govServicePanels" :key="item.title" class="panel card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </GovLayout>
</template>

<script setup>
import GovLayout from '@/components/gov/GovLayout.vue'
import { govServicePanels } from '@/data/govSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.shortcut-grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hero,
.card {
  padding: 24px;
}

.hero {
  background: linear-gradient(135deg, #eff6ff, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.card strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p {
  color: #64748b;
}

.hero p,
.card p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.85;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding: 12px 12px 12px 16px;
  border: 1px solid rgba(29, 78, 216, 0.08);
  border-radius: 999px;
  background: #fff;
}

.search-bar span {
  color: #94a3b8;
  font-size: 14px;
}

.search-bar button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  font-weight: 700;
}

.shortcut-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.shortcut-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eff6ff);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
  font-weight: 700;
}

.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .shortcut-grid,
  .grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
