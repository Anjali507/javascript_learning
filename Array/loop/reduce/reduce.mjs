//the reduce method is used to iterate over the elements of an array and accumulate a single value based on those elements. 
//It applies a provided callback function to each element of the array, and this function can accumulate a result as it iterates. The result is then returned as the final output.
//it takes both function, initial value unlike 'map' which takes only function

let ar1 = [1,2,3]
//                     
let ar2 = ar1.reduce((pre,cur)=>{  //pre is previous and cur is current
    return pre+cur;
},0)
console.log(ar2) 

//working
// pre + cur
// 0 +1 = 1; here 0 is the initial value we kept in the function
// and 1 is the current value in the array

//now, 1 will be the pre value and 2 will be the current value in the array

//again, adding pre and cur, 3 will be the value which will be pre for the next.

//1+2 = 3

//same process will continue and 3 will be pre and 3 will be the current value in array, 
//so the final value will be 6.
// 3+3 = 6