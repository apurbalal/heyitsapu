/*
  Class is a syntatic sugar over the prototype based inheritance
*/
class Parent {
  #iamprivate;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const parent = new Parent("Ramesh");
parent.getName();


class Child extends Parent {
  #iamprivate;
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getName() {
    super.getName();
  }
  getAge() {
    return this.age;
  }
}

const child = new Child("Chintu", 25);
console.log(child.getName());
console.log(child.getAge());