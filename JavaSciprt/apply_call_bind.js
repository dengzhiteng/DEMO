class Person {
  constructor(name) {
    this.name = name
  }
  skill () {
    console.log(this.name);
  }
}

const xiaoming = {
  name: "张三"
}
const person = new Person()
person.skill.call(xiaoming)


function greet () {
  console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}

const obj = {
  animal: "猫",
  sleepDuration: "12 到 16 小时",
};


greet.call(obj)