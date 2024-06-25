/**
 * 格式化金额
 * @param {number | string} numberInput
 * @returns {string}
 */
export const formatCurrency = (numberInput) => {
  let i
  if (typeof numberInput === 'number' && !isNaN(numberInput)) {
    i = numberInput
  } else {
    if (numberInput) {
      i = Number(numberInput)
      if (isNaN(i)) i = undefined
    }
  }
  if (i === undefined) return ''
  return i.toLocaleString(undefined, { maximumFractionDigits: 2 })
}

/**
 * 替换非数字，不包含小数点
 * @param {number | string} value
 * @returns {string}
 */
export const formatNotNumber = (value) => {
  let i
  if (typeof value === 'number') {
    i = value.toString()
  } else {
    i = value
  }
  if (!/^d*(?:.d{0,2})?$/.test(i)) {
    return i.replace(/[^0-9.]/g, '')
  } else {
    return i
  }
}

/**
 * 格式化两位小数
 * @param {number | string} value
 * @returns {string}
 */
export const formatTwoDecimal = (value) => {
  let i
  if (typeof value === 'number') {
    i = value.toString()
  } else {
    i = value
  }
  const valueArr = i.split('.')
  if (valueArr.length > 2) {
    const intPart = valueArr[0]
    const flotPartArr = valueArr.slice(1, valueArr.length)
    i = Number(intPart + '.' + flotPartArr.join('')).toFixed(2)
  } else {
    i = Number(i).toFixed(2)
  }
  return i
}

/**
 * 替换非数字
 * @param {number | string} value
 * @returns {string}
 */
export const formatNotNum = (value) => {
  let i
  if (typeof value === 'number') {
    i = value.toString()
  } else {
    i = value
  }
  if (!/^[1-9]\d*$/.test(value)) {
    return i.replace(/[^0-9]/g, '')
  } else {
    return value
  }
}
/*
 * 小数点转换百分比
 */
export const formatToPercent = (val) => {
  if (!val) {
    return 0
  } else {
    let str = val + ''
    let l = str.split('.')
    if (l.length === 1) {
      return val * 100
    } else if (l.length > 1 && l[1].length <= 2) {
      return (val * 1000) / 10
    } else {
      let i = l[0] != 0 ? l[0] * 100 : 0
      let x = l[1].split('')
      x.splice(2, 0, '.')
      return i + (x.join('') - 0)
    }
  }
}
/*
 * 百分比转换小数点
 */
export const percentToFormat = (val) => {
  let i = val + ''
  let x = i.split('.')[1] ? (i.split('.')[1].length > 2 ? i.split('.')[1].length + 1 : 3) : 0
  return val ? (val * Math.pow(10, x)) / Math.pow(10, x + 2) : 0
}
