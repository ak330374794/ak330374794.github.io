<template>
  <FinanceLayout>
    <div class="finance-shell bank-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">银行服务</span>
          <h1>围绕账户、转账、信用卡、贷款与生活缴费，构建线上高频银行业务门户。</h1>
          <p>支持开户、余额明细、挂失解挂、信用卡账单、贷款进度、生活缴费和网点服务预约。</p>
          <div class="search-bar">
            <span>搜索业务：信用卡申请、贷款进度、转账限额、生活缴费</span>
            <button type="button">搜索业务</button>
          </div>
        </div>
      </section>

      <section class="quick-grid">
        <article class="quick-card">账户总览</article>
        <article class="quick-card">转账汇款</article>
        <article class="quick-card">信用卡</article>
        <article class="quick-card">贷款进度</article>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>银行业务矩阵</h2>
            <p>账户、转账、卡中心和贷款模块统一入口。</p>
          </div>
        </div>
        <div class="card-grid">
          <FinanceCard v-for="item in bankCards" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </FinanceLayout>
</template>

<script setup>
import FinanceCard from '@/components/finance/FinanceCard.vue'
import FinanceLayout from '@/components/finance/FinanceLayout.vue'
import { bankCards } from '@/data/financeSite'
</script>

<style scoped>
.finance-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.bank-page,
.card-grid,
.quick-grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, #eff6ff, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2 {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.panel-head p {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
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
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  font-weight: 700;
}

.quick-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.quick-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eff6ff);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.card-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .quick-grid,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
