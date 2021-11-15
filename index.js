const fs = require("fs")

const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "How are you feeling?",
        name: "feeling"
    },
    {
        type: "list",
        message: "What time is it?",
        name: "time",
        choices: ["morning", "noon", "afternoon", "night"]
    },
]).then(answers => {
    console.log(answers)
    const sentence = `Hello, my name is ${answers.name}, I am feeling ${answers.feeling} and it currently is ${answers.time}`
    fs.writeFileSync("README.md", sentence)
})