<template>
  <SocialLayout>
    <div class="social-shell profile-page">
      <section class="profile-hero panel">
        <img :src="socialProfile.avatar" :alt="socialProfile.name" class="avatar" />
        <div class="profile-copy">
          <span class="handle">{{ socialProfile.handle }}</span>
          <h1>{{ socialProfile.name }}</h1>
          <p>{{ socialProfile.bio }}</p>
          <div class="stats-row">
            <strong>{{ socialProfile.following }} 关注</strong>
            <strong>{{ socialProfile.followers }} 粉丝</strong>
            <strong>{{ socialProfile.likes }} 获赞与收藏</strong>
          </div>
          <div class="badge-row">
            <em v-for="badge in socialBadges" :key="badge.label" :style="{ '--badge-tone': badge.tone }">
              {{ badge.label }}
            </em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <section class="panel notes-panel">
          <div class="panel-head">
            <h2>我的笔记</h2>
            <p>展示图文、短视频和种草内容的个人沉淀。</p>
          </div>
          <div class="notes-grid">
            <SocialFeedCard v-for="post in myPosts" :key="post.slug" :post="post" />
          </div>
        </section>

        <aside class="side-column">
          <section class="panel">
            <div class="panel-head">
              <h2>我的圈子</h2>
              <p>以兴趣和活动组织连接关系。</p>
            </div>
            <div class="circle-list">
              <RouterLink
                v-for="circle in socialCircles"
                :key="circle.slug"
                class="circle-card"
                :to="{ name: 'social-circle', params: { slug: circle.slug } }"
              >
                <strong>{{ circle.name }}</strong>
                <span>{{ circle.members }} 成员 · 今日 {{ circle.todayPosts }} 帖</span>
              </RouterLink>
            </div>
          </section>

          <section class="panel">
            <div class="panel-head">
              <h2>任务中心</h2>
              <p>签到、分享、邀请和活动报名构成成长体系。</p>
            </div>
            <div class="task-list">
              <article>
                <strong>今日签到</strong>
                <span>获得 10 成长值</span>
              </article>
              <article>
                <strong>发布 1 条动态</strong>
                <span>再得 30 成长值</span>
              </article>
              <article>
                <strong>邀请 1 位好友</strong>
                <span>解锁社交新手勋章</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </SocialLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SocialFeedCard from '@/components/social/SocialFeedCard.vue'
import SocialLayout from '@/components/social/SocialLayout.vue'
import { socialBadges, socialCircles, socialNotes, socialProfile } from '@/data/socialSite'

const myPosts = computed(() => socialNotes.slice(0, 4))
</script>

<style scoped>
.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.profile-page,
.main-grid {
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
  grid-template-columns: 160px 1fr;
  gap: 24px;
  align-items: center;
  padding: 26px;
  background: linear-gradient(135deg, #fff3f6, #fffdfb);
}

.avatar {
  width: 160px;
  height: 160px;
  border-radius: 36px;
  object-fit: cover;
}

.handle,
.profile-copy p,
.circle-card span,
.task-list span,
.panel-head p {
  color: #64748b;
}

.handle {
  font-size: 13px;
}

.profile-copy h1,
.panel-head h2 {
  margin-top: 8px;
  color: #0f172a;
}

.profile-copy h1 {
  font-size: clamp(34px, 4vw, 48px);
}

.profile-copy p {
  margin-top: 12px;
  max-width: 720px;
  font-size: 14px;
  line-height: 1.9;
}

.stats-row,
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.stats-row strong {
  padding: 8px 12px;
  border-radius: 999px;
  color: #ff4f6d;
  background: rgba(255, 79, 109, 0.08);
  font-size: 13px;
}

.badge-row em {
  padding: 7px 12px;
  border: 1px solid color-mix(in srgb, var(--badge-tone) 22%, white);
  border-radius: 999px;
  color: var(--badge-tone);
  background: color-mix(in srgb, var(--badge-tone) 10%, white);
  font-size: 12px;
  font-style: normal;
}

.main-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.85fr);
}

.notes-panel,
.side-column {
  display: grid;
  gap: 18px;
}

.notes-panel {
  padding: 20px;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.side-column > .panel {
  padding: 20px;
}

.circle-list,
.task-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.circle-card,
.task-list article {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.circle-card strong,
.task-list strong {
  color: #0f172a;
}

.circle-card span,
.task-list span {
  display: block;
  margin-top: 6px;
  font-size: 12px;
}

@media (max-width: 1080px) {
  .main-grid,
  .profile-hero,
  .notes-grid {
    grid-template-columns: 1fr;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }
}
</style>
