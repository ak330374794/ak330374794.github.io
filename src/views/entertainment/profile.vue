<template>
  <EntertainmentLayout>
    <div class="ent-shell profile-page">
      <section class="panel profile-hero">
        <img :src="entertainmentProfile.avatar" :alt="entertainmentProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ entertainmentProfile.handle }}</span>
          <h1>{{ entertainmentProfile.name }}</h1>
          <p>{{ entertainmentProfile.bio }}</p>
          <div class="benefit-list">
            <em v-for="item in membershipBenefits" :key="item">{{ item }}</em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <h2>观看与播放历史</h2>
            <p>支持多端续播、收藏同步和更新提醒。</p>
          </div>
          <div class="card-list">
            <article v-for="item in watchHistory" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>最近播放</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <h2>会员消息</h2>
            <p>续费提醒、更新通知和家庭账号管理。</p>
          </div>
          <div class="card-list">
            <article v-for="item in memberNotices" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>系统通知</span>
            </article>
          </div>
        </section>
      </section>
    </div>
  </EntertainmentLayout>
</template>

<script setup>
import EntertainmentLayout from '@/components/entertainment/EntertainmentLayout.vue'
import { entertainmentProfile, memberNotices, membershipBenefits, watchHistory } from '@/data/entertainmentSite'
</script>

<style scoped>
.ent-shell {
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
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
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
  color: rgba(255, 255, 255, 0.68);
}

.profile-copy h1,
.panel-head h2,
.info-card strong {
  color: #fff;
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
  color: #f5c451;
  background: rgba(245, 196, 81, 0.1);
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
  background: rgba(255, 255, 255, 0.04);
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
