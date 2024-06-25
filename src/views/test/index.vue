<template>
  <div class="halloword">
    <h1>halloword</h1>
    <div>97868767896</div>
    <div @click="goHome">回到首页</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
console.log('test')
const router = useRouter()
const goHome = () => {
  console.log('go about')
  router.push({
    name: 'home',
  })
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
