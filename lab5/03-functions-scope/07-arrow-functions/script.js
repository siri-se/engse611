const multiply = (x, y) => {
    return x * y;
  };
  
  const divide = (x, y) => x / y;
  
  const square = num => num ** 2;
  
  const getUser = () => ({
    username: 'Alice',
  });
  
  const values = [10, 20, 30, 40, 50];
  
  values.forEach(function (val) {
    console.log(val);
  });
  
  values.forEach(val => console.log(val));
  
  console.log(multiply(3, 4));
  console.log(divide(20, 4));
  console.log(square(5));
  console.log(getUser());
  