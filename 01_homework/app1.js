const modules = require("./modules1");
const yarg = require("yargs");

// console.log("#### Kalkulator #### \n");

let arg1 = Number(process.argv[2]);
let sign = process.argv[3];
let arg2 = Number(process.argv[4]);
console.log('sign',sign)

if (sign === "+") {
  modules.addition(arg1, arg2);
} else if (sign == "-") {
  modules.substraction(arg1, arg2);
} else if (sign == "**") {
  modules.multiplication(arg1, arg2);
} else if (sign == "/") {
  try {
    modules.division(arg1, arg2);
  } catch (Error) {
    console.log("Cannot divide by zero");
  }
} else {
  console.log("Write correct command");
}
