/*
  Prototype - 
  It's a object with properties which are shared among all the objec instances.

  Object - 
  It's a collection of key-value pairs.
*/

/*
  Constructor function
*/
function Person(name) {
  this.name = name;
  this.age = 30;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person("Hello world");
const person2 = new Person("Hey world");

console.log(person1.greet === person2.greet)

Array.prototype.sayMyName = function () {
  console.log(`My name is Apu`);
}

const arr = [];
arr.sayMyName();