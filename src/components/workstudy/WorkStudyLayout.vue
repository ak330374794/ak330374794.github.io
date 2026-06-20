<template>
  <div class="ws-site">
    <WorkStudyHeader />
    <main class="ws-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import WorkStudyHeader from '@/components/workstudy/WorkStudyHeader.vue'
</script>

<style scoped>
.ws-site {
  min-height: 100vh;
  background: linear-gradient(180deg, #f4f8ff 0, #f8fafc 260px, #f8fafc 100%);
}

.ws-main {
  padding: 18px 0 56px;
}
</style>
