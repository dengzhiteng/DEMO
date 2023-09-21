/***
 * 击鼓传花(使用队列实现):
 * 比如有10个人,敲三次,花在哪个人的手上则出局,当只有一个人的时候则胜出
 */
class Queue {
  constructor() {
    this.items = []
    this.lowCount = 0
    this.count = 0
  }
  delqueue () {
    return this.items.pop()
  }
  enqueue (data) {
    this.items.push(data)
  }
  front () {
    return this.items.at(0)
  }
  isEmpty () {
      return this.size()===0
  }
  size () {
    return this.count - this.lowCount
  }
  clear () {
    this.items = []
    this.lowCount = 0
    this.count = 0
    return true
  }
  toString () {
  }
}

let queue = new Queue()
const Game = (list, num) => {
  const queue = new Queue()
  for (let item of list) {
    queue.enqueue(item)
  }
}

const arr = ["唐僧", "悟净", "猪八戒", "孙悟空", "张居正", "杨莲", "贾宝玉", "武松", "潘金莲", "李大钊"]
Game(arr)

