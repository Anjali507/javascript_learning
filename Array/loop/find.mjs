let ar = [1,2,3,4]

let ar1 = ar.find ((value,i)=>{
    if (value%2===0){
        return true
    } else {
        return false
    }
})

console.log(ar1)

//The find method is used to find the first element in an array that satisfies a given condition (predicate) and returns that element.
//so the output for this is only 2.
//had filter been used, the output would be 2,4.
//The filter method is used to create a new array containing all elements from the original array that satisfy a given condition 

