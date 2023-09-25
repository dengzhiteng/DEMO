// 箭头函数可以当成构造函数去用吗？箭头函数中能用 arguments ？
// 箭头函数不可以当做构造函数使用，因为箭头函数没有自己的this，arguments，super或new.target
// 在箭头函数中不存在arguments, 所以箭头函数不可以使用arguments。

function test () {
  console.log(arguments);
}
test(1, 1, 2)

const test1= ()=> {
  console.log(arguments); 
}
test1(1, 1, 2)