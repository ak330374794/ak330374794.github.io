import { isEmpty, isObject, isNumber, isString, isBoolean, isArray, isDate } from './is'
import { isEqual } from 'lodash-es'
// 将bean中的 value 为null 、 undefined 、 空字符串  则删除这个对象属性
export const getBeanDeleteKey = (bean) => {
  for (const key in bean) {
    if (isEmpty(bean[key])) {
      delete bean[key]
    }
  }
  return bean
}

/**
 * 比较对象相同属性的值是否发生变化，如果有变化则返回变化的属性数组
 * @param {*} bean1
 * @param {*} bean2
 */
export const compareCangedAttrs = (bean1, bean2) => {
  let result = []
  if (!isEmpty(bean1) && !isEmpty(bean2)) {
    let keys1 = Object.keys(bean1)
    let keys2 = Object.keys(bean2)
    let keys = [].concat(keys1)
    // 获取最小的key集合
    if (keys1.length > keys2.length) {
      keys = [].concat(keys2)
    }

    for (const key of keys) {
      if (isEqual(bean1[key], bean2[key]) === false) {
        result.push(key)
      }
    }
  }
  return result
}

export const clearBeanValue = (bean) => {
  const keys = Object.keys(bean)
  for (const key of keys) {
    let v = bean[key]
    if (isObject(v) === true || isDate(v) === true) {
      delete bean[key]
    } else if (isNumber(v) === true) {
      delete bean[key]
    } else if (isString(v) === true) {
      bean[key] = ''
    } else if (isBoolean(v) === true) {
      delete bean[key]
    } else if (isArray(v) === true) {
      bean[key] = []
    }
  }
}
