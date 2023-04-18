const modules = require("./modules1");
const yarg = require("yargs");
const { arrayBuffer } = require("stream/consumers");

// console.log("#### Kalkulator #### \n");
const argumentA = {
  describe: "Argument a",
  demand: true,
};
const argumentB = {
  describe: "Argument b",
  demand: true,
};

const argv = yarg
  .command("+", "Addition", {
    a: argumentA,
    b: argumentB,
  })
  .command("-", "Substracion", {
    a: argumentA,
    b: argumentB,
  })
  .command("**", "Multiplication", {
    a: argumentA,
    b: argumentB,
  })
  .command("/", "Division", {
    a: argumentA,
    b: argumentB,
  })
  .help().argv;

let arg1 = Number(process.argv[2]);
let sign = process.argv[3];
let arg2 = Number(process.argv[4]);
console.log("sign", sign);
let result = "";

if (sign === "+") {
  result = modules.addition(arg1, arg2);
} else if (sign == "-") {
  result = modules.substraction(arg1, arg2);
} else if (sign == "**") {
  result = modules.multiplication(arg1, arg2);
} else if (sign == "/") {
  try {
    result = modules.division(arg1, arg2);
  } catch (Error) {
    console.log("Cannot divide by zero");
    result = "NaN";
  }
} else {
  console.log("Write correct command");
  return -1;
}

modules.addDataToFile("historia.json", arg1, sign, arg2, result);
