var Singleton = (function () {
  var instance

  function User (name, age) {
    this.name = name
    this.age = age
  }

  return function (name, age) {
    if (!instance) {
      //创建实例
      instance = new User(name, age)
    }
    return instance
  }
})()
