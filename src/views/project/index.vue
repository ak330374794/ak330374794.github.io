<template>
  <div v-if="project" class="project-page shell-container">
    <RevealSection>
      <ProjectHero :project="project" />
    </RevealSection>

    <RevealSection :delay="40">
      <ProjectSectionNav :items="navItems" />
    </RevealSection>

    <RevealSection :delay="60">
      <section id="overview" class="content-section intro-section">
        <div class="section-heading">
          <span>项目首页</span>
          <h2>把一份复杂 PRD 转成可浏览、可感知、可复用的网站案例</h2>
        </div>
        <div class="intro-grid">
          <article class="copy-card">
            <p v-for="item in project.overview" :key="item">{{ item }}</p>
          </article>
          <article class="meta-card">
            <div class="meta-item">
              <span>文档版本</span>
              <strong>{{ project.version }}</strong>
            </div>
            <div class="meta-item">
              <span>编制日期</span>
              <strong>{{ project.date }}</strong>
            </div>
            <div class="meta-item">
              <span>文档状态</span>
              <strong>{{ project.status }}</strong>
            </div>
            <div class="meta-item">
              <span>编写人</span>
              <strong>{{ project.author }}</strong>
            </div>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="80">
      <section class="content-section">
        <div class="section-heading compact-heading">
          <span>目标用户</span>
          <h2>四类核心参与者，共同构成资讯平台的价值闭环</h2>
        </div>
        <div class="user-grid">
          <article v-for="item in project.userCards" :key="item.title" class="user-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="100">
      <section class="content-section dark-section">
        <div class="section-heading compact-heading">
          <span>业务目标</span>
          <h2>从流量规模到商业化结果，建立可执行的增长指标体系</h2>
        </div>
        <div class="goal-grid">
          <article v-for="item in project.goalCards" :key="item.title" class="goal-card">
            <small>{{ item.title }}</small>
            <strong>{{ item.value }}</strong>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="120">
      <section id="features" class="content-section">
        <div class="section-heading">
          <span>功能架构页</span>
          <h2>覆盖内容分发、创作运营、搜索增长与平台治理的完整能力地图</h2>
        </div>
        <div class="feature-grid">
          <article v-for="section in project.functionalSections" :key="section.title" class="feature-card">
            <h3>{{ section.title }}</h3>
            <ul>
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="140">
      <section id="tech" class="content-section">
        <div class="section-heading">
          <span>技术与运营页</span>
          <h2>以性能、安全、推荐、运营和收入结构为核心，支撑平台长期演进</h2>
        </div>
        <div class="panel-grid">
          <article class="panel-card">
            <h3>非功能需求</h3>
            <ul>
              <li v-for="item in project.nonFunctional" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="panel-card">
            <h3>UI / UX 设计需求</h3>
            <ul>
              <li v-for="item in project.designRequirements" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="panel-card">
            <h3>技术架构建议</h3>
            <ul>
              <li v-for="item in project.architecture" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="panel-card">
            <h3>内容运营需求</h3>
            <ul>
              <li v-for="item in project.operations" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="panel-card">
            <h3>商业模式与变现</h3>
            <ul>
              <li v-for="item in project.monetization" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="panel-card">
            <h3>风险与应对</h3>
            <ul>
              <li v-for="item in project.risks" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="160">
      <section id="delivery" class="content-section">
        <div class="section-heading compact-heading">
          <span>交付计划</span>
          <h2>以四阶段推进 MVP、创作者平台、PWA 与生态扩展</h2>
        </div>
        <ProjectTimeline :items="project.milestones" />
      </section>
    </RevealSection>
  </div>

  <div v-else class="project-empty shell-container">
    <h1>项目不存在</h1>
    <RouterLink to="/cases.html">返回案例列表</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import RevealSection from '@/components/blog/RevealSection.vue'
import ProjectHero from '@/components/project/ProjectHero.vue'
import ProjectSectionNav from '@/components/project/ProjectSectionNav.vue'
import ProjectTimeline from '@/components/project/ProjectTimeline.vue'
import { getProjectBySlug } from '@/data/projects'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug))
const navItems = [
  { href: '#overview', label: '项目概览', note: '定位、价值与项目信息' },
  { href: '#features', label: '功能架构', note: '内容、搜索、创作、后台' },
  { href: '#tech', label: '技术运营', note: '性能、安全、运营、变现' },
  { href: '#delivery', label: '交付计划', note: '里程碑、周期与风险' },
]
</script>

<style scoped>
.project-page {
  display: grid;
  gap: 30px;
  max-width: 1180px;
}

.content-section {
  display: grid;
  gap: 24px;
}

.dark-section {
  padding: 28px;
  border-radius: 32px;
  background: linear-gradient(180deg, #081733, #112349);
}

.section-heading {
  max-width: 880px;
}

.section-heading span {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  color: #18a787;
  background: rgba(24, 167, 135, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin-top: 14px;
  color: #172033;
  font-family: 'Times New Roman', 'STSong', serif;
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.compact-heading h2 {
  font-size: clamp(28px, 3.2vw, 46px);
}

.dark-section .section-heading h2 {
  color: #f6f8fb;
}

.intro-grid,
.panel-grid,
.feature-grid,
.user-grid,
.goal-grid {
  display: grid;
  gap: 18px;
}

.intro-grid,
.feature-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.user-grid,
.goal-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.copy-card,
.meta-card,
.feature-card,
.panel-card,
.user-card,
.goal-card {
  padding: 24px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 16px 34px rgba(17, 24, 39, 0.04);
}

.copy-card {
  display: grid;
  gap: 14px;
}

.copy-card p,
.feature-card li,
.panel-card li,
.user-card p,
.goal-card p {
  color: #66707c;
  font-size: 14px;
  line-height: 1.85;
}

.meta-card {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.meta-item span,
.goal-card small {
  color: #8b95a1;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.meta-item strong,
.goal-card strong {
  display: block;
  margin-top: 8px;
  color: #172033;
  font-size: 24px;
  line-height: 1.2;
}

.feature-card h3,
.panel-card h3,
.user-card h3 {
  color: #172033;
  font-size: 22px;
  line-height: 1.3;
}

.feature-card ul,
.panel-card ul {
  display: grid;
  gap: 10px;
  margin-top: 16px;
  padding-left: 18px;
}

.user-card p,
.goal-card p {
  margin-top: 12px;
}

.goal-card {
  background: rgba(255, 255, 255, 0.94);
}

.project-empty {
  display: grid;
  gap: 16px;
  max-width: 680px;
}

.project-empty h1 {
  color: #172033;
  font-size: 40px;
}

.project-empty a {
  color: #18a787;
  font-weight: 600;
}

@media (max-width: 1100px) {
  .user-grid,
  .goal-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .intro-grid,
  .panel-grid,
  .feature-grid,
  .user-grid,
  .goal-grid,
  .meta-card {
    grid-template-columns: 1fr;
  }

  .dark-section {
    padding: 22px;
    border-radius: 24px;
  }
}
</style>
