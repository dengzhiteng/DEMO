// ----数组的解构赋值----------

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a, b, c);

// let [a, b = 1] = [1]
// console.log(a, b);

// 默认值生效的条件是，对象的属性值严格等于undefined
// let [x = 1] = [undefined]
// console.log(x);

// let [x = 1] = [null]
// console.log(x);


// function f () {
//   console.log('aaa');
// }

// let [x = f()] = [];
// console.log(x);


// ----对象的解构赋值----------

// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo, bar);

// const { log } = console;
// log('hello') // hello

// 如果变量名与属性名不一致，必须写成下面这样
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz);
// console.log(foo); //foo is not defined
// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo


// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };

// const { p: [x, { y }] } = obj
// console.log(x, y);

//const { p, p: [x, { y }] } = obj
//console.log(p, x, y);

// const node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };

// const { loc, loc: { start, start: { line, column } } } = node
// console.log(line, column,);


// let obj = {};
// let arr = [];
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// obj // {prop:123}
// arr // [true]
// console.log(obj, arr);



// const { x: xx = 11 } = {}
// console.log(xx);

// let x
// ({ x } = { x: 12 })
// console.log(x);

// const arr = [1, 2, 3, 4]
// const index = 0
// const { [index]: first, 3: last } = arr
// console.log(first, last);



// 字符串的解构赋值
// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);
// const { length: len } = "hello"
// console.log(len);


// 函数参数的解构赋值
// const add = ([x, y]) => x + y
// console.log(add([1, 21]));

// const sums = [[1, 2], [3, 4]].map(([x, y]) => x + y)
// console.log(sums);

// const total = [1, 2, 3, 4, 5, 6, 7, 8].reduce((sum, cur) => sum + cur)
// console.log(total);

// 函数参数赋值,添加默认值
// const add = ({x = 1, y = 2}) => x + y
// console.log(add({ x: 100 }));

// const { x = 1, y = 2 } = {}
// console.log(x, y);

// 交换变量
// let x = 1;
// let y = 2;
// [x, y] = [y, x]

// console.log(x, y);


// 提取json 数据
// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
// const { id, status, data: number } = jsonData;
// console.log(id, status, number);

// 遍历map结构
// const map = new Map()
// map.set('first', 'hello')
// map.set('second', 'world')
// for (let [key,value] of map) {
//   console.log(value);
// }

// // 获取键名
// for (let [key] of map) {
// }

// // 获取键值
// for (let [, value] of map) {
// }
