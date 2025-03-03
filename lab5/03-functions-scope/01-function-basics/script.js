
function greet() {
    console.log('Greetings, Universe!');
  }
  

  greet();
  

  function multiply(a, b) {
    console.log(a * b);
  }
  

  multiply(6, 7);
  

  function divide(x, y) {
    if (y === 0) {
      return 'Cannot divide by zero';
    }
    return x / y;
  }
  

  const divisionResult = divide(20, 4);
  
  console.log(divisionResult, divide(15, 3));
  