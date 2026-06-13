<template>
  <footer class="site-footer">
    <div class="shell-container footer-grid">
      <div>
        <h3 class="footer-title">{{ siteMeta.title }}</h3>
        <p class="footer-text">© 2026 Alex. All rights reserved.</p>
      </div>
      <div>
        <div class="footer-links">
          <a v-for="item in socialLinks" :key="item.label" :href="item.href" target="_blank" rel="noopener">
            <i :class="item.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { siteMeta, socialLinks } from '@/data/site'
</script>
