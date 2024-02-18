const handleClick = () => {
  let sum = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    sum += i;
  }
  console.log(`Sum ${sum}`);
}

const worker = new Worker("worker.js");
worker.onmessage = (event) => {
  console.log(`Sum ${event.data}`);
}

const handleClick2 = () => {
  worker.postMessage("start");
}
