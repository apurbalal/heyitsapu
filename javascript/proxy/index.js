const createProxy = (object) => new Proxy(object, {
  get(target, property) {
    if (!target["ref"]?.[property]) {
      target["ref"] = {
        ...target["ref"],
        [property]: document.getElementById(property), 
      };
    }

    return Reflect.get(...arguments);
  },
  set(target, property, newValue) {
    if (target["ref"]?.[property]) {
      target["ref"][property].innerText = newValue;
    }
    return Reflect.set(...arguments);
  }
})

const counter = createProxy({
  value: 0,
  numTimesClicked: 0,
});

const increment = () => {
  counter.value++;
  counter.numTimesClicked++;
}

const decrement = () => {
  counter.value--;
  counter.numTimesClicked++;
}