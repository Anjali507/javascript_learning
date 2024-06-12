
//The some method returns a Boolean value, true if at least one element in the array satisfies the condition, and false if none of the elements do. 

let ar1 = [1,2,3]

let a = ar1.some((value, i)=>{
    return true;
})

console.log(a)
//this returns true.

//---------------------------------------------------------------------
//has [1,2,3] has 3 in the list.
//if one of the element return true then the output is true

let ar = [1,2,3]

let has3 = ar.some ((value,i)=>{
    if (value === 3){
        return true
    }else{
        return false
    }
})

console.log(has3)