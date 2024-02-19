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
const content = document.getElementById('content');
const HEIGHT_OF_EACH_ROW = 50; // 50px
const caches = new Map();

const getNode = (data, index) => {
  const rowData = data[index];
  if (rowData) {
    if (caches.has(index)) {
      return caches.get(index);
    } else {
      const row = document.createElement('div');
      row.className = "row";
      row.style.position = 'absolute';
      row.style.top = `${index * HEIGHT_OF_EACH_ROW}px`;
      row.innerHTML = `Name ${rowData.id}`;
      caches.set(index, row);
      return row;
    }
  }
}

const getStartAndEnd = () => {
  const { scrollTop, clientHeight } = container;
  const start = Math.floor(scrollTop / HEIGHT_OF_EACH_ROW);
  const end = start + Math.ceil(clientHeight / HEIGHT_OF_EACH_ROW);
  return { start, end };
}

const intialRender = (data) => {
  const { start, end } = getStartAndEnd();
  for (let i = start; i < end; i++) {
    const node = getNode(data, i);
    content.appendChild(node);
  }
}

const removeNodesNotInRange = (start, end) => {
  content.childNodes.forEach((node) => {
    const index = Number(node.style.top.replace('px', '')) / HEIGHT_OF_EACH_ROW;
    if ((index < start || index > end)) {
      content.removeChild(node);
    }
  });
}

const addNodesInRange = (start, end, data) => {
  for (let i = start; i < end; i++) {
    const node = getNode(data, i);
    if (!content.contains(node) && node) {
      content.appendChild(node);
    }
  }
}

const onScroll = (data) => {
  const { start, end } = getStartAndEnd();

  removeNodesNotInRange(start, end);
  addNodesInRange(start, end, data);
}

const init = async () => {
  const data = await fetchData();
  
  document.getElementById('scroll').style.height = `${data.length * HEIGHT_OF_EACH_ROW}px`;
  container.addEventListener('scroll', () => onScroll(data));
  
  intialRender(data);
}

init();
