<template>
  <div class="gov-site">
    <GovHeader />
    <main class="gov-main"><slot></slot></main>
  </div>
</template>
<script setup>
import GovHeader from '@/components/gov/GovHeader.vue'
</script>
<style scoped>
.gov-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #eff6ff 0, #f8fafc 260px, #f8fafc 100%);
}
.gov-main {
  padding: 18px 0 56px;
}
</style>
