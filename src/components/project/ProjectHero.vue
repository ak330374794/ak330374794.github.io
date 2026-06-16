<template>
  <section class="project-hero">
    <div class="hero-copy">
      <span class="hero-kicker">Content Product Case</span>
      <h1>{{ project.title }}</h1>
      <p class="hero-subtitle">{{ project.subtitle }}</p>
      <p class="hero-summary">{{ project.summary }}</p>

      <div class="hero-actions">
        <a class="hero-primary" href="#features">查看功能架构</a>
        <a class="hero-secondary" href="#tech">查看技术方案</a>
      </div>

      <div class="hero-tags">
        <span v-for="item in project.capabilityHighlights" :key="item">{{ item }}</span>
      </div>
    </div>

    <div class="hero-visual">
      <img :src="heroVisual" :alt="project.title" class="hero-image" />
      <div class="hero-overlay">
        <article v-for="item in project.heroStats" :key="item.label" class="stat-card">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
          <small>{{ item.note }}</small>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const heroVisual = computed(
  () =>
    `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      `editorial homepage for a premium news content platform, dark blue interface, media dashboard, mobile and desktop responsive layout, elegant data cards, realistic product presentation, cinematic lighting`
    )}&image_size=landscape_16_9`
)
</script>

<style scoped>
.project-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 28px;
  align-items: stretch;
}

.hero-copy,
.hero-visual {
  min-height: 100%;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
}

.hero-copy {
  display: grid;
  align-content: start;
  gap: 16px;
  background: radial-gradient(circle at top left, rgba(65, 217, 176, 0.16), transparent 34%), linear-gradient(145deg, #081733, #102147 60%, #0c1b3e);
  box-shadow: 0 24px 60px rgba(4, 11, 29, 0.36);
}

.hero-kicker {
  display: inline-flex;
  width: fit-content;
  padding: 6px 12px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-copy h1 {
  color: #f6f8fb;
  font-family: 'Times New Roman', 'STSong', serif;
  font-size: clamp(46px, 6vw, 82px);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  color: #52dcb7;
  font-size: 18px;
  font-weight: 600;
}

.hero-summary {
  max-width: 560px;
  color: rgba(225, 232, 243, 0.76);
  font-size: 15px;
  line-height: 1.9;
}

.hero-actions,
.hero-tags,
.hero-overlay {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-primary,
.hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
}

.hero-primary {
  color: #071734;
  background: #41d9b0;
}

.hero-secondary {
  color: #f6f8fb;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
}

.hero-tags span {
  padding: 8px 12px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  font-size: 12px;
}

.hero-visual {
  position: relative;
  overflow: hidden;
  background: #eef1f6;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
  border-radius: 24px;
  background: #ccd6e3;
}

.hero-overlay {
  position: absolute;
  right: 22px;
  bottom: 22px;
  left: 22px;
}

.stat-card {
  min-width: 148px;
  padding: 16px;
  border-radius: 20px;
  backdrop-filter: blur(16px);
  background: rgba(6, 21, 45, 0.76);
}

.stat-card span,
.stat-card small {
  display: block;
}

.stat-card span {
  color: rgba(220, 229, 240, 0.62);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stat-card strong {
  display: block;
  margin-top: 8px;
  color: #f8fbff;
  font-size: 28px;
  line-height: 1;
}

.stat-card small {
  margin-top: 8px;
  color: rgba(220, 229, 240, 0.66);
  font-size: 11px;
}

@media (max-width: 960px) {
  .project-hero {
    grid-template-columns: 1fr;
  }

  .hero-image {
    min-height: 420px;
  }
}

@media (max-width: 640px) {
  .hero-copy,
  .hero-visual {
    padding: 22px;
    border-radius: 24px;
  }

  .hero-overlay {
    position: static;
    margin-top: 18px;
  }

  .hero-image {
    min-height: 280px;
  }
}
</style>
