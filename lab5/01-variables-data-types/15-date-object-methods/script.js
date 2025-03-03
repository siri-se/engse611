//extract specific parts of a date.
let now = new Date();
console.log(now.getFullYear());  // Year (e.g., 2025)
console.log(now.getMonth());     // Month (0-11) (March = 2)
console.log(now.getDate());      // Day of the month (1-31)
console.log(now.getDay());       // Day of the week (0 = Sunday, 1 = Monday)
console.log(now.getHours());     // Hours (0-23)
console.log(now.getMinutes());   // Minutes (0-59)
console.log(now.getSeconds());   // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)
console.log(now.getTime());      // Timestamp (milliseconds since Jan 1, 1970)
console.log(now.getTimezoneOffset()); // Difference in minutes between UTC and local time
//convert date into readable format
let now = new Date();

console.log(now.toString());  // Full Date & Time
console.log(now.toDateString());  // Only Date
console.log(now.toTimeString());  // Only Time
console.log(now.toLocaleString());  // Localized Date & Time
console.log(now.toLocaleDateString());  // Localized Date
console.log(now.toLocaleTimeString());  // Localized Time
console.log(now.toUTCString()); // Converts to UTC
console.log(now.toISOString()); // ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
console.log(now.toJSON()); // Similar to .toISOString()

//comparing date
let date1 = new Date("2024-03-01");
let date2 = new Date("2024-05-01");

console.log(date1 < date2); // true
console.log(date1 > date2); // false
console.log(date1 == date2); //false
