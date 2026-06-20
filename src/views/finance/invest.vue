<template>
  <FinanceLayout>
    <div class="finance-shell invest-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">证券基金</span>
          <h1>行情、下单、资产配置和智能投顾，组合成更像券商工作台的投资页。</h1>
          <p>把行情入口、自选列表、组合总览和财富产品放在同一页，更接近真实证券 App 和银行财富门户的投资频道。</p>
          <div class="market-strip">
            <article class="market-chip">
              <span>上证指数</span>
              <strong>3,184.26</strong>
              <em>+0.82%</em>
            </article>
            <article class="market-chip">
              <span>创业板指</span>
              <strong>2,028.14</strong>
              <em>-0.16%</em>
            </article>
            <article class="market-chip">
              <span>黄金 ETF</span>
              <strong>4.682</strong>
              <em>+1.24%</em>
            </article>
          </div>
        </div>
        <article class="asset-card">
          <span>总资产</span>
          <strong>¥ 286,000</strong>
          <p>权益 48% · 固收 22% · 现金 16% · 保障 14%</p>
          <div class="asset-meta">
            <span>今日收益 +¥1,286</span>
            <span>累计收益率 +12.8%</span>
          </div>
        </article>
      </section>

      <section class="content-grid">
        <section class="panel main-panel">
          <div class="panel-head">
            <div>
              <h2>投资工作台</h2>
              <p>先承接核心能力，再给出自选、持仓和决策入口。</p>
            </div>
          </div>
          <div class="info-grid">
            <article v-for="item in investPanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
              <span>进入模块</span>
            </article>
          </div>
          <div class="watchlist">
            <article class="watch-item">
              <div>
                <strong>贵州茅台</strong>
                <p>白酒龙头 · 自选关注</p>
              </div>
              <em>+2.18%</em>
            </article>
            <article class="watch-item">
              <div>
                <strong>中证红利 ETF</strong>
                <p>分红策略 · 低波持有</p>
              </div>
              <em>+0.64%</em>
            </article>
            <article class="watch-item">
              <div>
                <strong>纳指联接基金</strong>
                <p>海外科技 · 定投中</p>
              </div>
              <em>-0.32%</em>
            </article>
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>财富产品</h2>
                <p>理财、基金和储蓄产品统一展示收益与风险。</p>
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

          <section class="panel advisory-panel">
            <div class="panel-head compact">
              <div>
                <h2>智能投顾建议</h2>
                <p>给出组合提示和风险提醒。</p>
              </div>
            </div>
            <div class="advisory-list">
              <article class="advisory-item">
                <strong>建议加仓固收+</strong>
                <span>组合波动偏高，可提升稳健仓位。</span>
              </article>
              <article class="advisory-item">
                <strong>本周两只基金定投执行</strong>
                <span>下次扣款时间为周二 09:30。</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </FinanceLayout>
</template>

<script setup>
import FinanceLayout from '@/components/finance/FinanceLayout.vue'
import { investPanels, wealthCards } from '@/data/financeSite'
</script>

<style scoped>
.finance-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.invest-page,
.content-grid,
.info-grid,
.wealth-list,
.market-strip,
.asset-meta,
.side-stack,
.advisory-list {
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
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.82fr);
  gap: 18px;
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
.panel-head h2,
.info-card strong,
.wealth-card strong,
.asset-card strong,
.watch-item strong,
.advisory-item strong {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.panel-head p,
.info-card p,
.wealth-card p,
.wealth-card em,
.asset-card p,
.watch-item p,
.advisory-item span,
.market-chip span {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.market-strip {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.market-chip,
.asset-card,
.watch-item,
.advisory-item {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
}

.market-chip strong,
.watch-item em,
.asset-card strong {
  display: block;
  margin-top: 10px;
}

.market-chip strong {
  color: #0f172a;
  font-size: 24px;
}

.market-chip em {
  display: inline-flex;
  margin-top: 8px;
  color: #dc2626;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
}

.asset-card strong {
  font-size: 34px;
  line-height: 1.12;
}

.asset-meta {
  grid-template-columns: 1fr;
  margin-top: 16px;
}

.asset-meta span,
.info-card span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #1d4ed8;
  background: #dbeafe;
  font-size: 12px;
  font-weight: 700;
}

.content-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.75fr);
}

.info-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card,
.wealth-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.info-card p,
.wealth-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.info-card span {
  margin-top: 14px;
}

.main-panel {
  display: grid;
  gap: 18px;
}

.watchlist {
  display: grid;
  gap: 12px;
}

.watch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.watch-item p {
  margin-top: 6px;
  font-size: 13px;
}

.watch-item em {
  color: #dc2626;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}

.wealth-card em {
  display: inline-flex;
  margin-top: 8px;
  color: #1d4ed8;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}

.advisory-panel {
  display: grid;
  gap: 18px;
}

.advisory-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 1080px) {
  .content-grid,
  .info-grid,
  .hero-panel,
  .market-strip {
    grid-template-columns: 1fr;
  }

  .watch-item {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero-panel,
  .panel {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .asset-card strong,
  .market-chip strong {
    font-size: 24px;
  }

  .market-chip,
  .asset-card,
  .watch-item,
  .advisory-item,
  .info-card,
  .wealth-card {
    padding: 16px;
  }

  .panel-head {
    gap: 10px;
    margin-bottom: 14px;
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .panel {
    padding: 16px;
  }
}
</style>
