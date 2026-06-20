<template>
  <div class="corp-site">
    <CorporateHeader />
    <main class="corp-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import CorporateHeader from '@/components/corporate/CorporateHeader.vue'
</script>

<style scoped>
.corp-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0, #f8fafc 260px, #ffffff 100%);
}

.corp-main {
  padding: 18px 0 56px;
}
</style>
