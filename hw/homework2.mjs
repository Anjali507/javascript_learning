//a. make an arrow function named is18 pass a value ,the function must return true if the given age is 18 otherwise return false

export let is18 = (age)=>{
    if (age===18)
    {
        return true
    }
    else{
        return false
    }
}

//b. make an arrow function named isGreaterThan18 , pass a value , 
//the function must return true if the given age is greater or equals to 18 otherwise false

export let isGreaterThan18 = (A) => {
    if (A>=18)
    {
        return true
    }
    else
    {
        return false
    }
}

//c.  make an arrow function that takes a number and return you can enter room only if the enter number is less than 18 else you can not enter

export let num = (Age) => {
    if (Age<18)
    {
        return ("You can enter the room")
    }
    else
    {
        return ("You cannot enter the room")
    }
}

//d. make an arrow function named isEven , pass a value, that return true if the given number is even else return false

export let isEven = (number)=> {
    if (number%2 === 0)
    {
        return ("The given number is even")
    }
    else{
        return ("The given number is odd")
    }
}

//e. make an arrow function that takes 3 input as number and return average of given number 

export let avg = (a, b, c)=>{
    let _avg = ((a+b+c)/3)
    return _avg
}

//f. make an arrow function that takes one input as number and return "category1" for number range from 1 to10, 
// return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30

export let range = (no)=>{
    if (no>=1&&no<=10)
    {
        return ("Category 1")
    }
    else if (no>=11&&no<=20)
    {
        return ("Category 2")
    }
    else if (no>=21&&no<=30)
    {
        return ("category")
    }
    else
    {
        return ("Invalid")
    }
}

//g. make a arrow function that takes a input as number  that perform
//if age [upto 17],  return your ticket is free
//if age[18 to 25 ], return  your ticket cost 100
//if age[>26],  return your ticket cost 200
//if age===26 return your ticket is 150

export let ag = (_ag) =>{
    if (_ag<=17)
    {
        return ("Your ticket is free")
    }
    else if (_ag>=18 && _ag<=25)
    {
        return ("Your ticket costs Rs. 100")
    }
    else if (_ag===26)
    {
        return("Your ticket is Rs 150")
    }
    else
    {
        return ("Your ticket costs Rs 200")
    }
}

//h. make a function that take a number
    //if number>=3 console i am greater or equal to 3
 	//if number ===3 console i am 3
 	//if number<3 console i am less than3
 	//else show i am other

export let Number=(numb)=>{
    if (numb>3){
        return("I am greater than 3")
    }
    else if (numb===3)
    {
        return ("I am 3")
    }
    else if (numb <3)
    {
        return ("I am less than 3")
    }
    else{
        return ("I am other")
    }
}

//i. make a function that takes input as number and return output .
//You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movies"

export let movies_age = (valid)=>{
    if (valid>=18){
        return ("You can watch movies")
    }
    else {
        return ("You are not authorized to watch movies")
    }
}