const value1 = "5";
const value2 = 9;
let sum = value1 + value2; //coercion 9 to string 

console.log(sum); //and the output is 59

sum = Number(value1) + value2; //to coercion 5 to number use Number()
console.log(sum); //and the output is 14