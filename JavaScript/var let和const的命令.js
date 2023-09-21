// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // ReferenceError: i is not defined

// {
//   let a = 1
//   var b = 2
// }
// // console.log(a); // error
// console.log(b);

// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]()

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 6


// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }


// var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;

// let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// 暂时性死区  TDZ
// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// {
//   // TDZ开始
//   //tmp = 'abc'; // ReferenceError
//   //console.log(tmp); // ReferenceError

//   let tmp; // TDZ结束
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123
// }


// console.log(typeof x);
// let x

// function bar (x = 2, y = x) {
//   return [x, y];
// }
// bar(); // 报错


// 报错
// function func () {
//   let a = 10;
//   var a = 1;
// }

// 报错
// function func () {
//   let a = 10;
//   let a = 1;
// }

// function func (arg) {
//   let arg;
// }
// func() // 报错



// {
//   if (true) {
//     function foo () {
//       console.log("foo");
//     }
//   }
//   foo()
// }


// {
//   if (true) {
//     let foo = () => {
//       console.log("foo");
//     }
//   }
//   foo()
// }


// 第一种写法，报错
// if (true) let x = 1;


// const obj = { age: 1 }
// obj = {}  //  Assignment to constant variable.

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
console.log(window.a);

let b = 1;
console.log(window.b);