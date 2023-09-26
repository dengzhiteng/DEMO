class Stack {
  constructor() {
    this.items = []
  }
  // 出栈
  pop () {
    return this.items.pop()
  }
  // 添加一个元素到栈顶
  push (data) {
    this.items.push(data)
  }
  // 返回栈顶
  peek () {
    return this.items.at(-1)
  }
  // 是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 大小
  size () {
    return this.items.length
  }
  // 清空 
  clear () {
    this.items = []
  }
  toString () {
    return this.items.join(" ")
  }
}

// 进制转换算法
function convert (decNumber, base) {
  let remStack = new Stack()
  let number = decNumber
  let string = ""
  let baseString = "0123456789ABCDEF"
  while (number > 0) {
    remStack.push(number % base)
    number = Math.floor(number / base)
  }
  //  4%2=0  4/2=2
  //  2%2=0  2/2=1
  //  1%2=1  1/2=0
  // remStack =[0,0,1]
  while (!(remStack.isEmpty())) {
    string += baseString[remStack.pop()]
  }
  console.log(string);
  return string
}
convert(14, 8)



