// 根据内容去查找paths
export function findMatchingItems(arr, name) {
  let result = []
  const findItem = arr.find((it) => it.name === name)
  if (findItem && findItem.meta && findItem.meta.mainPageName) {
    let matchingItem = arr.find((item) => item.name === findItem.meta.mainPageName)
    if (matchingItem) {
      result.push(matchingItem)
      result = result.concat(findMatchingItems(arr, matchingItem.name))
    }
  }
  return result.reverse()
}
