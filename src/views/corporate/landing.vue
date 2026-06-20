<template>
  <CorporateLayout>
    <div class="corp-shell landing-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">营销落地页</span>
          <h1>通过活动报名、试用申请、资料下载和价格页，把流量转化为销售线索。</h1>
          <p>结合 CTA、表单、FAQ、倒计时和留资下载策略，服务广告投放、SEO 专题与线索收集场景。</p>
        </div>
      </section>

      <section class="landing-grid">
        <article v-for="item in landingModules" :key="item.title" class="panel module-card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>

      <section class="panel cta-panel">
        <div class="cta-copy">
          <span>营销转化入口</span>
          <h2>立即预约产品 Demo，获取行业解决方案。</h2>
          <p>支持表单留资、自动评分、CRM 同步和后续销售跟进。</p>
        </div>
        <div class="cta-actions">
          <button type="button">预约 Demo</button>
          <button type="button" class="secondary">下载白皮书</button>
        </div>
      </section>
    </div>
  </CorporateLayout>
</template>

<script setup>
import CorporateLayout from '@/components/corporate/CorporateLayout.vue'
import { landingModules } from '@/data/corporateSite'
</script>

<style scoped>
.corp-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.landing-page,
.landing-grid {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero-panel,
.module-card,
.cta-panel {
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #0f172a;
  background: rgba(15, 23, 42, 0.06);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.module-card strong,
.cta-copy h2 {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.module-card p,
.cta-copy span,
.cta-copy p {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.landing-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.module-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.cta-copy span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.cta-copy h2,
.cta-copy p {
  color: #fff;
}

.cta-copy h2 {
  margin-top: 10px;
  font-size: clamp(28px, 3.4vw, 38px);
}

.cta-copy p {
  margin-top: 10px;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
}

.cta-actions {
  display: flex;
  gap: 12px;
}

.cta-actions button {
  min-width: 120px;
  min-height: 44px;
  border: 0;
  border-radius: 22px;
  color: #0f172a;
  background: #fff;
  font-weight: 700;
}

.cta-actions .secondary {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 1080px) {
  .landing-grid {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .hero-panel,
  .module-card,
  .cta-panel {
    padding: 18px;
  }

  .hero-panel h1,
  .cta-copy h2 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .cta-actions {
    width: 100%;
    flex-direction: column;
  }

  .cta-actions button {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-panel,
  .module-card,
  .cta-panel {
    padding: 16px;
  }
}
</style>
