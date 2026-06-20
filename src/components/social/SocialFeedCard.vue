<template>
  <RouterLink class="feed-card" :to="{ name: 'social-post', params: { slug: post.slug } }">
    <div class="cover-wrap">
      <img :src="post.image" :alt="post.title" class="cover" />
      <span class="type-badge">{{ post.type === 'video' ? '短视频' : '图文笔记' }}</span>
    </div>

    <div class="content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.summary }}</p>

      <div class="author-row">
        <div class="author-meta">
          <img :src="post.authorAvatar" :alt="post.author" class="avatar" />
          <div>
            <strong>{{ post.author }}</strong>
            <span>{{ post.authorRole }}</span>
          </div>
        </div>
        <span class="likes">{{ post.likes }} 赞</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.feed-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feed-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 42px rgba(15, 23, 42, 0.08);
}

.cover-wrap {
  position: relative;
}

.cover {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #e2e8f0;
}

.type-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 10px;
  border-radius: 999px;
  color: #fff;
  background: rgba(15, 23, 42, 0.56);
  font-size: 11px;
  font-weight: 700;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
}

.content h3 {
  color: #0f172a;
  font-size: 19px;
  line-height: 1.35;
}

.content p {
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

.author-row,
.author-meta {
  display: flex;
  align-items: center;
}

.author-row {
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
}

.author-meta {
  gap: 10px;
  min-width: 0;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  background: #e2e8f0;
}

.author-meta strong,
.likes {
  color: #0f172a;
  font-size: 12px;
}

.author-meta span {
  display: block;
  color: #94a3b8;
  font-size: 11px;
}
</style>
