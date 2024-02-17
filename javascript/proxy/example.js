const person = {
  name: "Jhon",
  age: 25
}

const proxiedPerson = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting property ${prop} from target ${JSON.stringify(target)}`);
    return Reflect.get(...arguments);
  },
  set(target, prop, newValue) {
    console.log(`Setting value ${newValue} to property ${prop} of target ${JSON.stringify(target)}`);
    return Reflect.set(...arguments);
  }
});

proxiedPerson.name = "Gary";
console.log(proxiedPerson.name);