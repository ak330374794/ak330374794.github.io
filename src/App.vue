<template>
  <div class="site-shell" :class="{ 'is-ready': isReady, 'news-shell-mode': isStandaloneRoute }">
    <template v-if="!isStandaloneRoute">
      <div class="site-background">
        <span class="ambient-orb orb-left"></span>
        <span class="ambient-orb orb-right"></span>
      </div>
      <BlogHeader />
    </template>
    <main class="site-main" :class="{ 'news-main-only': isStandaloneRoute }">
      <RouterView />
    </main>
    <BlogFooter v-if="!isStandaloneRoute" />
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BlogFooter from '@/components/blog/BlogFooter.vue'
import BlogHeader from '@/components/blog/BlogHeader.vue'

const isReady = ref(false)
const route = useRoute()
const isStandaloneRoute = computed(() => route.path.startsWith('/news/') || route.path.startsWith('/commerce/'))

onMounted(() => {
  nextTick(() => {
    isReady.value = true
  })
})
</script>

<style scoped>
.news-shell-mode {
  background: #f5f5f5;
}

.news-main-only {
  padding-top: 0;
}
</style>
