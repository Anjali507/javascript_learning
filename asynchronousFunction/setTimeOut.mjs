// setTimeout function is used to schedule the execution of a function or a piece of code after a specified delay in milliseconds. 
//It allows to introduce delays in code, execute code at a later time, or create timers for various purposes.

//syntax:
//setTimeout(function, delay, arg1, arg2, ...);

//function: The function to be executed when the timeout elapses.
//delay: The delay in milliseconds before the function is executed.
//arg1, arg2, ... (optional): Any additional arguments to be passed to the function.

console.log("Hello")
setTimeout(() => {
    console.log("I am setTimeOut")
}, 5000)