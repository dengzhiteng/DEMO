// 快速排序
const quickSort = (arr) => {
  const { length } = arr
  if (length < 2) {
    return arr
  }
  let base = arr[0]
  let minArr = arr.slice(1).filter(item => item <= base)
  let maxArr = arr.slice(1).filter(item => item > base)
  return quickSort(minArr).concat(base).concat(quickSort(maxArr))
}

const arr = [1, 23, 123, 1231, 45, 61, 1, 2, 4, 5, 7, 8, 123123, 456, 678, 343, 90, 567, 342, 234, 1, 0, -1]
const sortArr = quickSort(arr)
console.log(sortArr);