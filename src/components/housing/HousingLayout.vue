<template>
  <div class="hs-site">
    <HousingHeader />
    <main class="hs-main"><slot></slot></main>
  </div>
</template>

<script setup>
import HousingHeader from '@/components/housing/HousingHeader.vue'
</script>

<style scoped>
.hs-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff7ed 0, #f8fafc 260px, #f8fafc 100%);
}
.hs-main {
  padding: 18px 0 56px;
}
</style>
