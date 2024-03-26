#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 2007;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin",
    type: "number",
  },
]);

if (pinAns.pin === myPin) {
  console.log("Your pin code is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "action",
      message: "Select one of them",
      type: "list",
      choices: ["Withdraw", "Check balance", "FastCash"],
    }
  ]);

  if (operationAns.action === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number",
        }
    ]);

    if (amountAnswer.amount >= myBalance) {
        console.log("Insufficient funds. Cannot withdraw.");
    } else {
        myBalance -= amountAnswer.amount;
        console.log(`Your remaining Balance is ${myBalance}`);
    }
} 

else if (operationAns.action === "Check balance") {
    console.log(`Your balance Is :${myBalance}`);

  }
  
  else if (operationAns.action === "FastCash") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Select Amount",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      }
    ]);

    myBalance -= amountAns.amount;
    console.log(`Your remaining Balance is :${myBalance}`);

  };

} 
else {
  console.log("Please enter your correct Pin code");
};