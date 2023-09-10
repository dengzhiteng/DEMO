function CreatePerson (name, age, sex) {
  var obj = {}
  this.name = name
  this.age = age
  this.sex = sex
  return obj
}
const xiaoming = new CreatePerson('小明', 12, '男')

class BicycleShop {
  constructor(name) {
    this.name = name
  }
  sellBicyCle = () => {
    console.log(this.name);
  }
}

const bicycle = new BicycleShop("台铃电动车")
bicycle.sellBicyCle()
