<template>
  <div class="cases-page shell-container">
    <RevealSection>
      <header class="cases-header">
        <span class="cases-kicker">Selected Work</span>
        <h1>案例</h1>
        <p>整理近期完成的产品、品牌官网与中后台项目，聚焦目标、关键动作与结果变化。</p>
      </header>
    </RevealSection>

    <div class="cases-grid">
      <RevealSection v-for="(item, index) in cases" :key="item.slug" :delay="60 + index * 30">
        <RouterLink v-if="item.siteRoute" class="case-card case-link" :style="{ '--case-accent': item.accent }" :to="item.siteRoute">
          <h2>{{ item.title }}</h2>

          <div class="case-highlights">
            <span v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</span>
          </div>
        </RouterLink>

        <article v-else class="case-card" :style="{ '--case-accent': item.accent }">
          <h2>{{ item.title }}</h2>

          <div class="case-highlights">
            <span v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</span>
          </div>
        </article>
      </RevealSection>
    </div>
  </div>
</template>

<script setup>
import RevealSection from '@/components/blog/RevealSection.vue'
import { RouterLink } from 'vue-router'
import { cases } from '@/data/cases'
</script>

<style scoped>
.cases-page {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 1040px;
}

.cases-header {
  max-width: 680px;
}

.cases-kicker {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 999px;
  color: #18a787;
  background: rgba(24, 167, 135, 0.1);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cases-header h1 {
  margin-top: 14px;
  color: #172033;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.cases-header p {
  margin-top: 12px;
  color: #7d828a;
  font-size: 14px;
  line-height: 1.9;
}

.cases-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}

.cases-grid > * {
  flex: 0 0 calc(50% - 10px);
  display: flex;
  min-width: 0;
}

.case-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  justify-content: flex-start;
  width: 100%;
  min-height: 148px;
  padding: 20px 22px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.86)), var(--case-accent, rgba(23, 32, 51, 0.06));
  box-shadow: 0 14px 28px rgba(17, 24, 39, 0.05);
}

.case-link {
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.case-link:hover {
  transform: translateY(-3px);
  border-color: rgba(24, 167, 135, 0.2);
  box-shadow: 0 18px 36px rgba(17, 24, 39, 0.08);
}

.case-card h2 {
  margin: 0;
  min-height: 55px;
  color: #172033;
  font-size: 22px;
  line-height: 1.25;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.case-highlights {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px 10px;
  width: 100%;
}

.case-highlights span {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  padding: 5px 10px;
  border-radius: 999px;
  color: #18a787;
  background: rgba(24, 167, 135, 0.08);
  font-size: 11px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 960px) {
  .cases-grid > * {
    flex-basis: 100%;
  }
}

@media (max-width: 640px) {
  .case-card h2 {
    font-size: 20px;
  }
}
</style>
