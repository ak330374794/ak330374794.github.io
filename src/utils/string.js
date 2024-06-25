/*
 * 字符串补位
 */
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

export const padStart = (str, maxLength, fillString = ' ') => {
  if (str.length >= maxLength) return str

  const fillLength = maxLength - str.length
  let times = Math.ceil(fillLength / fillString.length)
  while ((times >>= 1)) {
    fillString += fillString
    if (times === 1) {
      fillString += fillString
    }
  }
  return fillString.slice(0, fillLength) + str
}

/* istanbul ignore next */
export const camelCase = function (name) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, __, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

// 将css变成驼峰写法
export const cssStyleToDomStyle = (cssName) => {
  return cssName.toLowerCase().replace(/-./g, function (match) {
    return match.charAt(1).toUpperCase()
  })
}

export const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

export function ArrayBufferToStr(array) {
  const es = String.fromCodePoint.apply(null, new Uint8Array(array))
  return window.decodeURIComponent(window.escape(es)) //没有这一步中文会乱码
}
