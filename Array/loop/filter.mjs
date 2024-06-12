//Three things are required for a program

//syntax, execution, uses
//in syntax for filter, return should always be true or false


let ar1= [1,2,3,4,5]

// let ar2= ar1.filter ((value,i)=>{
//     return true;
// })

// console.log(ar2) //this will give the output [ 1, 2, 3, 4, 5 ]

//----------------------------------------------------------------------------------
//to find the output [2,4]

// let arEven = ar1.filter ((value, i)=>{
//     if (value % 2 ===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(arEven)

//--------------------------------------------------------------------------------------------
//make a function that takes input as array and filter the given even element

let evenArray = (inputAr)=>{
    let output = inputAr.filter((value,i)=>{
        if (value%2===0){
            return true;
        }
        else{
            return false;
        }
    })
    return output;
};

console.log(evenArray([1,2,3,4,5,6]))

//--------------------------------------------------------------------------------------
//make a function that takes input as array and filter the given odd element


let oddArray = (inputAr)=>{
    let output = inputAr.filter((Value,i)=>{
        if (Value%2===1){
            return true;
        }
        else{
            return false;
        }
    })
    return output;
};

console.log(oddArray([1,2,3,4,5,6]))

//-------------------------------------------------------------------------------
//make a function that takes input as array and filter greater than 17 


let greaterThanSeventeen = (inputAr)=>{
    let output = inputAr.filter((VALUE,i)=>{
        if (VALUE>=17){
            return true;
        }
        else{
            return false;
        }
    })
    return output;
};

console.log(greaterThanSeventeen([1,2,3,43,5,67]))

//----------------------------------------------------------------------------
//make a function that takes input as array and filter positive number


let positiveNumber = (inputAr)=>{
    let output = inputAr.filter((_VALUE,i)=>{
        if (_VALUE>=0){
            return true;
        }
        else{
            return false;
        }
    })
    return output;
};

console.log(positiveNumber([1,-2,3,-43,5,67]))

//----------------------------------------------------------------------
//make a function that takes input as array and filter string ["a",1,"b",3] = ["a","b"]


let Array = (inputAr)=>{
    let output = inputAr.filter((_value,i)=>{
        if (_value=="a" || _value== "b")
    {
        return true;
    }
    else{
        return false;
    }
    })
    return output;
};

console.log(Array(["a",1,"b",3]))

//---------------------------------------------------------------------------------------

//filter the string  ["a",1,"b",3,"nitan",] = ["a","b","nitan"] (filter the string) 


let Array1 = (inputAr)=>{
    let output = inputAr.filter((__value,i)=>{
        if (typeof __value ==="string")
    {
        return true;
    }
    else{
        return false;
    }
    })
    return output;
};

console.log(Array1(["a",1,"b",3,"nitan"]))

//--------------------------------------------------------------------------------

//filter ["nitan", "ram","hari"] = ["nitan", "hari" ]
//(fiter those string whose length is greater or equal to 4)

let Arr = (inputAr)=>{
    let output = inputAr.filter((val,i)=>{
        if (val.length>=4)
    {
        return true;
    }
    else{
        return false;
    }
    })
    return output;
};

console.log(Arr(["nitan", "ram","hari"]))

//--------------------------------------------------
//filter values from 10 to 100


let Arr1 = (inputAr)=>{
    let output = inputAr.filter((valu,i)=>{
        if (valu>=10 && valu<=100)
    {
        return true;
    }
    else{
        return false;
    }
    })
    return output;
};

console.log(Arr1([23,4,5,6,77,88,234,4567]))

//----------------------------------------------
//filter only truthy value


let filterTruthy = (inputAr)=>{
    let output = inputAr.filter((value_,i)=>{
        if (value_)
    {
        return true;
    }
    else{
        return false;
    }
    })
    return output;
};

console.log(filterTruthy([0,,5,undefined,false,true,77," ",234,4567]))

//another method without using arrow function

let ar = [1,2,3,"",undefined]
let arT = ar.filter(Boolean)
console.log(arT)
