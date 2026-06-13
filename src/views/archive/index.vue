<template>
  <div class="archive-page shell-container">
    <RevealSection>
      <section class="archive-header">
        <h1>时间轴</h1>
        <p>按月回顾那些被记录下来的瞬间。</p>
      </section>
    </RevealSection>

    <div class="archive-layout">
      <RevealSection>
        <CalendarArchive v-model="activeMonth" :months="months" :days="calendarDays" />
      </RevealSection>

      <RevealSection :delay="80">
        <section class="archive-timeline">
          <article v-for="month in months" :key="month.key" class="timeline-group">
            <div class="timeline-head">
              <h2>{{ month.label.replace(' / ', '年 ') }} 月</h2>
              <span>{{ month.entries.length }} 篇文章</span>
            </div>
            <div class="timeline-list">
              <RouterLink
                v-for="article in month.entries"
                :key="article.slug"
                class="timeline-item"
                :class="{ 'is-active': article.date.startsWith(activeMonth) }"
                :to="{ name: 'article', params: { slug: article.slug } }"
              >
                <span class="timeline-date">{{ article.date.slice(5) }}</span>
                <div>
                  <strong>{{ article.title }}</strong>
                  <p>{{ article.excerpt }}</p>
                </div>
              </RouterLink>
            </div>
          </article>
        </section>
      </RevealSection>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CalendarArchive from '@/components/blog/CalendarArchive.vue'
import RevealSection from '@/components/blog/RevealSection.vue'
import { articles } from '@/data/articles'
import { getArchiveMonths, getCalendarDays } from '@/utils/blog'

const months = getArchiveMonths(articles)
const activeMonth = ref(months[0]?.key || '')

const activeEntry = computed(() => months.find((item) => item.key === activeMonth.value) || months[0])
const activeEntries = computed(() => activeEntry.value?.entries || [])
const calendarDays = computed(() => getCalendarDays(activeEntry.value?.key || '', activeEntries.value))
</script>

<style scoped>
.archive-page {
  display: grid;
  gap: 28px;
  max-width: 980px;
}

.archive-header {
  display: grid;
  gap: 8px;
}

.archive-header h1 {
  color: #172033;
  font-size: clamp(44px, 5vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.archive-header p {
  color: #7d828a;
}

.archive-layout {
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 48px;
  align-items: start;
}

.archive-timeline {
  display: grid;
  gap: 30px;
  padding-top: 8px;
}

.timeline-group {
  display: grid;
  gap: 16px;
}

.timeline-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.timeline-head h2 {
  color: #172033;
  font-size: 30px;
  line-height: 1;
}

.timeline-head span {
  color: #8c9198;
  font-size: 12px;
}

.timeline-list {
  display: grid;
  gap: 10px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 14px;
  padding: 10px 0;
}

.timeline-date {
  color: #b0b4ba;
  font-size: 11px;
}

.timeline-item strong {
  color: #172033;
  font-size: 16px;
  line-height: 1.35;
}

.timeline-item.is-active strong {
  color: #18a787;
}

.timeline-item p {
  margin-top: 4px;
  color: #8c9198;
  font-size: 12px;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .archive-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
