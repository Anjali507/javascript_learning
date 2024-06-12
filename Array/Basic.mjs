let ar= ["Anjali", 22, true]
//         0        1    2

//get whole array printed
console.log(ar)

//get specific element of an array
console.log(ar[0])
console.log(ar[1])
console.log(ar[2])

//change specific element of an array
ar[2]=23
console.log(ar)

//delete specific element 
delete ar[1]
console.log(ar)

//Here, it will only delete the value of the array but will not shift the index to previous. 
//This means that the output will be ["Anjali",,true]

//make a array of three element of best person
//clg array
//get second element
//delete first element
//get whole array and see weather it is deleted or not
//change third elment
//get whole array and see weather it is changed or not

let array = ["Sita", "Gita", "Rita"]
console.log(array)

console.log(array[1])

delete array[0]
console.log(array)

array[2]="Mita"
console.log(array)
