import dayjs from 'dayjs'

// 获取文件名称的函数
export function getFileName(path, ext = true) {
  // eslint-disable-next-line no-useless-escape
  let reg = /[^\\\/]*[\\\/]+/g //匹配文件的名称和后缀的正则表达式
  let name = path.replace(reg, '')
  if (ext) {
    return name
  } else {
    // eslint-disable-next-line no-useless-escape
    let postfix = /\.[^.]+/.exec(name) //获取文件的后缀
    //获取没有后缀的名称
    return name.substr(0, postfix['index'])
  }
}

// blob 转 base64的操作
export const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    try {
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    } catch (err) {
      console.error(err)
      reject(undefined)
    }
  })
}

// blob 转 base64的操作
export const blobToString = (blob) => {
  return new Promise((resolve, reject) => {
    try {
      let reader = new FileReader()
      reader.readAsText(blob)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    } catch (err) {
      console.error(err)
      reject(undefined)
    }
  })
}

export const generateRandomFilename = (namePrefix = '', formatSuffix = '') => {
  return `${namePrefix}${dayjs().format('YYYYMMDDHHmmss')}${Math.floor(Math.random() * 1000 - 1)
    .toString()
    .padStart(3, '0')}${formatSuffix}`
}
// 文件大小格式化
export function fileSizeFormat(size) {
  if (!size) return '--'
  let num = 1024 //byte
  if (size < num) return size + 'B'
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + 'K' //kb
  if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + 'M' //M
  if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + 'G' //G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T' //T
}
