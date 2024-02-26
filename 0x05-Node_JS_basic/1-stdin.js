// 1-stdin.js

const readline = require('readline');

const interfaceReadline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

interfaceReadline.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  interfaceReadline.close();
});
