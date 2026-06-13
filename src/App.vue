<template>
  <div class="site-shell" :class="{ 'is-ready': isReady }">
    <div class="site-background">
      <span class="ambient-orb orb-left"></span>
      <span class="ambient-orb orb-right"></span>
    </div>
    <BlogHeader />
    <main class="site-main">
      <RouterView />
    </main>
    <BlogFooter />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import BlogFooter from '@/components/blog/BlogFooter.vue'
import BlogHeader from '@/components/blog/BlogHeader.vue'

const isReady = ref(false)

onMounted(() => {
  nextTick(() => {
    isReady.value = true
  })
})
</script>
