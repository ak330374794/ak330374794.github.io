<template>
  <div class="folio-home">
    <RevealSection :delay="40">
      <section class="folio-hero">
        <div class="shell-container hero-inner">
          <div class="hero-copy">
            <span class="hero-kicker">{{ siteMeta.heroKicker }}</span>
            <h1 class="hero-title">
              思考、记录与
              <span>创造的边界</span>
            </h1>
            <p class="hero-description">{{ siteMeta.heroDescription }}</p>
            <div class="hero-actions">
              <RouterLink class="button-primary" to="/articles.html">浏览文章</RouterLink>
              <RouterLink class="button-secondary" to="/about.html">了解更多</RouterLink>
            </div>
          </div>
        </div>
        <div class="hero-glow"></div>
      </section>
    </RevealSection>

    <RevealSection>
      <section ref="statsSection" class="stats-band">
        <div class="shell-container stats-strip">
          <article v-for="stat in siteStats" :key="stat.label" class="stats-item">
            <strong>{{ animatedStats[stat.label] ?? 0 }}{{ stat.suffix || '' }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="80">
      <section class="shell-container folio-featured">
        <div class="featured-head">
          <div>
            <h2>精选文章</h2>
            <p>从设计、前端和长期写作中挑出几篇值得读的内容。</p>
          </div>
          <RouterLink class="featured-link" to="/articles.html">查看全部 →</RouterLink>
        </div>

        <div class="featured-grid">
          <article
            v-for="(article, index) in featuredItems"
            :key="article.slug"
            class="featured-card"
            :style="{ transitionDelay: `${index * 90}ms` }"
          >
            <RouterLink class="featured-image-wrap" :to="{ name: 'article', params: { slug: article.slug } }">
              <img :src="article.visual" :alt="article.title" class="featured-image" />
              <span class="featured-chip">{{ article.category }}</span>
            </RouterLink>
            <div class="featured-date">{{ article.date }}</div>
            <RouterLink class="featured-title" :to="{ name: 'article', params: { slug: article.slug } }">
              {{ article.title }}
            </RouterLink>
            <p class="featured-excerpt">{{ article.excerpt }}</p>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="120">
      <section class="shell-container cases-section">
        <div class="featured-head cases-head">
          <div>
            <h2>精选案例</h2>
            <p>展示近期完成的产品体验、官网升级与中后台重构项目。</p>
          </div>
          <RouterLink class="featured-link" to="/cases.html">查看全部 →</RouterLink>
        </div>

        <div class="cases-grid">
          <article v-for="item in caseItems" :key="item.slug" class="case-card">
            <RouterLink v-if="item.siteRoute" class="case-cover-wrap" :to="item.siteRoute">
              <img :src="item.visual" :alt="item.title" class="case-cover" />
              <span class="case-badge">{{ item.category }}</span>
            </RouterLink>
            <div v-else class="case-cover-wrap">
              <img :src="item.visual" :alt="item.title" class="case-cover" />
              <span class="case-badge">{{ item.category }}</span>
            </div>

            <div class="case-meta">
              <span>{{ item.client }}</span>
              <span>{{ item.period }}</span>
            </div>
            <RouterLink v-if="item.siteRoute" class="case-title-link" :to="item.siteRoute">
              <h3>{{ item.title }}</h3>
            </RouterLink>
            <h3 v-else>{{ item.title }}</h3>
            <p class="case-summary">{{ item.summary }}</p>

            <div class="case-highlights">
              <span v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</span>
            </div>

            <div class="case-metrics">
              <div v-for="metric in item.metrics" :key="metric.label" class="case-metric">
                <small>{{ metric.label }}</small>
                <strong>{{ metric.value }}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>
    </RevealSection>

    <RevealSection :delay="160">
      <section class="latest-dark">
        <div class="shell-container latest-wrap">
          <h2>最新发布</h2>
          <div class="latest-rows">
            <RouterLink
              v-for="article in latestArticles"
              :key="article.slug"
              class="latest-row"
              :to="{ name: 'article', params: { slug: article.slug } }"
            >
              <div>
                <span class="latest-date">{{ article.date }}</span>
                <h3>{{ article.title }}</h3>
              </div>
              <span class="latest-arrow" aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </RevealSection>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { articles } from '@/data/articles'
import { cases } from '@/data/cases'
import { siteMeta, siteStats } from '@/data/site'
import { getFeaturedArticles, getLatestArticles } from '@/utils/blog'

const imagePrompt = (title, tag) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    `minimal editorial photography for a personal blog, ${title}, ${tag}, soft grey background, premium magazine composition, calm natural light, realistic and clean`
  )}&image_size=landscape_16_9`

const caseImagePrompt = (title, category) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    `product case study cover, ${title}, ${category}, elegant editorial website hero, realistic interface scene, premium lighting, modern and clean`
  )}&image_size=landscape_16_9`

const featuredArticles = getFeaturedArticles(articles, 3)
const latestArticles = getLatestArticles(articles, 4)
const featuredCases = cases.slice(0, 3)
const featuredItems = computed(() =>
  featuredArticles.map((article) => ({
    ...article,
    visual: imagePrompt(article.title, article.category),
  }))
)
const caseItems = computed(() =>
  featuredCases.map((item) => ({
    ...item,
    visual: caseImagePrompt(item.title, item.category),
  }))
)

const statsSection = ref(null)
const animatedStats = ref(Object.fromEntries(siteStats.map((stat) => [stat.label, 0])))

let statsObserver
let hasAnimatedStats = false

const animateCounters = () => {
  if (hasAnimatedStats) {
    return
  }
  hasAnimatedStats = true

  siteStats.forEach((stat) => {
    const startTime = performance.now()
    const duration = stat.value >= 100 ? 1800 : 1200

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      animatedStats.value[stat.label] = Math.round(stat.value * eased)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  })
}

onMounted(() => {
  statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          statsObserver?.disconnect()
        }
      })
    },
    { threshold: 0.25 }
  )

  if (statsSection.value) {
    statsObserver.observe(statsSection.value)
  }
})

onUnmounted(() => {
  statsObserver?.disconnect()
})
</script>

<style scoped>
.folio-home {
  display: grid;
  gap: 0;
}

.folio-hero {
  min-height: 76vh;
  padding: 28px 0 88px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(-45deg, #f3f4f6, #e5e7eb, #d1d5db, #f9fafb);
  background-size: 400% 400%;
  animation: gradientFlow 15s ease infinite;
}

.hero-inner {
  display: flex;
  align-items: center;
  min-height: 56vh;
}

.hero-copy {
  max-width: 650px;
  position: relative;
  z-index: 1;
}

.hero-kicker {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  color: #69717e;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.hero-title {
  margin-top: 22px;
  color: #172033;
  font-size: clamp(54px, 7vw, 92px);
  line-height: 0.92;
  letter-spacing: -0.06em;
}

.hero-title span {
  color: #17a886;
}

.hero-description {
  max-width: 540px;
  margin-top: 18px;
  color: #69717e;
  font-size: 20px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.hero-secondary {
  border-color: rgba(23, 32, 51, 0.08);
  background: rgba(255, 255, 255, 0.84);
}

.hero-glow {
  position: absolute;
  right: -6%;
  bottom: -18%;
  width: min(40vw, 520px);
  height: min(40vw, 520px);
  border-radius: 48% 52% 0 0;
  background: rgba(255, 255, 255, 0.28);
  filter: blur(36px);
}

.stats-band {
  background: #fff;
  border-top: 1px solid rgba(23, 32, 51, 0.06);
  border-bottom: 1px solid rgba(23, 32, 51, 0.06);
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding: 44px 0 48px;
}

.stats-item {
  text-align: center;
}

.stats-item strong {
  display: block;
  color: #172033;
  font-size: 40px;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.stats-item span {
  display: block;
  margin-top: 8px;
  color: #7d828a;
  font-size: 12px;
}

.folio-featured {
  padding: 112px 0 118px;
}

.featured-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.featured-head h2,
.latest-wrap h2 {
  color: #172033;
  font-size: 48px;
  line-height: 1;
}

.featured-head p {
  margin-top: 10px;
  color: #7d828a;
}

.featured-link {
  color: #172033;
  font-weight: 600;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  margin-top: 42px;
}

.cases-section {
  padding-bottom: 112px;
}

.cases-head {
  align-items: end;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 42px;
}

.case-card {
  display: grid;
  gap: 14px;
  padding: 18px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.05);
}

.case-cover-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
}

.case-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: #d7dbe0;
}

.case-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 12px;
  border-radius: 999px;
  color: #172033;
  background: rgba(255, 255, 255, 0.9);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.case-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #98a0aa;
  font-size: 11px;
}

.case-card h3 {
  color: #172033;
  font-size: 28px;
  line-height: 1.15;
}

.case-title-link h3 {
  transition: color 0.2s ease;
}

.case-title-link:hover h3 {
  color: #18a787;
}

.case-summary {
  color: #6e7580;
  font-size: 14px;
  line-height: 1.85;
}

.case-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.case-highlights span {
  padding: 6px 10px;
  border-radius: 999px;
  color: #18a787;
  background: #edf9f5;
  font-size: 11px;
  font-weight: 600;
}

.case-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.case-metric {
  padding: 14px;
  border-radius: 16px;
  background: #f7f8fa;
}

.case-metric small {
  color: #8e96a0;
  font-size: 11px;
}

.case-metric strong {
  display: block;
  margin-top: 8px;
  color: #172033;
  font-size: 24px;
  line-height: 1;
}

.featured-card {
  display: grid;
  gap: 10px;
}

.featured-image-wrap {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 22px;
}

.featured-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #d7dbe0;
  transition: transform 0.7s ease;
}

.featured-card:hover .featured-image {
  transform: scale(1.08);
}

.featured-chip {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 12px;
  border-radius: 999px;
  color: #172033;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.featured-date {
  color: #b0b4ba;
  font-size: 12px;
}

.featured-meta {
  color: #7f8791;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.featured-title {
  color: #172033;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.12;
  transition: color 0.25s ease;
}

.featured-card:hover .featured-title {
  color: #18a787;
}

.featured-excerpt {
  color: #7d828a;
  font-size: 14px;
  line-height: 1.8;
}

.latest-dark {
  padding: 92px 0;
  background: #071734;
}

.latest-wrap {
  max-width: 760px;
}

.latest-wrap h2 {
  color: #fff;
}

.latest-rows {
  margin-top: 34px;
}

.latest-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.25s ease;
}

.latest-date {
  color: rgba(217, 225, 238, 0.4);
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

.latest-row h3 {
  margin-top: 8px;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.14;
}

.latest-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.72);
  transition: all 0.25s ease;
}

.latest-row:hover h3 {
  color: #41d9b0;
}

.latest-row:hover .latest-arrow {
  color: #071734;
  border-color: transparent;
  background: #41d9b0;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 900px) {
  .featured-grid,
  .cases-grid,
  .stats-strip {
    grid-template-columns: 1fr;
  }

  .featured-head,
  .latest-row {
    grid-template-columns: 1fr;
  }

  .featured-head {
    align-items: start;
  }

  .hero-description {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .folio-hero {
    min-height: auto;
    padding: 20px 0 56px;
  }

  .hero-title {
    font-size: 52px;
  }

  .featured-head h2,
  .latest-wrap h2,
  .case-card h3,
  .latest-row h3 {
    font-size: 32px;
  }

  .case-metrics {
    grid-template-columns: 1fr;
  }
}
</style>
