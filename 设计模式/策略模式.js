
const doStatusZero = () => {
  return 0
}
const doStatusOne = () => {
  return 1
}

const doStatusTwo = () => {
  return 2
}


const statusMap = new Map([
  ['zero', doStatusZero],
  ['one', doStatusOne],
  [2, doStatusTwo]
]);

// console.log(statusMap.get('zero'));


const type = 1
// if(type===0){
//   console.log(0);
// }else if(type===1){
//   console.log(1);
// }else if(type===2){
//   console.log(2);
// }else if(type===3){
//   console.log(3);
// }else if(type===4){
//   console.log(4);
// }else if(type===5){
//   console.log(5);
// }

// 
const typeMap = [
  [
    0, () => {
      console.log(0);
    },
  ],
  [
    1, () => {
      console.log(1);
    },
  ],
  [
    2, () => {
      console.log(2);
    },
  ],
  [
    3, () => {
      console.log(311);
    },
  ]
]

// for (const index in typeMap) {
//   const [key,actions] = typeMap[index]
//   actions()
// }

// typeMap.forEach(element => {
//   const [key,actions] = element
//   actions()
// });

// for (const [key,actions] of typeMap) {
//   actions()
// }



