<template>
  <WorkStudyLayout>
    <div class="ws-shell collab-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">在线协作</span>
          <h1>多人实时编辑、团队空间与知识库沉淀，支撑跨部门协同办公。</h1>
          <p>围绕云文档、协作表格、会议纪要、知识库和权限体系，构建团队项目管理和日常办公的核心工作台。</p>
        </div>
      </section>

      <section class="content-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>核心协作能力</h2>
              <p>在线编辑、评论修订、知识目录和会议纪要统一沉淀。</p>
            </div>
          </div>
          <div class="feature-grid">
            <article v-for="item in collabFeatures" :key="item.title" class="feature-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <aside class="panel">
          <div class="panel-head">
            <div>
              <h2>团队空间</h2>
              <p>项目组、部门和知识库的空间使用概览。</p>
            </div>
          </div>
          <div class="board-list">
            <article v-for="item in collabBoards" :key="item.title" class="board-card">
              <strong>{{ item.title }}</strong>
              <span>{{ item.members }}</span>
              <em>{{ item.progress }}</em>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </WorkStudyLayout>
</template>

<script setup>
import WorkStudyLayout from '@/components/workstudy/WorkStudyLayout.vue'
import { collabBoards, collabFeatures } from '@/data/workStudySite'
</script>

<style scoped>
.ws-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.collab-page,
.content-grid,
.feature-grid,
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
  background: linear-gradient(135deg, #eef2ff, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2,
.feature-card strong,
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
.feature-card p,
.board-card span,
.board-card em {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.content-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
}

.feature-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.feature-card,
.board-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.feature-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

.board-card span,
.board-card em {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.board-card em {
  color: #2563eb;
  font-style: normal;
}

@media (max-width: 1080px) {
  .content-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .panel,
  .feature-card,
  .board-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }
}

@media (max-width: 640px) {
  .panel,
  .feature-card,
  .board-card {
    padding: 16px;
  }
}
</style>
