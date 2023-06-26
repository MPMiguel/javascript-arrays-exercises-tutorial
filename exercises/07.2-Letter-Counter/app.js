
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = {};

for (let i = 0; i < par.length; i++) {
  let letter = par[i].toLowerCase(); // Convert the letter to lowercase to ignore case sensitivity
  if (letter.match(/[a-z]/i)) { // Check if the character is a letter
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }
}

console.log(counts);
