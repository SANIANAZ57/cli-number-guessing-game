#! /usr/bin/env node

import inquirer from "inquirer";


 
//1)Computer will generate a random number

//2) User input for guessing number

//3)Campare user input with computer generated number and show result


//const randomNumber =Math.random();
//
const randomNumber =Math.floor(Math.random()* 6 +1);
const answers = await inquirer.prompt([
    {
        name :"userGusessedNumber",
        type: "number",
        message :"please guess a number between 1-6",
    }
]);
if (answers.userGusessedNumber === randomNumber){
    console.log("Congtratulation ! you guessed right number");
}else{
    console.log("you are guesssed wrong number");
}