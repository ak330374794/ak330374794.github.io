<template>
  <div class="finder-site">
    <FinderHeader />
    <main class="finder-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import FinderHeader from '@/components/finder/FinderHeader.vue'
</script>

<style scoped>
.finder-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fbff 0, #f8fafc 260px, #f8fafc 100%);
}

.finder-main {
  padding: 18px 0 56px;
}
</style>
