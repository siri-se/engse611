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
    let factor;  // Declare factor in the outer block

    if (num === 50) {
        factor = 2;  // Assign value inside the inner block
        console.log(num * factor);  // 100
    }

    console.log(factor);  //2
}

  