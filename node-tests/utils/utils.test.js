const utils = require("./utils");
it("should add two numbers", () => {
  let res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});



it("should square two numbers", () => {
  let res = utils.square(3);
  if (res !== 9) {
    throw new Error(`Expected 9, but got ${res}.`);
  }
});

it("should create user with name Anna", () => {
    let res = utils.setName("Anna", "Koval");
    if (res != "Anna") {
      throw new Error(`Expected Anna, but got ${res}`);
    }
  });
it("should create user with name Anna Koval", () => {
  let res = utils.setName("Anna", "Koval");
  if (res != "Anna Koval") {
    throw new Error(`Expected Anna Koval, but got ${res}`);
  }
});
