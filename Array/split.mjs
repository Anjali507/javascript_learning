//string => array

// let str="abncndefng"
// let ar = str.split("n") 

//this line means that wherever there is n, it replaces with ','

//so the output will be 
//ab, c, def, g

let word = "my name is anjali karna";

let ar = word.split (" ");
console.log(ar)

//output is [ 'my', 'name', 'is', 'anjali', 'karna' ]

let word1 = "anjali" //expected, ['a','n','j','a','n]

let ar1 = word1.split("")
console.log(ar1)