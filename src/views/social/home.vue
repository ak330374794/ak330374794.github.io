<template>
  <SocialLayout>
    <div class="social-shell social-home">
      <section class="hero-panel">
        <div class="hero-copy">
          <span class="hero-tag">社交社区案例</span>
          <h1>{{ socialHero.title }}</h1>
          <p>{{ socialHero.subtitle }}</p>
          <div class="hero-chips">
            <em v-for="tag in socialHero.tags" :key="tag">{{ tag }}</em>
          </div>
        </div>
        <img :src="socialHero.image" :alt="socialHero.title" class="hero-image" />
      </section>

      <section class="story-bar panel">
        <article v-for="item in socialStories" :key="item.name" class="story-card">
          <img :src="item.image" :alt="item.name" />
          <strong>{{ item.name }}</strong>
          <span>{{ item.badge }}</span>
        </article>
      </section>

      <section class="content-grid">
        <div class="feed-column">
          <section class="panel topics-panel">
            <div class="panel-head">
              <div>
                <h2>热点话题</h2>
                <p>围绕兴趣、关系和种草内容构建高互动讨论场。</p>
              </div>
            </div>
            <div class="topic-list">
              <article v-for="item in socialTopics" :key="item.label" class="topic-card">
                <strong>{{ item.label }}</strong>
                <span>{{ item.heat }}</span>
              </article>
            </div>
          </section>

          <section class="feed-grid">
            <SocialFeedCard v-for="post in featuredPosts" :key="post.slug" :post="post" />
          </section>
        </div>

        <aside class="side-column">
          <section class="panel">
            <div class="panel-head">
              <div>
                <h2>推荐圈子</h2>
                <p>从兴趣组织到活动运营，承接圈层关系和内容沉淀。</p>
              </div>
            </div>
            <div class="circle-list">
              <RouterLink
                v-for="circle in socialCircles"
                :key="circle.slug"
                class="circle-card"
                :to="{ name: 'social-circle', params: { slug: circle.slug } }"
              >
                <img :src="circle.cover" :alt="circle.name" />
                <div>
                  <strong>{{ circle.name }}</strong>
                  <p>{{ circle.description }}</p>
                  <span>{{ circle.members }} 成员 · 今日 {{ circle.todayPosts }} 帖</span>
                </div>
              </RouterLink>
            </div>
          </section>

          <section class="panel creators-panel">
            <div class="panel-head">
              <div>
                <h2>优质创作者</h2>
                <p>沉淀图文、短视频和互动内容供给。</p>
              </div>
            </div>
            <div class="creator-list">
              <article v-for="creator in socialCreators" :key="creator.name" class="creator-card">
                <img :src="creator.avatar" :alt="creator.name" />
                <div>
                  <strong>{{ creator.name }}</strong>
                  <p>{{ creator.role }}</p>
                </div>
                <span>{{ creator.fans }}</span>
              </article>
            </div>
          </section>

          <section v-if="heroProduct" class="panel product-panel">
            <div class="panel-head">
              <div>
                <h2>种草商品</h2>
                <p>内容与商品卡联动，支持一键跳转购买。</p>
              </div>
            </div>
            <div class="product-card">
              <img :src="heroProduct.image" :alt="heroProduct.title" />
              <div>
                <strong>{{ heroProduct.title }}</strong>
                <span>社区同款装备</span>
                <em>¥{{ heroProduct.price }}</em>
              </div>
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
import { socialCircles, socialCreators, socialHero, socialNotes, socialStories, socialTopics } from '@/data/socialSite'

const featuredPosts = computed(() => socialNotes.slice(0, 4))
const heroProduct = computed(() => socialNotes.find((item) => item.product)?.product)
</script>

<style scoped>
.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.social-home {
  display: grid;
  gap: 18px;
}

.panel,
.hero-panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  overflow: hidden;
  background: linear-gradient(135deg, #fff0f3, #fff8f1);
}

.hero-copy {
  padding: 32px;
}

.hero-tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #fff;
  background: #ff4f6d;
  font-size: 11px;
  font-weight: 700;
}

.hero-copy h1 {
  margin-top: 18px;
  color: #0f172a;
  font-size: clamp(36px, 4.4vw, 60px);
  line-height: 1.08;
}

.hero-copy p {
  margin-top: 18px;
  max-width: 600px;
  color: #64748b;
  font-size: 15px;
  line-height: 1.85;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.hero-chips em {
  padding: 7px 12px;
  border-radius: 999px;
  color: #ff4f6d;
  background: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  font-style: normal;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
}

.story-bar {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  padding: 18px;
}

.story-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.story-card img {
  width: 76px;
  height: 76px;
  border: 3px solid #ffd6de;
  border-radius: 50%;
  object-fit: cover;
}

.story-card strong {
  color: #0f172a;
  font-size: 13px;
}

.story-card span {
  color: #94a3b8;
  font-size: 11px;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(320px, 0.9fr);
  gap: 18px;
}

.feed-column,
.side-column {
  display: grid;
  gap: 18px;
}

.topics-panel,
.creators-panel,
.product-panel {
  padding: 20px;
}

.panel-head h2 {
  color: #0f172a;
  font-size: 24px;
}

.panel-head p {
  margin-top: 6px;
  color: #94a3b8;
  font-size: 13px;
}

.topic-list,
.creator-list,
.circle-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.topic-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.topic-card,
.creator-card,
.product-card {
  border-radius: 18px;
  background: #f8fafc;
}

.topic-card {
  padding: 16px;
}

.topic-card strong,
.circle-card strong,
.product-card strong,
.creator-card strong {
  color: #0f172a;
}

.topic-card span,
.circle-card span,
.product-card span,
.creator-card p {
  color: #64748b;
  font-size: 12px;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.circle-card {
  display: grid;
  grid-template-columns: 112px 1fr;
  gap: 12px;
  padding: 12px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.circle-card img {
  width: 100%;
  height: 100%;
  min-height: 92px;
  border-radius: 14px;
  object-fit: cover;
}

.circle-card p {
  margin: 6px 0 8px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.7;
}

.creator-card {
  display: grid;
  grid-template-columns: 48px 1fr auto;
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

.creator-card span {
  color: #ff4f6d;
}

.product-card {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 14px;
  margin-top: 18px;
  padding: 14px;
}

.product-card img {
  width: 88px;
  height: 88px;
  border-radius: 16px;
  object-fit: cover;
}

.product-card em {
  display: block;
  margin-top: 8px;
  color: #ff4f6d;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .content-grid,
  .hero-panel {
    grid-template-columns: 1fr;
  }

  .story-bar,
  .feed-grid,
  .topic-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .story-bar,
  .feed-grid,
  .topic-list {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding: 20px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-image {
    min-height: 240px;
  }

  .story-bar {
    gap: 10px;
    padding: 14px;
  }

  .topics-panel,
  .creators-panel,
  .product-panel {
    padding: 16px;
  }

  .circle-card,
  .creator-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .social-home {
    gap: 14px;
  }

  .story-card img {
    width: 64px;
    height: 64px;
  }

  .product-card {
    grid-template-columns: 72px 1fr;
    gap: 12px;
    padding: 12px;
  }

  .product-card img {
    width: 72px;
    height: 72px;
  }
}
</style>
