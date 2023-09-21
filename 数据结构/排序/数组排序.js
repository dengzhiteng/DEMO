// 升序
const arr1 = [1, 2, 34, 45, 23]
arr1.sort(function (a, b) {
  return a - b
})

// 降序
const arr2 = [1, 2, 34, 45, 23]
arr2.sort(function (a, b) {
  return b - a
})

/***
 * 对数组对象中的key 进行排序
 * arr 
 * key 需要进行排序的key值
 * order 排序方式, asc:升序  desc:降序
 */
function sortBy (arr, key, order = 'asc') {
  arr.sort((a, b) => {
    return order == 'asc' ? a[key] - b[key] : b[key] - a[key]
  })
  return arr
}
// 对成绩按科目降序
const list = [
  {
    name: '张三',
    chinese: 53,
    math: 60,
    english: 80
  },
  {
    name: '李四',
    chinese: 23,
    math: 56,
    english: 80
  },
  {
    name: '王五',
    chinese: 65,
    math: 88,
    english: 11
  },
  {
    name: '对对对',
    chinese: 66,
    math: 89,
    english: 22
  },
]

console.log(sortBy(list, 'chinese', 'desc'));


// 把下列数组对象按多字段排序，name升序，age降序
let listData = [
  { name: "张三", age: 38, num: 123 },
  { name: "李四", age: 15, num: 678 },
  { name: "王王", age: 16, num: 256 },
  { name: "老六", age: 28, num: 256 },
  { name: "老王", age: 16, num: 789 },
  { name: "大一", age: 23, num: 678 },
  { name: "大二", age: 20, num: 123 },
  { name: "大三", age: 40, num: 989 }
];

listData.sort((a, b) => a.name[0].localeCompare(b.name[0], 'zh-CN') || b.age - a.age);


















