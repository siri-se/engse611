// Generate random numbers
let x = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let y = Math.floor(Math.random() * 50) + 1;  // Random number between 1 and 50

// Perform calculations
const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;

// Store formatted output in variables
const sumOutput = `${x} + ${y} = ${sum}`;
const differenceOutput = `${x} - ${y} = ${difference}`;
const productOutput = `${x} * ${y} = ${product}`;
const quotientOutput = `${x} / ${y} = ${quotient}`;
const rmOutput = `${x} % ${y} = ${remainder}`;

// Log output
console.log(sumOutput);       // Example: 31 + 15 = 46
console.log(differenceOutput); // Example: 31 - 15 = 16
console.log(productOutput);    // Example: 31 * 15 = 465
console.log(quotientOutput);   // Example: 31 / 15 = 2.066666666666667
console.log(rmOutput);         // Example: 31 % 15 = 1
