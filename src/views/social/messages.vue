<template>
  <SocialLayout>
    <div class="social-shell messages-page">
      <section class="messages-layout">
        <aside class="inbox-panel panel">
          <div class="panel-head">
            <h1>消息中心</h1>
            <p>聚合私信、群消息、评论回复和系统通知。</p>
          </div>

          <div class="inbox-list">
            <article v-for="item in socialMessages" :key="item.id" class="inbox-card">
              <img :src="item.avatar" :alt="item.user" />
              <div>
                <strong>{{ item.user }}</strong>
                <p>{{ item.preview }}</p>
              </div>
              <div class="meta">
                <span>{{ item.time }}</span>
                <em v-if="item.unread">{{ item.unread }}</em>
              </div>
            </article>
          </div>
        </aside>

        <section class="chat-panel panel">
          <div class="chat-head">
            <div>
              <strong>Echo</strong>
              <span>在线 · 咖啡馆探店博主</span>
            </div>
            <RouterLink to="/social/profile.html">查看主页</RouterLink>
          </div>

          <div class="chat-list">
            <article
              v-for="message in socialChatMessages"
              :key="`${message.time}-${message.text}`"
              class="message-bubble"
              :class="{ mine: message.from === 'me' }"
            >
              <p>{{ message.text }}</p>
              <span>{{ message.time }}</span>
            </article>
          </div>

          <div class="composer">
            <input type="text" value="输入消息内容..." readonly />
            <button type="button">发送</button>
          </div>
        </section>

        <aside class="notice-panel panel">
          <div class="panel-head">
            <h2>互动提醒</h2>
            <p>帮助用户快速响应评论、@提醒和活动报名。</p>
          </div>
          <div class="notice-list">
            <article class="notice-card">
              <strong>@提及提醒</strong>
              <p>你在「周末徒步地图」话题下被 6 位朋友提及。</p>
            </article>
            <article class="notice-card">
              <strong>评论回复</strong>
              <p>你的租房改造笔记新增 148 条评论，热度持续上升。</p>
            </article>
            <article class="notice-card">
              <strong>群组动态</strong>
              <p>徒步搭子群发布了周末打卡挑战和天气提示。</p>
            </article>
          </div>
        </aside>
      </section>
    </div>
  </SocialLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SocialLayout from '@/components/social/SocialLayout.vue'
import { socialChatMessages, socialMessages } from '@/data/socialSite'
</script>

<style scoped>
.social-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.messages-layout {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr) 320px;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.inbox-panel,
.chat-panel,
.notice-panel {
  padding: 20px;
}

.panel-head h1,
.panel-head h2,
.chat-head strong {
  color: #0f172a;
}

.panel-head p,
.chat-head span,
.inbox-card p,
.message-bubble span,
.notice-card p {
  color: #64748b;
}

.inbox-list,
.notice-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.inbox-card {
  display: grid;
  grid-template-columns: 52px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-radius: 18px;
  background: #f8fafc;
}

.inbox-card img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
}

.meta span {
  color: #94a3b8;
  font-size: 11px;
}

.meta em {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  color: #fff;
  background: #ff4f6d;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat-head,
.composer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.chat-head a {
  color: #ff4f6d;
  font-size: 13px;
  font-weight: 600;
}

.chat-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  min-height: 540px;
  padding: 6px 0;
}

.message-bubble {
  align-self: flex-start;
  max-width: 72%;
  padding: 14px;
  border-radius: 18px 18px 18px 4px;
  background: #f8fafc;
}

.message-bubble.mine {
  align-self: flex-end;
  border-radius: 18px 18px 4px 18px;
  background: #fff0f3;
}

.message-bubble p {
  color: #0f172a;
  font-size: 14px;
  line-height: 1.8;
}

.message-bubble span {
  display: block;
  margin-top: 8px;
  font-size: 11px;
}

.composer input {
  flex: 1;
  min-height: 48px;
  padding: 0 16px;
  border: 0;
  border-radius: 24px;
  color: #94a3b8;
  background: #f8fafc;
}

.composer button {
  min-width: 88px;
  min-height: 48px;
  border: 0;
  border-radius: 24px;
  color: #fff;
  background: #ff4f6d;
  font-weight: 700;
}

.notice-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}

.notice-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 1180px) {
  .messages-layout {
    grid-template-columns: 1fr;
  }
}
</style>
