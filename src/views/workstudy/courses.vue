<template>
  <WorkStudyLayout>
    <div class="ws-shell courses-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">在线教育</span>
          <h1>直播、录播、训练营和题库测评，构建完整学习路径。</h1>
          <p>支持倍速播放、章节导航、学习进度保存、课后测验和班级社群，适配学生、教师与职业进修用户。</p>
          <div class="hero-toolbar">
            <span>编程 / 语言 / 职场 / 考证</span>
            <button type="button">查看学习路径</button>
          </div>
        </div>
      </section>

      <section class="tag-strip">
        <article class="tag-card">热门课程</article>
        <article class="tag-card">训练营</article>
        <article class="tag-card">题库测评</article>
        <article class="tag-card">直播课</article>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>课程推荐</h2>
            <p>覆盖 K12、语言学习、职场技能与职业考试。</p>
          </div>
        </div>
        <div class="course-grid">
          <WorkStudyCourseCard v-for="item in workStudyCourses" :key="item.title" :item="item" />
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>学习能力</h2>
            <p>直播教室、作业考试和学习管理共同支撑教学闭环。</p>
          </div>
        </div>
        <div class="feature-grid">
          <article v-for="item in learningPanels" :key="item.title" class="feature-card" :style="{ '--tone': item.tone }">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>
    </div>
  </WorkStudyLayout>
</template>

<script setup>
import WorkStudyCourseCard from '@/components/workstudy/WorkStudyCourseCard.vue'
import WorkStudyLayout from '@/components/workstudy/WorkStudyLayout.vue'
import { learningPanels, workStudyCourses } from '@/data/workStudySite'
</script>

<style scoped>
.ws-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.courses-page,
.course-grid,
.feature-grid,
.tag-strip {
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
  background: linear-gradient(135deg, #eef5ff, #ffffff);
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

.hero-panel h1,
.panel-head h2,
.feature-card strong {
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
.feature-card p {
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
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
  padding: 12px 12px 12px 16px;
  border-radius: 22px;
  background: rgba(37, 99, 235, 0.06);
}

.hero-toolbar span {
  color: #64748b;
  font-size: 14px;
}

.hero-toolbar button {
  min-height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  font-weight: 700;
}

.tag-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tag-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #eef5ff);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.course-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card {
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff, color-mix(in srgb, var(--tone) 7%, white));
}

.feature-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .tag-strip,
  .course-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .hero-toolbar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
