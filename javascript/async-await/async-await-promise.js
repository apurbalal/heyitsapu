/*
  Async await is syntactic sugar for promise and it makes the code more readable and easy to reason about.
*/

async function getData(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(timeout);
      },
      timeout
    )
  })
}

async function usingAsyncAwaitLineByLine() {
  console.time("Async await")
  const resp = await getData(2000);
  const resp2 =  await getData(1000);
  const resp3 = await getData(1000);
  console.timeEnd("Async await");
}

function usingPromiseLineByLine() {
  // we are 
  console.time("Promise chain");
  getData(2000).then(data => {
    return getData(1000);
  }).then(data2 => {
    return getData(1000);
  }).then(data3 => {
    console.timeEnd("Promise chain");
  }).catch();
}

async function runningPromiseInParallel() {
  console.time("Promise all");
  await Promise.all([getData(2000), getData(1000), getData(1000)]).then(data => {
    console.log("Promise all data received");
  }).catch();
  console.timeEnd("Promise all");
}

usingAsyncAwaitLineByLine();
usingPromiseLineByLine();
runningPromiseInParallel();