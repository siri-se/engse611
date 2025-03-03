function outerFunction() {
    const a = 10;
  
    function innerFunction() {
      const b = 20;
      console.log(a + b);
    }
  
  
    innerFunction();
  }
  
  outerFunction();
  
  if (true) {
    const num = 50;
  
    if (num === 50) {
      const factor = 2;
      console.log(num * factor);
    }
  
    console.log(factor); 
  }
  