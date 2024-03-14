import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter Your Age",
    }]);
console.log("After some Year's Your age will be", +(60 - answer.age) + " " + "years");
