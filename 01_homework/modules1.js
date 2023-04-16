let addition = (a, b) => {
  let res = a + b;
  console.log(`${a} + ${b} = ${res}`);
  return res;
};

let substraction = (a, b) => {
  let res = a - b;
  console.log(`${a} - ${b} = ${res}`);
  return res;
};

let multiplication = (a, b) => {
  let res = a * b;
  console.log(`${a} * ${b} = ${res}`);
  return res;
};

let division = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  let res = a / b;
  console.log(`${a} / ${b} = ${res}`);
  return res;
};

module.exports = {
  addition,
  substraction,
  multiplication,
  division
};
