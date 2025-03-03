let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];
console.log(numbers);
console.log(mixed);

// Array Constructor
const fruits = ['apple', 'grape', 'orange']; // No need for `new Array()`
console.log(fruits);

// Get value by index
x = numbers.at(0); // Alternative to numbers[0]
console.log(x);

x = numbers.at(0) + numbers.at(3); // Using `.at()` for better readability
console.log(x);

x = `My favorite fruit is an ${fruits.at(-1)}`; // Using negative index to get last element
console.log(x);

x = numbers.length;
console.log(x);

// Modify values
fruits.splice(2, 1, 'pear'); // Replaces 'orange' with 'pear'
console.log(fruits);

fruits.push('strawberry'); // Adds at the end
console.log(fruits);

fruits.push('blueberry', 'peach'); // Adds multiple items
console.log(fruits);

x = fruits;
console.log(x);
