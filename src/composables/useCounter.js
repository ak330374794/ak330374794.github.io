import { onMounted, onUnmounted, ref } from 'vue'

export function useCounter(target, duration = 1400) {
  const elementRef = ref(null)
  const displayValue = ref(0)
  let observer = null
  let frameId = 0
  let hasStarted = false

  const startCounter = () => {
    if (hasStarted) {
      return
    }
    hasStarted = true
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      displayValue.value = Math.floor(target * progress)
      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        displayValue.value = target
      }
    }

    frameId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter()
            if (observer) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.45 }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    cancelAnimationFrame(frameId)
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
    observer = null
  })

  return {
    elementRef,
    displayValue,
  }
}
