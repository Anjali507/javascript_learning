// let products = [
//  {name:"earphone", price:1000}
//  {name:"battery", price:2000}
//  {name:"charger", price:500}]
//         

//Make a program to find the list of name only {earphone, battery, charger}

let products = [
{name:"earphone", price:1000},
{name:"battery", price:2000},
{name:"charger", price:500}
]
let allName = products.map ((value,i)=>{
    return value.name
})
 console.log(allName)

//--------------------------------------------------

//[1000, 2000, 500]

let allPrice = products.map((Value,i)=>{
    return Value.price
})

console.log(allPrice)

//----------------------------------------------------

//price greater than 700 i.e. [1000, 2000]
  
  let ProductsG700 = products.filter((val, i) => {
      if (val.price > 700) {
        return true; // Includes the product in the filtered array

        //after this, the intermediate output will be
        //{name:"earphone", price:1000}
        //{name:"battery", price:2000}
      } else {
        return false; // Excludes the product from the filtered array
      }
    }).map((val, i) => {
      return val.price;
    });
  
  console.log(ProductsG700);
  
//--------------------------------------------------------


//Find the total price of products

let totalPrice = products.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
  
  console.log(totalPrice);