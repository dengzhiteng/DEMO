//类型
const str:string ='12'
const num:number=1
const boolen:Boolean = new Boolean(1)
const boolen1:boolean = false
const boolen2:boolean = true
// 内置对象

// let b: Boolean = new Boolean(1)
// console.log(b)
// let n: Number = new Number(true)
// console.log(n)
// let s: String = new String('aaaa')
// console.log(s)
// let d: Date = new Date()
// console.log(d)
// let r: RegExp = /^1/
// console.log(r)
// let e: Error = new Error("error!")
// console.log(e)


function aa(num:number|string):void{
  // return ''
}
// aa([])
// aa(1)
// aa('sss')

// let u: void = undefined
// let n: void = null

// let anys:any ='aaa'
// let unknown1:unknown=1
// unknown1 = anys
// num = unknown1   //error 不能把unknown 分配给number

// 联合类型
// let myPhone:number|string|boolean = '0734-12343'
// myPhone=18682151435
// myPhone=false

// 交叉类型
// interface Person{
//   name:string,
//   age:number,
// }

// interface Man{
//   sex:1
// }

// const xiaomli:Person&Man={
//     name:'小李',
//     age:1,
//     sex:1
// }


// 类型断言
interface A{
  run:string
}

interface B{
  build:string,
}

const fn= (type:A | B ):string=>{
  return (type as A).run
}

// as const

// let name1 = 'ddd' as const
// name1 ='aa'  // Error

// 接口
// interface Person{
//   name:string,
//   age:number,
// }

// 继承
// interface Person1 extends Person{
//   sex:number
// }

// const xiaoming:Person = {
//   name:'小明',
//   age:1,
// }

// const xiaowang: Person1={
//   name:'小王',
//   age:1,
//   sex:2
// }

// 合并
// interface Desk{
//   id:string,
// }

// interface Desk{
//   price:number
// }

// const desk:Desk ={
//   id:'123',
//   price:1
// }


// 可选属性
// interface Book {
//   name:string,
//   price?:number|string
// }

// const book:Book ={
//   name:'三味书屋',
//   price:1
// }

// 任意属性
// interface Goods{
//   id:string|number,
//   name:string,
//   price:number,
//   [propName:string]:any
// }

// const phone:Goods={
//   id:1,
//   name:'a',
//   price:1,
//   aa:1,
//   bb:1,
//   cc:1,
//   dd:1,
// }

// 只读 readonly
// interface GoodsReadonly{
//   id:string,
//   readonly name:'手机',
//   readonly name1:string,
//   price?:number,
// }

// const phone1:GoodsReadonly={
//   id:'1313',
//   name:'手机',
//   name1:'手机1',
// }
// phone1.name1='ssf'  // erron 无法为只读属性赋值


// 添加函数
// interface Person11 {
//   b?: string,
//   readonly a: string,
//   [propName: string]: any;
//   cb:()=>void
// }

// const person11: Person11 = {
//   a: "213",
//   c: "123",
//   cb:()=>{
//       console.log(123)
//   }
// }


// const Add = (num1:number,num2:number):number=>{
//     return num1+num2
// }
// Add(1,1); // 2
// Add(1,'1'); // Error

// interface Fn{
//   (num:  number, num2: number): number
// }
// const Add:Fn = (num1,num2)=>{
//    return num1+num2
// }
// Add(1,1)


interface User{
  name: string;
  age: number;
}
function getUserInfo(user: User): User {
  return user
}

const res = getUserInfo({name:'sss',age:1})





// 数组的类型
// const arr1:number[] = [1]
// const arr2:number[] = [1,'2'] //Error
// const arr3:[number,string]=[1,'a']

// let arr:number[] = [1,2,3,]
// arr.unshift(1) // 
// arr.unshift('1') // Error 

// 泛型
// const arr4:Array<number>=[1,123,13,123]
// const arr5:Array<string> = ['12','d']


// 多维数组
//const data:number[][]=[[1,1,1,1,],[12,123,234]]

// arguments类数组
// function Arr(...args:any): void {
//   console.log(arguments)
//   //错误的arguments 是类数组不能这样定义
//  // let arr:number[] = arguments
// }
// Arr(111, 222, 333)


// function Arr(...args:any): void {
//   console.log(arguments) 
//   //ts内置对象IArguments 定义
//   let arr:IArguments = arguments
// }
// Arr(111, 222, 333)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }



// let  body:HTMLElement = document.body
// let allDiv: NodeList = document.querySelectorAll('div');


// 泛型
// function Add<T>(num1:T,num2:T):Array<T>{
//   return [num1,num2]
// }

// Add<number>(1,2)
// Add<string>('a','b')

// 泛型约束
// interface Len {
//   length:number
// }

// function getLegnth<T extends Len>(arg:T) {
//   console.log(arg);
//  return arg.length
// }

// console.log(getLegnth<string>('123'))


// class
// class Person {
//  public userName:string
//  private age:number
//  protected id:number|string
//   constructor(userName:string,age:number,id:number|string) {
//     this.userName = userName
//     this.age = age
//     this.id = id
//   }
//   run(){
//     console.log('run')
//   }
// }
// const xiaoming = new Person('xiaoming',18,11)
// xiaoming.run()
// xiaoming.userName  // private 只能在类 内部使用
// xiaoming.age  

// static 静态属性 和 静态方法

// class Person {
//  public userName:string
//  private age:number
//  static price:number
//   constructor(userName:string,age:number) {
//     this.userName = userName
//     this.age = age
//   }
//   static run(){
//     console.log('静态方法')
//   }
// }
// const xiaoli = new Person('小李',18)
// // xiaoli.run()
// Person.run()

// 元组类型 Tuple
// let arr:[number,string] = [1,'string']
// let arr2: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined]

// let arr:[number,string] = [1,'string']
// arr[0].length //error 数字是没有length 的
// arr[1].length //success

// let arr:[number,string] = [1,'string']
// arr.push(true)//error  越界元素

// 枚举  enum

 enum Types{
  Red=10,
  Green,
  BLue
}
console.log(Types.Red);
