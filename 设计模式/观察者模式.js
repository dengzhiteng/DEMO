
// 被观察者
class Subject {
  constructor() {
    this.Observers = [];
  }
  add (o) {
    this.Observers.push(o);
  }
  remove (o) {
    this.Observers = this.Observers.filter(item => item !== o);
  }
  notify (data) {
    this.Observers.forEach(o => {
      o.upDate(data);
    })
  }
}

// 观察者
class Observer1 {
  upDate (msg) {
    console.log(msg, "1");
  }
}

class Observer2 {
  upDate (msg) {
    console.log(msg, "2");
  }
}


const subject = new Subject();
const observer1 = new Observer1();
const observer2 = new Observer2();

subject.add(observer1)
subject.add(observer2)

subject.remove(observer1)
subject.notify("更新了");