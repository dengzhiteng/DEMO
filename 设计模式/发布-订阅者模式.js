// 发布-订阅者模式
class PubSub {
  constructor() {
    this.message = {}
  }
  // 订阅
  subscribe = (type, fn) => {
    if (!type || !fn) return
    this.message[type] ? this.message[type].push(fn) : this.message[type] = [fn]
  }
  // 取消订阅
  unSubscribe = (type, fn) => {
    if (!this.message[type]) return
    if (fn) {
      this.message[type] = this.message[type].filter(item => item !== fn)
    } else {
      this.message[type] = []
    }
  }
  // 发布
  publish = (type, data) => {
    if (!this.message[type]) return
    this.message[type].forEach(fn => {
      fn(data)
    })
  }
}

const pubsub = new PubSub()

pubsub.subscribe("add", (data) => {
  console.log("data", data)
})

pubsub.publish("add", { age: 18 })



