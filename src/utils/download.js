import { isBlob } from './is'
//import { useI18n } from '@/hooks/web/useI18n'
import { showLoading, hideLoading } from './loading'
import fileSaver from 'file-saver'

// 下载文件的接口
export const download = (content, filename) => {
  const blobRes = new Blob([content])
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blobRes, filename)
  } else {
    fileSaver(blobRes, filename)
  }
}

/**
 * 文件下载
 * @param api
 * @param saveFileName
 * @returns {Promise<void>}
 */
export const asyncDownloadFile = async (config) => {
  //const { t } = useI18n()
  const { api, fileName, params } = config
  try {
    //showLoading(t('common.downloading'))
    showLoading('下载中，请稍候')
    console.log(params)
    const res = await api(params)
    download(res, fileName)
  } catch (e) {
    // todo: 文件下载失败
    console.error(e)
  } finally {
    hideLoading()
  }
}
