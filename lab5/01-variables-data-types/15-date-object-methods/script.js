//extract specific parts of a date.
let d = new Date();
console.log(d.getFullYear());  // Year (e.g., 2025)
console.log(d.getMonth());     // Month (0-11) (March = 2)
console.log(d.getDate());      // Day of the month (1-31)
console.log(d.getDay());       // Day of the week (0 = Sunday, 1 = Monday)
console.log(d.getHours());     // Hours (0-23)
console.log(d.getMinutes());   // Minutes (0-59)
console.log(d.getSeconds());   // Seconds (0-59)
console.log(d.getMilliseconds()); // Milliseconds (0-999)
console.log(d.getTime());      // Timestamp (milliseconds since Jan 1, 1970)
console.log(d.getTimezoneOffset()); // Difference in minutes between UTC and local time
//convert date into readable format
let s = new Date();

console.log(s.toString());  // Full Date & Time
console.log(s.toDateString());  // Only Date
console.log(s.toTimeString());  // Only Time
console.log(s.toLocaleString());  // Localized Date & Time
console.log(s.toLocaleDateString());  // Localized Date
console.log(s.toLocaleTimeString());  // Localized Time
console.log(s.toUTCString()); // Converts to UTC
console.log(s.toISOString()); // ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
console.log(s.toJSON()); // Similar to .toISOString()

//comparing date
let date1 = new Date("2024-03-01");
let date2 = new Date("2024-05-01");

console.log(date1 < date2); // true
console.log(date1 > date2); // false
console.log(date1 == date2); //false
