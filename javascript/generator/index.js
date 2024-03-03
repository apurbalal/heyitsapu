function* iterator(max, callback, onSuccess) {
  let i = 0;
  let timenow = Date.now();
  while (i < max) {
    callback(i);
    i++;
    if (i % 10_000_000 === 0) {
      console.log("Iterating")
    }
    if (Date.now() - timenow > 15) {
      yield;
      timenow = Date.now();
    }
  }
  onSuccess();
}

function loopWhenIdle(iterator) {
  requestIdleCallback((idleTime) => {
    let next = iterator.next();

    while (!next.done && idleTime.timeRemaining() > 0) {
      next = iterator.next();
    }

    if (next.done) {
      console.log("Done iterating");
    } else {
      loopWhenIdle(iterator);
    }
  })
}

const normalLoop = () => {
  let sum = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    sum += i;
  }
  console.log(`Sum ${sum}`);
}

const generatorLoop = () => {
  let sum = 0;
  const sumIterator = iterator(1_000_000_000, (index) => sum += index, () => console.log(`Sum ${sum}`));
  loopWhenIdle(sumIterator);
}
