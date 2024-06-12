
try {
    console.log("I am try")
    let error = new Error ("this is error")
    throw error
} catch (error) {
    console.log("I am catch")
    console.log(error.message)
}

