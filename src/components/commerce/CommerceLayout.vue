<template>
  <div class="commerce-site">
    <CommerceHeader />
    <main class="commerce-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import CommerceHeader from '@/components/commerce/CommerceHeader.vue'
</script>

<style scoped>
.commerce-site {
  min-height: 100vh;
  background: #f5f5f5;
}

.commerce-main {
  padding: 16px 0 56px;
}
</style>
