/* 
  const - Interpreter moves their declaration to the top of their scope but does not initialize them and 
  throws a ReferenceError if you try to access them before their declaration 
*/

console.log("\nExample 1");
console.log(constA);
const constA = 10;
/* can be interpreted as:
  const constA;
  console.log("Example 1");
  console.log(constA);
  // anything above this line is temporal dead zone and will throw a ReferenceError: Cannot access 'constA' before initialization
  constA = 10;
*/



console.log("\nExample 2");
console.log(constB);
for (const constB = 0; constB < 10; constB++) {
  // do nothing
}
/*
  console.log("Example 2");
  console.log(constB);
  // ReferenceError: constB is not defined
  for (constB = 0; constB < 10; constB++) {
    // do nothing
  }
*/



console.log("\nExample 3");
console.log(constC)
{
  const constC = 10;
}
/*
  const constC;
  console.log("Example 3");
  console.log(constC);
  {
    constC = 10;
  }
*/



console.log("\nExample 4");
// console.log(constD);
const constD = 10;
console.log(constD);
function initD() {
  console.log(constD);
  const constD = 20;
}
initD();
/*
  const constD;
  console.log("Example 4");
  console.log(constD);
  // ReferenceError: Cannot access 'constD' before initialization
  constD = 10;
  console.log(constD);
  function initD() {
    const constD;
    console.log(constD);
    // ReferenceError: Cannot access 'constD' before initialization
    constD = 20;
  }
  initD();
*/



const constE = 1;
console.log("\nExample 5");
console.log(constE);
for (const constE = 0; constE < 10; constE++) {
  // do nothing
}
console.log(constE);
/*
  const constE;
  constE = 10;
  console.log("Example 3");
  console.log(constE);
  for (constE = 0; constE < 10; constE++) {
    // do nothing
    // constE is block scoped
  }
  console.log(constE);
*/
