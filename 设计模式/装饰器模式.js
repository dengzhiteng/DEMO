Function.prototype.before = function (beforeFn) {
  var _this = this
  return function () {
    //先进行前置函数调用
    beforeFn.apply(this, arguments)
    //执行原来的函数
    return _this.apply(this, arguments)
  }
}

function test (username, age) {
  console.log(username, age)
}
test.before(function () {
  console.log("before")
})("惺惺相惜", 12)