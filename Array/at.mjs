
//original way to find the last element in the array
let ar1 = [1, 2, 3, 4]

let lastElement = ar1[ar1.length - 1];

console.log(lastElement);

//by at method
//at is used because it helps in - 'minus' indexing
// The at method is used to access elements at a specific index in a string or an array-like object (e.g., a string or typed array). 
// The at method can be used with strings or array-like objects to retrieve the character or element at a specified position.
let arr = ["a", "b", "c", "d"]

console.log(arr.at(-1))