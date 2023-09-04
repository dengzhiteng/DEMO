function CreatePerson (name, age, sex) {
  var obj = {}
  this.name = name
  this.age = age
  this.sex = sex
  return obj
}
const xiaoming = new CreatePerson('小明', 12, '男')

function BicycleShop (name) {
  this.name = name
  this.method = () => {
    return this.name
  }
}

BicycleShop.prototype = {
  constructor: BicycleShop,
  sellBicyCle: function () {

  }
}

function test (...params) {
  console.log(params);
}

test('xiaoming', 18, 1, 123)

