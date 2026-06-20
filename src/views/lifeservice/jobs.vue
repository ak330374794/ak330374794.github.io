<template>
  <LifeServiceLayout>
    <div class="ls-shell jobs-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">招聘求职</span>
          <h1>职位搜索、简历投递、企业主页与求职社区，连接人才与岗位。</h1>
          <p>支持按城市、行业、薪资和经验筛选职位，提供简历编辑、投递管理、面试提醒和企业招聘后台能力。</p>
        </div>
      </section>

      <section class="jobs-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>热门职位</h2>
              <p>支持一键投递、进度跟踪和智能推荐。</p>
            </div>
          </div>
          <div class="job-list">
            <article v-for="item in jobCards" :key="`${item.title}-${item.company}`" class="job-card">
              <strong>{{ item.title }}</strong>
              <span>{{ item.company }}</span>
              <small>{{ item.meta }}</small>
              <em>{{ item.salary }}</em>
            </article>
          </div>
        </section>

        <aside class="panel">
          <div class="panel-head">
            <div>
              <h2>招聘模块</h2>
              <p>企业主页、职场社区与招聘后台的核心入口。</p>
            </div>
          </div>
          <div class="board-list">
            <article v-for="item in companyBoards" :key="item.title" class="board-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </LifeServiceLayout>
</template>

<script setup>
import LifeServiceLayout from '@/components/lifeservice/LifeServiceLayout.vue'
import { companyBoards, jobCards } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.jobs-page,
.jobs-grid,
.job-list,
.board-list {
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
  background: linear-gradient(135deg, #fff7ed, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2,
.job-card strong,
.board-card strong {
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
.job-card span,
.job-card small,
.board-card p {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.jobs-grid {
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
}

.job-card,
.board-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.job-card span,
.job-card small,
.job-card em {
  display: block;
  margin-top: 8px;
}

.job-card small {
  font-size: 12px;
}

.job-card em {
  color: #ea580c;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
}

.board-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .jobs-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .panel,
  .job-card,
  .board-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }
}

@media (max-width: 640px) {
  .panel,
  .job-card,
  .board-card {
    padding: 16px;
  }
}
</style>
