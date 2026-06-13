<template>
  <div class="about-page shell-container">
    <RevealSection>
      <section class="about-intro">
        <div class="portrait-box">
          <img :src="portraitImage" :alt="`${siteMeta.author.name} portrait`" class="portrait-image" />
        </div>

        <div class="about-copy">
          <h1>你好，我是 {{ siteMeta.author.name }}.</h1>
          <p class="lead-text"> 我是一名专注于前端开发与 UI 设计的数字游民。目前我正在世界各地旅行，同时为一些有趣的初创公司提供技术咨询。 </p>
          <p class="lead-text">
            我热爱极简主义设计、功能性排版以及所有能够提高生产力的工具。这个博客是我在数字世界的花园，我会在这里分享我的技术心得、旅行见闻以及对这个世界的微小观察。
          </p>
          <div class="about-actions">
            <a class="contact-btn" href="mailto:hello@example.com">联系我</a>
            <div class="icon-actions">
              <a v-for="item in socialLinks.slice(0, 2)" :key="item.label" :href="item.href" target="_blank" rel="noopener">
                <i :class="item.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="80">
      <section>
        <h2 class="section-label">站点统计</h2>
        <div class="stats-grid">
          <article v-for="stat in siteStats" :key="stat.label" class="stat-card">
            <div class="stat-value">{{ stat.value }}{{ stat.suffix || '' }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="120">
      <section>
        <h2 class="section-label">友情链接</h2>
        <div class="friend-grid">
          <a v-for="link in displayLinks" :key="link.name" class="friend-card" :href="link.href" target="_blank" rel="noopener">
            <div class="friend-main">
              <div class="friend-icon" :style="{ background: link.color }">{{ link.short }}</div>
              <div>
                <strong>{{ link.name }}</strong>
                <p>{{ link.description }}</p>
              </div>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </section>
    </RevealSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { friendLinks } from '@/data/friends'
import { siteMeta, siteStats, socialLinks } from '@/data/site'

const portraitImage = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
  'portrait of an asian frontend designer in a minimalist bright studio, soft daylight, realistic editorial portrait, calm expression, premium photography, clean background'
)}&image_size=square_hd`

const palettes = ['#ecfdf5', '#eff6ff', '#faf5ff', '#fffbeb']
const displayLinks = computed(() =>
  friendLinks.map((link, index) => ({
    ...link,
    short: link.name.slice(0, 1).toUpperCase(),
    color: palettes[index % palettes.length],
  }))
)
</script>

<style scoped>
.about-page {
  display: grid;
  gap: 54px;
  max-width: 900px;
}

.about-intro {
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 64px;
  align-items: center;
}

.portrait-box {
  width: 256px;
  height: 256px;
  overflow: hidden;
  border-radius: 28px;
  transform: rotate(3deg);
  box-shadow: 0 24px 40px rgba(17, 24, 39, 0.12);
}

.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-copy h1 {
  color: #172033;
  font-size: clamp(42px, 5vw, 58px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.lead-text {
  margin-top: 18px;
  color: #7d828a;
  font-size: 18px;
  line-height: 1.9;
}

.about-actions {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 28px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  color: #fff;
  background: #172033;
  font-size: 14px;
  font-weight: 700;
}

.icon-actions {
  display: flex;
  gap: 8px;
}

.icon-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(23, 32, 51, 0.08);
  border-radius: 50%;
  color: #8e949c;
  background: #fff;
}

.section-label {
  margin-bottom: 18px;
  color: #a0a6ae;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  padding: 28px 16px;
  text-align: center;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: #18a787;
}

.stat-value {
  color: #172033;
  font-size: 34px;
  font-weight: 700;
}

.stat-label {
  margin-top: 8px;
  color: #9da2ab;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.friend-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.friend-card {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.82);
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.friend-card:hover {
  transform: translateY(-2px);
  border-color: #18a787;
}

.friend-main {
  display: flex;
  gap: 14px;
}

.friend-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #172033;
  font-weight: 700;
}

.friend-card strong {
  color: #172033;
  font-size: 15px;
}

.friend-card p {
  margin-top: 4px;
  color: #9aa0a8;
  font-size: 12px;
  line-height: 1.7;
}

.friend-card i {
  color: #c1c5cb;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .about-intro,
  .stats-grid,
  .friend-grid {
    grid-template-columns: 1fr;
  }

  .portrait-box {
    width: 220px;
    height: 220px;
  }

  .lead-text {
    font-size: 16px;
  }
}
</style>
