function counterFactory(init) {
  let value = init;

  function increment() {
    return ++value;
  }

  function decrement() {
    return --value;
  }

  function currentValue() {
    return value;
  }

  return {
    increment,
    decrement,
    currentValue,
  }
}

const counter = counterFactory(10);
counter.increment(); // 11
counter.decrement(); // 10
counter.decrement(); // 9
console.log(counter.currentValue()); // output 9
