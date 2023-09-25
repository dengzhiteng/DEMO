// 打印0-10
// {
//   const print = (i) => {
//     console.log(i)
//     i++
//     if (i >= 10) {
//       return false
//     }
//     print(i)
//   }
//   print(0);
// }


// 斐波拉切数列
// const arr = [1, 1,2 ,3, 5, 8, 13, 21, 34]
// const fn = (n) => {
//   if (n == 1 || n == 2) {
//     return 1
//   }
//   return fn(n-1) + fn(n-2)
// }
// console.log(fn(8));

// 打印乘法口诀
// {
//   const cfkj = (num) => {
//     if (num === 1) {
//       console.log("1x1 = 1");
//       return false
//     } else {
//       cfkj(num - 1)
//       let lineStr = ''
//       for (let i = 1; i <= num; i++) {
//           lineStr += i + 'x'+num +'='+ i*num +' '
//       }
//       console.log(lineStr);
//     }
//   }
//   cfkj(9)
// }


// 求和 1-100 (1)
// let sum=0
// const twoSum = (num) => {
//   if (num < 1) {
//     return
//   }
//   twoSum(num - 1)
//   sum += num
// }
// twoSum(5)
// console.log(sum);

// 求和 1-100 (2)
// const sum = (num) => {
//   if (num === 1) {
//     return 1
//   }
//   return sum(num-1)+num
// }
// console.log(sum(5));

// 实现深度克隆
function deepClone (o) {
  let temp = {}
  for (let key in o) {
    if (typeof o[key] == 'object') {
      temp[key] = deepClone(o[key])
    } else {
      temp[key] = o[key]
    }
  }
  return temp
}



