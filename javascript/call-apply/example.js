function helloPrintContext() {
  console.log(this);
}

// helloPrintContext();

let obj = {
  a: "Apurb"
}

helloPrintContext.call(obj);