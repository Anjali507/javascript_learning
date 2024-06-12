//Block-level scope is a feature that determines the visibility and lifetime of variables and other declarations within a code block 
// enclosed by curly braces `{ }`.

{
    let x = 10
    console.log(x)
}

// the {} here is nested block.

//In this above example, the value of x will be recognized inside the {} (Here, in case no, 4 to 7 block only and not outside.
//If we try to console it outside, it will throw an error.

//-------------------------------

{
    let a=3

    {
        // let a=10

        console.log(a)
    }
}

//here, what is happening is, when we console, the program will find the answer in its own block and if not found, then it will go search in the parent block.
//i.e., when the variable is called in a block, 
//it searches the value in its own block first and if it doesn't,
// then, it will search at its parent block and so on.

//---------------------------------

{
    let b=3

    {
        let b=5
        console.log(b) //this console will give the value 5
    }

    console.log(b) //this console will give the value 3
}


//Both console are giving answers of their own blocks.
