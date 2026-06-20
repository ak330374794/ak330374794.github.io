<template>
  <LifeServiceLayout>
    <div class="ls-shell profile-page">
      <section class="panel profile-hero">
        <img :src="lifeServiceProfile.avatar" :alt="lifeServiceProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ lifeServiceProfile.handle }}</span>
          <h1>{{ lifeServiceProfile.name }}</h1>
          <p>{{ lifeServiceProfile.bio }}</p>
          <div class="benefit-list">
            <em v-for="item in lifeBenefits" :key="item">{{ item }}</em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <h2>订单与使用记录</h2>
            <p>外卖、酒店、出行与职位投递记录统一管理。</p>
          </div>
          <div class="card-list">
            <article v-for="item in lifeHistory" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>最近记录</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <h2>消息中心</h2>
            <p>订单状态、优惠活动和面试提醒集中展示。</p>
          </div>
          <div class="card-list">
            <article v-for="item in lifeNotices" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>系统通知</span>
            </article>
          </div>
        </section>
      </section>
    </div>
  </LifeServiceLayout>
</template>

<script setup>
import LifeServiceLayout from '@/components/lifeservice/LifeServiceLayout.vue'
import { lifeBenefits, lifeHistory, lifeNotices, lifeServiceProfile } from '@/data/lifeServiceSite'
</script>

<style scoped>
.ls-shell {
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
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
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
