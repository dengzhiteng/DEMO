class Stack {
  constructor() {
    this.items = []
  }
  pop () {
    return this.items.pop()
  }
  push (data) {
    this.items.push(data)
  }
  peek () {
    return this.items.at(-1)
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }
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



