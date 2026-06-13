<template>
  <div class="guestbook-page shell-container">
    <RevealSection>
      <header class="guestbook-header">
        <h1>留言板</h1>
        <p>{{ guestbookIntro.description }}</p>
        <div class="guestbook-tip">
          <i class="fa-solid fa-lightbulb"></i>
          <span>{{ guestbookIntro.notice }}</span>
        </div>
      </header>
    </RevealSection>

    <RevealSection :delay="80">
      <section class="guestbook-form-card">
        <h2>发表留言</h2>
        <form class="folio-form" @submit.prevent="submitPreview">
          <div class="folio-grid">
            <label>
              <span>昵称</span>
              <input v-model="form.name" type="text" placeholder="你的称呼" />
            </label>
            <label>
              <span>邮箱 (不公开)</span>
              <input v-model="form.email" type="email" placeholder="example@mail.com" />
            </label>
          </div>
          <label>
            <span>内容</span>
            <textarea v-model="form.message" rows="4" placeholder="说点什么吧..."></textarea>
          </label>
          <button type="submit" class="submit-btn">发送留言</button>
          <p v-if="previewMessage" class="preview-tip">{{ previewMessage }}</p>
        </form>
      </section>
    </RevealSection>

    <RevealSection :delay="120">
      <section class="guestbook-list">
        <h2>最新留言 ({{ previewEntries.length }})</h2>
        <article v-for="entry in previewEntries" :key="entry.id" class="comment-card">
          <div class="avatar-badge" :style="{ background: getAvatarColor(entry.name) }">
            {{ entry.name.slice(0, 1).toUpperCase() }}
          </div>
          <div class="comment-body">
            <div class="comment-head">
              <strong>{{ entry.name }}</strong>
              <span>{{ entry.date }}</span>
            </div>
            <p>{{ entry.content }}</p>
          </div>
        </article>
      </section>
    </RevealSection>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { guestbookEntries, guestbookIntro } from '@/data/guestbook'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const localEntries = ref([])
const previewMessage = ref('')

const previewEntries = computed(() => [...localEntries.value, ...guestbookEntries])

const colors = ['#dbeafe', '#ede9fe', '#fef3c7', '#dcfce7', '#fee2e2']

const getAvatarColor = (name) => colors[name.length % colors.length]

const submitPreview = () => {
  if (!form.name.trim() || !form.message.trim()) {
    previewMessage.value = '请先填写昵称和留言内容。'
    return
  }

  localEntries.value.unshift({
    id: Date.now(),
    name: form.name.trim(),
    date: '刚刚',
    content: form.message.trim(),
  })
  previewMessage.value = '演示原型：留言已在本地预览，但不会提交到服务器。'
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.guestbook-page {
  display: grid;
  gap: 34px;
  max-width: 760px;
}

.guestbook-header h1 {
  color: #172033;
  font-size: clamp(44px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.guestbook-header p {
  margin-top: 14px;
  color: #7d828a;
  font-size: 18px;
  line-height: 1.9;
}

.guestbook-tip {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
  padding: 14px 16px;
  border: 1px solid #d9f5eb;
  border-radius: 18px;
  color: #1b8a70;
  background: #effcf7;
  font-size: 14px;
}

.guestbook-form-card {
  padding: 32px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.82);
}

.guestbook-form-card h2,
.guestbook-list h2 {
  color: #172033;
  font-size: 24px;
  font-weight: 700;
}

.folio-form {
  display: grid;
  gap: 20px;
  margin-top: 22px;
}

.folio-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.folio-form label {
  display: grid;
  gap: 8px;
}

.folio-form span {
  color: #9ba0a8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.folio-form input,
.folio-form textarea {
  width: 100%;
  padding: 14px 16px;
  border: 0;
  border-radius: 16px;
  outline: none;
  background: #f7f8fa;
}

.submit-btn {
  width: 100%;
  min-height: 52px;
  border-radius: 16px;
  color: #fff;
  background: #172033;
  font-weight: 700;
}

.preview-tip {
  color: #18a787;
  font-size: 14px;
}

.guestbook-list {
  display: grid;
  gap: 18px;
}

.comment-card {
  display: flex;
  gap: 18px;
  padding: 24px;
  border: 1px solid rgba(23, 32, 51, 0.04);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.82);
  transition: transform 0.25s ease;
}

.comment-card:hover {
  transform: translateX(8px);
}

.avatar-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #172033;
  font-weight: 700;
  flex-shrink: 0;
}

.comment-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.comment-head strong {
  color: #172033;
}

.comment-head span {
  color: #c1c5cb;
  font-size: 11px;
}

.comment-body p {
  margin-top: 8px;
  color: #5f6672;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .folio-grid {
    grid-template-columns: 1fr;
  }

  .comment-card,
  .comment-head {
    flex-direction: column;
    align-items: start;
  }
}
</style>
