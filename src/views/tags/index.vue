<template>
  <div class="tags-page shell-container">
    <RevealSection>
      <header class="tags-header">
        <h1>标签云</h1>
        <p>发现感兴趣的话题。点击标签进行筛选。</p>
      </header>
    </RevealSection>

    <RevealSection :delay="60">
      <section class="cloud-wrap">
        <button type="button" class="cloud-pill" :class="{ active: !selectedTag }" @click="selectedTag = ''">
          全部 ({{ orderedArticles.length }})
        </button>
        <button
          v-for="tag in weightedTags"
          :key="tag.name"
          type="button"
          class="cloud-pill"
          :class="[{ active: selectedTag === tag.name }, tag.size]"
          @click="selectedTag = tag.name"
        >
          {{ tag.name }} ({{ tag.count }})
        </button>
      </section>
    </RevealSection>

    <RevealSection :delay="120">
      <section class="tags-results">
        <h2>当前展示: {{ selectedTag || '全部文章' }}</h2>
        <div class="result-list">
          <article v-for="article in filteredArticles" :key="article.slug" class="result-item">
            <div class="result-main">
              <div class="result-date">{{ article.date }}</div>
              <RouterLink class="result-title" :to="{ name: 'article', params: { slug: article.slug } }">
                {{ article.title }}
              </RouterLink>
              <p class="result-excerpt">{{ article.excerpt }}</p>
            </div>
            <span class="result-tag">{{ article.category }}</span>
          </article>
        </div>
      </section>
    </RevealSection>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { articles } from '@/data/articles'
import { filterArticlesByTag, getAllTags, sortArticlesByDate } from '@/utils/blog'

const selectedTag = ref('')
const orderedArticles = sortArticlesByDate(articles)
const tags = getAllTags(orderedArticles)

const weightedTags = computed(() =>
  tags.map((tag, index) => {
    const count = orderedArticles.filter((article) => article.tags.includes(tag)).length
    const sizes = ['small', 'medium', 'large', 'medium']
    return {
      name: tag,
      count,
      size: sizes[index % sizes.length],
    }
  })
)

const filteredArticles = computed(() => filterArticlesByTag(orderedArticles, selectedTag.value))
</script>

<style scoped>
.tags-page {
  display: grid;
  gap: 38px;
  max-width: 980px;
}

.tags-header {
  text-align: center;
}

.tags-header h1 {
  color: #172033;
  font-size: clamp(44px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.tags-header p {
  margin-top: 14px;
  color: #7d828a;
}

.cloud-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

.cloud-pill {
  padding: 10px 18px;
  border: 1px solid rgba(23, 32, 51, 0.08);
  border-radius: 999px;
  color: #68707c;
  background: rgba(255, 255, 255, 0.76);
  font-weight: 500;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.cloud-pill:hover {
  transform: translateY(-2px) scale(1.04);
}

.cloud-pill.active {
  color: #fff;
  background: #172033;
  border-color: #172033;
}

.cloud-pill.small {
  font-size: 13px;
}

.cloud-pill.medium {
  font-size: 18px;
}

.cloud-pill.large {
  font-size: 28px;
}

.tags-results h2 {
  margin-bottom: 18px;
  color: #9ba0a8;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.result-list {
  display: grid;
}

.result-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid rgba(23, 32, 51, 0.06);
}

.result-date {
  color: #a4a9b2;
  font-size: 12px;
  font-family: monospace;
}

.result-title {
  display: block;
  margin-top: 8px;
  color: #172033;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
}

.result-title:hover {
  color: #18a787;
}

.result-excerpt {
  margin-top: 8px;
  color: #7d828a;
  line-height: 1.7;
}

.result-tag {
  align-self: center;
  padding: 6px 10px;
  border-radius: 8px;
  background: #f7f8fa;
  color: #9096a0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .result-item {
    flex-direction: column;
  }

  .result-title {
    font-size: 24px;
  }
}
</style>
