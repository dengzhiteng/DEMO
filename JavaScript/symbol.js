// Symbol 结构
const userName = Symbol("userName")
const age = Symbol("age")

// 定义对象
const person = {
  [userName]: '张三',
  [age]: 18,
}

// 遍历Person
const keys = Reflect.ownKeys(person)
keys.forEach(key => {
  // console.log(key, person[key]);
})

const VIDEO = 1
const IMAGE = 2
const AUDIO = 3
const Play = (type) => {
  switch (type) {
    case VIDEO:
      console.log("video");
      break;
    case IMAGE:
      console.log("image");
      break;
    case AUDIO:
      console.log("audio");
      break;
    default:
      console.log("传入参数错误");
      break;
  }

}

Play(AUDIO)





