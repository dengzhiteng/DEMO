// set 结构
// const s1 = new Set([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]);
// console.log(s1);
// console.log(s1.size);

// const s2 = new Set()
// s2.add(1)
// s2.add(1)
// s2.add(2)
// s2.add(2)
// s2.add(3)
// console.log(s2);
// s2.delete(2)
// console.log(s2)
// console.log(s2.has(2));
// console.log(s2.has(3));
// console.log(Array.from(s2));

// 获取对象的所有属性名
// const Person = {
//   userName: '张三',
//   age: 18,
// };
// const keys = Object.keys(Person)
// console.log(keys);


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//  并集
let union = new Set([...a, ...b]);

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));