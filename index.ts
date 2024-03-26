#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { massage: "Enter your Firstnum", type: "number", name: "Firstnum" },
  { message: "Enter your Secondnum", type: "number", name: "Secondnum" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// condional statements
if (answer.operator === "Addition") {
  console.log(answer.Firstnum + answer.Secondnum);
} else if (answer.operator === "Subtraction") {
  console.log(answer.Firstnum - answer.Secondnum);
} else if (answer.operator === "Multiplicatin") {
  console.log(answer.Firstnum * answer.Secondnum);
} else if (answer.operator === "Division") {
  console.log(answer.Firstnum / answer.Secondnum);
} else {
  console.log("Please Select a valid operator");
}
