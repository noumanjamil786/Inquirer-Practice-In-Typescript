import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "pasword",
        type: "number",
        message: "Enter Your pasword",
    }]);
console.log("Your phone pasword is", +(answers.pasword) + " " + "Which is Strong");
