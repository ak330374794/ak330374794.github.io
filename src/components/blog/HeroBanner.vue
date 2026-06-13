<template>
  <section class="hero-surface">
    <div class="hero-copy">
      <p class="eyebrow">{{ siteMeta.heroKicker }}</p>
      <h1 class="hero-title">{{ siteMeta.heroTitle }}</h1>
      <p class="hero-description">{{ siteMeta.heroDescription }}</p>
      <div class="hero-actions">
        <RouterLink class="button-primary" to="/articles.html">{{ siteMeta.heroPrimaryText }}</RouterLink>
        <RouterLink class="button-secondary" to="/archive.html">{{ siteMeta.heroSecondaryText }}</RouterLink>
      </div>
      <ul class="bullet-list">
        <li v-for="note in featuredNotes" :key="note">
          <i class="fa-solid fa-check"></i>
          <span>{{ note }}</span>
        </li>
      </ul>
    </div>

    <div class="hero-panel">
      <div class="hero-panel-card">
        <p class="hero-panel-label">本周精选</p>
        <h2>{{ featuredArticle.title }}</h2>
        <p>{{ featuredArticle.excerpt }}</p>
        <RouterLink class="text-link" :to="{ name: 'article', params: { slug: featuredArticle.slug } }">继续阅读</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuredNotes, siteMeta } from '@/data/site'

defineProps({
  featuredArticle: {
    type: Object,
    required: true,
  },
})
</script>
