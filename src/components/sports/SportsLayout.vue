<template>
  <div class="sports-site">
    <SportsHeader />
    <main class="sports-main"><slot></slot></main>
  </div>
</template>
<script setup>
import SportsHeader from '@/components/sports/SportsHeader.vue'
</script>
<style scoped>
.sports-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #f0fdf4 0, #f8fafc 260px, #f8fafc 100%);
}
.sports-main {
  padding: 18px 0 56px;
}
</style>
