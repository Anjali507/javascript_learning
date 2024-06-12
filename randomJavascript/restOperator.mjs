//The rest operator (...) in JavaScript is used to collect multiple elements into a single array or object. 

//uses of rest operator
//function
//array destructing
//object destructing

//function

let fun =(a,b,...c)=>{ //(...) is the necessary in the syntax for rest operator here.
    console.log(a)
    console.log(b)
    console.log(c)
}

fun (1,2,3,4,5,6,7)

//Here, in this program, the use of rest operator can be seen.
//i.e., a will take the value 1, b will take the value 2 and c will take the rest of the values.

// a=>1
// b=>2
// c=>[ 3, 4, 5, 6, 7 ]

//we do not use (...) in the beginning because if we do, that would mean to take all the rest of the values. That means, the next variables would not be necessary.
//So, for rest operator to be used, (...) should be kept in last only.

//--------------------------------------------

//Array destructing

let [a,b,...c] = [1,2,3,4]
console.log(a)
console.log(b)
console.log(c)

//output will be

// a=>1
// b=>2
// c=>[3,4]

//Object destructing

let {name,...info} = {name:"Ram", age:30, isMarried: false, address:"ABC"}

console.log(name) //Ram
console.log(info) //{ age: 30, isMarried: false, address: 'ABC' }

//Here, name will take Ram and info will take the rest of the value. 


//----------------------------------------------------
//questions related to rest operators

//make a function that takes any number of returns the sum of all those inputs.
//sum(1,2)
//sum(1,2,3)
//sum(1,2,3,4)


let sum = (...inputs)=>{
    //inputs = [1,2,3,4]

    let output = inputs.reduce ((pre,cur)=>{
        return pre+cur
    },0)
    return output
}

let _sum = sum (1,2,3,4,5)
console.log(_sum)
