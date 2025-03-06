// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[1]);

// We can set properties of elements
// document.body.innerHTML = '<h1>Welcome to the page</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Greetings from JavaScript');

// We also have methods to select elements more directly
document.getElementById('main').innerHTML = '<h1>Welcome to main</h1>';

document.querySelector('#main h1').innerText = 'Welcome';
