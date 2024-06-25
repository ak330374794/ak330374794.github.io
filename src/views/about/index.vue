<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>
      <div class="go" @click="goHome">回到首页</div>
      <div class="go" @click="goTest">goTest</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  console.log('go about')
  router.push({
    name: 'home',
  })
}
const goTest = () => {
  router.push({
    name: 'test',
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
