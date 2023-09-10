class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  skill () {
    console.log("吃饭");
  }
}

class Boy extends Person {
  constructor(name, age) {
    super(name, age);
    this.gender = "男";
  }
  like () {
    console.log("打打球");
  }
}


class Girl extends Person {
  constructor(name, age) {
    super(name, age);
    this.gender = "女";
  }
  like () {
    console.log("买买买");
  }
}


const xiaoming = new Boy("小明", 19);
const xiaohong = new Girl("小红", 18);

// 发工资
class Levl1 {
  constructor() {
    this.base = 12000
  }
  getSalary (name, jx) {
    const money = this.base + jx
    const str = name + "本月的工资：" + money
    console.log(str);
    return str
  }
}

const levl1 = new Levl1()
levl1.getSalary("张三", 1000)


