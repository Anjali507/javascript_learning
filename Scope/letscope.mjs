
//hoisting

//-> Before the execution of code, first memory is allocated for the code, this is called hoisting.
//First phase-> memory allocation
//second phase -> code execution

//We cannot define same variable twice in same block.

// let name = "Karna"

// {
//     let name = "Anjali"
//     name = "family name"
//     console.log(name)
// }

// console.log(name)

//Scoping of variable 
// A variable will be known inside its block only.
// Inside the block, it is known from the line where it is defined.

let name = "Karna"

{
    console.log(name)
    let age = 22
    console.log(age)
}

console.log(name)
// console.log(age)

//Here, console.log (age) at line 33 will throw error.