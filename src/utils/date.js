import { padStart } from './string'
import dayjs from 'dayjs'
/*
 * 格式化时间戳
 */
export const timeFormat = (dateTime = null, fmt = 'YYYY-MM-DD HH:mm:ss') => {
  if (dateTime === 'none') return '-'
  if (!dateTime) dateTime = Number(new Date())
  if (dateTime.toString().length === 10) {
    dateTime = +dateTime * 1000
  }
  const date = new Date(dateTime)
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 月
    'D+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'm+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString(), // 秒
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : padStart(opt[k], ret[1].length, '0'))
    }
  }
  return fmt
}

export function getDateValuefromTime(time = '00:00:00') {
  const timesplit = time.split(':').map((item) => parseInt(item))
  const date = new Date()
  date.setHours(...timesplit)
  return date
}

/**
 * 获取上个月Date类型数据
 * @returns {Date}
 */
export function getDateValueOfLastMonth() {
  const defaultMonth = new Date()
  defaultMonth.setMonth(defaultMonth.getMonth() - 1)
  defaultMonth.setDate(1)
  defaultMonth.setHours(0, 0, 0, 0)
  return defaultMonth
}

// 判断日期是否为周末
export function isWeekend(date = new Date()) {
  return date.getDay() === 6 || date.getDay() === 0
}

// 判断日期是否为周末
export function isStartDayOfMonth(date = new Date()) {
  return date.getDate() === 1
}

// 获取两个时间之间的所有时间
export function getTwoDateDayAll(starDay, endDay, format = 'YYYY-MM-DD') {
  let arr = []
  let dates = []

  // 设置两个日期UTC时间
  let db = new Date(starDay)
  let de = new Date(endDay)

  // 获取两个日期GTM时间
  let s = db.getTime() - 24 * 60 * 60 * 1000
  let d = de.getTime() - 24 * 60 * 60 * 1000

  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= d; i++) {
    i = i + 24 * 60 * 60 * 1000
    arr.push(parseInt(i))
  }

  // 获取每一天的时间  YY-MM-DD
  for (let j in arr) {
    let time = new Date(arr[j])
    dates.push({
      name: dayjs(time).format(format),
      time: dayjs(time),
      isWeek: isWeekend(time),
      isStartDay: isStartDayOfMonth(time),
      year: time.getFullYear(),
      month: time.getMonth() + 1,
      date: time.getDate(),
    })
  }

  return dates
}
