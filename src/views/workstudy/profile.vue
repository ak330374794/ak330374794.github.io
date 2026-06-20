<template>
  <WorkStudyLayout>
    <div class="ws-shell profile-page">
      <section class="panel profile-hero">
        <img :src="workStudyProfile.avatar" :alt="workStudyProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ workStudyProfile.handle }}</span>
          <h1>{{ workStudyProfile.name }}</h1>
          <p>{{ workStudyProfile.bio }}</p>
          <div class="benefit-list">
            <em v-for="item in workStudyBenefits" :key="item">{{ item }}</em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <h2>学习与使用记录</h2>
            <p>课程学习、文档下载和协作活动统一沉淀。</p>
          </div>
          <div class="card-list">
            <article v-for="item in workStudyHistory" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>最近使用</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <h2>消息中心</h2>
            <p>课程提醒、协作通知和会员权益到期提醒。</p>
          </div>
          <div class="card-list">
            <article v-for="item in workStudyNotices" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>系统消息</span>
            </article>
          </div>
        </section>
      </section>
    </div>
  </WorkStudyLayout>
</template>

<script setup>
import WorkStudyLayout from '@/components/workstudy/WorkStudyLayout.vue'
import { workStudyBenefits, workStudyHistory, workStudyNotices, workStudyProfile } from '@/data/workStudySite'
</script>

<style scoped>
.ws-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.profile-page,
.main-grid,
.card-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.profile-hero {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 24px;
  align-items: center;
  padding: 24px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 32px;
  object-fit: cover;
}

.handle,
.profile-copy p,
.panel-head p,
.info-card span {
  color: #64748b;
}

.profile-copy h1,
.panel-head h2,
.info-card strong {
  color: #0f172a;
}

.profile-copy h1 {
  margin-top: 8px;
  font-size: clamp(34px, 4vw, 46px);
}

.profile-copy p {
  margin-top: 12px;
  max-width: 720px;
  font-size: 14px;
  line-height: 1.9;
}

.benefit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.benefit-list em {
  padding: 8px 12px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 12px;
  font-style: normal;
}

.main-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.main-grid > .panel {
  padding: 20px;
}

.card-list {
  margin-top: 18px;
}

.info-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.info-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}

@media (max-width: 1080px) {
  .profile-hero,
  .main-grid {
    grid-template-columns: 1fr;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }
}
</style>
