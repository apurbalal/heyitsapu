const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  }
}

const throttle = (func, delay) => {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
      func(...args);
    }
  }
}

const search = (query) => {
  // Make API request and update html
  console.log("Search", query);
}

const onFormSubmit = (event) => {
  console.log("Search", event)
}

const debouncedSearch = debounce(search, 500);
const throttledFormSubmit = throttle(onFormSubmit, 500);

document.getElementById('search-query').addEventListener('input', debouncedSearch);
document.getElementById('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  throttledFormSubmit(event);
});

const mouseTrack = document.getElementById('mouse-tracking');
const logMousePosition = (event) => {
  console.log("Mouse pos sent to API",event.clientX, event.clientY);
}

const throttledLogMousePosition = throttle(logMousePosition, 500);
const onMouseMove = (event) => {
  throttledLogMousePosition(event);
  mouseTrack.style.left = `${event.clientX - 25}px`;
  mouseTrack.style.top = `${event.clientY - 25}px`;
}

document.addEventListener("mousemove", onMouseMove);
