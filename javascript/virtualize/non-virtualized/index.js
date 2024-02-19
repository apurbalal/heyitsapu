const fetchData = async () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 10_000; i++) {
        data.push({
          id: i,
        });
      }
      resolve(data);
    })
  });
}

const container = document.getElementById('container');
const HEIGHT_OF_EACH_ROW = 50; // 50px

const initialize = (data) => {
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('div');
    row.className = "row";
    row.style.position = 'absolute';
    row.style.top = `${i * HEIGHT_OF_EACH_ROW}px`;
    row.innerHTML = `Name ${data[i].id}`;
    container.appendChild(row);
  }
}

const init = async () => {
  const data = await fetchData();
  initialize(data);
}

init();
