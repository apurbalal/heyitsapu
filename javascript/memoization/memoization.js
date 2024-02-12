/*
  It's a technique used to optimize the performance by 
  caching the result of a function and returning cached 
  result when same arguments are passed
*/

function memoize(fn) {
  let cache = new Map();

  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      console.log("From cache");
      return cache.get(key);
    } else {
      console.log("From calculation");
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  }
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("Non memoized fibonacci");
for (let i = 0; i < 10; i++) {
  fibonacci(30);
}
console.timeEnd("Non memoized fibonacci");

const memoizedFibonacci = memoize(fibonacci);
console.time("Memoized fibonacci");
for (let i = 0; i < 10; i++) {
  memoizedFibonacci(30);
}
console.timeEnd("Memoized fibonacci");
