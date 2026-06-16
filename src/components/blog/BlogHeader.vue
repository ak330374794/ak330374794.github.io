<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="shell-container header-inner">
      <RouterLink class="brand-mark" to="/home.html">
        <span class="brand-logo" aria-hidden="true">
          <span class="brand-logo-ring"></span>
          <span class="brand-logo-dot"></span>
        </span>
        <strong>{{ siteMeta.brandName || siteMeta.name }}</strong>
      </RouterLink>

      <button
        type="button"
        class="nav-toggle"
        :class="{ 'is-open': isOpen }"
        :aria-expanded="isOpen"
        aria-label="切换导航菜单"
        @click="isOpen = !isOpen"
      >
        <span class="nav-toggle-lines" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav class="header-nav" :class="{ 'is-open': isOpen }">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="isOpen = false">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navItems, siteMeta } from '@/data/site'

const isScrolled = ref(false)
const isOpen = ref(false)
const route = useRoute()

const updateHeader = () => {
  isScrolled.value = window.scrollY > 24
}

const handleResize = () => {
  if (window.innerWidth > 900) {
    isOpen.value = false
  }
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeader)
  window.removeEventListener('resize', handleResize)
})

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>
