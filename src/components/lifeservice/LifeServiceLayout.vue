<template>
  <div class="ls-site">
    <LifeServiceHeader />
    <main class="ls-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import LifeServiceHeader from '@/components/lifeservice/LifeServiceHeader.vue'
</script>

<style scoped>
.ls-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff7ed 0, #f8fafc 260px, #f8fafc 100%);
}

.ls-main {
  padding: 18px 0 56px;
}
</style>
