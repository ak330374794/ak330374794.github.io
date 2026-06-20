<template>
  <WorkStudyLayout>
    <div class="ws-shell library-page">
      <section class="hero-panel panel">
        <div>
          <span class="hero-badge">文档文库</span>
          <h1>沉淀课程资料、考试题库、办公模板和教育课件，支持预览与下载。</h1>
          <p>支持 Word、PDF、PPT、Excel 等格式的上传转码、在线预览、全文搜索、积分兑换与 VIP 无限下载。</p>
        </div>
      </section>

      <section class="library-grid">
        <section v-for="group in libraryGroups" :key="group.title" class="panel">
          <div class="panel-head">
            <div>
              <h2>{{ group.title }}</h2>
              <p>热门资料与模板入口</p>
            </div>
          </div>
          <div class="doc-list">
            <article v-for="doc in group.docs" :key="doc" class="doc-card">
              <strong>{{ doc }}</strong>
              <span>支持在线预览 / 下载 / 收藏</span>
            </article>
          </div>
        </section>
      </section>
    </div>
  </WorkStudyLayout>
</template>

<script setup>
import WorkStudyLayout from '@/components/workstudy/WorkStudyLayout.vue'
import { libraryGroups } from '@/data/workStudySite'
</script>

<style scoped>
.ws-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.library-page,
.library-grid,
.doc-list {
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
  background: linear-gradient(135deg, #eff6ff, #ffffff);
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
.doc-card strong {
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
.doc-card span {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.library-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.doc-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.doc-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

@media (max-width: 1080px) {
  .library-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .panel,
  .doc-card {
    padding: 18px;
  }

  .hero-panel h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-panel p {
    font-size: 13px;
    line-height: 1.75;
  }
}

@media (max-width: 640px) {
  .panel,
  .doc-card {
    padding: 16px;
    border-radius: 20px;
  }

  .hero-badge {
    font-size: 10px;
  }

  .doc-card strong {
    font-size: 16px;
  }
}
</style>
