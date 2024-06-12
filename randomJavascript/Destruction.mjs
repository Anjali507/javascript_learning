//destructing

//It is a feature that allows us to extract values from objects or arrays and assign them to variables in a more concise and convenient way. 
//It provides a way to access and work with the individual elements or properties of complex data structures easily. 
//Destructuring is often used in variable assignment, function parameter handling, and more.

//Array Destructing

//defining array in other way.
//We learned the first way as,
//let ar = [1,2,3]
//now, we can also use the other way

let [a,b,c] = [1,2,3]
console.log("a", a)
console.log("b", b)
console.log("c", c)

//-------------------------------------------

//Object Destructing

//first way of defining object
//let info = {name:"Anjali", age: "22", isMarried: false}

//next way of defining object

let {age, name, isMarried} = {name:"Anjali", age: "22", isMarried: false}
console.log(name)
console.log(age)
console.log(isMarried)

//order doesn't matter in object destructing unlike array.
//That means, first value is first, i.e. in above, a will take the value 1, b will take 2 and c will 3
//However, in object, it doesn't matter if we write age or name first as in the above example.

//--------------------------------

//function destructing

let fun = (a,b=6,c=7)=>{ //Here, we have assigned default values for ba and c


// But, after console, if the value is sent by the fun, then the output will be that and if not, then it will take the default value.

    console.log(a)
    console.log(b)
    console.log(c)
}

fun (1,2)

//Here, the output will be 
// 1 (we have passed the value for a)
// 2 (We have passed the value for b, so it will take 2 instead of 6)
// 7 (We haven't passed the value of c, so it will take the default value 7)

//-----------------------------------------------------------

let func = ({name, age},{address})=>{
//             obj1        obj2
    console.log(name)
    console.log(age)
    console.log(address)
}

func({name:"Anjali", age:22}, {address:"Hattiban"})
//           obj1                    obj2
