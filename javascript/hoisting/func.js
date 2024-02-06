// Example 1
console.log(funcA);
function funcA() {
  return 'funcA';
}
/*
function funcA() {
  return 'funcA';
}
console.log(funcA);
*/


// Example 2
console.log(funcB);
var funcB = function() {
  return 'funcB';
}
/*
var funcB
console.log(funcB);
funcB = function() {
  return 'funcB';
}
*/

// Example 3
console.log(funcC);
var funcC = () => {
  return 'funcC';
}
/*
var funcC
console.log(funcC);
funcC = () => {
  return 'funcC';
}
*/