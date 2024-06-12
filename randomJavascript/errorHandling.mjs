//Error Handling

let fun = ()=>{
    let error = new Error ("Error has been encountered")
    throw error;
}

// fun ();

try {
    console.log("Hello 1")
    fun()
    console.log("Hello 2") //This code will not be executed, because it directly ges to catch from try block

} catch (error) {
    console.log("Error has been encountered")
} 

//if try block encounters error, then only catch block will be executed, if not, then the catch block will not be executed.
