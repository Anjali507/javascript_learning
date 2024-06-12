//converting object to array

let info ={
    name: "anjali",
    age:22,
    isMarried: false
}


//expected outputs:

//key-key array
//["name", "age", "isMarried"]

//value-value array
//["anjali", 22, false]

//property-property array
//[["name", "anjali"],["age",22],["isMarried",false]]

//--------------------------------
//output using keys =>

let keyArr = Object.keys(info)
console.log(keyArr)

//--------------------------------------

//output using values =>

let valueArr = Object.values(info)
console.log(valueArr)

//------------------------------------------

//output using property =>
let proArr = Object.entries(info)
console.log(proArr)

