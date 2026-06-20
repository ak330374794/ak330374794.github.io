<template>
  <MedicalLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">预约挂号中心</span>
          <h1>从医院搜索到候诊提醒与报告查询，打通门诊服务流程。</h1>
          <p>支持医院 / 科室 / 医生筛选、号源状态查询、在线支付和住院服务延展，更像真实挂号平台的搜索页。</p>
          <div class="search-bar">
            <span>搜索医院、科室、医生、疾病关键词</span>
            <button type="button">查号源</button>
          </div>
        </div>
      </section>

      <section class="filter-strip">
        <article class="filter-card">北京三甲</article>
        <article class="filter-card">皮肤科</article>
        <article class="filter-card">可约今日</article>
        <article class="filter-card">专家号</article>
      </section>

      <section class="listing-panel">
        <article class="hospital-card">
          <div class="hospital-copy">
            <strong>市一医院 · 皮肤科</strong>
            <p>三甲医院 · 今日可约 6 个号源 · 支持图文复诊和检验报告上传</p>
            <div class="hospital-meta">
              <span>上午号</span>
              <span>副主任医师</span>
              <span>预计候诊 26 分钟</span>
            </div>
          </div>
          <button type="button">立即预约</button>
        </article>
      </section>

      <section class="grid">
        <article v-for="item in medicalAppointmentPanels" :key="item.title" class="panel card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </MedicalLayout>
</template>

<script setup>
import MedicalLayout from '@/components/medical/MedicalLayout.vue'
import { medicalAppointmentPanels } from '@/data/medicalSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.filter-strip {
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
  background: linear-gradient(135deg, #f0fdfa, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #0f766e;
  background: rgba(15, 118, 110, 0.08);
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

.search-bar,
.hospital-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-bar {
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding: 12px 12px 12px 16px;
  border: 1px solid rgba(15, 118, 110, 0.08);
  border-radius: 999px;
  background: #fff;
}

.search-bar span {
  color: #94a3b8;
  font-size: 14px;
}

.search-bar button,
.hospital-card button {
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #0f766e, #14b8a6);
  font-weight: 700;
}

.filter-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.filter-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f0fdfa);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.listing-panel {
  display: grid;
}

.hospital-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hospital-copy strong {
  color: #0f172a;
  font-size: 24px;
}

.hospital-copy p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.hospital-meta {
  margin-top: 14px;
}

.hospital-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #64748b;
  background: #f0fdfa;
  font-size: 12px;
}

.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .filter-strip,
  .grid {
    grid-template-columns: 1fr;
  }

  .search-bar,
  .hospital-card {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero,
  .card,
  .hospital-card {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hospital-copy strong {
    font-size: 22px;
  }

  .filter-card {
    min-height: 68px;
  }
}

@media (max-width: 640px) {
  .hero,
  .card,
  .hospital-card {
    padding: 16px;
  }

  .search-bar {
    padding: 10px 10px 10px 14px;
  }
}
</style>
