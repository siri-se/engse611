(function () {
    const username = 'Alice';
    console.log(username);
    const greet = () => console.log('Greetings from the IIFE');
    greet();
  })();
  
  (function (city) {
    console.log('Welcome to ' + city);
  })('New York');
  
  (function sayHi() {
    console.log('Hi there!');
  })();
  