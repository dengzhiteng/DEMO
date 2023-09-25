// 交换
const swipValue = (arr, index1, index2) => {
  [arr[index2], arr[index1]] = [arr[index1], arr[index2]]
}

// 冒泡排序
const bubbleSort = (arr) => {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swipValue(arr, j, j + 1)
      }
    }
  }
  return arr
}

const arr = [1, 23, 123, 1231, 45, 61, 1, 2, 4, 5, 7, 8, 123123, 456, 678, 343, 90, 567, 342, 234, 1, 0, -1]
const sortArr = bubbleSort(arr)
console.log(sortArr);