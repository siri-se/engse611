// Loop through objects
const colorObj = {
    primary: 'purple',
    secondary: 'cyan',
    tertiary: 'magenta',
    quaternary: 'lime',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ['violet', 'teal', 'indigo', 'gold'];
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }
  