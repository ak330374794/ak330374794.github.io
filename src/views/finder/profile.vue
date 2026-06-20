<template>
  <FinderLayout>
    <div class="finder-shell profile-page">
      <section class="panel profile-hero">
        <img :src="finderProfile.avatar" :alt="finderProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ finderProfile.handle }}</span>
          <h1>{{ finderProfile.name }}</h1>
          <p>{{ finderProfile.bio }}</p>
          <div class="meta-row">
            <strong>搜索偏好：安全搜索开启</strong>
            <strong>每页结果数：20 条</strong>
            <strong>隐私模式：按需启用</strong>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel">
          <div class="panel-head">
            <h2>最近搜索</h2>
            <p>同步搜索历史，支持跨设备查看与管理。</p>
          </div>
          <div class="history-list">
            <article v-for="item in finderHistory" :key="item" class="history-card">
              <strong>{{ item }}</strong>
              <span>刚刚使用</span>
            </article>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <h2>收藏夹</h2>
            <p>收藏网页、工具和导航入口，支持分组与拖拽排序。</p>
          </div>
          <div class="favorite-list">
            <article v-for="item in finderFavorites" :key="item" class="favorite-card">
              <strong>{{ item }}</strong>
              <span>已收藏常用入口</span>
            </article>
          </div>
        </section>
      </section>
    </div>
  </FinderLayout>
</template>

<script setup>
import FinderLayout from '@/components/finder/FinderLayout.vue'
import { finderFavorites, finderHistory, finderProfile } from '@/data/finderSite'
</script>

<style scoped>
.finder-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.profile-page,
.main-grid,
.history-list,
.favorite-list {
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
  background: linear-gradient(135deg, #eef5ff, #ffffff);
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
.history-card span,
.favorite-card span {
  color: #64748b;
}

.profile-copy h1,
.panel-head h2,
.history-card strong,
.favorite-card strong {
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

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.meta-row strong {
  padding: 8px 12px;
  border-radius: 999px;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  font-size: 13px;
}

.main-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.main-grid > .panel {
  padding: 20px;
}

.history-list,
.favorite-list {
  margin-top: 18px;
}

.history-card,
.favorite-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.history-card span,
.favorite-card span {
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

@media (max-width: 768px) {
  .profile-hero,
  .main-grid > .panel {
    padding: 18px;
  }

  .profile-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .history-card,
  .favorite-card {
    padding: 14px 16px;
  }
}

@media (max-width: 640px) {
  .profile-hero,
  .main-grid > .panel {
    padding: 16px;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 24px;
  }

  .meta-row strong {
    width: 100%;
  }
}
</style>
