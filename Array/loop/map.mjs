let ar1 = [1,2,3];


//in map, we need the return method

//ar2 = ["nitan", "nitan", "nitan"]
//this means that, return method says to return anything written in 'return' to ar2

// let ar2 = ar1.map((value, i)=>{
//     return "nitan";
// })

// console.log(ar2);


//ar2 = [3,6,9]
let ar2 = ar1.map((value,i)=>{
    return value*3;
})
    console.log(ar2);

    
let ar4 = ar1.map((value,i)=>{
    return value*i;
})
    console.log(ar4);

//input array and output array and also if the length of input and output is Same, we use map method 


//find [1,2,3] = [11,12,13]


let ar5 = ar1.map((value,i)=>{
    return value+10;
})
    console.log(ar5);