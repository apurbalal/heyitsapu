// expensive function
function computeFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Invalid input");
  if (n <= 1) return n;
  return computeFibonacci(n-1) + computeFibonacci(n-2);
}

function cacheDecorator(func) {
  const cache = new Map();

  return function (...args) {
    const key = args.join('-');
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  }
}

const myObj = {
  n: 40,
  computeFibonacci: function () {
    console.log("Context", this)
    return computeFibonacci(this.n);
  }
}

const cachedComputeFibonacci = cacheDecorator(computeFibonacci);
// console.time("cachedComputeFibonacci");
// console.log(cachedComputeFibonacci(40))
// console.timeEnd("cachedComputeFibonacci");

// console.time("cachedComputeFibonacci");
// console.log(cachedComputeFibonacci(40));
// console.timeEnd("cachedComputeFibonacci");

// console.log(myObj.computeFibonacci());
myObj.cachedComputeFibonacci = cacheDecorator(myObj.computeFibonacci);
console.time("cachTime");
console.log(myObj.cachedComputeFibonacci());
console.timeEnd("cachTime");

console.time("cachTime");
console.log(myObj.cachedComputeFibonacci());
console.timeEnd("cachTime");

