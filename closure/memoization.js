function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

function memoize(fn) {
  const cache = new Map();

  return function (args) {
    if (cache.has(args)) {
      console.log("From cache");
      return cache.get(args);
    } else {
      const result = fn(args);
      cache.set(args, result);
      console.log("From function");
      return result;
    }
  }
}

const memoizedSum = memoize(sum);
console.log(memoizedSum(10));
console.log(memoizedSum(10));