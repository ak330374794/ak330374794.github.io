<template>
  <main>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/test">Test</RouterLink>
        </nav>
        <div>
          <div class="go" @click="goAbout">goAbout</div>
          <div class="go" @click="goTest">goTest</div>
        </div>
      </div>
    </header>
    <TheWelcome />
  </main>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import HelloWorld from '../../components/HelloWorld.vue'
import TheWelcome from '../../components/TheWelcome.vue'

const router = useRouter()
const goAbout = () => {
  console.log('go about')
  router.push({
    name: 'about',
  })
}
const goTest = () => {
  router.push({
    name: 'test',
  })
}
</script>
<style>
.go {
  font-size: 50px;
  color: #ff2222;
}
</style>
