const readline = require("readline-sync");

console.log("Hello World");

const name = readline.question("Qual o seu nome?");
const age = readline.questionInt("Quantos anos você tem?");

console.log(`Hello, ${name}! You are ${age} years old! Congratulations!`);
