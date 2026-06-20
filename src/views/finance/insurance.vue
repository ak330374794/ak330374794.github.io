<template>
  <FinanceLayout>
    <div class="finance-shell insurance-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">保险保障</span>
          <h1>保险产品、智能核保、保单服务和理赔流程，组织成更像真实保险服务中心的页面。</h1>
          <p>不再只是产品卡片罗列，而是按保险站常见结构呈现方案入口、保单状态、理赔进度与保障推荐。</p>
          <div class="hero-toolbar">
            <span>健康险</span>
            <span>重疾险</span>
            <span>意外险</span>
            <span>车险</span>
            <button type="button">开始测算保费</button>
          </div>
        </div>
        <article class="policy-card">
          <span>保单服务</span>
          <strong>家庭保障已覆盖 4 人</strong>
          <p>支持续保提醒、电子保单查看、理赔材料上传和健康服务权益查询。</p>
          <div class="policy-meta">
            <span>本月待续保 2 单</span>
            <span>理赔中 1 单</span>
          </div>
        </article>
      </section>

      <section class="service-strip">
        <article class="service-card">
          <span>智能核保</span>
          <strong>3 分钟风险初筛</strong>
          <p>快速判断是否适配当前产品。</p>
        </article>
        <article class="service-card">
          <span>在线理赔</span>
          <strong>上传材料即可跟踪</strong>
          <p>实时查看审核与赔付进度。</p>
        </article>
        <article class="service-card">
          <span>健康权益</span>
          <strong>问诊与体检服务</strong>
          <p>将保障延伸到健康管理。</p>
        </article>
      </section>

      <section class="content-grid">
        <section class="panel main-panel">
          <div class="panel-head">
            <div>
              <h2>保险服务矩阵</h2>
              <p>投保、保单、理赔和健康管理入口统一管理。</p>
            </div>
          </div>
          <div class="insurance-grid">
            <article v-for="item in insuranceCards" :key="item.title" class="insurance-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
              <span>查看方案</span>
            </article>
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel side-panel">
            <div class="panel-head compact">
              <div>
                <h2>理赔进度</h2>
                <p>保险页常见的进度追踪模块。</p>
              </div>
            </div>
            <div class="claim-list">
              <article class="claim-item">
                <strong>住院医疗理赔</strong>
                <span>材料已受理，预计 2 个工作日完成审核</span>
              </article>
              <article class="claim-item">
                <strong>意外门诊报销</strong>
                <span>已进入赔付流程，待确认收款账户</span>
              </article>
            </div>
          </section>

          <section class="panel side-panel">
            <div class="panel-head compact">
              <div>
                <h2>投保提示</h2>
                <p>年龄、责任与等待期等关键信息集中提示。</p>
              </div>
            </div>
            <div class="claim-list">
              <article class="claim-item">
                <strong>等待期说明</strong>
                <span>健康险通常含 30 至 90 天等待期</span>
              </article>
              <article class="claim-item">
                <strong>续保条件</strong>
                <span>关注保证续保与费率调整机制</span>
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
import { insuranceCards } from '@/data/financeSite'
</script>

<style scoped>
.finance-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.insurance-page,
.insurance-grid,
.content-grid,
.service-strip,
.policy-meta,
.side-stack,
.claim-list {
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
.insurance-card strong,
.policy-card strong,
.service-card strong,
.claim-item strong {
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
.insurance-card p,
.policy-card p,
.service-card p,
.claim-item span {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.hero-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
}

.hero-toolbar span,
.policy-meta span,
.insurance-card span {
  display: inline-flex;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  color: #1d4ed8;
  background: #dbeafe;
  font-size: 12px;
  font-weight: 700;
}

button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #1d4ed8, #3b82f6);
  font-weight: 700;
}

.policy-card,
.main-panel,
.side-panel {
  padding: 22px;
}

.policy-card strong {
  display: block;
  margin-top: 10px;
  font-size: 30px;
  line-height: 1.12;
}

.policy-meta {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
}

.service-strip {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card {
  padding: 18px;
  border-radius: 22px;
  background: #f8fafc;
}

.service-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
}

.content-grid {
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.panel-head h2 {
  font-size: 24px;
}

.insurance-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.insurance-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.insurance-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.insurance-card span {
  margin-top: 12px;
}

.claim-list {
  gap: 12px;
}

.claim-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #f8fafc;
}

@media (max-width: 1080px) {
  .hero-panel,
  .service-strip,
  .content-grid,
  .insurance-grid,
  .policy-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-panel,
  .policy-card,
  .main-panel,
  .side-panel {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
  }

  .policy-card strong,
  .service-card strong {
    font-size: 22px;
  }

  .service-card,
  .insurance-card,
  .claim-item {
    padding: 16px;
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .policy-card,
  .main-panel,
  .side-panel {
    padding: 16px;
  }
}
</style>
