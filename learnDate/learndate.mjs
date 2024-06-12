let  a = new Date()
console.log(a)

//output
//2023-11-22T11:04:01.059Z 

//this is known as the ISO format. which is YYYY-MM-DD T hh:mm:ss
//the ISO format is not readable for the users.
//to make it readable, we need to do the following

let b = new Date().toLocaleString()
console.log(b) 

//for date only
let c = new Date().toLocaleDateString()
console.log(c)

//for time only
let d = new Date().toLocaleTimeString()
console.log(d)

