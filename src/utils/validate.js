import Schema from 'async-validator'

// 可以是正整数、可以是负数，可以是小数
export const validateNumber = (num) => {
  const reg = /^([-+])?\d+(\.\d+)?$/
  return reg.test(num)
}
// 可以是正整数、可以是负数，可以是小数 且保留两位小数
export const validateNumberAll = (num) => {
  const reg = /(^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:.\d{1,2})?$)/
  return reg.test(num - 0)
}

//正数校验
export const validateFloatNumber = (num) => {
  const reg = /^[+]?(\d+)$|^[+]?(\d+\.\d+)$/
  return reg.test(num)
}

// 正整数且保留两位小数
export const validate2DecimalInteger = (num) => {
  let reg = /^([0]|([1-9][0-9]*)|([0]\.\d+|[1-9][0-9]*\.\d+))$/
  if (!reg.test(num)) {
    return false
  } else {
    let reg = /^([0]|([1-9][0-9]*)|([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2}))$/
    if (!reg.test(num)) {
      return false
    }
  }
  return true
}

export function isvalidUsername(str) {
  // const valid_map = ['admin', 'editor', 'ts', 'bc', 'mm', 'ae', 'rm', 'g973'];
  return !!str // valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 数字类型 正整数 */
export function Isvalidatenumber(str) {
  const reg = /^[0-9]*$/
  return reg.test(str - 0)
}

/* 数字/货币金额 (只支持正数、不支持校验千分位分隔符) */
export function isPositiveDecimalNum(str) {
  const reg = /^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$|^0$|^[0-9]\.[0-9][0-9]?$/
  return reg.test(str)
}

export function isPositiveNum(str) {
  const reg = /^[+]?(\d+)$|^[+]?(\d+\.\d+)$/
  return reg.test(str)
}

/* 正整数 */
export function positiveInteger(str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}

/* 0或正整数 */
export function zeroAndPositiveInteger(str) {
  const reg = /^(0|\+?[1-9][0-9]*)$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

// 验证手机号的正则
export function validateMobile(v) {
  const re = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return re.test(v)
}

export function validateUseCardCode(v) {
  const re = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return re.test(v)
}

// 验证linux路径
export function validateLinuxPath(v) {
  const re = /^\/(?:[^/]+\/)*[^/]+$/
  return re.test(v)
}

// 字符串验证 包含数字、字母、下划线和减号
export function validateStr1(v) {
  const re = /^[\w-]*$/
  return re.test(v)
}

// 字符串验证 包含数字、字母、.
export function validateStr2(v) {
  const re = /^[a-zA-Z0-9.]*$/
  return re.test(v)
}

// 字符串验证 包含汉字，数字，字母，下划线
export function validateStr3(v) {
  const re = /^[\u4E00-\u9FA5\w\d]+$/
  return re.test(v)
}

// CMS T# 的验证，长度6位，前2位是大写字母，后四位是数字，例如：AA1234
export function tNumberValidate(v) {
  const re = /^[A-Z]{2}[0-9]{4}$/
  return re.test(v)
}

export const validateGenerator = (descriptor) => {
  return new Schema(descriptor)
}
