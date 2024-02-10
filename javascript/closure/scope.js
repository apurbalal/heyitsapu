console.log("Var output")
for (var i = 0; i < 10; i++) {
  // using setTimeout so that it will be executed after the loop
  setTimeout(() => console.log(i), 0);
}

console.log("\nLet output")
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

console.log("\nFixed Var output")
for (var i = 0; i < 10; i++) {
  (function (value) {
    setTimeout(() => console.log(value), 0);
  })(i)
}
