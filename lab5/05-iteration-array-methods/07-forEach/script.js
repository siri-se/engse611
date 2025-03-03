const socials = ['YouTube', 'TikTok', 'Snapchat', 'Reddit'];

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'TikTok', url: 'https://tiktok.com' },
  { name: 'Snapchat', url: 'https://snapchat.com' },
  { name: 'Reddit', url: 'https://reddit.com' },
];

socialObjs.forEach((item) => console.log(item.url));
