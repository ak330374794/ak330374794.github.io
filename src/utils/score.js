export const strChangeArr = (data) => {
  let str = `when bugRate.bugRate > 90 then bugRate.score = 100
when bugRate.bugRate <= 90 &&  bugRate.bugRate > 60 then bugRate.score = 50
when bugRate.bugRate <= 60 then bugRate.score = 30`
  let reg1 = /[.\w \f\n\r\t\v]/g //过滤 .  数字字母  空格
  let reg2 = /[\a-zA-Z \f\n\r\t\v]/g //过滤  字母  空格
  let arr = data.split('when').filter((item) => {
    return item && item.trim()
  })
  let newArr = arr.map((item) => {
    let a = item.split('then')
    let x = a[0].split('&&')
    let m = x[x.length - 1].replace(reg1, '')
    let n = x[x.length - 1].split(m)[1]
    return {
      param: m,
      score: n,
    }
  })
  console.log(newArr, 'newArr')
  return newArr
}
