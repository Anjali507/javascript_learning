//Array only stores multiple data. But, object gives the information of the elements of the array.

//Array is made by the combination of value but array is made by the combination of key, value pair.
//Here, in the below example, name is key and ABC is value.
//The combination of key and value is called property. So, object is made by the combination of property.
//name:'ABC' is called property.

// let info = {
//     name:'ABC',
//     age:12,
//     isMarried:false,
//     address: 'XYZ'
// }
// console.log(info)

// //get specific element 
// console.log(info.isMarried)

// //change specific element 
// info.isMarried=true
// console.log(info)

// //delete specific element
// delete info.name
// console.log(info)

//question
//define object with key name ,location, contactNumber
	//	get object	
	//	change location  to gagalphedi
	//	get object and see the effect
	//	delete contactNumber
	//	get object and see the effect


let info ={
    name: "Preeti",
    location: "Godawari",
    contactNumber: 9000000000
}
//print the information
console.log(info)

//change the location to gagalphedi
info.location = "gagalphedi"
console.log(info)

//delete contactNumber
delete info.contactNumber
console.log(info)