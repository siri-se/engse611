const getCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;
console.log(getCelsius(32)); 
console.log(getCelsius(100)); 
console.log(`The temperature is ${getCelsius(50)} \xB0C`); 


const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
  });  
console.log(minMax([1, 2, 3, 4, 5])); 
console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));
console.log(minMax([-10, 0, 10, 20, 30]));

