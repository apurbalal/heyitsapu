// Example 1
class A {
  constructor() {

  }
}
console.log(A);

// Example 2
console.log(B);
class B {
  constructor() {

  }
}
/*
console.log(B);
// ReferenceError: Cannot access 'B' before initialization temporal dead zone
class B {
  constructor() {

  }
}
*/

// Example 3
console.log(C);
{
  class C {
    constructor() {

    }
  }
}
/*
console.log(C);
// ReferenceError: C is not defined
{
  class C {
    constructor() {

    }
  }
}
*/

// Example 4
console.log(D);
{
  console.log(D);
  class D {
    constructor() {

    }
  }
}
console.log(D);