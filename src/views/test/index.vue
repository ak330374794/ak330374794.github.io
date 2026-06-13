<template>
  <div class="halloword">
    <h1>halloword</h1>
    <div>97868767896</div>
    <div @click="goHome">回到首页</div>
    <iframe
      id="my-iframe"
      height="500"
      src="https://qr.95516.com/01020001/wcqr?f=ICBCqr&x=1&T=3&P=13&I=e03d925776684b4d&N=b4cbb142eeafe2bddce7a7878c57f5ca&L=36ad66c7d4f1df99ad431122ec6b4d075db32581ce37087861e4ad12a7ae953238169986e2676c439a9662b390b07094f0d6a41d2fce3a24eb163cbf186da1f9b01bf2585f75cddf"
    >
    </iframe>
  </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
console.log('test')
const router = useRouter()
const goHome = () => {
  console.log('go about')
  router.push({
    name: 'home',
  })
}

onMounted(() => {
  console.log(123123)
  nextTick(() => {
    console.log(12312113)
    const iframe = document.getElementById('my-iframe')
    iframe.addEventListener('load', () => {
      console.log('Iframe is loaded!')
      const iframeWindow = iframe.contentWindow
      // 监听iframe中的方法
      /*iframeWindow.addEventListener('myEvent', function(event) {
        console.log('Event received from iframe:', event.detail);
      });*/
    })
  })
})
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
