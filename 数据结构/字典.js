//字典类
class Dictionary {
  constructor() {
    this.dataStore = [];
  }
  // 添加元素
  add (key, value) {
    this.dataStore[key] = value;
  }
  // 查找元素
  find (key) {
    return this.dataStore[key];
  }
  // 查看key
  findKey (value) {
    for (let key in this.dataStore) {
      this.dataStore[key] === value
      return key
    }
  }
  // 删除元素
  remove (key) {
    if (this.dataStore[key]) {
      delete this.dataStore[key];
    } else {
      return "Not Found"
    }
  }
  // 显示所有元素
  showAll () {
    for (var key in this.dataStore) {
      console.log(key + '->' + this.dataStore[key]);
    }
  }
  // 删除字典
  clear (key) {
    if (this.dataStore[key]) {
      delete this.dataStore[key];
    } else {
      for (var key in this.dataStore) {
        delete this.dataStore[key];
      }
    }
  }
  // 字典中元素个数
  count () {
    let num = 0
    for (let key in this.dataStore) {
      num++
    }
    return num
  }
}

const genderDic = new Dictionary()
genderDic.add("男", 1)
genderDic.add("女", 2)
console.log(genderDic.findKey(2));


