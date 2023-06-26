let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []//.concat(firstArray,secondArray)
    //your code here
    newArray =[...firstArray,...secondArray]
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));