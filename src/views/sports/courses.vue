<template>
  <SportsLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">训练课程中心</span>
          <h1>训练计划、动作拆解、直播带练和恢复课程集中呈现。</h1>
          <p>页面结构更接近 Keep、乐刻这类健身课程页，先承接目标和训练节奏，再展示可直接开始的课程。</p>
          <div class="hero-toolbar">
            <span>减脂</span>
            <span>增肌</span>
            <span>塑形</span>
            <span>跑步</span>
            <button type="button">查看训练计划</button>
          </div>
        </div>
        <article class="plan-card">
          <span>本周推荐计划</span>
          <strong>7 天燃脂打卡</strong>
          <p>每天 35 分钟，结合 HIIT、核心和拉伸恢复，适合作为课程页主计划位。</p>
          <div class="plan-meta">
            <span>难度 2 星</span>
            <span>器械少</span>
            <span>已报名 8,420</span>
          </div>
        </article>
      </section>

      <section class="schedule-strip">
        <article class="schedule-card">
          <span>今日安排</span>
          <strong>18:30 直播燃脂课</strong>
          <p>跟练时长 45 分钟，已开放预约与开播提醒。</p>
        </article>
        <article class="schedule-card">
          <span>动作库</span>
          <strong>132 个标准动作</strong>
          <p>支持部位筛选、要点讲解与错误动作纠正。</p>
        </article>
        <article class="schedule-card">
          <span>营养搭配</span>
          <strong>28 份食谱建议</strong>
          <p>按减脂、增肌、恢复日自动推荐。</p>
        </article>
      </section>

      <section class="content-grid">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>课程库</h2>
              <p>按目标、时长和训练方式组织内容，比单纯卡片更接近课程中心页。</p>
            </div>
          </div>
          <div class="course-grid">
            <SportsCard v-for="item in sportsCourseCards" :key="item.title" :item="item" />
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel progress-card">
            <span>训练进度</span>
            <strong>本周已完成 3 / 5 次</strong>
            <p>累计训练 128 分钟，热量消耗 1,260 kcal。</p>
            <div class="progress-bar">
              <i></i>
            </div>
          </section>

          <section class="panel checklist-card">
            <div class="panel-head compact">
              <div>
                <h2>课程节奏</h2>
                <p>健身课程页常见的训练日历与注意事项。</p>
              </div>
            </div>
            <div class="checklist">
              <article class="check-item">
                <strong>周一</strong>
                <span>HIIT 爆汗课 30 分钟</span>
              </article>
              <article class="check-item">
                <strong>周三</strong>
                <span>臀腿力量 40 分钟</span>
              </article>
              <article class="check-item">
                <strong>周五</strong>
                <span>跑步配速训练 50 分钟</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </SportsLayout>
</template>

<script setup>
import SportsCard from '@/components/sports/SportsCard.vue'
import SportsLayout from '@/components/sports/SportsLayout.vue'
import { sportsCourseCards } from '@/data/sportsSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.content-grid,
.course-grid,
.side-stack,
.schedule-strip,
.plan-meta,
.checklist {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 18px;
  padding: 24px;
  background: linear-gradient(135deg, #f0fdf4, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
h2,
.plan-card strong,
.schedule-card strong,
.check-item strong,
.progress-card strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.panel-head p,
.plan-card p,
.schedule-card p,
.progress-card p,
.check-item span {
  color: #64748b;
}

.hero-copy p,
.panel-head p,
.plan-card p,
.schedule-card p,
.progress-card p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
}

.hero-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
}

.hero-toolbar span,
.plan-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #166534;
  background: #dcfce7;
  font-size: 12px;
  font-weight: 700;
}

button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #16a34a, #22c55e);
  font-weight: 700;
}

.plan-card,
.schedule-card,
.progress-card,
.checklist-card {
  padding: 22px;
}

.plan-card strong {
  display: block;
  margin-top: 12px;
  font-size: 30px;
  line-height: 1.12;
}

.plan-meta {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.schedule-strip {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.schedule-card {
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff, #f0fdf4);
}

.schedule-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
}

.content-grid {
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.78fr);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  padding: 24px 24px 0;
}

.panel-head h2 {
  font-size: 24px;
}

.course-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 0 24px 24px;
}

.progress-card strong {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.progress-bar {
  height: 10px;
  margin-top: 16px;
  border-radius: 999px;
  background: #dcfce7;
  overflow: hidden;
}

.progress-bar i {
  display: block;
  width: 60%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #16a34a, #22c55e);
}

.checklist {
  gap: 12px;
}

.check-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #f8fafc;
}

@media (max-width: 1080px) {
  .hero,
  .schedule-strip,
  .content-grid,
  .course-grid,
  .plan-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero,
  .plan-card,
  .schedule-card,
  .progress-card,
  .checklist-card {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
  }

  .plan-card strong,
  .progress-card strong,
  .schedule-card strong {
    font-size: 22px;
  }

  .panel-head {
    padding: 18px 18px 0;
    margin-bottom: 14px;
  }

  .course-grid {
    padding: 0 18px 18px;
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .hero,
  .plan-card,
  .schedule-card,
  .progress-card,
  .checklist-card {
    padding: 16px;
  }

  .panel-head {
    padding: 16px 16px 0;
  }

  .course-grid {
    padding: 0 16px 16px;
  }
}
</style>
