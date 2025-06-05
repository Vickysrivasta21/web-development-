// const prompt = require("prompt-sync")();

let a = Number(prompt("enter a number"))
let b = Number(prompt("enter nother number"))

if(isNaN(a)||isNaN(b))
{
    throw SyntaxError("this is not a valid input")
}
let sum = a+b
function print(){
try {
    console.log(sum)
} catch (error) {
    console.log("error ho gya mamu");
}
finally{
    console.log("execution donw!!")
}
}
print()
