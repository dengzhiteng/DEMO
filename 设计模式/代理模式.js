let obj = {
  name: 'xiaoming',
  age: 18,
  sex: '男'
}
let proxy_obj = new Proxy(obj, {
  get: function (target, key) {
    console.log(target, key);
    return target[key]
  },
  set: function (target, key, value) {
    if (key === 'age') {
      if (value > 100) {
        throw new Error('年龄不能大于100岁')
      }
    }
    target[key] = value
  }
})

console.log(proxy_obj);