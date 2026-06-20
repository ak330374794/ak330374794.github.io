<template>
  <FinanceLayout>
    <div class="finance-shell finance-home">
      <section class="market-strip">
        <article v-for="item in financeStats" :key="item.label" class="ticker-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      </section>

      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">财富管理与数字银行</span>
          <h1>{{ financeHero.title }}</h1>
          <p>{{ financeHero.subtitle }}</p>
          <div class="hero-actions">
            <RouterLink to="/finance/bank.html">进入银行服务</RouterLink>
            <RouterLink class="ghost" to="/finance/invest.html">查看投资理财</RouterLink>
          </div>
          <div class="hero-tags">
            <em v-for="tag in financeHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>

        <div class="hero-dashboard">
          <img :src="financeHero.image" :alt="financeHero.title" class="hero-image" />
          <div class="asset-card">
            <span>资产总览</span>
            <strong>¥ 2,860,000</strong>
            <p>基金、理财、保险与现金统一展示，更接近银行 App 首页与财富门户组合样式。</p>
          </div>
        </div>
      </section>

      <section class="service-grid">
        <FinanceCard v-for="item in bankCards" :key="item.title" :item="item" />
      </section>

      <section class="board-grid">
        <section class="panel invest-panel">
          <div class="panel-head">
            <div>
              <span>Invest</span>
              <h2>证券基金与投研工作台</h2>
            </div>
            <RouterLink to="/finance/invest.html">进入行情中心</RouterLink>
          </div>
          <div class="info-grid">
            <article v-for="item in investPanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="right-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <span>Insurance</span>
                <h2>保险保障专区</h2>
              </div>
            </div>
            <div class="insurance-list">
              <article v-for="item in insuranceCards" :key="item.title" class="insurance-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>

          <section class="panel wealth-panel">
            <div class="panel-head">
              <div>
                <span>Wealth</span>
                <h2>财富增值精选</h2>
              </div>
            </div>
            <div class="wealth-list">
              <article v-for="item in wealthCards" :key="item.title" class="wealth-card">
                <strong>{{ item.title }}</strong>
                <em>{{ item.yield }}</em>
                <p>{{ item.meta }}</p>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </FinanceLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import FinanceCard from '@/components/finance/FinanceCard.vue'
import FinanceLayout from '@/components/finance/FinanceLayout.vue'
import { bankCards, financeHero, financeStats, insuranceCards, investPanels, wealthCards } from '@/data/financeSite'
</script>

<style scoped>
.finance-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.finance-home,
.market-strip,
.service-grid,
.board-grid,
.right-column,
.insurance-list,
.wealth-list {
  display: grid;
  gap: 18px;
}

.finance-home {
  gap: 20px;
}

.market-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.ticker-card,
.panel,
.hero-panel {
  border: 1px solid rgba(29, 78, 216, 0.08);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(243, 247, 255, 0.94));
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.ticker-card {
  padding: 18px 20px;
}

.ticker-card span,
.asset-card span,
.panel-head span,
.insurance-card p,
.wealth-card p,
.info-card p {
  color: #64748b;
}

.ticker-card strong,
.hero-copy h1,
.asset-card strong,
.panel-head h2,
.insurance-card strong,
.wealth-card strong,
.info-card strong {
  color: #0f172a;
}

.ticker-card strong {
  display: block;
  margin-top: 10px;
  font-size: 30px;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  overflow: hidden;
  background: radial-gradient(circle at top right, rgba(29, 78, 216, 0.12), transparent 24%), linear-gradient(135deg, #eef4ff, #ffffff 48%, #f7fbff);
}

.hero-copy {
  padding: 36px;
}

.hero-badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.1);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.hero-copy h1 {
  margin-top: 20px;
  font-size: clamp(40px, 4.8vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.hero-copy p {
  margin-top: 18px;
  max-width: 620px;
  color: #64748b;
  font-size: 16px;
  line-height: 1.9;
}

.hero-actions,
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-actions {
  margin-top: 26px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  font-size: 14px;
  font-weight: 700;
}

.hero-actions .ghost {
  color: #1d4ed8;
  border: 1px solid rgba(29, 78, 216, 0.16);
  background: #fff;
}

.hero-tags {
  margin-top: 20px;
}

.hero-tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #1d4ed8;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(29, 78, 216, 0.1);
  font-size: 12px;
  font-style: normal;
}

.hero-dashboard {
  position: relative;
  padding: 24px 24px 24px 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border-radius: 24px;
  object-fit: cover;
}

.asset-card {
  position: absolute;
  right: 32px;
  bottom: 32px;
  max-width: 280px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.84);
}

.asset-card strong {
  display: block;
  margin-top: 10px;
  font-size: 34px;
}

.asset-card p {
  margin-top: 10px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.8;
}

.service-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.panel {
  padding: 24px;
}

.board-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
}

.panel-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.panel-head span {
  display: inline-flex;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.panel-head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.panel-head a {
  color: #1d4ed8;
  font-size: 13px;
  font-weight: 700;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.info-card,
.insurance-card,
.wealth-card {
  padding: 18px;
  border-radius: 22px;
  background: #f8fbff;
  box-shadow: inset 0 0 0 1px rgba(29, 78, 216, 0.06);
}

.info-card p,
.insurance-card p,
.wealth-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.insurance-list,
.wealth-list {
  margin-top: 20px;
}

.wealth-card em {
  display: inline-flex;
  margin-top: 8px;
  color: #1d4ed8;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .hero-panel,
  .market-strip,
  .service-grid,
  .board-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding: 24px;
  }

  .hero-dashboard {
    padding: 0 24px 24px;
  }

  .asset-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }
}

@media (max-width: 768px) {
  .finance-home {
    gap: 16px;
  }

  .ticker-card,
  .panel {
    padding: 16px;
  }

  .hero-copy {
    padding: 20px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 40px);
  }

  .hero-copy p {
    font-size: 14px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions a {
    width: 100%;
  }

  .hero-dashboard {
    padding: 0 20px 20px;
  }

  .hero-image {
    min-height: 260px;
  }

  .ticker-card strong,
  .asset-card strong {
    font-size: 28px;
  }
}

@media (max-width: 640px) {
  .hero-copy,
  .hero-dashboard {
    padding: 16px;
  }

  .hero-image {
    min-height: 220px;
  }

  .info-card,
  .insurance-card,
  .wealth-card {
    padding: 14px;
  }
}
</style>
