
function createAccount(username = 'Guest') {
    return `${username} has been successfully created`;
  }
  
  console.log(createAccount());
  console.log(createAccount('Alice'));
  
  function multiplyAll(...nums) {
    return nums.reduce((product, num) => product * num, 1);
  }
  
  console.log(multiplyAll(2, 3, 4)); // 24
  console.log(multiplyAll(5, 5, 2, 10)); // 500
  
  
  function displayUserInfo(user) {
    return `User ${user.username} (ID: ${user.userId}) is active.`;
  }
  
  const newUser = {
    userId: 101,
    username: 'David',
  };
  
  console.log(displayUserInfo(newUser));
  console.log(
    displayUserInfo({
      userId: 202,
      username: 'Emma',
    })
  );
  

  function chooseRandom(items) {
    const index = Math.floor(Math.random() * items.length);
    console.log(`Random pick: ${items[index]}`);
  }
  
  chooseRandom(['Apple', 'Banana', 'Cherry', 'Mango']);
  chooseRandom([100, 200, 300, 400, 500]);
  