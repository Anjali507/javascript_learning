// let a =1
// let b=a
// a=5
// console.log(a)
// console.log(b)


// let ar1 = [1,2]
// let ar2 = ar1
// ar2.push(3)
// console.log(ar1)
// console.log(ar2)

// console.log([1,2]===[1,2])
//The expression console.log([1, 2] === [1, 2]) returns false because it's comparing two separate array objects, and in JavaScript, array comparisons for equality are based on reference comparison, not the values within the arrays.

//When you create two separate arrays with the same values like [1, 2], each array is a distinct object in memory, even if they have the same contents. The === operator checks if the two operands are the same object in memory, and in this case, they are not. Hence, the comparison evaluates to false.


//-------------------------------------------------------------------------------------------
//primitive
//string, boolean, number, undefined, null

//non primitive
//obj, array

//memory allocation in primitive

//if let is used => memory will be allocated for that variable.

// let a = 1
// let b = a
// a=5
// console.log(a)
// console.log(b)

//memory allocation in non primitive
// if there is 'let', a new memory space is created but first it sees whether the variable is copy of another variable
//if the variable is copy of another variable then at that time 
// it will not create memory for that variable rather it share memory

// let ar1 =[1,2]
// let ar2 = ar1
// ar1.push(3)
// console.log(ar1)
// console.log(ar2)

//----------------------------------------------------

//===
//primitive
let a =1
let b =1
let c =a
console.log(a===b) //true
console.log(a===c) //true

//non-primitive
let x=[1,2]
let y=x
let z=[1,2]

console.log(x===y) //true
console.log(z===x) //false

//in case of ()===) in primitive, it sees the value to give true or false,
//so, in above, both a===b and a===c gives true as the values will be the same.
//but for non primitive, it sees the memory allocated address before returning true or false.
//so, the above output for x===y, it is true and for z===x, it is false.

//In conclusion,
//in primitive  ===  check weather value is same
//in noPrimitive === check weather they share the same memory location

//-----------------------------------------

//For example,
let p =[1,2]
let q=p
console.log(p===q)

//here, in the above case, this will return true as both p and q share same memory address.

//But,
// console.log ([1,2]===[1,2]) 
//this will return false. This is because, both of the array have not been allocated any memory address.