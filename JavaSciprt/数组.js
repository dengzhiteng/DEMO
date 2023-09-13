// 数组切割 slice splice
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.slice(0, 3), arr);
// console.log(arr.splice(0, 3), arr);

// for of
// for in

// const arr = [1, 2, 3, 4, 5, 6]
// for (const value of arr) {
//   console.log(value);
// }

// for (const index in arr) {
//   console.log(index);
// }


// concat
// const arr1 = [1, 2, 3]
// const arr2 = arr1.concat([4, 5, 6])


// pop
// const arr = [1, 2, 3, 4]
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr);


// const arr = [1, 2, 3, 4]
// arr.unshift(...[11, 0, 123, 123])
// arr.unshift(12)


// push
// arr.push(9)
// arr.push(1, 2, 3)
// console.log(arr);



// let arr = new Array(1,2,3)
// console.log(arr)

// let arr2 = [3,4,5]
// console.log(arr2)

// for(let i =0;i<arr.length;i++){
//     console.log(i,arr[i])
// }

//push pop shift unshift splice
// arr.push(4)

// arr.splice(0,2,5)


//sort
// let arr = [3,2,4,6,5]

// arr.sort((x,y)=>x-y)
// arr.sort((x,y)=>y-x)

// let arr = [{
//     name:"kerwin",
//     age:100
// },{
//     name:"teichui",
//     age:18
// },{
//     name:"xiaoming",
//     age:20
// }]

// arr.sort((x,y)=>y.age-x.age)


//迭代方法 every ,some ,filter ,map ,foreach ,reduce


// let arr = [10,11,12,13]

// let res = arr.every(item=>item>10)
// let res = arr.some(item=>item>12)
// let res = arr.filter(item=>item>12)
// let res = arr.map(item=>item+"kerwin")
// let res = arr.reduce((item1,item2)=>item1+item2)

// console.log(res)

// arr.forEach((item,index)=>{
//     console.log(item,index)
// })


//迭代器对象
// console.log(arr)

// let ite = arr[Symbol.iterator]()
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())
// console.log(ite.next())


// for(let i of arr){
//     console.log(i)
// }

// console.log(arr.entries())

// for(let i of arr.values()){
//     console.log(i)
// }


//Array.from
// function test(){
//     console.log(Array.from(arguments))
// }

// test(1,2,3)


//搜索 indexOf, lastIndexOf
// find findIndex findLast findLastIndex
//includes

// let arr = [10,11,12,13,9]

// console.log(arr.indexOf(10))
// console.log(arr.includes(15))


// let res = arr.find(item=>item>10)
// let res = arr.findIndex(item=>item>10)
// let res = arr.findLast(item=>item>10)
// let res = arr.findLastIndex(item=>item>10)
// console.log(res)
