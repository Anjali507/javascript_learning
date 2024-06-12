let ar1 = [1,2,3]


let ar2 = ar1.reduce((pre, cur)=>{
    return pre*cur
},1)

console.log(ar2) 