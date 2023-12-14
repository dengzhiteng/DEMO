// Object.assign 合并属性
// const obj1 = {
//   with: 100,
//   age: 1
// }
// const obj2 = {
//   age: 2,
//   weight: 2
// }
// const rest = Object.assign(obj1, obj2)
// const rest2 = Object.assign({}, obj1, obj2)
// console.log(rest === obj1);
// console.log(rest2);

//  Object.assign 深拷贝
// const obj1Copy = Object.assign({}, obj1)
// console.log(obj1Copy === obj1);

// 同名属性的替换 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
// const target = { a: { b: 'c', d: 'e' } }
// const source = { a: { b: 'hello' } }
// const rest = Object.assign(target, source)
// console.log(rest);



// Object.keys() / Object.values() / Object.entries()
// const obj = {
//   with: 100,
//   age: 1
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const user = {
  name: 'John',
  age: 1
};
const age = user.age ?? 18;
console.log(age);