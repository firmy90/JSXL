const fs = require("fs");

let fetchResults = (file) => {
  try {
    let resultString = fs.readFileSync(file);
    return JSON.parse(resultString);
  } catch (e) {
    return new Array();
  }
};


let addDataToFile = (file, a,sign,b,res) =>{
  let results = fetchResults(file);
  let result = {
    a,
    sign, 
    b,
    res
  }
    results.push(result);
    fs.writeFileSync(file, JSON.stringify(results))

}

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
  division,
  addDataToFile
};
