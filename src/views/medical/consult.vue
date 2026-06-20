<template>
  <MedicalLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">在线问诊大厅</span>
          <h1>图文、视频与复诊续方构成完整线上接诊链路。</h1>
          <p>支持 AI 预问诊、实时视频问诊、电子处方与诊后随访，页面形态更接近真实互联网医院问诊入口。</p>
          <div class="search-bar">
            <span>输入症状、疾病或科室关键词</span>
            <button type="button">AI 预问诊</button>
          </div>
        </div>
        <div class="hero-side">
          <article class="doctor-card">
            <span>推荐医生</span>
            <strong>王医生 · 三甲医院皮肤科</strong>
            <p>15 年经验 · 视频问诊可约 · 30 分钟内接诊</p>
          </article>
          <article class="doctor-card">
            <span>诊后提醒</span>
            <strong>复诊续方待确认</strong>
            <p>上次处方可一键发起复诊，医生确认后自动流转药房。</p>
          </article>
        </div>
      </section>

      <section class="entry-grid">
        <MedicalCard v-for="item in medicalConsultCards" :key="item.title" :item="item" />
      </section>

      <section class="panel flow-panel">
        <div class="section-head">
          <div>
            <span>Flow</span>
            <h2>问诊流程</h2>
          </div>
        </div>
        <div class="flow-grid">
          <article class="flow-card">
            <strong>1. 提交症状</strong>
            <p>选择病情描述、上传图片或检查报告，AI 先完成预问诊采集。</p>
          </article>
          <article class="flow-card">
            <strong>2. 智能分诊</strong>
            <p>根据病情自动匹配科室、医生职称与问诊方式。</p>
          </article>
          <article class="flow-card">
            <strong>3. 在线接诊</strong>
            <p>图文、电话、视频多模式问诊，支持处方与用药建议。</p>
          </article>
          <article class="flow-card">
            <strong>4. 诊后随访</strong>
            <p>自动生成复诊提醒、服药提醒和康复指导任务。</p>
          </article>
        </div>
      </section>
    </div>
  </MedicalLayout>
</template>

<script setup>
import MedicalCard from '@/components/medical/MedicalCard.vue'
import MedicalLayout from '@/components/medical/MedicalLayout.vue'
import { medicalConsultCards } from '@/data/medicalSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.entry-grid,
.flow-grid {
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
  grid-template-columns: minmax(0, 1.1fr) 320px;
  gap: 18px;
  padding: 24px;
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

h1 {
  margin-top: 18px;
  color: #0f172a;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p {
  margin-top: 14px;
  max-width: 720px;
  color: #64748b;
  font-size: 15px;
  line-height: 1.9;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
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

.search-bar button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #0f766e, #14b8a6);
  font-weight: 700;
}

.hero-side {
  display: grid;
  gap: 14px;
}

.doctor-card,
.flow-card {
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, #ffffff, #f0fdfa);
}

.doctor-card span,
.section-head span {
  display: inline-flex;
  color: #0f766e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.doctor-card strong,
.section-head h2,
.flow-card strong {
  display: block;
  margin-top: 10px;
  color: #0f172a;
}

.doctor-card p,
.flow-card p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
}

.entry-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.section-head h2 {
  margin-top: 10px;
  font-size: 28px;
}

.flow-panel {
  padding: 24px;
}

.flow-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 20px;
}

@media (max-width: 1080px) {
  .hero,
  .entry-grid,
  .flow-grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
