//The spread operator (...) in JS is a versatile feature that is used in various contexts to manipulate arrays, objects, and function arguments. 
//It allows us to "spread" the elements of an array or the properties of an object into another array or object. 

//It opens the wrapper.

//It can be done =>
//with array
//with object

//with array

let ar1=[1,2,3,...["a","b",]]
console.log(ar1)

//------------------------------

let ar2=[1,...[1,2,"a"],3,...["anjali", "mita",4]]
console.log(ar2)

//-------------------------------------

//The benefit of using spread operator is that, we can print the set of arrays at once, 
//otherwise, when we have different set of arrays, we need to concatenate them time and again. 

//We can combine the elements or properties of multiple arrays or objects into a new one, 
//simplifying the process of data manipulation and composition.

//for ex,

let ar01 =[1,2]
let ar02 = [3,4]

let ar03 = ["Anjali",...ar01, ...ar02] //we need to use (...) while writing the name of the array in console.
//in above, we can also add new elements as per our like.

console.log(ar03)


//RANDOM

//Variable declaration technique

//we can either use 'let' or 'const'

let name = "anjali"

const age = 22
console.log(age)

//the difference between these both declaration technique is that, in let, we can change the value but in const we cannot.
//i.e. we cannot reassign the value in 'const', but in 'let' we can.


