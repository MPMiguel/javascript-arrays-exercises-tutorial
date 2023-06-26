let arr = [4,5,734,43,45];

//*****************
// Your code here
for (let i = 0; i < 10; i++) {
    const randomInt = Math.floor(Math.random() * 100); // Generate a random integer between 0 and 99
    arr.push(randomInt);
  }
  
  // Print the updated array
  console.log(arr);
// you need to loop 10 times, for example, using a for loop
//*****************
