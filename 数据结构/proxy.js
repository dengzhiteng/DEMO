// 代理
const person = new Proxy({}, {
  get: function (target, key) {
    return target[key] || 18;
  },
  set: function (target, key, value) {
    target[key] = value || 18
  }
})
person.age = '19'
console.log(person.age);