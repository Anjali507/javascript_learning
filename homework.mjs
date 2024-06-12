//Homework for if else

//1. Can watch movies, cannot watch movies

if (true) 
{
  console.log("You can watch movies");
} 
else 
{
  console.log("You cannot watch movies");
}

//2. if age is 25,  console your ticket is free
//if age is 26,  console your ticket cost 100
//if age is 27,  console your ticket cost 200
//if age is other than 25,26,27 console you are not allowed

let age = 40;
if (age === 25) 
{
  console.log("Your ticket is free");
} 
else if (age === 26) 
{
  console.log("Your ticket costs Rs.100");
} 
else if (age === 27) 
{
  console.log("Your ticket costs Rs.200");
} 
else 
{
  console.log("You are not allowed");
}

//3.make a program that takes number as input and
//if age [1 to 12],  return  since your age is ${age} your ticket is free
//if age[13 to 60], return since your age is ${age} your ticket cost 80
//if age[61 to 80 ], return since your age is ${age} your ticket cost 100
//if age[>80], return since your age is ${age} your ticket costs 200

let Age = 40
if (Age >= 1 && Age <= 12) 
{
  console.log(`Since your Age is ${Age}, your ticket is free.`);
} 
else if (Age >= 13 && Age <= 60) 
{
  console.log(`Since your Age is ${Age}, your ticket costs Rs 80.`);
} 
else if (Age >= 61 && Age <= 80) 
{
  console.log(`Since your Age is ${Age}, your ticket costs Rs 100.`);
} 
else 
{
  console.log(`Since you are ${Age}, the ticket is not for your Age.`);
}

//4. Percentage >= 90  return Grade A
//Percentage >= 80 return  Grade B
//Percentage >= 70 return  Grade C
//Percentage >= 60 return  Grade D
//Percentage >= 40 return  Grade E
//Percentage < 40 return  Grade F

let percentage = 61;

if (percentage >= 90 && percentage <= 100) 
{
  console.log("Grade A")
} 
else if (percentage >= 80 && percentage <= 89) 
{
  console.log("Grade B")
} 
else if (percentage >= 70 && percentage <= 79) 
{
  console.log("Grade C")
} 
else if (percentage >= 60 && percentage <= 69) 
{
  console.log("Grade D")
} 
else if (percentage >= 40 && percentage <= 49) 
{
  console.log("Grade E")
} 
else 
{
  console.log("Grade F")
}


//random
//if age [from 1 to 17],  console your ticket is free
//if age[18 to 25 ],  your ticket cost 100
//else,  your ticket cost 200

export let AGE = (cost)=>{
  if (AGE>=1&&Age<=17)
  {
    return ("Your ticket is free")
  }
  else if (AGE>=18 && AGE <=25)
  {
    return ("Your ticket costs 100")
  }
  else
  {
    return("Your ticket costs 200")
  }
}
