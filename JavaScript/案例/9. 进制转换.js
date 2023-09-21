// 进制转换
class DecimalNum {
  constructor(num, base = 2) {
    this.num = num
    this.base = base
  }
  convert () {
    let stack = []
    while (this.num != 0) {
      stack.push(this.num % this.base)
      this.num = Math.floor(this.num / this.base);
    }
    let rest = this.base == 16 ? 'ox' : ''
    const codeStr = '0123456789ABCDEF'
    console.log(stack);
    while (stack.length) {
      rest += codeStr[stack.pop()]
    }
    return rest
  }
}
const decimalNum = new DecimalNum(10)
const restNum = decimalNum.convert()
console.log(restNum);


