// nitAn => Nitan 

let input = "nitAn"

let inputAr1 = input.split ("") // [ 'n', 'i', 't', 'A', 'n' ]

let outputAr1 = inputAr1.map ((value,i) => {
    if (i===0)
    {
        return value.toUpperCase()
    }
    else
    {
        return value.toLowerCase()
    }
})

// up to here, the output will be[ 'N', 'i', 't', 'a', 'n' ]

let output = outputAr1.join("")
console.log(output)
//final output = Nitan


