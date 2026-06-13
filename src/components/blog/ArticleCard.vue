<template>
  <article class="article-card" :class="{ 'is-compact': compact }">
    <div class="article-card-cover" :style="{ background: article.cover }">
      <span class="eyebrow">{{ article.category }}</span>
    </div>
    <div class="article-card-body">
      <div class="meta-line">
        <span>{{ article.date }}</span>
        <span>{{ article.readTime }}</span>
      </div>
      <h3 class="card-title">{{ article.title }}</h3>
      <p class="card-excerpt">{{ article.excerpt }}</p>
      <div class="card-footer">
        <div class="tag-row">
          <span v-for="tag in article.tags.slice(0, 3)" :key="tag" class="inline-tag">
            {{ tag }}
          </span>
        </div>
        <RouterLink class="text-link" :to="{ name: 'article', params: { slug: article.slug } }">阅读全文</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>
