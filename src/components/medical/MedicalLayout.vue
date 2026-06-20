<template>
  <div class="med-site">
    <MedicalHeader />
    <main class="med-main"><slot></slot></main>
  </div>
</template>

<script setup>
import MedicalHeader from '@/components/medical/MedicalHeader.vue'
</script>

<style scoped>
.med-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #f0fdfa 0, #f8fafc 260px, #f8fafc 100%);
}
.med-main {
  padding: 18px 0 56px;
}
</style>
