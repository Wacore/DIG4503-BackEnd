const Person = require("./Person");

class Hongda extends Person {
  constructor(name, favoriteColor) {
    super(name, favoriteColor);
  }
}

let hongda = new Hongda("Hongda", "orange");

// hongda.speak();

module.exports = Hongda;
