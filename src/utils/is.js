// copy to vben-admin
const toString = Object.prototype.toString

export const is = (val, type) => {
  return toString.call(val) === `[object ${type}]`
}
export const isDef = (val) => {
  return typeof val !== 'undefined'
}

export const isUnDef = (val) => {
  return !isDef(val)
}

export const isObject = (val) => {
  return val !== null && is(val, 'Object')
}

export const isEmpty = (val) => {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  if (isUnDef(val)) {
    return true
  }

  return val === null
}

export const isBlob = (val) => {
  return is(val, 'Blob')
}

export const isArrayBuffer = (val) => {
  return is(val, 'ArrayBuffer')
}

export const isDate = (val) => {
  return is(val, 'Date')
}

export const isNull = (val) => {
  return val === null
}

export const isNullAndUnDef = (val) => {
  return isUnDef(val) && isNull(val)
}

export const isNullOrUnDef = (val) => {
  return isUnDef(val) || isNull(val)
}

export const isNumber = (val) => {
  return is(val, 'Number')
}

export const isPromise = (val) => {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const isString = (val) => {
  return is(val, 'String')
}

export const isFunction = (val) => {
  return typeof val === 'function'
}

export const isBoolean = (val) => {
  return is(val, 'Boolean')
}

export const isRegExp = (val) => {
  return is(val, 'RegExp')
}

export const isArray = (val) => {
  return val && Array.isArray(val)
}

export const isWindow = (val) => {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export const isElement = (val) => {
  return isObject(val) && !!val.tagName
}

export const isMap = (val) => {
  return is(val, 'Map')
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export const isDark = (val) => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const isIn = (obj, key) => {
  return Object.hasOwn(obj, key)
}

export const isImage = (fileName) => {
  let ext = fileName.toLowerCase()
  return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png') || ext.endsWith('.gif') || ext.endsWith('.bmp')
}

// 判断字符串是否为JSON格式
export const isJSON = (str) => {
  try {
    const obj = JSON.parse(str)
    if (isObject(obj) || isArray(obj)) {
      return true
    }
  } catch (e) {
    // console.error(e)
    return false
  }
  return false
}
