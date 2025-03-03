// Loop through arrays
const items = ['pen', 'laptop', 'phone', 'notebook'];
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'JavaScript';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('city', 'New York');
map.set('country', 'USA');

for (const [key, value] of map) {
  console.log(key, value);
}
