<template>
  <div class="articles-page shell-container">
    <RevealSection>
      <header class="articles-header">
        <h1>全部文章</h1>
        <p>记录关于设计、技术与数字生活的点滴思考。目前共发布了 {{ orderedArticles.length }} 篇文章。</p>
      </header>
    </RevealSection>

    <div class="articles-layout">
      <RevealSection>
        <section>
          <div class="articles-grid">
            <article v-for="article in pagedArticles" :key="article.slug" class="article-tile">
              <RouterLink :to="{ name: 'article', params: { slug: article.slug } }" class="tile-image-wrap">
                <img :src="getVisual(article)" :alt="article.title" class="tile-image" />
              </RouterLink>
              <div class="tile-meta">
                <span class="tile-tag">{{ article.category }}</span>
                <span>{{ article.date }}</span>
              </div>
              <RouterLink class="tile-title" :to="{ name: 'article', params: { slug: article.slug } }">
                {{ article.title }}
              </RouterLink>
              <p class="tile-excerpt">{{ article.excerpt }}</p>
              <RouterLink class="tile-read" :to="{ name: 'article', params: { slug: article.slug } }">
                阅读全文
                <i class="fa-solid fa-chevron-right"></i>
              </RouterLink>
            </article>
          </div>

          <div class="pager">
            <button type="button" class="pager-btn" :disabled="page <= 1" @click="page -= 1">
              <span class="pager-arrow" aria-hidden="true">←</span>
            </button>
            <button
              v-for="pageNumber in pageCount"
              :key="pageNumber"
              type="button"
              class="pager-btn"
              :class="{ active: pageNumber === page }"
              @click="page = pageNumber"
            >
              {{ pageNumber }}
            </button>
            <button type="button" class="pager-btn" :disabled="page >= pageCount" @click="page += 1">
              <span class="pager-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </RevealSection>

      <RevealSection :delay="80">
        <aside class="articles-sidebar">
          <section class="sidebar-card">
            <h4>搜索文章</h4>
            <div class="sidebar-search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input v-model="keyword" type="text" placeholder="输入关键词..." />
            </div>
          </section>

          <section class="sidebar-card">
            <h4>最近更新</h4>
            <div class="recent-list">
              <RouterLink
                v-for="article in recentArticles"
                :key="article.slug"
                class="recent-item"
                :to="{ name: 'article', params: { slug: article.slug } }"
              >
                <img :src="getVisual(article)" :alt="article.title" class="recent-thumb" />
                <div>
                  <h5>{{ article.title }}</h5>
                  <span>{{ article.date }}</span>
                </div>
              </RouterLink>
            </div>
          </section>

          <section class="sidebar-card">
            <h4>热门标签</h4>
            <div class="tag-list">
              <button type="button" class="mini-tag" :class="{ active: !selectedTag }" @click="selectedTag = ''"> 全部 </button>
              <button
                v-for="tag in allTags"
                :key="tag"
                type="button"
                class="mini-tag"
                :class="{ active: selectedTag === tag }"
                @click="selectedTag = tag"
              >
                {{ tag }}
              </button>
            </div>
          </section>
        </aside>
      </RevealSection>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { articles } from '@/data/articles'
import { filterArticlesByTag, getAllTags, getPageCount, paginateArticles, searchArticles, sortArticlesByDate } from '@/utils/blog'

const keyword = ref('')
const selectedTag = ref('')
const page = ref(1)
const pageSize = 4

const orderedArticles = sortArticlesByDate(articles)
const allTags = getAllTags(orderedArticles)
const recentArticles = orderedArticles.slice(0, 3)

const getVisual = (article) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    `minimal editorial blog thumbnail, ${article.title}, ${article.category}, clean composition, realistic photography, soft natural light, modern magazine style`
  )}&image_size=landscape_16_9`

const filteredArticles = computed(() => {
  const searchResult = searchArticles(orderedArticles, keyword.value)
  return filterArticlesByTag(searchResult, selectedTag.value)
})

const pageCount = computed(() => getPageCount(filteredArticles.value.length, pageSize))
const pagedArticles = computed(() => paginateArticles(filteredArticles.value, page.value, pageSize))

watch([keyword, selectedTag], () => {
  page.value = 1
})
</script>

<style scoped>
.articles-page {
  display: grid;
  gap: 52px;
  max-width: 1200px;
}

.articles-header h1 {
  color: #172033;
  font-size: clamp(44px, 5vw, 64px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.articles-header p {
  max-width: 760px;
  margin-top: 14px;
  color: #7d828a;
  line-height: 1.9;
}

.articles-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 48px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.article-tile {
  padding: 16px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.76);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.article-tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 30px rgba(17, 24, 39, 0.06);
}

.tile-image-wrap {
  display: block;
}

.tile-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  object-fit: cover;
  background: #dfe3e7;
}

.tile-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  color: #98a0aa;
  font-size: 11px;
}

.tile-tag {
  padding: 2px 8px;
  border-radius: 999px;
  background: #edf9f5;
  color: #18a787;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tile-title {
  display: block;
  margin-top: 12px;
  color: #172033;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.tile-excerpt {
  margin-top: 10px;
  color: #7d828a;
  font-size: 14px;
  line-height: 1.8;
}

.tile-read {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  color: #172033;
  font-size: 14px;
  font-weight: 600;
}

.articles-sidebar {
  display: grid;
  gap: 24px;
}

.sidebar-card {
  padding: 24px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.8);
}

.sidebar-card h4 {
  color: #172033;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sidebar-search {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding: 0 14px;
  min-height: 48px;
  border-radius: 14px;
  background: #f7f8fa;
}

.sidebar-search input {
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
}

.recent-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.recent-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  align-items: start;
}

.recent-thumb {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
  background: #dfe3e7;
}

.recent-item h5 {
  color: #172033;
  font-size: 14px;
  line-height: 1.45;
}

.recent-item span {
  display: block;
  margin-top: 4px;
  color: #a0a5ad;
  font-size: 11px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.mini-tag {
  padding: 8px 12px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 10px;
  color: #68707c;
  background: #f7f8fa;
  font-size: 12px;
  transition: all 0.2s ease;
}

.mini-tag.active,
.mini-tag:hover {
  color: #fff;
  background: #172033;
  border-color: #172033;
}

.pager {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.pager-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(23, 32, 51, 0.08);
  border-radius: 12px;
  color: #172033;
  background: #fff;
  font-weight: 700;
  transition: all 0.2s ease;
}

.pager-btn:hover:not(:disabled) {
  border-color: rgba(24, 167, 135, 0.3);
  color: #18a787;
  background: #f7fffc;
}

.pager-btn.active {
  color: #fff;
  background: #172033;
  border-color: #172033;
}

.pager-arrow {
  font-size: 18px;
  line-height: 1;
}

.pager-btn:disabled {
  opacity: 0.55;
  color: #98a0aa;
  cursor: not-allowed;
}

@media (max-width: 960px) {
  .articles-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
