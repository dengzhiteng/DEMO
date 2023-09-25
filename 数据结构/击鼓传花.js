/***
 * 击鼓传花(使用队列实现):
 * 比如有10个人,敲三次,花在哪个人的手上则出局,当只有一个人的时候则胜出
 */
class Queue {
  constructor() {
    this.items = []
  }
  delqueue () {
    return this.items.shift()
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
    return this.items.length
  }
  clear () {
    this.items = []
    return true
  }
}

const Game = (names, num) => {
  if (!Array.isArray(names) && names.length) {
    throw new Error("请输入参赛人员")
  }
  if (!num) {
    throw new Error("请输入击鼓次数")
  }
  const queue = new Queue()
  for (let item of names) {
    queue.enqueue(item)
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
        queue.enqueue(queue.delqueue())
    }
    queue.delqueue()
  }
  return queue.delqueue()
}

const names = ["唐僧", "悟净", "猪八戒", "孙悟空", "张居正", "杨莲", "贾宝玉", "武松", "潘金莲", "李大钊"]
const winner= Game(names,100)
console.warn(`胜出:${winner}`);