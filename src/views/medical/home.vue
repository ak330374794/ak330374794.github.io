<template>
  <MedicalLayout>
    <div class="shell page">
      <section class="hero panel">
        <div class="hero-copy">
          <span class="badge">互联网医疗服务平台</span>
          <h1>{{ medicalHero.title }}</h1>
          <p>{{ medicalHero.subtitle }}</p>
          <div class="search-bar">
            <span>症状自查 / 科室推荐 / 医院搜索</span>
            <button type="button">立即问诊</button>
          </div>
          <div class="tags">
            <em v-for="tag in medicalHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="medicalHero.image" :alt="medicalHero.title" class="hero-image" />
          <article class="floating-card">
            <span>今日门诊提醒</span>
            <strong>09:20 皮肤科线上复诊</strong>
            <p>支持图文补充、电子处方和药房流转，更像医疗 App 首页服务卡样式。</p>
          </article>
        </div>
      </section>

      <section class="stats">
        <article v-for="item in medicalStats" :key="item.label" class="panel stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="service-strip">
        <article v-for="item in medicalConsultCards" :key="item.title" class="service-card">
          <img :src="item.image" :alt="item.title" />
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.meta }}</p>
          </div>
        </article>
      </section>

      <section class="grid">
        <section class="panel appointment-panel">
          <div class="head">
            <div>
              <span>Appointment</span>
              <h2>预约挂号与到院服务</h2>
            </div>
            <p>按医院、科室、医生和时段进行检索，更接近挂号平台首页布局。</p>
          </div>
          <div class="list two-column">
            <article v-for="item in medicalAppointmentPanels" :key="item.title" class="info-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="col side">
          <section class="panel">
            <div class="head">
              <div>
                <span>Health</span>
                <h2>健康管理中心</h2>
              </div>
            </div>
            <div class="list">
              <article v-for="item in medicalHealthPanels" :key="item.title" class="info-card soft-card">
                <strong>{{ item.title }}</strong>
                <p>{{ item.desc }}</p>
              </article>
            </div>
          </section>

          <section class="panel timeline-panel">
            <div class="head">
              <div>
                <span>Flow</span>
                <h2>就诊闭环</h2>
              </div>
            </div>
            <div class="timeline-list">
              <article class="timeline-item">
                <strong>AI 预问诊</strong>
                <p>症状收集、科室推荐和医生匹配。</p>
              </article>
              <article class="timeline-item">
                <strong>在线接诊</strong>
                <p>图文 / 视频 / 电话问诊，支持报告上传与追问。</p>
              </article>
              <article class="timeline-item">
                <strong>诊后管理</strong>
                <p>随访、提醒、续方和药品配送继续承接。</p>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </MedicalLayout>
</template>

<script setup>
import MedicalLayout from '@/components/medical/MedicalLayout.vue'
import { medicalAppointmentPanels, medicalConsultCards, medicalHealthPanels, medicalHero, medicalStats } from '@/data/medicalSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.col,
.list,
.timeline-list,
.service-strip {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  overflow: hidden;
  padding: 32px;
  background: radial-gradient(circle at top right, rgba(15, 118, 110, 0.14), transparent 24%), linear-gradient(135deg, #f0fdfa, #ffffff 48%, #f7fffe);
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
.stat-card strong,
.head h2,
.service-card strong,
.info-card strong {
  color: #0f172a;
}

h1 {
  margin-top: 20px;
  font-size: clamp(40px, 4.8vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

p,
.stat-card span,
.head p,
.floating-card p,
.service-card p,
.info-card p {
  color: #64748b;
}

.hero-copy > p {
  margin-top: 18px;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.9;
}

.search-bar,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.search-bar {
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  padding: 12px 12px 12px 18px;
  border: 1px solid rgba(15, 118, 110, 0.1);
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgba(15, 118, 110, 0.03);
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
  background: linear-gradient(90deg, #0f766e, #14b8a6);
  font-weight: 700;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 22px;
}

.hero-visual {
  position: relative;
}

.tags em {
  padding: 8px 14px;
  border-radius: 999px;
  color: #0f766e;
  background: rgba(15, 118, 110, 0.08);
  font-size: 12px;
  font-style: normal;
}

.floating-card {
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 280px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.86);
}

.floating-card span,
.head span {
  display: inline-flex;
  color: #0f766e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.floating-card strong {
  display: block;
  margin-top: 10px;
  color: #0f172a;
  font-size: 24px;
}

.floating-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.stats {
  display: grid;
  gap: 16px;
}

.stats {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 20px;
  text-align: center;
}

.stat-card strong {
  display: block;
  font-size: 34px;
}

.stat-card span {
  display: block;
  margin-top: 8px;
  font-size: 13px;
}

.service-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.service-card {
  display: grid;
  gap: 14px;
  padding: 16px;
  border: 1px solid rgba(15, 23, 42, 0.05);
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff, #f8fffe);
}

.service-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 18px;
  object-fit: cover;
}

.service-card strong {
  font-size: 20px;
}

.service-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.7;
}

.grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
}

.panel {
  padding: 24px;
}

.head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.two-column {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 20px;
}

.list {
  margin-top: 18px;
}

.info-card {
  padding: 18px;
  border-radius: 22px;
  background: #f7fafc;
}

.soft-card {
  background: linear-gradient(180deg, #ffffff, #f0fdfa);
}

.info-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.8;
}

.timeline-item {
  position: relative;
  padding-left: 18px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #14b8a6;
}

.timeline-item strong {
  color: #0f172a;
}

.timeline-item p {
  margin-top: 8px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .hero,
  .grid,
  .stats,
  .service-strip,
  .two-column {
    grid-template-columns: 1fr;
  }

  .floating-card {
    position: static;
    max-width: none;
    margin-top: 16px;
  }
}
</style>
