let arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
const randomInt = () => {
    return Math.floor(Math.random())
}
arr.push(randomInt)
arr.push(randomInt)

console.log(arr);