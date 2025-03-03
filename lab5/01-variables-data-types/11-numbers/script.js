//Number Methods

//toString() convert numbers to string
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log(x);
console.log("-------------------------------------------------------------------");

//toExponential()
let y = 923526;
console.log(y.toExponential()); //convert number to it's expo form in string type
console.log(y.toExponential(4)); //convert with 4 decimal
console.log(y.toExponential(6)); // convert with 6 decimal
console.log("-------------------------------------------------------------------");

//toFixed() returns a string, with the number written with a specified number of decimals
let z = 9.656;
console.log(z.toFixed(0));
console.log(z.toFixed(2));
console.log(z.toFixed(4));
console.log(z.toFixed(6));
console.log("-------------------------------------------------------------------");

//valueOf() returns a number as a number
let c = 123;
c.valueOf();
(123).valueOf();
(100 + 23).valueOf();
console.log(c);
console.log("-------------------------------------------------------------------");