import { ElLoading } from 'element-plus'

/**
 * @description: 全局加载动画
 * @param {*}
 * @return {*}
 */
let loadingCount = 0
let loading = null

export function fullLoading(text) {
  loading = ElLoading.service({
    lock: true,
    text,
    background: 'rgba(255, 255, 255, 0.7)',
  })
  return loading
}

// 为了解决同时调用加载动画关闭时提前关闭问题 后续调用showLoading和hideLoading
// 展示全局动画
export function showLoading(text = '') {
  if (loadingCount === 0) {
    fullLoading(text)
  }
  loadingCount++
}

// 隐藏全局动画
export function hideLoading() {
  if (loadingCount > 0) {
    loadingCount--
  }
  if (loadingCount === 0 && loading) {
    loading.close()
    loading = null
    return false
  }
}
