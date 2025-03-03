const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const doubledNumbers = numbers.map((number) => number * 3);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 3);
});

const companies = [
  { name: 'Alpha Corp', category: 'Healthcare', start: 1995, end: 2020 },
  { name: 'Beta Ltd', category: 'Education', start: 2000, end: 2018 },
  { name: 'Gamma Inc', category: 'Technology', start: 2010, end: 2022 },
  { name: 'Delta LLC', category: 'Retail', start: 1985, end: 2005 },
  { name: 'Epsilon Group', category: 'Finance', start: 1990, end: 2010 },
  { name: 'Zeta Solutions', category: 'Healthcare', start: 2005, end: 2021 },
  { name: 'Eta Enterprises', category: 'Retail', start: 1998, end: 2015 },
  { name: 'Theta Tech', category: 'Auto', start: 1980, end: 1995 },
  { name: 'Iota Systems', category: 'Technology', start: 2015, end: 2025 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 3 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
