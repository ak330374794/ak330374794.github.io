export function sortBy(name, sort) {
  // asc 降序    desc 升序
  //console.log(`name=${name}, sort=${sort}`)
  return function (o, p) {
    let a, b
    if (typeof o === 'object' && typeof p === 'object' && o && p) {
      a = parseInt(o[name])
      b = parseInt(p[name])
      if (a === b) {
        return 0
      }
      if (sort === 'asc') {
        if (typeof a === typeof b) {
          return a < b ? -1 : 1
        }
        return typeof a < typeof b ? -1 : 1
      } else {
        if (typeof a === typeof b) {
          return a > b ? -1 : 1
        }
        return typeof a > typeof b ? -1 : 1
      }
    } else {
      throw 'error'
    }
  }
}
