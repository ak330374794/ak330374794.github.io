<template>
  <SocialLayout>
    <div class="social-shell post-page">
      <section class="post-main panel">
        <div class="cover-column">
          <img :src="post.image" :alt="post.title" class="post-cover" />
        </div>

        <div class="content-column">
          <div class="author-row">
            <img :src="post.authorAvatar" :alt="post.author" class="avatar" />
            <div>
              <strong>{{ post.author }}</strong>
              <span>{{ post.authorRole }}</span>
            </div>
          </div>

          <h1>{{ post.title }}</h1>
          <p class="summary">{{ post.summary }}</p>

          <div class="meta-row">
            <span>{{ post.topic }}</span>
            <RouterLink class="meta-link" :to="{ name: 'social-circle', params: { slug: post.circle } }">进入圈子</RouterLink>
          </div>

          <div class="article-body">
            <p v-for="paragraph in post.content" :key="paragraph">{{ paragraph }}</p>
          </div>

          <div class="actions">
            <strong>{{ post.likes }} 赞</strong>
            <strong>{{ post.comments }} 评论</strong>
            <strong>{{ post.saves }} 收藏</strong>
            <strong>{{ post.shares }} 转发</strong>
          </div>

          <div v-if="post.product" class="product-card">
            <img :src="post.product.image" :alt="post.product.title" />
            <div>
              <span>内容关联商品</span>
              <strong>{{ post.product.title }}</strong>
              <em>¥{{ post.product.price }}</em>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-grid">
        <section class="panel comments-panel">
          <h2>热门评论</h2>
          <div class="comment-list">
            <article v-for="comment in comments" :key="comment.user" class="comment-card">
              <strong>{{ comment.user }}</strong>
              <p>{{ comment.text }}</p>
              <span>{{ comment.meta }}</span>
            </article>
          </div>
        </section>

        <aside class="panel related-panel">
          <h2>相关推荐</h2>
          <div class="related-list">
            <SocialFeedCard v-for="item in relatedPosts" :key="item.slug" :post="item" />
          </div>
        </aside>
      </section>
    </div>
  </SocialLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SocialFeedCard from '@/components/social/SocialFeedCard.vue'
import SocialLayout from '@/components/social/SocialLayout.vue'
import { getRelatedSocialPosts, getSocialPostBySlug } from '@/data/socialSite'

const route = useRoute()
const post = computed(() => getSocialPostBySlug(String(route.params.slug || '')))
const relatedPosts = computed(() => getRelatedSocialPosts(post.value.slug, post.value.circle))

const comments = computed(() => [
  { user: '南风', text: '路线拆解和拍摄机位都很实用，我已经收藏准备周末复刻了。', meta: '2 小时前 · 赞 268' },
  { user: 'Yuki', text: '这种把内容、路线和装备推荐放在同一条笔记里的方式很适合种草场景。', meta: '3 小时前 · 赞 194' },
  { user: '松果', text: '希望后续多出一些同城组队内容，感觉会带来很强的互动。', meta: '昨天 · 赞 126' },
])
</script>

<style scoped>
.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.post-page,
.bottom-grid,
.related-list,
.comment-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.post-main {
  display: grid;
  grid-template-columns: minmax(420px, 0.9fr) minmax(0, 1.1fr);
  overflow: hidden;
}

.post-cover {
  width: 100%;
  height: 100%;
  min-height: 640px;
  object-fit: cover;
}

.content-column {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.author-row strong {
  color: #0f172a;
}

.author-row span,
.summary,
.article-body p,
.comment-card span {
  color: #64748b;
}

.content-column h1,
.comments-panel h2,
.related-panel h2 {
  color: #0f172a;
}

.content-column h1 {
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.12;
}

.summary,
.article-body p {
  font-size: 14px;
  line-height: 1.9;
}

.meta-row,
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.meta-row span,
.meta-link,
.actions strong {
  padding: 7px 12px;
  border-radius: 999px;
  background: #fff2f5;
  color: #ff4f6d;
  font-size: 12px;
}

.article-body {
  display: grid;
  gap: 14px;
}

.product-card {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 14px;
  padding: 16px;
  border-radius: 20px;
  background: #f8fafc;
}

.product-card img {
  width: 88px;
  height: 88px;
  border-radius: 16px;
  object-fit: cover;
}

.product-card span {
  color: #94a3b8;
  font-size: 12px;
}

.product-card strong {
  display: block;
  margin-top: 8px;
  color: #0f172a;
}

.product-card em {
  display: block;
  margin-top: 8px;
  color: #ff4f6d;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
}

.bottom-grid {
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
}

.comments-panel,
.related-panel {
  padding: 20px;
}

.comment-list {
  margin-top: 18px;
}

.comment-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.comment-card p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .post-main,
  .bottom-grid {
    grid-template-columns: 1fr;
  }

  .post-cover {
    min-height: 380px;
  }
}
</style>
