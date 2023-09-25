// 浅拷贝:复制过程中只复制一层变量，不会复制深层变量所绑定的变量
const arr = [1, [2, 3]]
const arrCopy = [...arr]
arr[0] = 22
arr[1].push(4)
console.log("arr:", arr); // arr: [ 22, [ 2, 3, 4 ] ]
console.log("arrCopy:", arrCopy); // arrCopy: [ 1, [ 2, 3, 4 ] ]


// 深拷贝：复制整个依赖的变量
function deepCopy (o) {
  let temp = {}
  for (let key in o) {
    if (typeof o[key] == 'object') {
      temp[key] = deepCopy(o[key])
    } else {
      temp[key] = o[key]
    }
  }
  return temp
}



