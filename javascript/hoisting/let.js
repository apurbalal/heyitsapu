/* 
  Let - Interpreter moves their declaration to the top of their scope but does not initialize them and 
  throws a ReferenceError if you try to access them before their declaration 
*/

console.log("\nExample 1");
console.log(letA);
let letA = 10;
/* can be interpreted as:
  let letA;
  console.log("Example 1");
  console.log(letA);
  // anything above this line is temporal dead zone and will throw a ReferenceError: Cannot access 'letA' before initialization
  letA = 10;
*/



console.log("\nExample 2");
console.log(letB);
for (let letB = 0; letB < 10; letB++) {
  // do nothing
}
/*
  console.log("Example 2");
  console.log(letB);
  // ReferenceError: letB is not defined
  for (letB = 0; letB < 10; letB++) {
    // do nothing
  }
*/



console.log("\nExample 3");
console.log(letC)
{
  let letC = 10;
}
/*
  let letC;
  console.log("Example 3");
  console.log(letC);
  {
    letC = 10;
  }
*/



console.log("\nExample 4");
// console.log(letD);
let letD = 10;
console.log(letD);
function initD() {
  console.log(letD);
  let letD = 20;
}
initD();
/*
  let letD;
  console.log("Example 4");
  console.log(letD);
  // ReferenceError: Cannot access 'letD' before initialization
  letD = 10;
  console.log(letD);
  function initD() {
    let letD;
    console.log(letD);
    // ReferenceError: Cannot access 'letD' before initialization
    letD = 20;
  }
  initD();
*/



let letE = 1;
console.log("\nExample 5");
console.log(letE);
for (let letE = 0; letE < 10; letE++) {
  // do nothing
}
console.log(letE);
/*
  let letE;
  letE = 10;
  console.log("Example 3");
  console.log(letE);
  for (letE = 0; letE < 10; letE++) {
    // do nothing
    // letE is block scoped
  }
  console.log(letE);
*/
