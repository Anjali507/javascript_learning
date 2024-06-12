
//the every method is used to check if all elements in an array meet a specific condition or criteria. 
//It tests whether all elements in an array satisfy a provided callback function, and it returns true,
// if every element in the array passes the test; otherwise, it returns false. 
//If the array is empty, the every method also returns `true because there are no elements that fail the test.


let ar1 = [1,2,3,-4]

// let a = ar1.every ((value,i)=>{
//     return true;
// })

// console.log(a)

//print true if all the numbers are positive
let a = ar1.every ((value,i)=>{
    if (value>0)
    {
        return true
    }else{
        return false
    }
})

console.log(a)

//----------------------------------------------------

//check whether all students get pass marks from the list [40,30,80] here pass marks is 40


let ar2 = [40,80,30]
let ar = ar2.every ((Value,i)=>{
    if (Value>=40)
    {
        return true
    }else{
        return false
    }
})

console.log(ar)

//---------------------------------------------------
//check whether a person has a smoking habit ["smoking", "drinking", "biting nails"]
let habit = ["smoking", "drinking", "biting nails"]
let smokingHabit = habit.some((value,i) =>{
    if(value === "smoking"){
        return true;
    }
    else{
        return false;
    }
});
console.log(smokingHabit);

//----------------------------------------------
//using 'some' method to find whether e have Bearer in the string "Bearer token"

let inputValue = "Bearer token"
let hasBearer = inputValue.split(" ")//first convert  string into array, so the mid output will be ["Bearer", "token"]

let seeIf = hasBearer.some((val, i)=>{
    if (val === "Bearer"){
        return true
    }else{
        return false
    }
})
console.log(seeIf)

//-------------------------------------------------

