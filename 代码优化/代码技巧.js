// 比较对象的属性是否相同
const obj1 = { age: 1, list: {}, date: new Date() }
const obj2 = { age: 1, list: {}, date: new Date() }
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) 
console.log(JSON.stringify(obj1));
