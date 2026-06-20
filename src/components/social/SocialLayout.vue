<template>
  <div class="social-site">
    <SocialHeader />
    <main class="social-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import SocialHeader from '@/components/social/SocialHeader.vue'
</script>

<style scoped>
.social-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff6f7 0, #f8fafc 220px, #f8fafc 100%);
}

.social-main {
  padding: 18px 0 56px;
}
</style>
