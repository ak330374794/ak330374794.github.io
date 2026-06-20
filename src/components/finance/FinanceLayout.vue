<template>
  <div class="finance-site">
    <FinanceHeader />
    <main class="finance-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import FinanceHeader from '@/components/finance/FinanceHeader.vue'
</script>

<style scoped>
.finance-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #eff6ff 0, #f8fafc 260px, #f8fafc 100%);
}

.finance-main {
  padding: 18px 0 56px;
}
</style>
