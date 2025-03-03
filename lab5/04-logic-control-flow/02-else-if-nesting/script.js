const d = new Date(2022, 9, 30, 6, 0, 0); 
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');
}

if (hour < 12) {
  console.log('Good Morning!');

  if (hour === 6) {
    console.log('Time to wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');

  if (hour >= 21) {
    console.log('Time to sleep... zzz');
  }
}

if (hour >= 9 && hour < 17) {
  console.log('Work hours: Stay productive!');
}

if (hour === 7 || hour === 21) {
  console.log('Remember to brush your teeth!');
}
