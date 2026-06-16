<template>
  <div v-if="article" class="article-page shell-container">
    <RevealSection>
      <section class="article-topbar">
        <span>{{ siteMeta.name }}</span>
        <RouterLink to="/articles.html">返回文章</RouterLink>
      </section>
    </RevealSection>

    <RevealSection :delay="40">
      <section class="article-head">
        <div class="article-meta">
          <span>{{ article.date }}</span>
          <span>{{ article.category }}</span>
        </div>
        <h1>{{ article.title }}</h1>
        <div class="author-chip">
          <span class="author-dot"></span>
          <span>{{ siteMeta.author.name }}</span>
        </div>
        <img :src="heroVisual" :alt="article.title" class="article-visual" />
        <p class="article-intro">{{ article.excerpt }}</p>
      </section>
    </RevealSection>

    <RevealSection :delay="80">
      <article class="article-body">
        <div v-for="(block, index) in article.content" :key="`${article.slug}-${index}`">
          <h2 v-if="block.type === 'heading'" class="prose-heading">{{ block.value }}</h2>
          <p v-else-if="block.type === 'paragraph'" class="prose-paragraph">{{ block.value }}</p>
          <blockquote v-else-if="block.type === 'quote'" class="prose-quote">{{ block.value }}</blockquote>
          <ul v-else-if="block.type === 'list'" class="prose-list">
            <li v-for="item in block.value" :key="item">{{ item }}</li>
          </ul>
          <div v-else-if="block.type === 'code'" class="code-block">
            <div class="code-lang">{{ block.language }}</div>
            <pre><code>{{ block.code }}</code></pre>
          </div>
        </div>
      </article>
    </RevealSection>

    <RevealSection :delay="120">
      <section class="article-tags">
        <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
      </section>
    </RevealSection>

    <RevealSection :delay="160">
      <section class="article-nav">
        <RouterLink v-for="entry in recommended" :key="entry.slug" class="article-nav-card" :to="{ name: 'article', params: { slug: entry.slug } }">
          <small>推荐阅读</small>
          <strong>{{ entry.title }}</strong>
        </RouterLink>
      </section>
    </RevealSection>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import RevealSection from '@/components/blog/RevealSection.vue'
import { articles } from '@/data/articles'
import { siteMeta } from '@/data/site'
import { getRecommendedArticles } from '@/utils/blog'

const route = useRoute()

const article = computed(() => articles.find((item) => item.slug === route.params.slug))
const recommended = computed(() => {
  if (!article.value) {
    return []
  }
  return getRecommendedArticles(articles, article.value.slug, 2)
})

const heroVisual = computed(
  () =>
    `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      `editorial abstract illustration for tech article, ${
        article.value?.title || ''
      }, clean composition, soft grey white background, dark navy geometry, premium magazine style`
    )}&image_size=landscape_16_9`
)
</script>

<style scoped>
.article-page {
  display: grid;
  gap: 24px;
  max-width: 760px;
}

.article-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8b9199;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.article-head,
.article-body {
  max-width: 620px;
  margin: 0 auto;
}

.article-meta {
  display: flex;
  gap: 14px;
  color: #8b9199;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article-head h1 {
  margin-top: 14px;
  color: #172033;
  font-size: clamp(42px, 5vw, 58px);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.author-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  color: #6d747d;
  font-size: 13px;
}

.author-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2bd3a8, #172033);
}

.article-visual {
  width: 100%;
  margin-top: 22px;
  border-radius: 2px;
  object-fit: cover;
  background: #dde1e5;
}

.article-intro {
  margin-top: 18px;
  color: #6d747d;
  line-height: 1.9;
}

.article-body {
  color: #2e3647;
}

.prose-heading {
  margin: 34px 0 14px;
  color: #172033;
  font-size: 32px;
  line-height: 1.08;
}

.prose-paragraph,
.prose-list,
.prose-quote {
  font-size: 15px;
  line-height: 1.95;
}

.prose-paragraph + .prose-paragraph {
  margin-top: 14px;
}

.prose-quote {
  margin: 24px 0;
  padding-left: 16px;
  border-left: 2px solid #19b28f;
  color: #1a7c67;
}

.prose-list {
  display: grid;
  gap: 8px;
  padding-left: 18px;
  margin: 18px 0;
}

.code-block {
  margin: 24px 0;
  overflow: hidden;
  border-radius: 2px;
  background: #1d2d47;
}

.code-lang {
  padding: 10px 14px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.code-block pre {
  margin: 0;
  padding: 14px;
  overflow-x: auto;
  color: #f5f8ff;
  font-size: 13px;
}

.article-tags,
.article-nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  max-width: 620px;
  margin: 0 auto;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
}

.article-tags span {
  padding: 8px 12px;
  border: 1px solid rgba(23, 32, 51, 0.08);
  border-radius: 999px;
  color: #6d747d;
  font-size: 12px;
}

.article-nav-card {
  display: grid;
  gap: 8px;
  padding: 16px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  background: rgba(255, 255, 255, 0.56);
}

.article-nav-card small {
  color: #8b9199;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article-nav-card strong {
  color: #172033;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .article-nav {
    grid-template-columns: 1fr;
  }
}
</style>
