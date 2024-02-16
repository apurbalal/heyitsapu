console.log('Start');

setTimeout(() => console.log('Task queue'), 5000);

Promise.resolve()
  .then(() => console.log('Promise Microtask'))

console.log('End (before the event loop)');

// output:
// Start
// End (before the event loop)
// Promise Microtask
// Task queue