<template>
  <CorporateLayout>
    <div class="corp-shell contact-page">
      <section class="panel profile-hero">
        <img :src="corporateProfile.avatar" :alt="corporateProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ corporateProfile.handle }}</span>
          <h1>{{ corporateProfile.name }}</h1>
          <p>{{ corporateProfile.bio }}</p>
          <div class="benefit-list">
            <em v-for="item in corporateBenefits" :key="item">{{ item }}</em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <h2>访客行为</h2>
            <p>记录浏览、下载、预约 Demo 等关键动作。</p>
          </div>
          <div class="card-list">
            <article v-for="item in corporateHistory" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>最近记录</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <h2>联系与消息</h2>
            <p>演示确认、资料下载与专题内容更新通知。</p>
          </div>
          <div class="card-list">
            <article v-for="item in corporateNotices" :key="item" class="info-card">
              <strong>{{ item }}</strong>
              <span>系统消息</span>
            </article>
          </div>
        </section>
      </section>

      <section class="panel contact-panel">
        <div class="contact-card" v-for="item in investorPanels" :key="item.title">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </div>
      </section>
    </div>
  </CorporateLayout>
</template>

<script setup>
import CorporateLayout from '@/components/corporate/CorporateLayout.vue'
import { corporateBenefits, corporateHistory, corporateNotices, corporateProfile, investorPanels } from '@/data/corporateSite'
</script>

<style scoped>
.corp-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.contact-page,
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
.info-card span,
.contact-card p {
  color: #64748b;
}

.profile-copy h1,
.panel-head h2,
.info-card strong,
.contact-card strong {
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
  color: #0f172a;
  background: rgba(15, 23, 42, 0.06);
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

.contact-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 20px;
}

.contact-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.contact-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .profile-hero,
  .main-grid,
  .contact-panel {
    grid-template-columns: 1fr;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 768px) {
  .profile-hero,
  .main-grid > .panel,
  .contact-panel {
    padding: 18px;
  }

  .profile-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .info-card,
  .contact-card {
    padding: 14px 16px;
  }
}

@media (max-width: 640px) {
  .profile-hero,
  .main-grid > .panel,
  .contact-panel {
    padding: 16px;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 24px;
  }
}
</style>
