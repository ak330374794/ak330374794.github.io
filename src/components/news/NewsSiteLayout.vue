<template>
  <div class="news-site">
    <NewsSiteHeader />
    <main class="news-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import NewsSiteHeader from '@/components/news/NewsSiteHeader.vue'
</script>

<style scoped>
.news-site {
  min-height: 100vh;
  background: #f5f5f5;
}

.news-main {
  padding: 0 0 56px;
}
</style>
