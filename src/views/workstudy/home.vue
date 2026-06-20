<template>
  <WorkStudyLayout>
    <div class="ws-shell ws-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-badge">LEARN + COLLABORATE</span>
          <h1>{{ workStudyHero.title }}</h1>
          <p>{{ workStudyHero.subtitle }}</p>
          <div class="toolbar-card">
            <span>课程 / 文库 / 协作空间 / 作业管理</span>
            <button type="button">开始学习</button>
          </div>
          <div class="hero-tags">
            <em v-for="tag in workStudyHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <img :src="workStudyHero.image" :alt="workStudyHero.title" class="hero-image" />
      </section>

      <section class="stats-row">
        <article v-for="item in workStudyStats" :key="item.label" class="stats-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section class="course-panel panel">
        <div class="panel-head">
          <div>
            <span>Courses</span>
            <h2>精选课程</h2>
          </div>
          <p>更接近在线教育首页的课程推荐布局，强调封面、难度与学习路径。</p>
        </div>
        <div class="course-grid">
          <WorkStudyCourseCard v-for="item in workStudyCourses" :key="item.title" :item="item" />
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Learning</span>
              <h2>学习能力矩阵</h2>
            </div>
          </div>
          <div class="panel-grid">
            <article v-for="item in learningPanels" :key="item.title" class="info-card" :style="{ '--tone': item.tone }">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Library</span>
              <h2>文库分区</h2>
            </div>
          </div>
          <div class="library-list">
            <article v-for="group in libraryGroups" :key="group.title" class="library-card">
              <strong>{{ group.title }}</strong>
              <span v-for="doc in group.docs.slice(0, 4)" :key="doc">{{ doc }}</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <span>Collab</span>
              <h2>协作看板</h2>
            </div>
          </div>
          <div class="board-list">
            <article v-for="item in collabBoards" :key="item.title" class="board-card">
              <strong>{{ item.title }}</strong>
              <span>{{ item.members }}</span>
              <em>{{ item.progress }}</em>
            </article>
          </div>
        </section>
      </section>
    </div>
  </WorkStudyLayout>
</template>

<script setup>
import WorkStudyCourseCard from '@/components/workstudy/WorkStudyCourseCard.vue'
import WorkStudyLayout from '@/components/workstudy/WorkStudyLayout.vue'
import { collabBoards, learningPanels, libraryGroups, workStudyCourses, workStudyHero, workStudyStats } from '@/data/workStudySite'
</script>

<style scoped>
.ws-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.ws-home,
.main-grid,
.library-list,
.board-list {
  display: grid;
  gap: 18px;
}

.hero-panel,
.stats-card,
.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
  overflow: hidden;
}

.hero-copy {
  padding: 28px;
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 11px;
  font-weight: 700;
}

.hero-copy h1,
.stats-card strong,
.panel-head h2,
.library-card strong,
.board-card strong,
.info-card strong {
  color: #0f172a;
}

.hero-copy h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.6vw, 62px);
  line-height: 1.06;
}

.hero-copy p,
.stats-card span,
.panel-head p,
.library-card span,
.board-card span,
.info-card p,
.board-card em {
  color: #64748b;
}

.hero-copy p {
  margin-top: 16px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.85;
}

.toolbar-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding: 14px 16px;
  border-radius: 22px;
  background: rgba(37, 99, 235, 0.06);
}

.toolbar-card span {
  color: #64748b;
  font-size: 14px;
}

.toolbar-card button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  font-weight: 700;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.hero-tags em {
  padding: 7px 12px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 12px;
  font-style: normal;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
}

.stats-row,
.course-grid,
.panel-grid {
  display: grid;
  gap: 16px;
}

.stats-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stats-card {
  padding: 18px;
  text-align: center;
}

.stats-card strong {
  display: block;
  font-size: 32px;
}

.stats-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.panel {
  padding: 20px;
}

.panel-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.panel-head span {
  display: inline-flex;
  color: #2563eb;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.panel-head h2 {
  margin-top: 10px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.panel-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.info-card,
.library-card,
.board-card {
  padding: 16px;
  border-radius: 20px;
  background: #f8fafc;
}

.info-card {
  background: linear-gradient(180deg, #fff, color-mix(in srgb, var(--tone) 7%, white));
}

.info-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.8;
}

.library-card span,
.board-card span,
.board-card em {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

.board-card em {
  font-style: normal;
  color: #2563eb;
}

.main-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .hero-panel,
  .main-grid,
  .stats-row,
  .course-grid,
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
