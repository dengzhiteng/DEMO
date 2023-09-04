// if else 优化
const state = 0

const action1 = () => {
  // do sth
}
const action2 = () => {
  // do sth
}
state === 0 ? action1() : action2()


// 操作符  ?  ??  !

// 连续给多个变量复制
let [a, b, c] = [1, 2, 3]

// 比较后返回
function callMe (str) {
  return false
}
function checkReturn (test) {
  return test || callMe('test')
}

// 简短的函数调用
const test1 = () => { }
const test2 = () => { }
const testFlag = 1;
testFlag === 1 ? test1() : test2()

// 简化switch
key = 1
switch (key) {
  case 1:
    // do sth
    break;
  case 2:
    // do sth
    break;
  case 3:
    // do sth
    break;
  case 4:
    // do sth
    break;
  default:
    break;
}

commond = {
  1: () => { },
  2: () => { },
  3: () => { },
  4: () => { },
}

commond[key] && commond[key]()

// 隐式返回

const getUserInfo = () => 11
const getUserInfo1 = function () {
  return 1
}
// console.log(getUserInfo());
// console.log(getUserInfo1());


// 默认参数值
const add = (a = 1, b = 1) => a + b
// console.log(add(99,1));


// 延展操作符

const arr = [1, 2, 3]
// const data =[4,5,6].concat(1,2,3)

const data = [4, 5, 6, ...arr]
// console.log(data);

// 克隆数组
const arrCopy = arr.slice
// console.log(arrCopy===arr); //false
const arrCopy1 = [...arr]
console.log(arrCopy1 === arr);





















