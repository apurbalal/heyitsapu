const getData = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data");
    }, 5000); 
  })
}

const printOutput = async () => {
  console.time("Time");
  await Promise.all([
    getData(), // 5sec
    getData(), // 5sec
  ]);
  console.timeEnd("Time");
}

printOutput();