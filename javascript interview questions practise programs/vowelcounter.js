const prompt = require("prompt-sync")()

let string = prompt("enter a string : ")

let arr = string.split('')
let vowelarr = ['a','e','i','i','o','u']
let vowelarr2 = ['A','E','I','O','U']
let capvow = 0
let smallvow = 0
for(let i = 0;i<arr.length;i++)
{
    if(vowelarr2.indexOf(arr[i])>=0)
    {
        capvow++
    }
    else if(vowelarr.indexOf(arr[i])>=0)
    {
        smallvow++
    }
}
console.log("capital vowels are : ",capvow)
console.log("small vowels are : ",smallvow)