<template>
  <section ref="sectionRef" class="reveal-section" :style="sectionStyle">
    <slot></slot>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
})

const sectionRef = ref(null)
const sectionStyle = computed(() => ({
  transitionDelay: `${props.delay}ms`,
}))

useReveal(sectionRef)
</script>
