<template>
  <div class="dev-site">
    <DevtechHeader />
    <main class="dev-main"><slot></slot></main>
  </div>
</template>
<script setup>
import DevtechHeader from '@/components/devtech/DevtechHeader.vue'
</script>
<style scoped>
.dev-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #020617 0, #0f172a 260px, #0f172a 100%);
}
.dev-main {
  padding: 18px 0 56px;
}
</style>
