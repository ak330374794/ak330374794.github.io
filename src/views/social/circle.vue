<template>
  <SocialLayout>
    <div class="social-shell circle-page">
      <section class="circle-hero">
        <img :src="circle.cover" :alt="circle.name" class="circle-cover" />
        <div class="circle-overlay">
          <span class="circle-chip">兴趣圈</span>
          <h1>{{ circle.name }}</h1>
          <p>{{ circle.description }}</p>
          <div class="circle-stats">
            <strong>{{ circle.members }} 成员</strong>
            <strong>今日 {{ circle.todayPosts }} 帖</strong>
          </div>
          <div class="circle-tags">
            <em v-for="tag in circle.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
      </section>

      <section class="main-grid">
        <div class="feed-column">
          <section class="panel notice-panel">
            <h2>圈子公告</h2>
            <p>{{ circle.announcement }}</p>
          </section>

          <section class="feed-grid">
            <SocialFeedCard v-for="post in circlePosts" :key="post.slug" :post="post" />
          </section>
        </div>

        <aside class="side-column">
          <section class="panel">
            <h2>圈子玩法</h2>
            <div class="rule-list">
              <article>
                <strong>精华帖</strong>
                <p>优先展示路线攻略、装备评测和高质量体验记录。</p>
              </article>
              <article>
                <strong>活动组织</strong>
                <p>支持发起打卡挑战、报名活动和同城组队。</p>
              </article>
              <article>
                <strong>版主管理</strong>
                <p>提供置顶、加精、内容审核和成员封禁能力。</p>
              </article>
            </div>
          </section>

          <section class="panel">
            <h2>推荐创作者</h2>
            <div class="creator-list">
              <article v-for="creator in socialCreators" :key="creator.name" class="creator-card">
                <img :src="creator.avatar" :alt="creator.name" />
                <div>
                  <strong>{{ creator.name }}</strong>
                  <p>{{ creator.role }}</p>
                </div>
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
import { useRoute } from 'vue-router'
import SocialFeedCard from '@/components/social/SocialFeedCard.vue'
import SocialLayout from '@/components/social/SocialLayout.vue'
import { getSocialCircleBySlug, socialCreators, socialNotes } from '@/data/socialSite'

const route = useRoute()
const circle = computed(() => getSocialCircleBySlug(String(route.params.slug || '')))
const circlePosts = computed(() => socialNotes.filter((item) => item.circle === circle.value.slug))
</script>

<style scoped>
.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.circle-page {
  display: grid;
  gap: 18px;
}

.circle-hero,
.panel {
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.circle-hero {
  position: relative;
  min-height: 360px;
}

.circle-cover {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
}

.circle-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  padding: 32px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.72));
}

.circle-chip,
.circle-tags em {
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
}

.circle-chip {
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  font-size: 11px;
  font-weight: 700;
}

.circle-overlay h1 {
  color: #fff;
  font-size: clamp(36px, 4.4vw, 56px);
  line-height: 1.04;
}

.circle-overlay p {
  max-width: 620px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.8;
}

.circle-stats,
.circle-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.circle-stats strong {
  color: #fff;
  font-size: 14px;
}

.circle-tags em {
  color: #fff;
  background: rgba(255, 255, 255, 0.16);
  font-size: 12px;
  font-style: normal;
}

.main-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(300px, 0.85fr);
  gap: 18px;
}

.feed-column,
.side-column {
  display: grid;
  gap: 18px;
}

.panel {
  padding: 20px;
}

.panel h2 {
  color: #0f172a;
  font-size: 24px;
}

.notice-panel p {
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.85;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.rule-list,
.creator-list {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.rule-list article,
.creator-card {
  border-radius: 18px;
  background: #f8fafc;
}

.rule-list article {
  padding: 14px;
}

.rule-list p,
.creator-card p {
  margin-top: 6px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

.creator-card {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
}

.creator-card img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 960px) {
  .main-grid,
  .feed-grid {
    grid-template-columns: 1fr;
  }
}
</style>
