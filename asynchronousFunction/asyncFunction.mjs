
// console.log("a")
// setTimeout(() => {
//     console.log("Iam Set time out")
// }, 3000);
// console.log("b")

//Here, the output will be like this, 
//a
//b
//Iam Set time out

//The set time out, it pushes task to the node function, that means, 
//it goes to the memory queue of the node and waits for call stack of javascript to be ready for execution.
//When the timer stops, then the task goes to call stack of javascript and then executes.
//So, the output will come in an asynchronous way but the call stack of javascript will still remain synchronous.

//in case of backend, node is the background
//in case of frontend, browser is the background.
//call stack are those which run javascript code.

console.log("a")
setTimeout(() => {
    console.log("I am timeout 1")
}, 1000);



setTimeout(() => {
    console.log("I am timeout 2")
}, 2000);

console.log("b")

//event loop 
//It constantly monitors call stack and memory queue.
//If call stack is empty, it takes the task from the memory queue and sends it to the call stack.
