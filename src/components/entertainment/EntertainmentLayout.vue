<template>
  <div class="ent-site">
    <EntertainmentHeader />
    <main class="ent-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import EntertainmentHeader from '@/components/entertainment/EntertainmentHeader.vue'
</script>

<style scoped>
.ent-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #090d18 0, #0f172a 320px, #0f172a 100%);
}

.ent-main {
  padding: 18px 0 56px;
}
</style>
