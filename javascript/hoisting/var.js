/* 
  Var - Interpreter moves their declaration to the top of their scope and initializes them with undefined value
*/

console.log("\nExample 1");
console.log(varA);
var varA = 10;
/* can be interpreted as:
  var varA;
  console.log("Example 1");
  console.log(varA);
  varA = 10;
*/



console.log("\nExample 2");
console.log(varB);
for (var varB = 0; varB < 10; varB++) {
  // do nothing
}
/*
  var varB;
  console.log("Example 2");
  console.log(varB);
  for (varB = 0; varB < 10; varB++) {
    // do nothing
  }
*/



console.log("\nExample 3");
console.log(varC)
{
  var varC = 10;
}
/*
  var varC;
  console.log("Example 3");
  console.log(varC);
  {
    varC = 10;
  }
*/



console.log("\nExample 4");
console.log(varD);
var varD = 10;
console.log(varD);
function initD() {
  console.log(varD);
  var varD = 20;
}
initD();
/*
  var varD;
  console.log("Example 4");
  console.log(varD);
  varD = 10;
  console.log(varD);
  function initD() {
    var varD;
    console.log(varD);
    varD = 20;
  }
  initD();
*/



var varE = 1;
console.log("\nExample 5");
console.log(varE);
for (var varE = 0; varE < 10; varE++) {
  // do nothing
}
console.log(varE);
/*
  var varE;
  varE = 10;
  console.log("Example 3");
  console.log(varE);
  for (varE = 0; varE < 10; varE++) {
    // do nothing
  }
  console.log(varE);
*/