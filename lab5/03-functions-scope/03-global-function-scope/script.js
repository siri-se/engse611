
const num = 42;

console.log(num, 'in global scope');

function displayInfo() {
  console.log(window.navigator.language);
  console.log(num, 'inside function');
}

displayInfo();

if (true) {
  console.log(num, 'inside block');
}

function calculate() {
  const num = 10;
  const multiplier = 5;
  console.log(num * multiplier);
}

console.log(multiplier);

calculate();
